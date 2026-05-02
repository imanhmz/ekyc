import { Injectable, Logger } from '@nestjs/common';
import { CryptoService } from './crypto.service';
import * as fs from 'fs';

export interface IpfsUploadResult {
    cid: string;
    encryptionKey: string;
}

@Injectable()
export class IpfsService {
    private readonly logger = new Logger(IpfsService.name);
    private readonly apiUrl: string;

    constructor(private readonly cryptoService: CryptoService) {
        this.apiUrl = process.env.IPFS_API_URL || 'http://localhost:5001';
    }

    /**
     * Encrypt and upload a file to IPFS
     * @param filePath Path to the original file
     * @returns IPFS CID and encryption key
     */
    async addFile(filePath: string): Promise<IpfsUploadResult> {
        let encryptedPath: string | null = null;

        try {
            // Generate encryption key
            const encryptionKey = this.cryptoService.generateKey();

            // Encrypt the file
            encryptedPath = this.cryptoService.encryptFile(filePath, encryptionKey);
            this.logger.log(`File encrypted: ${encryptedPath}`);

            // Upload encrypted file to IPFS
            const encryptedBuffer = fs.readFileSync(encryptedPath);
            const formData = new FormData();
            formData.append('file', new Blob([encryptedBuffer]));

            const response = await fetch(`${this.apiUrl}/api/v0/add`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`IPFS API responded with ${response.status}`);
            }

            const result = await response.json();
            this.logger.log(`IPFS upload success: ${result.Hash}`);

            return {
                cid: result.Hash,
                encryptionKey,
            };
        } catch (e) {
            this.logger.error(`IPFS upload failed: ${e.message}`);
            throw e;
        } finally {
            // Clean up encrypted temporary file
            if (encryptedPath && fs.existsSync(encryptedPath)) {
                try {
                    fs.unlinkSync(encryptedPath);
                    this.logger.log(`Cleaned up encrypted temp file: ${encryptedPath}`);
                } catch (cleanupError) {
                    this.logger.warn(`Failed to cleanup temp file: ${cleanupError.message}`);
                }
            }
        }
    }

    /**
     * Download an encrypted file from IPFS by CID
     * @param cid IPFS content identifier
     * @returns Encrypted file buffer
     */
    async getFile(cid: string): Promise<Buffer> {
        try {
            const response = await fetch(`${this.apiUrl}/api/v0/cat?arg=${cid}`, {
                method: 'POST',
            });

            if (!response.ok) {
                throw new Error(`IPFS API responded with ${response.status}`);
            }

            const arrayBuffer = await response.arrayBuffer();
            this.logger.log(`IPFS download success: ${cid}`);
            return Buffer.from(arrayBuffer);
        } catch (e) {
            this.logger.error(`IPFS download failed: ${e.message}`);
            throw e;
        }
    }
}
