import React, { useState } from 'react';
import { fetchWrappedDocument } from '../api';
import {
    deriveEncryptionKeypair,
    unwrapDek,
    rewrapDek,
} from '../lib/ssiCrypto';

interface Props {
    walletAddress: string;
}

declare global {
    interface Window {
        ethereum?: any;
    }
}

const DEFAULT_VIEWER_BANK = 'http://localhost:3001';

export function ShareWithBank({ walletAddress }: Props) {
    const [viewerBankUrl, setViewerBankUrl] = useState<string>(DEFAULT_VIEWER_BANK);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [step, setStep] = useState<string>('');
    const [success, setSuccess] = useState<string | null>(null);

    const handleShare = async () => {
        if (!window.ethereum) {
            setError('MetaMask not detected.');
            return;
        }
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            // 0. Reconfirm wallet ownership for the share consent.
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const connectedAddress: string = accounts[0];
            if (connectedAddress.toLowerCase() !== walletAddress.toLowerCase()) {
                throw new Error(`Connected wallet ${connectedAddress} does not match KYC wallet ${walletAddress}`);
            }

            setStep('Fetching recipient bank pubkey…');
            const pubRes = await fetch(`${viewerBankUrl}/api/encryption-pubkey`);
            if (!pubRes.ok) throw new Error(`Recipient bank pubkey fetch failed: HTTP ${pubRes.status}`);
            const { encryption_pubkey: recipientPubkey } = await pubRes.json();

            // 1. Prove ownership to signer bank to fetch the wrapped payload.
            setStep('Signing ownership proof…');
            const ownershipMessage = 'Download my KYC document';
            const ownershipSignature = await window.ethereum.request({
                method: 'personal_sign',
                params: [ownershipMessage, connectedAddress],
            });

            setStep('Fetching encrypted document + wrapped key…');
            const payload = await fetchWrappedDocument(
                connectedAddress,
                ownershipSignature,
                ownershipMessage,
            );

            // 2. Derive SSI keypair, unwrap DEK locally.
            setStep('Deriving SSI keypair from wallet signature…');
            const { privateKey } = await deriveEncryptionKeypair(connectedAddress);

            setStep('Unwrapping document key…');
            const dekBase64 = await unwrapDek(payload.wrapped_encryption_key, privateKey);

            // 3. Re-wrap DEK to the recipient bank's pubkey.
            setStep('Re-wrapping key for recipient bank…');
            const rewrapped = await rewrapDek(dekBase64, recipientPubkey);

            // 4. Sign a share consent message that the viewer bank can verify.
            setStep('Signing share consent…');
            const shareMessage = `I authorize sharing KYC ${payload.kyc_id} with ${viewerBankUrl} at ${new Date().toISOString()}`;
            const shareSignature = await window.ethereum.request({
                method: 'personal_sign',
                params: [shareMessage, connectedAddress],
            });

            // 5. POST to viewer bank's receive endpoint.
            setStep('Delivering to recipient bank…');
            const res = await fetch(`${viewerBankUrl}/api/receive-document`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    wallet_address: connectedAddress,
                    signature: shareSignature,
                    message: shareMessage,
                    ciphertext_base64: payload.ciphertext_base64,
                    rewrapped_dek: rewrapped,
                    mimetype: payload.mimetype,
                    kyc_id: payload.kyc_id,
                }),
            });
            if (!res.ok) {
                const errBody = await res.json().catch(() => ({ message: `HTTP ${res.status}` }));
                throw new Error(errBody.message || `HTTP ${res.status}`);
            }
            const body = await res.json();
            setStep('');
            setSuccess(`Shared ${body.size_bytes} bytes with the recipient bank.`);
        } catch (e: any) {
            if (e.code === 4001) setError('Signature rejected by user');
            else setError(e.message || 'Share failed');
            setStep('');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="share-bank-panel">
            <h3>Share with Another Bank (SSI)</h3>
            <p className="download-hint">
                Re-wrap your document's key for another institution. The Signer Bank never sees the key
                in plaintext; the recipient bank receives a copy that only they can open.
            </p>

            <div className="field-group">
                <label htmlFor="viewer-bank-url">Recipient Bank URL</label>
                <input
                    id="viewer-bank-url"
                    type="text"
                    value={viewerBankUrl}
                    onChange={(e) => setViewerBankUrl(e.target.value)}
                    disabled={loading}
                />
            </div>

            {error && <div className="error-message">⚠ {error}</div>}
            {step && !error && <div className="info-message">{step}</div>}
            {success && <div className="success-message">✓ {success}</div>}

            <button
                type="button"
                className="btn-secondary"
                onClick={handleShare}
                disabled={loading}
            >
                {loading ? 'Working…' : '🤝 Share with Viewer Bank'}
            </button>
        </div>
    );
}
