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
    Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { Response } from 'express';
import { KycService } from './kyc.service';
import { SubmitKycDto } from './dto/submit-kyc.dto';
import { LinkWalletDto } from './dto/link-wallet.dto';
import { DownloadDocumentDto } from './dto/download-document.dto';

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
        return this.kycService.submit(dto.user_id, file, dto.wallet_address);
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

    @Post('link-wallet')
    @HttpCode(HttpStatus.OK)
    async linkWallet(@Body() dto: LinkWalletDto) {
        return this.kycService.linkWallet(
            dto.kyc_id,
            dto.wallet_address,
            dto.signature,
            dto.message,
        );
    }

    @Get('document/:kyc_id')
    async getDocument(@Param('kyc_id') kycId: string, @Res() res: Response) {
        const { buffer, mimetype } = await this.kycService.getDocument(kycId);

        // Determine file extension from MIME type
        const extension = this.getExtensionFromMimeType(mimetype);

        res.setHeader('Content-Type', mimetype);
        res.setHeader('Content-Disposition', `attachment; filename="${kycId}.${extension}"`);
        res.send(buffer);
    }

    @Post('my-document')
    @HttpCode(HttpStatus.OK)
    async downloadMyDocument(@Body() dto: DownloadDocumentDto, @Res() res: Response) {
        const { buffer, mimetype, kycId } = await this.kycService.downloadMyDocument(
            dto.wallet_address,
            dto.signature,
            dto.message,
        );

        // Determine file extension from MIME type
        const extension = this.getExtensionFromMimeType(mimetype);

        res.setHeader('Content-Type', mimetype);
        res.setHeader('Content-Disposition', `attachment; filename="kyc-${kycId}.${extension}"`);
        res.send(buffer);
    }

    /**
     * Helper method to get file extension from MIME type
     */
    private getExtensionFromMimeType(mimetype: string): string {
        const mimeToExt: Record<string, string> = {
            'image/jpeg': 'jpg',
            'image/jpg': 'jpg',
            'image/png': 'png',
            'image/gif': 'gif',
            'image/webp': 'webp',
            'application/pdf': 'pdf',
        };
        return mimeToExt[mimetype] || 'bin';
    }
}
