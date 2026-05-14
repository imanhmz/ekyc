import React, { useState } from 'react';
import { linkWallet } from '../api';
import { deriveEncryptionPubkey } from '../lib/ssiCrypto';

interface Props {
    kycId: string;
    onSuccess: () => void;
}

declare global {
    interface Window {
        ethereum?: any;
    }
}

export function WalletLinkForm({ kycId, onSuccess }: Props) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleLinkWallet = async () => {
        if (!window.ethereum) {
            setError('MetaMask not detected. Please install MetaMask to link your wallet.');
            return;
        }

        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            // Request MetaMask connection
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const walletAddress = accounts[0];

            if (!walletAddress) {
                throw new Error('No account selected in MetaMask');
            }

            // Create message for signing
            const message = `I authorize linking wallet ${walletAddress} to KYC ID ${kycId}`;

            // Request signature from MetaMask
            const signature = await window.ethereum.request({
                method: 'personal_sign',
                params: [message, walletAddress],
            });

            // SSI: derive the encryption pubkey too, so the backend can wrap
            // the plaintext DEK that's still sitting in storage from
            // APPROVED_PENDING_WALLET and shred the cleartext.
            const encryptionPubkey = await deriveEncryptionPubkey(walletAddress);

            // Submit to backend
            const result = await linkWallet(kycId, walletAddress, signature, message, encryptionPubkey);

            setSuccess(`Wallet linked successfully! Transaction: ${result.blockchain_tx_hash || 'pending'}`);

            // Notify parent component to refresh status
            setTimeout(() => {
                onSuccess();
            }, 2000);
        } catch (e: any) {
            if (e.code === 4001) {
                setError('Signature rejected by user');
            } else {
                setError(e.message || 'Failed to link wallet');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="wallet-link-panel">
            <div className="wallet-link-header">
                <span className="warning-icon">⚠️</span>
                <h3>Wallet Linking Required</h3>
            </div>

            <p className="wallet-link-message">
                Your KYC verification is approved! To complete the process and register on the blockchain,
                please link your Ethereum wallet by signing a verification message.
            </p>

            {error && <div className="error-message">⚠ {error}</div>}
            {success && <div className="success-message">✓ {success}</div>}

            <button
                type="button"
                className="btn-wallet"
                onClick={handleLinkWallet}
                disabled={loading}
            >
                {loading ? 'Connecting...' : '🦊 Connect Wallet & Sign'}
            </button>

            <p className="wallet-link-hint">
                This will open MetaMask for you to sign a message. No gas fees required.
            </p>
        </div>
    );
}
