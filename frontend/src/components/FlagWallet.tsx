import React, { useState } from 'react';

declare global {
    interface Window {
        ethereum?: any;
    }
}

export function FlagWallet() {
    const [walletAddress, setWalletAddress] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

    const handleFlag = async () => {
        const addr = walletAddress.trim();
        if (!addr) {
            setResult({ success: false, message: 'Enter a wallet address.' });
            return;
        }
        if (!/^0x[0-9a-fA-F]{40}$/.test(addr)) {
            setResult({ success: false, message: 'Invalid Ethereum address format.' });
            return;
        }

        setLoading(true);
        setResult(null);

        try {
            const res = await fetch(`/api/kyc/flag/${addr}`, { method: 'POST' });
            const data = await res.json().catch(() => ({}));
            if (res.ok) {
                setResult({ success: true, message: data.message || `Wallet ${addr} flagged for re-verification.` });
                setWalletAddress('');
            } else {
                setResult({ success: false, message: data.message || `Error ${res.status}` });
            }
        } catch (e: any) {
            setResult({ success: false, message: e.message || 'Request failed.' });
        } finally {
            setLoading(false);
        }
    };

    const fillFromMetaMask = async () => {
        if (!window.ethereum) {
            setResult({ success: false, message: 'MetaMask not detected.' });
            return;
        }
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            if (accounts[0]) setWalletAddress(accounts[0]);
        } catch {
            setResult({ success: false, message: 'MetaMask connection rejected.' });
        }
    };

    return (
        <div className="flag-wallet-panel">
            <h3 style={{ marginTop: 0, color: '#e53e3e' }}>⚑ Live-Check — Flag Wallet</h3>
            <p style={{ fontSize: '14px', color: '#718096', marginBottom: '16px' }}>
                Admin demonstration: flag a verified wallet address to trigger re-verification.
                The blockchain record is set to <code>active = false</code> via{' '}
                <code>flagIdentity()</code>.
            </p>

            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                <input
                    type="text"
                    placeholder="0x... wallet address"
                    value={walletAddress}
                    onChange={e => setWalletAddress(e.target.value)}
                    style={{
                        flex: 1,
                        padding: '10px 14px',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        fontSize: '14px',
                        fontFamily: 'monospace',
                    }}
                />
                <button
                    type="button"
                    onClick={fillFromMetaMask}
                    title="Paste connected MetaMask address"
                    style={{
                        padding: '10px 14px',
                        background: '#f7fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '18px',
                    }}
                >
                    🦊
                </button>
            </div>

            <button
                type="button"
                onClick={handleFlag}
                disabled={loading || !walletAddress.trim()}
                style={{
                    width: '100%',
                    padding: '12px',
                    background: loading ? '#fc8181' : '#e53e3e',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '15px',
                    fontWeight: 'bold',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'background 0.2s',
                }}
            >
                {loading ? 'Flagging…' : 'Flag Wallet'}
            </button>

            {result && (
                <div
                    style={{
                        marginTop: '12px',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        background: result.success ? '#f0fff4' : '#fff5f5',
                        border: `1px solid ${result.success ? '#9ae6b4' : '#feb2b2'}`,
                        color: result.success ? '#276749' : '#c53030',
                        fontSize: '14px',
                    }}
                >
                    {result.success ? '✓ ' : '⚠ '}{result.message}
                </div>
            )}
        </div>
    );
}
