import React, { useState } from 'react';

interface Props {
    walletAddress: string;
}

declare global {
    interface Window {
        ethereum?: any;
    }
}

export function MyDocumentDownload({ walletAddress }: Props) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleDownload = async () => {
        if (!window.ethereum) {
            setError('MetaMask not detected. Please install MetaMask to download your document.');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            // Request MetaMask connection
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const connectedAddress = accounts[0];

            if (connectedAddress.toLowerCase() !== walletAddress.toLowerCase()) {
                throw new Error(`Connected wallet ${connectedAddress} does not match KYC wallet ${walletAddress}`);
            }

            // Create message for signing
            const message = 'Download my KYC document';

            // Request signature from MetaMask
            const signature = await window.ethereum.request({
                method: 'personal_sign',
                params: [message, connectedAddress],
            });

            // Download document from backend
            const response = await fetch('/api/kyc/my-document', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    wallet_address: connectedAddress,
                    signature,
                    message,
                }),
            });

            if (!response.ok) {
                const err = await response.json().catch(() => ({ message: 'Failed to download document' }));
                throw new Error(err.message || `HTTP ${response.status}`);
            }

            // Get filename from Content-Disposition header or use default
            const contentDisposition = response.headers.get('Content-Disposition');
            const filenameMatch = contentDisposition?.match(/filename="(.+)"/);
            const filename = filenameMatch ? filenameMatch[1] : 'kyc-document.pdf';

            // Download file
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);

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
            <h3>Download Your Document</h3>
            <p className="download-hint">
                Click below to download your verified KYC document. You'll need to sign a message with your wallet to prove ownership.
            </p>

            {error && <div className="error-message">⚠ {error}</div>}

            <button
                type="button"
                className="btn-download"
                onClick={handleDownload}
                disabled={loading}
            >
                {loading ? 'Downloading...' : '📄 Download My Document'}
            </button>

            <p className="download-note">
                Wallet: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
            </p>
        </div>
    );
}
