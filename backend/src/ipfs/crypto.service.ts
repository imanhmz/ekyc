import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import * as fs from 'fs';
import EthCrypto from 'eth-crypto';

/**
 * CryptoService - Handles AES-256-GCM encryption/decryption for IPFS documents
 * and ECIES wrapping of the symmetric key to the user's wallet pubkey (SSI).
 *
 * Two-layer model:
 * - DEK (Data Encryption Key): random 32-byte AES-256 key per document.
 * - Wrapped DEK: the DEK encrypted to the user's secp256k1 public key (ECIES).
 *   Only the holder of the corresponding private key can unwrap it.
 *
 * After approval, the plaintext DEK is destroyed server-side; only the
 * wrapped form survives in the database. The user must sign with their
 * wallet to derive the keypair that can unwrap it.
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

    /**
     * ECIES-wrap a base64 DEK to a user's secp256k1 public key.
     * The returned JSON blob can only be unwrapped by the private-key holder.
     * @param dekBase64 Base64-encoded AES key
     * @param publicKeyHex secp256k1 uncompressed pubkey (with or without 0x04 prefix)
     * @returns Stringified encrypted-payload object
     */
    async wrapDek(dekBase64: string, publicKeyHex: string): Promise<string> {
        const normalized = this.normalizePubkey(publicKeyHex);
        const encrypted = await EthCrypto.encryptWithPublicKey(normalized, dekBase64);
        return EthCrypto.cipher.stringify(encrypted);
    }

    /**
     * ECIES-unwrap a wrapped DEK with the matching private key. Used by the
     * viewer bank server (and in tests); the user-side flow does this in the
     * browser.
     * @param wrappedBlob Stringified encrypted-payload object
     * @param privateKeyHex secp256k1 private key (hex)
     * @returns Base64-encoded AES key
     */
    async unwrapDek(wrappedBlob: string, privateKeyHex: string): Promise<string> {
        const parsed = EthCrypto.cipher.parse(wrappedBlob);
        return EthCrypto.decryptWithPrivateKey(privateKeyHex, parsed);
    }

    /**
     * eth-crypto expects an uncompressed pubkey *without* the 0x04 prefix
     * (so 128 hex chars). Accept either form and normalize.
     */
    private normalizePubkey(publicKeyHex: string): string {
        let hex = publicKeyHex.startsWith('0x') ? publicKeyHex.slice(2) : publicKeyHex;
        if (hex.length === 130 && hex.startsWith('04')) hex = hex.slice(2);
        if (hex.length !== 128) {
            throw new Error(`Invalid secp256k1 pubkey: expected 128 hex chars, got ${hex.length}`);
        }
        return hex;
    }
}
