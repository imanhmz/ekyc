import {
    Injectable,
    BadRequestException,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KycRecord, KycStatus } from '../database/kyc-record.entity';
import { KycAuditLog } from '../database/kyc-audit-log.entity';
import { User } from '../database/user.entity';
import { QueueService } from '../queue/queue.service';
import { BlockchainService } from '../blockchain/blockchain.service';
import { IpfsService } from '../ipfs/ipfs.service';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class KycService {
    private readonly uploadsPath: string;

    constructor(
        @InjectRepository(KycRecord)
        private readonly kycRepo: Repository<KycRecord>,
        @InjectRepository(KycAuditLog)
        private readonly auditRepo: Repository<KycAuditLog>,
        @InjectRepository(User)
        private readonly userRepo: Repository<User>,
        private readonly queueService: QueueService,
        private readonly blockchainService: BlockchainService,
        private readonly ipfsService: IpfsService,
    ) {
        this.uploadsPath = process.env.SHARED_UPLOADS_PATH || './shared_uploads';
        fs.mkdirSync(this.uploadsPath, { recursive: true });
    }

    async submit(userId: string, file: Express.Multer.File): Promise<{ kyc_id: string; status: string; message: string }> {
        const allowedMimes = ['image/jpeg', 'image/png', 'application/pdf'];
        if (!allowedMimes.includes(file.mimetype)) {
            throw new BadRequestException({ error: 'INVALID_FILE_TYPE', message: 'Only JPEG, PNG, and PDF files are accepted.' });
        }

        // Auto-create a mock user if doesn't exist to satisfy foreign key constraints
        let user = await this.userRepo.findOne({ where: { id: userId } });
        if (!user) {
            user = this.userRepo.create({ id: userId, firstName: 'Demo', lastName: 'User' });
            await this.userRepo.save(user);
        }

        // Save to shared volume
        const ext = file.originalname.split('.').pop();
        const record = this.kycRepo.create({ userId, status: 'PENDING' });
        await this.kycRepo.save(record);

        const filename = `${record.id}.${ext}`;
        const filePath = path.join(this.uploadsPath, filename);
        fs.writeFileSync(filePath, file.buffer);

        await this.kycRepo.update(record.id, { documentPath: filePath });
        await this.logAudit(record.id, null, 'PENDING', 'system');

        // Publish to queue (non-blocking)
        await this.queueService.publishKycJob({
            kyc_id: record.id,
            user_id: userId,
            file_path: filePath,
            file_type: file.mimetype,
            submitted_at: new Date().toISOString(),
        });

        return {
            kyc_id: record.id,
            status: 'PENDING',
            message: 'Verification submitted. Poll /kyc/status/{kyc_id} for updates.',
        };
    }

    async getStatus(kycId: string): Promise<any> {
        const record = await this.kycRepo.findOne({ where: { id: kycId } });
        if (!record) throw new NotFoundException(`KYC record ${kycId} not found`);

        return {
            kyc_id: record.id,
            status: record.status,
            trust_score: record.trustScore,
            ipfs_cid: record.ipfsCid,
            blockchain_tx_hash: record.blockchainTxHash,
            token_expires_at: record.tokenExpiresAt,
            created_at: record.createdAt,
            rejection_reason: record.rejectionReason,
        };
    }

    async verifyAddress(address: string): Promise<any> {
        try {
            const result = await this.blockchainService.isVerified(address);
            return result;
        } catch {
            return { address, is_verified: false, is_active: false, error: 'Blockchain query failed or contract not deployed' };
        }
    }

    async flagAddress(address: string): Promise<any> {
        try {
            const txHash = await this.blockchainService.flagIdentity(address, 'ADMIN_FLAG');
            // Mark related DB record as FLAGGED
            await this.kycRepo.update({ walletAddress: address }, { status: 'FLAGGED' });
            return { address, flagged: true, tx_hash: txHash };
        } catch (e) {
            throw new BadRequestException(`Flag failed: ${e.message}`);
        }
    }

    /** Called by QueueService when AI result arrives */
    async processResult(result: any): Promise<void> {
        const record = await this.kycRepo.findOne({ where: { id: result.kyc_id } });
        if (!record) return;

        const prevStatus = record.status;

        if (result.result === 'APPROVED') {
            // Compute token expiry
            const trustScore: number = result.trust_score;
            let expiryDays = 180;
            if (trustScore >= 95) expiryDays = 365;
            else if (trustScore < 80) expiryDays = 90;
            const expiresAt = new Date(Date.now() + expiryDays * 24 * 60 * 60 * 1000);

            // Upload to IPFS
            let ipfsCid: string | null = null;
            try {
                if (record.documentPath && fs.existsSync(record.documentPath)) {
                    ipfsCid = await this.ipfsService.addFile(record.documentPath);
                }
            } catch {
                console.warn('IPFS upload failed, continuing without CID');
            }

            // Write to blockchain
            let txHash: string | null = null;
            try {
                if (ipfsCid) {
                    txHash = await this.blockchainService.registerIdentity(
                        record.userId, // using userId as address key; real deployment uses wallet address
                        ipfsCid,
                        Math.floor(expiresAt.getTime() / 1000),
                        trustScore,
                    );
                }
            } catch {
                console.warn('Blockchain registration failed, continuing without tx_hash');
            }

            await this.kycRepo.update(record.id, {
                status: 'APPROVED',
                trustScore,
                ipfsCid,
                blockchainTxHash: txHash,
                tokenExpiresAt: expiresAt,
                ocrData: result.ocr_data,
                deepfakeResult: result.deepfake_result,
            });
            await this.logAudit(record.id, prevStatus, 'APPROVED', 'ai-service', { trust_score: trustScore, ipfs_cid: ipfsCid });

            // Clean up file after IPFS upload
            if (record.documentPath) {
                try { fs.unlinkSync(record.documentPath); } catch { }
            }
        } else {
            await this.kycRepo.update(record.id, {
                status: 'REJECTED',
                trustScore: result.trust_score,
                rejectionReason: result.rejection_reason,
                deepfakeResult: result.deepfake_result,
            });
            await this.logAudit(record.id, prevStatus, 'REJECTED', 'ai-service', { reason: result.rejection_reason });

            // Delete file for rejected verifications
            if (record.documentPath) {
                try { fs.unlinkSync(record.documentPath); } catch { }
            }
        }
    }

    private async logAudit(kycId: string, fromStatus: string | null, toStatus: string, actor: string, metadata?: any) {
        const log = this.auditRepo.create({ kycId, fromStatus, toStatus, actor, metadata });
        await this.auditRepo.save(log);
    }
}
