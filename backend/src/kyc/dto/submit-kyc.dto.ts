import { IsNotEmpty, IsString } from 'class-validator';

export class SubmitKycDto {
    @IsString()
    @IsNotEmpty()
    user_id: string;
}
