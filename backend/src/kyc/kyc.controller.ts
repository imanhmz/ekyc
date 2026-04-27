import {
    Controller,
    Post,
    Get,
    Param,
    Body,
    UploadedFile,
    UseInterceptors,
    HttpCode,
    HttpStatus,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { KycService } from './kyc.service';
import { SubmitKycDto } from './dto/submit-kyc.dto';

@Controller('kyc')
export class KycController {
    constructor(private readonly kycService: KycService) { }

    @Post('submit')
    @HttpCode(HttpStatus.ACCEPTED)
    @UseInterceptors(
        FileInterceptor('document', {
            storage: memoryStorage(),
            limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
        }),
    )
    async submit(
        @Body() dto: SubmitKycDto,
        @UploadedFile() file: Express.Multer.File,
    ) {
        return this.kycService.submit(dto.user_id, file);
    }

    @Get('status/:kyc_id')
    async getStatus(@Param('kyc_id') kycId: string) {
        return this.kycService.getStatus(kycId);
    }

    @Get('verify/:address')
    async verifyAddress(@Param('address') address: string) {
        return this.kycService.verifyAddress(address);
    }

    @Post('flag/:address')
    async flagAddress(@Param('address') address: string) {
        return this.kycService.flagAddress(address);
    }
}
