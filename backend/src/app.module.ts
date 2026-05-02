import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { KycModule } from './kyc/kyc.module';
import { QueueModule } from './queue/queue.module';
import { BlockchainModule } from './blockchain/blockchain.module';
import { IpfsModule } from './ipfs/ipfs.module';
import { KycRecord } from './database/kyc-record.entity';
import { KycAuditLog } from './database/kyc-audit-log.entity';
import { User } from './database/user.entity';
import { AppInitService } from './app-init.service';

 @Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: path.resolve(__dirname, '../..', '.env'),
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DATABASE_HOST || 'localhost',
            port: parseInt(process.env.DATABASE_PORT || '5432', 10),
            username: process.env.DATABASE_USER || 'kyc_user',
            password: process.env.DATABASE_PASSWORD || 'kyc_pass',
            database: process.env.DATABASE_NAME || 'kyc_db',
            entities: [KycRecord, KycAuditLog, User],
            synchronize: false, // schema managed by migration SQL
        }),
        KycModule,
        QueueModule,
        BlockchainModule,
        IpfsModule,
    ],
    providers: [AppInitService],
})
export class AppModule { }
