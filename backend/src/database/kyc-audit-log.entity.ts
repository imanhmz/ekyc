import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { KycRecord } from './kyc-record.entity';

@Entity('kyc_audit_log')
export class KycAuditLog {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'kyc_id' })
    kycId: string;

    @ManyToOne(() => KycRecord, (record) => record.auditLogs)
    @JoinColumn({ name: 'kyc_id' })
    kycRecord: KycRecord;

    @Column({ name: 'from_status', length: 20, nullable: true })
    fromStatus: string;

    @Column({ name: 'to_status', length: 20 })
    toStatus: string;

    @Column({ length: 100, nullable: true })
    actor: string;

    @Column({ type: 'jsonb', nullable: true })
    metadata: Record<string, any>;

    @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
    createdAt: Date;
}
