import { Module } from '@nestjs/common';
import { BlockchainService } from './blockchain.service';
import { ZkpService } from './zkp.service';

@Module({
    providers: [BlockchainService, ZkpService],
    exports: [BlockchainService, ZkpService],
})
export class BlockchainModule { }
