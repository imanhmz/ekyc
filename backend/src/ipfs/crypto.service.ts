import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import * as fs from 'fs';

/**
 * CryptoService - Handles AES-256-GCM encryption/decryption for IPFS documents
 *
 * Encryption Strategy:
 * - Algorithm: AES-256-GCM (authenticated encryption)
 * - Key: Random 32-byte key per document (stored in DB)
 * - Format: IV (16 bytes) + Auth Tag (16 bytes) + Ciphertext
 * - GDPR: Deleting the key makes the document permanently unrecoverable
 */
@Injectable()
export class CryptoService {
    /**
     * Generate a random AES-256 encryption key
     * @returns Base64-encoded 32-byte key
     */
    generateKey(): string {
        return crypto.randomBytes(32).toString('base64');
    }

    /**
     * Encrypt a file using AES-256-GCM
     * @param filePath Path to the file to encrypt
     * @param key Base64-encoded encryption key
     * @returns Path to the encrypted file (original path + '.enc')
     */
    encryptFile(filePath: string, key: string): string {
        const keyBuffer = Buffer.from(key, 'base64');
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipheriv('aes-256-gcm', keyBuffer, iv);

        const input = fs.readFileSync(filePath);
        const encrypted = Buffer.concat([cipher.update(input), cipher.final()]);
        const authTag = cipher.getAuthTag();

        // Format: IV (16 bytes) + Auth Tag (16 bytes) + Ciphertext
        const output = Buffer.concat([iv, authTag, encrypted]);

        // Write encrypted data to temporary file
        const encryptedPath = `${filePath}.enc`;
        fs.writeFileSync(encryptedPath, output);

        return encryptedPath;
    }

    /**
     * Decrypt a Buffer using AES-256-GCM
     * @param encryptedData Encrypted buffer (IV + AuthTag + Ciphertext)
     * @param key Base64-encoded encryption key
     * @returns Decrypted buffer
     */
    decryptBuffer(encryptedData: Buffer, key: string): Buffer {
        const keyBuffer = Buffer.from(key, 'base64');

        // Extract components from encrypted data
        const iv = encryptedData.subarray(0, 16);
        const authTag = encryptedData.subarray(16, 32);
        const ciphertext = encryptedData.subarray(32);

        const decipher = crypto.createDecipheriv('aes-256-gcm', keyBuffer, iv);
        decipher.setAuthTag(authTag);

        return Buffer.concat([decipher.update(ciphertext), decipher.final()]);
    }

    /**
     * Decrypt a file using AES-256-GCM
     * @param encryptedPath Path to encrypted file
     * @param key Base64-encoded encryption key
     * @returns Decrypted buffer
     */
    decryptFile(encryptedPath: string, key: string): Buffer {
        const data = fs.readFileSync(encryptedPath);
        return this.decryptBuffer(data, key);
    }
}
