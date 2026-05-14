import {
    Injectable,
    BadRequestException,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository, InjectDataSource } from '@nestjs/typeorm';
import { DataSource, EntityManager, Repository } from 'typeorm';
import { KycRecord, KycStatus } from '../database/kyc-record.entity';
import { KycAuditLog } from '../database/kyc-audit-log.entity';
import { User } from '../database/user.entity';
import { QueueService, AiResultPayload } from '../queue/queue.service';
import { BlockchainService } from '../blockchain/blockchain.service';
import { ZkpService } from '../blockchain/zkp.service';
import { AttributeService } from '../blockchain/attribute.service';
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
        @InjectDataSource()
        private readonly dataSource: DataSource,
        private readonly queueService: QueueService,
        private readonly blockchainService: BlockchainService,
        private readonly zkpService: ZkpService,
        private readonly attributeService: AttributeService,
        private readonly ipfsService: IpfsService,
        private readonly cryptoService: CryptoService,
    ) {
        this.uploadsPath = process.env.SHARED_UPLOADS_PATH || './shared_uploads';
        fs.mkdirSync(this.uploadsPath, { recursive: true });

        // This wires up the handler for the AI result
        this.queueService.setResultHandler(this.processResult.bind(this));
    }

    /**
     * Run a kyc_records write inside a transaction with audit context set so
     * the trg_kyc_audit trigger records the actor and metadata.
     */
    private async withAuditContext<T>(
        actor: string,
        metadata: Record<string, any> | null,
        fn: (manager: EntityManager) => Promise<T>,
    ): Promise<T> {
        return this.dataSource.transaction(async (manager) => {
            await manager.query(`SELECT set_config('app.actor', $1, true)`, [actor]);
            await manager.query(
                `SELECT set_config('app.audit_meta', $1, true)`,
                [metadata ? JSON.stringify(metadata) : ''],
            );
            return fn(manager);
        });
    }

    async submit(userId: string, file: Express.Multer.File, walletAddress?: string, livenessVideo?: Express.Multer.File, encryptionPubkey?: string): Promise<{ kyc_id: string; status: string; message: string }> {
        const allowedMimes = ['image/jpeg', 'image/png', 'application/pdf'];
        if (!file) throw new BadRequestException({ error: 'MISSING_DOCUMENT', message: 'Document file is required.' });
        if (!allowedMimes.includes(file.mimetype)) {
            throw new BadRequestException({ error: 'INVALID_FILE_TYPE', message: 'Only JPEG, PNG, and PDF files are accepted.' });
        }

        if (walletAddress && !/^0x[a-fA-F0-9]{40}$/.test(walletAddress)) {
            throw new BadRequestException({ error: 'INVALID_WALLET_ADDRESS', message: 'Invalid Ethereum address format.' });
        }

        let user = await this.userRepo.findOne({ where: { id: userId } });
        if (!user) {
            user = this.userRepo.create({ id: userId, firstName: 'Demo', lastName: 'User' });
            await this.userRepo.save(user);
        }

        const ext = file.originalname.split('.').pop();

        // Initial INSERT — trigger logs PENDING with actor 'system'
        const record = await this.withAuditContext('system', null, async (manager) => {
            const r = manager.create(KycRecord, {
                userId,
                status: 'PENDING' as KycStatus,
                walletAddress,
                fileMimeType: file.mimetype,
                userEncryptionPubkey: encryptionPubkey || null,
            });
            return manager.save(KycRecord, r);
        });

        const filename = `${record.id}.${ext}`;
        const filePath = path.join(this.uploadsPath, filename);
        fs.writeFileSync(filePath, file.buffer);
        await this.kycRepo.update(record.id, { documentPath: filePath });

        // Save liveness video if provided
        let livenessVideoPath: string | undefined;
        if (livenessVideo) {
            const videoExt = livenessVideo.originalname.split('.').pop() || 'webm';
            const videoFilename = `${record.id}_liveness.${videoExt}`;
            livenessVideoPath = path.join(this.uploadsPath, videoFilename);
            fs.writeFileSync(livenessVideoPath, livenessVideo.buffer);
        }

        await this.queueService.publishKycJob({
            kyc_id: record.id,
            user_id: userId,
            file_path: path.resolve(filePath),
            file_type: file.mimetype,
            submitted_at: new Date().toISOString(),
            liveness_video_path: livenessVideoPath ? path.resolve(livenessVideoPath) : undefined,
        });

        // Job is now in the AI processing queue — transition state machine.
        // Trigger logs PENDING → PROCESSING.
        await this.withAuditContext('system', { queued: true }, (manager) =>
            manager.update(KycRecord, record.id, { status: 'PROCESSING' as KycStatus }),
        );

        return {
            kyc_id: record.id,
            status: 'PROCESSING',
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
            wallet_address: record.walletAddress,
            token_expires_at: record.tokenExpiresAt,
            created_at: record.createdAt,
            rejection_reason: record.rejectionReason,
            deepfake_result: record.deepfakeResult ?? null,
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
            // Mark related DB record as FLAGGED — trigger logs the transition.
            await this.withAuditContext('admin', { tx_hash: txHash, reason: 'ADMIN_FLAG' }, (manager) =>
                manager.update(KycRecord, { walletAddress: address }, { status: 'FLAGGED' as KycStatus }),
            );
            return { address, flagged: true, tx_hash: txHash };
        } catch (e) {
            throw new BadRequestException(`Flag failed: ${e.message}`);
        }
    }

    /** Called by QueueService when AI result arrives */
    async processResult(result: AiResultPayload): Promise<void> {
        const record = await this.kycRepo.findOne({ where: { id: result.kyc_id } });
        if (!record) return;

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

                    // Log IPFS URL for newly uploaded document
                    const ipfsGateway = process.env.IPFS_GATEWAY_URL || 'http://localhost:8080';
                    console.log('✅ Document uploaded to IPFS (ENCRYPTED):');
                    console.log(`   CID: ${ipfsCid}`);
                    console.log(`   Gateway URL: ${ipfsGateway}/ipfs/${ipfsCid}`);
                    console.log(`   ⚠️  Note: File is AES-256-GCM encrypted. Direct gateway access shows encrypted data.`);
                    console.log(`   ℹ️  Use download API endpoints to retrieve decrypted document.`);
                    console.log(`   KYC ID: ${record.id}`);
                }
            } catch (e) {
                console.warn('IPFS upload failed, continuing without CID:', e.message);
            }

            // SSI: if the user provided an encryption pubkey at submission, wrap the
            // DEK now and destroy the plaintext. After this point only the user can
            // recover the document. If no pubkey was provided, we keep the plaintext
            // DEK until wallet-link time and wrap it then.
            const wrapResult = await this.maybeWrapDek(record, encryptionKey);

            // Selective-disclosure attribute proof: derive dobYear from OCR, build
            // Poseidon commitment, publish on chain, and (if pubkey available) wrap
            // the witness to the user. Failure here must not break approval — it's
            // an enrichment, not a hard requirement.
            const ageResult = await this.buildAndPublishAgeWitness(record, result.ocr_data);

            // Check if wallet address exists - if not, set APPROVED_PENDING_WALLET status
            if (!record.walletAddress) {
                // KYC is approved but needs wallet linking — trigger logs transition.
                await this.withAuditContext('ai-service', {
                    trust_score: trustScore,
                    ipfs_cid: ipfsCid,
                    message: 'Awaiting wallet linkage',
                    dek_wrapped: wrapResult.wrapped !== null,
                }, (manager) => manager.update(KycRecord, record.id, {
                    status: 'APPROVED_PENDING_WALLET' as KycStatus,
                    trustScore,
                    ipfsCid,
                    encryptionKey: wrapResult.plaintext,
                    wrappedEncryptionKey: wrapResult.wrapped,
                    ageCommitment: ageResult.commitment,
                    ageWitness: ageResult.plaintext,
                    wrappedAgeWitness: ageResult.wrapped,
                    tokenExpiresAt: expiresAt,
                    ocrData: result.ocr_data,
                    deepfakeResult: result.deepfake_result,
                }));

                // Clean up original file and liveness video after IPFS upload
                if (record.documentPath) {
                    try { fs.unlinkSync(record.documentPath); } catch { }
                    this.deleteLivenessVideo(record.id, record.documentPath);
                }
                return;
            }

            // Wallet exists - proceed with blockchain registration
            let txHash: string | null = null;
            try {
                const cidToRegister = ipfsCid || '';
                const proof = await this.zkpService.generateProof(trustScore);
                txHash = await this.blockchainService.registerIdentity(
                    record.walletAddress,
                    cidToRegister,
                    Math.floor(expiresAt.getTime() / 1000),
                    trustScore,
                    proof,
                );
                console.log({ txHash });
            } catch (e) {
                console.warn('Blockchain registration failed, continuing without tx_hash:', e.message);
            }

            // Trigger logs PROCESSING → APPROVED.
            await this.withAuditContext('ai-service', {
                trust_score: trustScore,
                ipfs_cid: ipfsCid,
                blockchain_tx_hash: txHash,
                dek_wrapped: wrapResult.wrapped !== null,
            }, (manager) => manager.update(KycRecord, record.id, {
                status: 'APPROVED' as KycStatus,
                trustScore,
                ipfsCid,
                encryptionKey: wrapResult.plaintext,
                wrappedEncryptionKey: wrapResult.wrapped,
                ageCommitment: ageResult.commitment,
                ageWitness: ageResult.plaintext,
                wrappedAgeWitness: ageResult.wrapped,
                blockchainTxHash: txHash,
                tokenExpiresAt: expiresAt,
                ocrData: result.ocr_data,
                deepfakeResult: result.deepfake_result,
            }));

            // Clean up file and liveness video after IPFS upload
            if (record.documentPath) {
                try { fs.unlinkSync(record.documentPath); } catch { }
                this.deleteLivenessVideo(record.id, record.documentPath);
            }
        } else {
            // Trigger logs PROCESSING → REJECTED.
            await this.withAuditContext('ai-service', {
                reason: result.rejection_reason,
                trust_score: result.trust_score,
            }, (manager) => manager.update(KycRecord, record.id, {
                status: 'REJECTED' as KycStatus,
                trustScore: result.trust_score,
                rejectionReason: result.rejection_reason,
                deepfakeResult: result.deepfake_result,
            }));

            if (record.documentPath) {
                try { fs.unlinkSync(record.documentPath); } catch { }
                this.deleteLivenessVideo(record.id, record.documentPath);
            }
        }
    }

    /**
     * Link a wallet address to a KYC record via cryptographic signature verification.
     * Optionally also registers the user's encryption pubkey, which lets the backend
     * wrap any plaintext DEK still in storage and destroy the cleartext copy.
     */
    async linkWallet(kycId: string, walletAddress: string, signature: string, message: string, encryptionPubkey?: string): Promise<any> {
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

        // Wallet linkage does not change status — log via the manual helper.
        const updates: Partial<KycRecord> = { walletAddress };
        if (encryptionPubkey) updates.userEncryptionPubkey = encryptionPubkey;
        await this.kycRepo.update(record.id, updates);

        // If we now have a pubkey + plaintext DEK still in DB, wrap it and shred plaintext.
        if (encryptionPubkey) {
            record.userEncryptionPubkey = encryptionPubkey;
            const wrapResult = await this.maybeWrapDek(record, record.encryptionKey);
            if (wrapResult.wrapped) {
                await this.kycRepo.update(record.id, {
                    encryptionKey: wrapResult.plaintext,
                    wrappedEncryptionKey: wrapResult.wrapped,
                });
            }

            // Same treatment for the age witness: wrap if we still have it in plaintext.
            if (record.ageWitness) {
                try {
                    const wrappedWitness = await this.cryptoService.wrapDek(record.ageWitness, encryptionPubkey);
                    await this.kycRepo.update(record.id, {
                        ageWitness: null,
                        wrappedAgeWitness: wrappedWitness,
                    });
                } catch (e) {
                    console.warn(`Age witness wrap failed: ${e.message}`);
                }
            }
        }

        // If the age commitment exists but was never published (because no wallet at approval),
        // publish it now that we have a wallet bound.
        if (record.ageCommitment && this.attributeService.isReady()) {
            try {
                await this.attributeService.publishAgeCommitment(walletAddress, record.ageCommitment);
            } catch (e) {
                console.warn(`Age commitment publish at link-wallet failed: ${e.message}`);
            }
        }

        await this.logAudit(record.id, record.status, record.status, 'user', {
            action: 'wallet_linked',
            wallet_address: walletAddress,
            pubkey_registered: !!encryptionPubkey,
        });

        // If status is APPROVED_PENDING_WALLET, trigger blockchain registration
        if (record.status === 'APPROVED_PENDING_WALLET') {
            let txHash: string | null = null;

            try {
                const cidToRegister = record.ipfsCid || '';
                const proof = await this.zkpService.generateProof(record.trustScore || 0);
                txHash = await this.blockchainService.registerIdentity(
                    walletAddress,
                    cidToRegister,
                    Math.floor((record.tokenExpiresAt?.getTime() || Date.now()) / 1000),
                    record.trustScore || 0,
                    proof,
                );
                console.log('Blockchain registration after wallet link:', { txHash });
            } catch (e) {
                console.warn('Blockchain registration failed after wallet link:', e.message);
            }

            // Trigger logs APPROVED_PENDING_WALLET → APPROVED.
            await this.withAuditContext('system', {
                blockchain_tx_hash: txHash,
                message: 'Wallet linked and blockchain registered',
            }, (manager) => manager.update(KycRecord, record.id, {
                status: 'APPROVED' as KycStatus,
                blockchainTxHash: txHash,
            }));

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
     * Retrieve and decrypt a document for the institution.
     *
     * SSI note: this only works while the plaintext DEK is still present
     * (i.e. during the PROCESSING window or when no user pubkey was provided).
     * Once the DEK has been wrapped to the user's pubkey at approval, the
     * institution no longer holds a plaintext key and this call returns 403.
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
            throw new BadRequestException({
                error: 'KEY_HELD_BY_USER',
                message: 'The plaintext DEK has been destroyed; only the user can decrypt. Use /kyc/wrapped-document/:kyc_id to fetch the wrapped form.',
            });
        }

        try {
            // Download encrypted document from IPFS
            const encryptedBuffer = await this.ipfsService.getFile(record.ipfsCid);

            // Decrypt using stored key
            const decryptedBuffer = this.cryptoService.decryptBuffer(encryptedBuffer, record.encryptionKey);

            // Use stored MIME type or fallback to generic
            const mimetype = record.fileMimeType || 'application/octet-stream';

            return {
                buffer: decryptedBuffer,
                mimetype,
            };
        } catch (e) {
            throw new BadRequestException(`Failed to retrieve document: ${e.message}`);
        }
    }

    /**
     * SSI retrieval: return the encrypted document ciphertext plus the wrapped
     * DEK. Neither value is decryptable server-side once the plaintext DEK has
     * been destroyed — the user's browser unwraps the DEK using a wallet-derived
     * keypair and then AES-decrypts the ciphertext locally.
     */
    async getWrappedDocument(kycId: string): Promise<{
        kyc_id: string;
        ipfs_cid: string;
        ciphertext_base64: string;
        wrapped_encryption_key: string;
        mimetype: string;
    }> {
        const record = await this.kycRepo.findOne({ where: { id: kycId } });
        if (!record) throw new NotFoundException(`KYC record ${kycId} not found`);
        if (!record.ipfsCid) throw new NotFoundException('No document on IPFS for this record');
        if (!record.wrappedEncryptionKey) {
            throw new BadRequestException({
                error: 'NO_WRAPPED_KEY',
                message: 'No wrapped DEK on file. The user must link a wallet with an encryption pubkey first.',
            });
        }

        const encryptedBuffer = await this.ipfsService.getFile(record.ipfsCid);
        return {
            kyc_id: record.id,
            ipfs_cid: record.ipfsCid,
            ciphertext_base64: encryptedBuffer.toString('base64'),
            wrapped_encryption_key: record.wrappedEncryptionKey,
            mimetype: record.fileMimeType || 'application/octet-stream',
        };
    }

    /**
     * Wrap the plaintext DEK to the user's pubkey if one is registered.
     * Returns the wrapped blob and the new plaintext value to store:
     *   - if wrapping happened, plaintext is set to null (shredded)
     *   - if no pubkey yet, plaintext is kept and wrapped is null
     */
    private async maybeWrapDek(
        record: KycRecord,
        plaintextDek: string | null,
    ): Promise<{ wrapped: string | null; plaintext: string | null }> {
        if (!plaintextDek || !record.userEncryptionPubkey) {
            return { wrapped: null, plaintext: plaintextDek };
        }
        try {
            const wrapped = await this.cryptoService.wrapDek(plaintextDek, record.userEncryptionPubkey);
            return { wrapped, plaintext: null };
        } catch (e) {
            console.warn(`DEK wrap failed for ${record.id}: ${e.message}. Keeping plaintext.`);
            return { wrapped: null, plaintext: plaintextDek };
        }
    }

    /**
     * Build the Poseidon age commitment, publish it on chain, and (when a pubkey is
     * available) ECIES-wrap the witness so only the user can later generate proofs.
     * Returns { commitment, wrapped, plaintext } — same shape as maybeWrapDek so
     * the caller can plug it straight into the row update.
     */
    private async buildAndPublishAgeWitness(
        record: KycRecord,
        ocrData: Record<string, any> | undefined,
    ): Promise<{ commitment: string | null; wrapped: string | null; plaintext: string | null }> {
        if (!this.attributeService.isReady()) {
            return { commitment: null, wrapped: null, plaintext: null };
        }
        const dobYear = this.extractDobYear(ocrData);
        if (!dobYear) {
            console.warn(`No dob_year extractable from OCR for ${record.id} — skipping age commitment`);
            return { commitment: null, wrapped: null, plaintext: null };
        }

        try {
            const { commitment, witness } = this.attributeService.buildAgeWitness(dobYear);
            const witnessJson = JSON.stringify(witness);

            // Publish on chain only if the user has a wallet bound. Without a wallet
            // there's nothing to key the registry by.
            if (record.walletAddress) {
                try {
                    const txHash = await this.attributeService.publishAgeCommitment(record.walletAddress, commitment);
                    console.log(`✅ Age commitment published for ${record.walletAddress}: tx=${txHash}`);
                } catch (e) {
                    console.warn(`Age commitment publish failed: ${e.message}. Witness still stored.`);
                }
            }

            if (record.userEncryptionPubkey) {
                const wrapped = await this.cryptoService.wrapDek(witnessJson, record.userEncryptionPubkey);
                return { commitment, wrapped, plaintext: null };
            }
            return { commitment, wrapped: null, plaintext: witnessJson };
        } catch (e) {
            console.warn(`Age witness build failed for ${record.id}: ${e.message}`);
            return { commitment: null, wrapped: null, plaintext: null };
        }
    }

    /** Parse a year out of the OCR `date_of_birth` field. Accepts YYYY-MM-DD,
     *  DD.MM.YYYY, DD/MM/YYYY, or any string containing four consecutive digits
     *  in a plausible birth-year range. */
    private extractDobYear(ocrData: Record<string, any> | undefined): number | null {
        const dob = ocrData?.date_of_birth;
        if (!dob || typeof dob !== 'string') return null;
        const matches = dob.match(/\b(19|20)\d{2}\b/);
        if (!matches) return null;
        const year = parseInt(matches[0], 10);
        if (year < 1900 || year > new Date().getFullYear()) return null;
        return year;
    }

    /**
     * User downloads their own document by proving wallet ownership via signature
     */
    async downloadMyDocument(walletAddress: string, signature: string, message: string): Promise<{ buffer: Buffer; mimetype: string; kycId: string }> {
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

        // Find KYC record by wallet address (case-insensitive)
        const records = await this.kycRepo
            .createQueryBuilder('kyc')
            .where('LOWER(kyc.walletAddress) = LOWER(:walletAddress)', { walletAddress })
            .orderBy('kyc.createdAt', 'DESC')
            .getMany();

        const record = records[0] || null;

        if (!record) {
            throw new NotFoundException(`No KYC record found for wallet ${walletAddress}`);
        }

        if (!record.ipfsCid) {
            throw new NotFoundException('No document uploaded to IPFS for this wallet');
        }

        if (!record.encryptionKey) {
            throw new BadRequestException({
                error: 'KEY_HELD_BY_USER',
                message: 'Your DEK is wrapped to your wallet pubkey and must be decrypted in your browser. Use POST /kyc/wrapped-document/by-wallet.',
                kyc_id: record.id,
            });
        }

        // Only allow approved documents to be downloaded
        if (record.status !== 'APPROVED') {
            throw new BadRequestException({
                error: 'DOCUMENT_NOT_APPROVED',
                message: `Document status is ${record.status}. Only APPROVED documents can be downloaded.`,
            });
        }

        try {
            // Download encrypted document from IPFS
            const encryptedBuffer = await this.ipfsService.getFile(record.ipfsCid);

            // Decrypt using stored key
            const decryptedBuffer = this.cryptoService.decryptBuffer(encryptedBuffer, record.encryptionKey);

            // Use stored MIME type or fallback to generic
            const mimetype = record.fileMimeType || 'application/octet-stream';

            // Log access for audit trail
            await this.logAudit(record.id, record.status, record.status, 'user', {
                action: 'document_downloaded',
                wallet_address: walletAddress,
            });

            return {
                buffer: decryptedBuffer,
                mimetype,
                kycId: record.id,
            };
        } catch (e) {
            throw new BadRequestException(`Failed to retrieve document: ${e.message}`);
        }
    }

    /**
     * SSI retrieval, wallet-bound. The user proves wallet ownership with an
     * EIP-191 signature, the backend returns ciphertext + wrapped DEK; the
     * browser does the decryption locally.
     */
    async getWrappedDocumentByWallet(walletAddress: string, signature: string, message: string): Promise<{
        kyc_id: string;
        ipfs_cid: string;
        ciphertext_base64: string;
        wrapped_encryption_key: string;
        mimetype: string;
    }> {
        try {
            const recoveredAddress = verifyMessage(message, signature);
            if (recoveredAddress.toLowerCase() !== walletAddress.toLowerCase()) {
                throw new BadRequestException({ error: 'SIGNATURE_MISMATCH', message: 'Signature does not match provided wallet address' });
            }
        } catch (e) {
            throw new BadRequestException({ error: 'INVALID_SIGNATURE', message: 'Failed to verify signature: ' + e.message });
        }

        const records = await this.kycRepo
            .createQueryBuilder('kyc')
            .where('LOWER(kyc.walletAddress) = LOWER(:walletAddress)', { walletAddress })
            .orderBy('kyc.createdAt', 'DESC')
            .getMany();

        const record = records[0] || null;
        if (!record) throw new NotFoundException(`No KYC record found for wallet ${walletAddress}`);
        if (record.status !== 'APPROVED') {
            throw new BadRequestException({
                error: 'DOCUMENT_NOT_APPROVED',
                message: `Document status is ${record.status}. Only APPROVED documents can be retrieved.`,
            });
        }

        await this.logAudit(record.id, record.status, record.status, 'user', {
            action: 'wrapped_document_retrieved',
            wallet_address: walletAddress,
        });
        return this.getWrappedDocument(record.id);
    }

    /**
     * SSI: return the wrapped age witness for the wallet. Used by the user's
     * browser to derive the plaintext (dobYear, salt) locally and generate
     * Groth16 age proofs. The backend cannot read the witness.
     */
    async getWrappedAgeWitnessByWallet(walletAddress: string, signature: string, message: string): Promise<{
        kyc_id: string;
        age_commitment: string;
        wrapped_age_witness: string;
    }> {
        try {
            const recovered = verifyMessage(message, signature);
            if (recovered.toLowerCase() !== walletAddress.toLowerCase()) {
                throw new BadRequestException({ error: 'SIGNATURE_MISMATCH' });
            }
        } catch (e) {
            throw new BadRequestException({ error: 'INVALID_SIGNATURE', message: e.message });
        }

        const records = await this.kycRepo
            .createQueryBuilder('kyc')
            .where('LOWER(kyc.walletAddress) = LOWER(:walletAddress)', { walletAddress })
            .orderBy('kyc.createdAt', 'DESC')
            .getMany();
        const record = records[0];
        if (!record) throw new NotFoundException(`No KYC record for ${walletAddress}`);
        if (!record.wrappedAgeWitness || !record.ageCommitment) {
            throw new BadRequestException({
                error: 'NO_AGE_WITNESS',
                message: 'No wrapped age witness on file. Re-verify to enable attribute proofs.',
            });
        }
        return {
            kyc_id: record.id,
            age_commitment: record.ageCommitment,
            wrapped_age_witness: record.wrappedAgeWitness,
        };
    }

    private deleteLivenessVideo(kycId: string, documentPath: string) {
        // Liveness video is stored as {kyc_id}_liveness.{ext} in the same directory
        const dir = path.dirname(documentPath);
        for (const ext of ['webm', 'mp4', 'mov']) {
            const p = path.join(dir, `${kycId}_liveness.${ext}`);
            try { if (fs.existsSync(p)) fs.unlinkSync(p); } catch { }
        }
    }

    /**
     * Log an audit row for events that do NOT change kyc_records.status —
     * status transitions are recorded by the trg_kyc_audit database trigger.
     * This helper is used for things like wallet linkage and document
     * downloads, where the same status is repeated as both from/to.
     */
    private async logAudit(kycId: string, fromStatus: string | null, toStatus: string, actor: string, metadata?: any) {
        const log = this.auditRepo.create({ kycId, fromStatus, toStatus, actor, metadata });
        await this.auditRepo.save(log);
    }
}
