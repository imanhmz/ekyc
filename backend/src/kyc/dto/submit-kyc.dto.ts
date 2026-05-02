import { IsNotEmpty, IsString, IsOptional, Matches } from 'class-validator';

export class SubmitKycDto {
    @IsString()
    @IsNotEmpty()
    user_id: string;

    @IsOptional()
    @IsString()
    @Matches(/^0x[a-fA-F0-9]{40}$/, { message: 'Invalid Ethereum address format' })
    wallet_address?: string;
}
