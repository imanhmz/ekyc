import {
    Controller,
    Post,
    Get,
    Param,
    Body,
    UploadedFile,
    UploadedFiles,
    UseInterceptors,
    HttpCode,
    HttpStatus,
    Res,
} from '@nestjs/common';
import { FileInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express';
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
        FileFieldsInterceptor(
            [
                { name: 'document', maxCount: 1 },
                { name: 'liveness_video', maxCount: 1 },
            ],
            {
                storage: memoryStorage(),
                limits: { fileSize: 50 * 1024 * 1024 }, // 50MB (video can be larger)
            },
        ),
    )
    async submit(
        @Body() dto: SubmitKycDto,
        @UploadedFiles() files: { document?: Express.Multer.File[]; liveness_video?: Express.Multer.File[] },
    ) {
        const document = files.document?.[0];
        const livenessVideo = files.liveness_video?.[0];
        return this.kycService.submit(dto.user_id, document, dto.wallet_address, livenessVideo, dto.encryption_pubkey);
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
            dto.encryption_pubkey,
        );
    }

    /**
     * SSI: return the encrypted document blob + the wrapped DEK for a kyc_id.
     * Decryption happens entirely in the client.
     */
    @Get('wrapped-document/:kyc_id')
    async getWrappedDocument(@Param('kyc_id') kycId: string) {
        return this.kycService.getWrappedDocument(kycId);
    }

    /**
     * SSI: wallet-bound counterpart — user signs to prove ownership, gets
     * back ciphertext + wrapped DEK to decrypt locally.
     */
    @Post('wrapped-document/by-wallet')
    @HttpCode(HttpStatus.OK)
    async getWrappedDocumentByWallet(@Body() dto: DownloadDocumentDto) {
        return this.kycService.getWrappedDocumentByWallet(
            dto.wallet_address,
            dto.signature,
            dto.message,
        );
    }

    /**
     * SSI: wallet-bound — returns the ECIES-wrapped age witness for the user.
     * Browser decrypts locally, then uses (dobYear, salt) + the on-chain
     * commitment to generate a Groth16 age proof.
     */
    @Post('wrapped-age-witness/by-wallet')
    @HttpCode(HttpStatus.OK)
    async getWrappedAgeWitnessByWallet(@Body() dto: DownloadDocumentDto) {
        return this.kycService.getWrappedAgeWitnessByWallet(
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
