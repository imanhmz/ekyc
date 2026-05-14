import React, { useState } from 'react';
import { fetchWrappedDocument } from '../api';
import {
    deriveEncryptionKeypair,
    unwrapDek,
    aesDecrypt,
    base64ToBytes,
} from '../lib/ssiCrypto';

interface Props {
    walletAddress: string;
}

declare global {
    interface Window {
        ethereum?: any;
    }
}

const MIME_TO_EXT: Record<string, string> = {
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp',
    'application/pdf': 'pdf',
};

export function MyDocumentDownload({ walletAddress }: Props) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [step, setStep] = useState<string>('');

    const handleDownload = async () => {
        if (!window.ethereum) {
            setError('MetaMask not detected. Please install MetaMask to download your document.');
            return;
        }

        setLoading(true);
        setError(null);
        setStep('');

        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const connectedAddress: string = accounts[0];
            if (connectedAddress.toLowerCase() !== walletAddress.toLowerCase()) {
                throw new Error(`Connected wallet ${connectedAddress} does not match KYC wallet ${walletAddress}`);
            }

            // 1. Prove wallet ownership for the wrapped-document endpoint.
            setStep('Requesting ownership signature…');
            const ownershipMessage = 'Download my KYC document';
            const ownershipSignature = await window.ethereum.request({
                method: 'personal_sign',
                params: [ownershipMessage, connectedAddress],
            });

            // 2. Fetch ciphertext + wrapped DEK from backend.
            setStep('Fetching encrypted document…');
            const payload = await fetchWrappedDocument(
                connectedAddress,
                ownershipSignature,
                ownershipMessage,
            );

            // 3. Derive the encryption keypair from the SSI challenge signature.
            setStep('Deriving encryption key from wallet…');
            const { privateKey } = await deriveEncryptionKeypair(connectedAddress);

            // 4. Unwrap the DEK locally.
            setStep('Unwrapping document key in browser…');
            const dekBase64 = await unwrapDek(payload.wrapped_encryption_key, privateKey);

            // 5. AES-GCM decrypt the IPFS ciphertext locally.
            setStep('Decrypting document…');
            const ciphertext = base64ToBytes(payload.ciphertext_base64);
            const plaintext = await aesDecrypt(ciphertext, dekBase64);

            // 6. Trigger a browser download — backend never sees plaintext.
            const ext = MIME_TO_EXT[payload.mimetype] || 'bin';
            const blob = new Blob([plaintext as BlobPart], { type: payload.mimetype });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `kyc-${payload.kyc_id}.${ext}`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);

            setStep('Done. Decrypted locally — backend never saw the plaintext.');
        } catch (e: any) {
            if (e.code === 4001) {
                setError('Signature rejected by user');
            } else {
                setError(e.message || 'Failed to download document');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="my-document-panel">
            <h3>Download Your Document (SSI)</h3>
            <p className="download-hint">
                Your document is encrypted with a key only your wallet can open. You'll be asked to sign
                twice — once to prove ownership and once to derive your decryption key. Decryption
                happens entirely in this browser; the bank cannot decrypt it.
            </p>

            {error && <div className="error-message">⚠ {error}</div>}
            {step && !error && <div className="info-message">{step}</div>}

            <button
                type="button"
                className="btn-download"
                onClick={handleDownload}
                disabled={loading}
            >
                {loading ? 'Working…' : '📄 Decrypt & Download My Document'}
            </button>

            <p className="download-note">
                Wallet: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
            </p>
        </div>
    );
}
