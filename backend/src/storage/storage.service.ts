import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import {
    S3Client,
    PutObjectCommand,
    GetObjectCommand,
    DeleteObjectCommand,
    CreateBucketCommand,
    HeadBucketCommand,
} from '@aws-sdk/client-s3';

@Injectable()
export class StorageService implements OnModuleInit {
    private readonly logger = new Logger(StorageService.name);
    private readonly client: S3Client;
    private readonly bucket: string;

    constructor() {
        this.bucket = process.env.S3_BUCKET || 'kyc-documents';
        this.client = new S3Client({
            endpoint: process.env.S3_ENDPOINT || 'http://localhost:8333',
            region: 'us-east-1',
            credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY,
                secretAccessKey: process.env.S3_SECRET_KEY,
            },
            forcePathStyle: true,
        });
    }

    async onModuleInit() {
        await this.ensureBucket();
    }

    private async ensureBucket() {
        try {
            await this.client.send(new HeadBucketCommand({ Bucket: this.bucket }));
            this.logger.log(`S3 bucket "${this.bucket}" ready`);
        } catch {
            try {
                await this.client.send(new CreateBucketCommand({ Bucket: this.bucket }));
                this.logger.log(`S3 bucket "${this.bucket}" created`);
            } catch (e) {
                this.logger.warn(`Could not create S3 bucket: ${e.message}`);
            }
        }
    }

    async upload(key: string, buffer: Buffer, contentType: string): Promise<void> {
        await this.client.send(new PutObjectCommand({
            Bucket: this.bucket,
            Key: key,
            Body: buffer,
            ContentType: contentType,
        }));
        this.logger.log(`Uploaded: ${key}`);
    }

    async download(key: string): Promise<Buffer> {
        const response = await this.client.send(new GetObjectCommand({
            Bucket: this.bucket,
            Key: key,
        }));
        const chunks: Uint8Array[] = [];
        for await (const chunk of response.Body as AsyncIterable<Uint8Array>) {
            chunks.push(chunk);
        }
        return Buffer.concat(chunks);
    }

    async delete(key: string): Promise<void> {
        try {
            await this.client.send(new DeleteObjectCommand({
                Bucket: this.bucket,
                Key: key,
            }));
            this.logger.log(`Deleted: ${key}`);
        } catch (e) {
            this.logger.warn(`S3 delete failed for ${key}: ${e.message}`);
        }
    }
}
