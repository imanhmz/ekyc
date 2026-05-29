import { Injectable, Logger } from '@nestjs/common';
import { CryptoService } from './crypto.service';

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
     * Encrypt a buffer in memory and upload it to IPFS.
     */
    async addFileBuffer(buffer: Buffer): Promise<IpfsUploadResult> {
        try {
            const encryptionKey = this.cryptoService.generateKey();
            const encryptedBuffer = this.cryptoService.encryptBuffer(buffer, encryptionKey);

            const formData = new FormData();
            formData.append('file', new Blob([new Uint8Array(encryptedBuffer)]));

            const response = await fetch(`${this.apiUrl}/api/v0/add`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`IPFS API responded with ${response.status}`);
            }

            const result = await response.json();
            this.logger.log(`IPFS upload success: ${result.Hash}`);
            return { cid: result.Hash, encryptionKey };
        } catch (e) {
            this.logger.error(`IPFS upload failed: ${e.message}`);
            throw e;
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
