import { Module } from '@nestjs/common';
import { BlockchainService } from './blockchain.service';
import { ZkpService } from './zkp.service';
import { AttributeService } from './attribute.service';

@Module({
    providers: [BlockchainService, ZkpService, AttributeService],
    exports: [BlockchainService, ZkpService, AttributeService],
})
export class BlockchainModule { }
