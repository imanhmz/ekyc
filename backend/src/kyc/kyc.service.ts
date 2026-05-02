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
import { QueueService, AiResultPayload } from '../queue/queue.service';
import { BlockchainService } from '../blockchain/blockchain.service';
import { IpfsService } from '../ipfs/ipfs.service';
import { CryptoService } from '../ipfs/crypto.service';
import { verifyMessage } from 'ethers';
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
        private readonly cryptoService: CryptoService,
    ) {
        this.uploadsPath = process.env.SHARED_UPLOADS_PATH || './shared_uploads';
        fs.mkdirSync(this.uploadsPath, { recursive: true });

        // This wires up the handler for the AI result
        this.queueService.setResultHandler(this.processResult.bind(this));
    }

    async submit(userId: string, file: Express.Multer.File, walletAddress?: string): Promise<{ kyc_id: string; status: string; message: string }> {
        const allowedMimes = ['image/jpeg', 'image/png', 'application/pdf'];
        if (!allowedMimes.includes(file.mimetype)) {
            throw new BadRequestException({ error: 'INVALID_FILE_TYPE', message: 'Only JPEG, PNG, and PDF files are accepted.' });
        }

        // Validate wallet address format if provided
        if (walletAddress && !/^0x[a-fA-F0-9]{40}$/.test(walletAddress)) {
            throw new BadRequestException({ error: 'INVALID_WALLET_ADDRESS', message: 'Invalid Ethereum address format.' });
        }

        // Auto-create a mock user if doesn't exist to satisfy foreign key constraints
        let user = await this.userRepo.findOne({ where: { id: userId } });
        if (!user) {
            user = this.userRepo.create({ id: userId, firstName: 'Demo', lastName: 'User' });
            await this.userRepo.save(user);
        }

        // Save to shared volume
        const ext = file.originalname.split('.').pop();
        const record = this.kycRepo.create({ userId, status: 'PENDING', walletAddress });
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
            file_path: path.resolve(filePath),
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
    async processResult(result: AiResultPayload): Promise<void> {
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

            // Upload encrypted document to IPFS
            let ipfsCid: string | null = null;
            let encryptionKey: string | null = null;
            try {
                if (record.documentPath && fs.existsSync(record.documentPath)) {
                    const uploadResult = await this.ipfsService.addFile(record.documentPath);
                    ipfsCid = uploadResult.cid;
                    encryptionKey = uploadResult.encryptionKey;
                }
            } catch (e) {
                console.warn('IPFS upload failed, continuing without CID:', e.message);
            }

            // Check if wallet address exists - if not, set APPROVED_PENDING_WALLET status
            if (!record.walletAddress) {
                // KYC is approved but needs wallet linking
                await this.kycRepo.update(record.id, {
                    status: 'APPROVED_PENDING_WALLET',
                    trustScore,
                    ipfsCid,
                    encryptionKey,
                    tokenExpiresAt: expiresAt,
                    ocrData: result.ocr_data,
                    deepfakeResult: result.deepfake_result,
                });
                await this.logAudit(record.id, prevStatus, 'APPROVED_PENDING_WALLET', 'ai-service', {
                    trust_score: trustScore,
                    ipfs_cid: ipfsCid,
                    message: 'Awaiting wallet linkage'
                });

                // Clean up original file after IPFS upload
                if (record.documentPath) {
                    try { fs.unlinkSync(record.documentPath); } catch { }
                }
                return;
            }

            // Wallet exists - proceed with blockchain registration
            let txHash: string | null = null;
            try {
                const cidToRegister = ipfsCid || '';
                txHash = await this.blockchainService.registerIdentity(
                    record.walletAddress,
                    cidToRegister,
                    Math.floor(expiresAt.getTime() / 1000),
                    trustScore,
                );
                console.log({ txHash });
            } catch (e) {
                console.warn('Blockchain registration failed, continuing without tx_hash:', e.message);
            }

            await this.kycRepo.update(record.id, {
                status: 'APPROVED',
                trustScore,
                ipfsCid,
                encryptionKey,
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

    /**
     * Link a wallet address to a KYC record via cryptographic signature verification
     */
    async linkWallet(kycId: string, walletAddress: string, signature: string, message: string): Promise<any> {
        // Find KYC record
        const record = await this.kycRepo.findOne({ where: { id: kycId } });
        if (!record) {
            throw new NotFoundException(`KYC record ${kycId} not found`);
        }

        // Verify the signature matches the wallet address
        try {
            const recoveredAddress = verifyMessage(message, signature);
            if (recoveredAddress.toLowerCase() !== walletAddress.toLowerCase()) {
                throw new BadRequestException({
                    error: 'SIGNATURE_MISMATCH',
                    message: 'Signature does not match provided wallet address',
                });
            }
        } catch (e) {
            throw new BadRequestException({
                error: 'INVALID_SIGNATURE',
                message: 'Failed to verify signature: ' + e.message,
            });
        }

        const prevStatus = record.status;

        // Update wallet address
        await this.kycRepo.update(record.id, { walletAddress });
        await this.logAudit(record.id, prevStatus, prevStatus, 'user', {
            action: 'wallet_linked',
            wallet_address: walletAddress,
        });

        // If status is APPROVED_PENDING_WALLET, trigger blockchain registration
        if (record.status === 'APPROVED_PENDING_WALLET') {
            let txHash: string | null = null;

            try {
                const cidToRegister = record.ipfsCid || '';
                txHash = await this.blockchainService.registerIdentity(
                    walletAddress,
                    cidToRegister,
                    Math.floor((record.tokenExpiresAt?.getTime() || Date.now()) / 1000),
                    record.trustScore || 0,
                );
                console.log('Blockchain registration after wallet link:', { txHash });
            } catch (e) {
                console.warn('Blockchain registration failed after wallet link:', e.message);
            }

            // Update status to APPROVED
            await this.kycRepo.update(record.id, {
                status: 'APPROVED',
                blockchainTxHash: txHash,
            });
            await this.logAudit(record.id, 'APPROVED_PENDING_WALLET', 'APPROVED', 'system', {
                blockchain_tx_hash: txHash,
                message: 'Wallet linked and blockchain registered',
            });

            return {
                success: true,
                message: 'Wallet linked and blockchain registration completed',
                kyc_id: kycId,
                wallet_address: walletAddress,
                blockchain_tx_hash: txHash,
                status: 'APPROVED',
            };
        }

        return {
            success: true,
            message: 'Wallet linked successfully',
            kyc_id: kycId,
            wallet_address: walletAddress,
            status: record.status,
        };
    }

    /**
     * Retrieve and decrypt a document for the institution
     */
    async getDocument(kycId: string): Promise<{ buffer: Buffer; mimetype: string }> {
        const record = await this.kycRepo.findOne({ where: { id: kycId } });

        if (!record) {
            throw new NotFoundException(`KYC record ${kycId} not found`);
        }

        if (!record.ipfsCid) {
            throw new NotFoundException('No document uploaded to IPFS for this KYC record');
        }

        if (!record.encryptionKey) {
            throw new BadRequestException('No encryption key available for this document');
        }

        try {
            // Download encrypted document from IPFS
            const encryptedBuffer = await this.ipfsService.getFile(record.ipfsCid);

            // Decrypt using stored key
            const decryptedBuffer = this.cryptoService.decryptBuffer(encryptedBuffer, record.encryptionKey);

            // Determine MIME type from document type or use generic
            const mimetypes: Record<string, string> = {
                'PASSPORT': 'application/pdf',
                'NATIONAL_ID': 'image/jpeg',
                'DRIVERS_LICENCE': 'image/jpeg',
            };
            const mimetype = mimetypes[record.documentType || ''] || 'application/octet-stream';

            return {
                buffer: decryptedBuffer,
                mimetype,
            };
        } catch (e) {
            throw new BadRequestException(`Failed to retrieve document: ${e.message}`);
        }
    }

    private async logAudit(kycId: string, fromStatus: string | null, toStatus: string, actor: string, metadata?: any) {
        const log = this.auditRepo.create({ kycId, fromStatus, toStatus, actor, metadata });
        await this.auditRepo.save(log);
    }
}
