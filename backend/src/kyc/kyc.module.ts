import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KycController } from './kyc.controller';
import { KycService } from './kyc.service';
import { KycRecord } from '../database/kyc-record.entity';
import { KycAuditLog } from '../database/kyc-audit-log.entity';
import { User } from '../database/user.entity';
import { QueueModule } from '../queue/queue.module';
import { BlockchainModule } from '../blockchain/blockchain.module';
import { IpfsModule } from '../ipfs/ipfs.module';
import { StorageModule } from '../storage/storage.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([KycRecord, KycAuditLog, User]),
        QueueModule,
        BlockchainModule,
        IpfsModule,
        StorageModule,
    ],
    controllers: [KycController],
    providers: [KycService],
    exports: [KycService],
})
export class KycModule { }
