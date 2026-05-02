import { IsUUID, IsString, Matches } from 'class-validator';

export class LinkWalletDto {
    @IsUUID()
    kyc_id: string;

    @IsString()
    @Matches(/^0x[a-fA-F0-9]{40}$/, { message: 'Invalid Ethereum address format' })
    wallet_address: string;

    @IsString()
    signature: string;

    @IsString()
    message: string;
}
