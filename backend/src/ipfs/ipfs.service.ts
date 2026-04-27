import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class IpfsService {
    private readonly logger = new Logger(IpfsService.name);
    private readonly apiUrl: string;

    constructor() {
        this.apiUrl = process.env.IPFS_API_URL || 'http://localhost:5001';
    }

    async addFile(filePath: string): Promise<string> {
        try {
            const fileBuffer = fs.readFileSync(filePath);
            const formData = new FormData();
            formData.append('file', new Blob([fileBuffer]));

            const response = await fetch(`${this.apiUrl}/api/v0/add`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`IPFS API responded with ${response.status}`);
            }

            const result = await response.json();
            this.logger.log(`IPFS upload success: ${result.Hash}`);
            return result.Hash;
        } catch (e) {
            this.logger.error(`IPFS upload failed: ${e.message}`);
            throw e;
        }
    }
}
