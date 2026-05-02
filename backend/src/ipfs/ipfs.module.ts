import { Module } from '@nestjs/common';
import { IpfsService } from './ipfs.service';
import { CryptoService } from './crypto.service';

@Module({
    providers: [IpfsService, CryptoService],
    exports: [IpfsService, CryptoService],
})
export class IpfsModule { }
