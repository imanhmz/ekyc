import { IsNotEmpty, IsString, IsOptional, Matches } from 'class-validator';

export class SubmitKycDto {
    @IsString()
    @IsNotEmpty()
    user_id: string;

    @IsOptional()
    @IsString()
    @Matches(/^0x[a-fA-F0-9]{40}$/, { message: 'Invalid Ethereum address format' })
    wallet_address?: string;

    // SSI: secp256k1 pubkey (128 hex chars, optionally prefixed with 04 or 0x04)
    // derived in the browser from a deterministic wallet signature. Used to wrap
    // the document DEK at approval so only the user can decrypt afterwards.
    @IsOptional()
    @IsString()
    @Matches(/^(0x)?(04)?[0-9a-fA-F]{128}$/, { message: 'Invalid secp256k1 pubkey format' })
    encryption_pubkey?: string;
}
