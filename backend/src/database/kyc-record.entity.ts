import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToOne,
    JoinColumn
} from 'typeorm';
import { KycAuditLog } from './kyc-audit-log.entity';
import { User } from './user.entity';

export type KycStatus = 'PENDING' | 'PROCESSING' | 'APPROVED_PENDING_WALLET' | 'APPROVED' | 'REJECTED' | 'FLAGGED';

@Entity('kyc_records')
export class KycRecord {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'user_id' })
    userId: string;

    @ManyToOne(() => User, (user) => user.kycRecords)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column({ length: 20, default: 'PENDING' })
    status: KycStatus;

    @Column({ name: 'document_path', nullable: true })
    documentPath: string;

    @Column({ name: 'document_type', length: 50, nullable: true })
    documentType: string;

    @Column({ name: 'file_mime_type', length: 100, nullable: true })
    fileMimeType: string;

    @Column({ name: 'ipfs_cid', nullable: true })
    ipfsCid: string;

    @Column({ name: 'blockchain_tx_hash', nullable: true })
    blockchainTxHash: string;

    @Column({ name: 'wallet_address', length: 42, nullable: true })
    walletAddress: string;

    @Column({ name: 'trust_score', type: 'smallint', nullable: true })
    trustScore: number;

    @Column({ name: 'rejection_reason', length: 50, nullable: true })
    rejectionReason: string;

    @Column({ name: 'ocr_data', type: 'jsonb', nullable: true })
    ocrData: Record<string, any>;

    @Column({ name: 'deepfake_result', type: 'jsonb', nullable: true })
    deepfakeResult: Record<string, any>;

    @Column({ name: 'encryption_key', nullable: true })
    encryptionKey: string;

    @Column({ name: 'token_expires_at', type: 'timestamptz', nullable: true })
    tokenExpiresAt: Date;

    @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
    updatedAt: Date;

    @OneToMany(() => KycAuditLog, (log) => log.kycRecord)
    auditLogs: KycAuditLog[];
}
