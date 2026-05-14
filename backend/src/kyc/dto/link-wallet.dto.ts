import { IsUUID, IsString, IsOptional, Matches } from 'class-validator';

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

    // SSI: optional secp256k1 pubkey to wrap any plaintext DEK still on file.
    @IsOptional()
    @IsString()
    @Matches(/^(0x)?(04)?[0-9a-fA-F]{128}$/, { message: 'Invalid secp256k1 pubkey format' })
    encryption_pubkey?: string;
}
