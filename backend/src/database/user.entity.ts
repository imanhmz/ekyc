import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm';
import { KycRecord } from './kyc-record.entity';

export type UserStatus = 'ACTIVE' | 'INACTIVE' | 'BLOCKED';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'first_name', length: 100 })
    firstName: string;

    @Column({ name: 'last_name', length: 100 })
    lastName: string;

    @Column({ type: 'smallint', nullable: true })
    age: number;

    @Column({ type: 'smallint', default: 1 })
    status: number; // 1 = ACTIVE, 0 = INACTIVE, -1 = BLOCKED

    @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
    updatedAt: Date;

    @OneToMany(() => KycRecord, (record) => record.user)
    kycRecords: KycRecord[];
}
