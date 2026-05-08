import React, { useState, useCallback, DragEvent } from 'react';
import { submitKyc, getStatus, type StatusResponse } from '../api';
import { StatusBadge } from './StatusBadge';
import { WalletLinkForm } from './WalletLinkForm';
import { MyDocumentDownload } from './MyDocumentDownload';
import { LivenessCapture } from './LivenessCapture';

export function UploadForm() {
    const [userId, setUserId] = useState<string>(() => crypto.randomUUID());
    const [walletAddress, setWalletAddress] = useState<string>('');
    const [file, setFile] = useState<File | null>(null);
    const [livenessVideo, setLivenessVideo] = useState<Blob | null>(null);
    const [dragOver, setDragOver] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [kycId, setKycId] = useState<string | null>(null);
    const [status, setStatus] = useState<StatusResponse | null>(null);
    const [polling, setPolling] = useState(false);

    const handleFileChange = (selected: File | null) => {
        if (!selected) return;
        const allowed = ['image/jpeg', 'image/png', 'application/pdf'];
        if (!allowed.includes(selected.type)) {
            setError('Only JPEG, PNG, and PDF files are accepted.');
            return;
        }
        if (selected.size > 10 * 1024 * 1024) {
            setError('File must be smaller than 10MB.');
            return;
        }
        setFile(selected);
        setError(null);
    };

    const handleDrop = useCallback((e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragOver(false);
        handleFileChange(e.dataTransfer.files[0] ?? null);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userId.trim()) { setError('User ID is required.'); return; }
        if (!file) { setError('Please select a document.'); return; }

        setLoading(true);
        setError(null);
        setStatus(null);

        try {
            const walletAddr = walletAddress.trim() || undefined;
            const res = await submitKyc(userId.trim(), file, walletAddr, livenessVideo);
            setKycId(res.kyc_id);
            setStatus({ kyc_id: res.kyc_id, status: 'PENDING' });
        } catch (e: any) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    };

    const handleCheckStatus = async () => {
        if (!kycId) return;
        setPolling(true);
        setError(null);
        try {
            const res = await getStatus(kycId);
            setStatus(res);
        } catch (e: any) {
            setError(e.message);
        } finally {
            setPolling(false);
        }
    };

    return (
        <form className="upload-form" onSubmit={handleSubmit}>
            <div className="field-group">
                <label htmlFor="user-id">User ID</label>
                <input
                    id="user-id"
                    type="text"
                    placeholder="e.g. user_abc123"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    disabled={loading}
                />
            </div>

            <div className="field-group">
                <label htmlFor="wallet-address">Ethereum Wallet Address (optional)</label>
                <input
                    id="wallet-address"
                    type="text"
                    placeholder="0x... (or link wallet later)"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    disabled={loading}
                />
                <span className="hint-text">You can also link your wallet after submission</span>
            </div>

            <div className="field-group">
                <label>ID Document</label>
                <div
                    className={`drop-zone ${dragOver ? 'drag-over' : ''} ${file ? 'has-file' : ''}`}
                    onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById('file-input')?.click()}
                >
                    <input
                        id="file-input"
                        type="file"
                        accept=".jpg,.jpeg,.png,.pdf"
                        style={{ display: 'none' }}
                        onChange={(e) => handleFileChange(e.target.files?.[0] ?? null)}
                    />
                    {file ? (
                        <div className="file-selected">
                            <span className="file-icon">📄</span>
                            <span className="file-name">{file.name}</span>
                            <span className="file-size">({(file.size / 1024).toFixed(1)} KB)</span>
                        </div>
                    ) : (
                        <div className="drop-prompt">
                            <span className="upload-icon">⬆</span>
                            <span>Drop file here or click to browse</span>
                            <span className="hint">Accepted: JPEG, PNG, PDF · Max: 10MB</span>
                        </div>
                    )}
                </div>
            </div>

            <LivenessCapture
                onCapture={setLivenessVideo}
                captured={livenessVideo !== null}
            />

            {error && <div className="error-message">⚠ {error}</div>}

            {!livenessVideo && (
                <p className="liveness-required-hint">Complete the liveness check above to enable submission.</p>
            )}

            <button type="submit" className="btn-primary" disabled={loading || !livenessVideo}>
                {loading ? 'Submitting…' : 'Submit for Verification'}
            </button>

            {kycId && (
                <div className="result-panel">
                    <div className="divider" />
                    <div className="result-row">
                        <span className="label">KYC ID:</span>
                        <span className="kyc-id">{kycId}</span>
                    </div>
                    <div className="result-row">
                        <span className="label">Status:</span>
                        <StatusBadge status={status?.status} />
                    </div>
                    {status?.trust_score !== undefined && (
                        <div className="result-row">
                            <span className="label">Trust Score:</span>
                            <span className="value">{status.trust_score}/100</span>
                        </div>
                    )}
                    {status?.ipfs_cid && (
                        <div className="result-row">
                            <span className="label">IPFS CID:</span>
                            <span className="value mono">{status.ipfs_cid}</span>
                        </div>
                    )}
                    {status?.blockchain_tx_hash && (
                        <div className="result-row">
                            <span className="label">TX Hash:</span>
                            <span className="value mono">{status.blockchain_tx_hash}</span>
                        </div>
                    )}
                    {status?.token_expires_at && (
                        <div className="result-row">
                            <span className="label">Token Expires:</span>
                            <span className="value">{new Date(status.token_expires_at).toLocaleDateString()}</span>
                        </div>
                    )}
                    {status?.rejection_reason && (
                        <div className="result-row">
                            <span className="label">Rejection Reason:</span>
                            <span className="value rejection">{status.rejection_reason}</span>
                        </div>
                    )}

                    {status?.deepfake_result?.liveness && (
                        <div className="liveness-result-panel">
                            <div className="result-row">
                                <span className="label">Liveness:</span>
                                <span className={`value ${status.deepfake_result.liveness.passed ? 'approved' : status.deepfake_result.liveness.provided ? 'rejection' : 'pending'}`}>
                                    {!status.deepfake_result.liveness.provided
                                        ? 'Not provided'
                                        : status.deepfake_result.liveness.passed
                                            ? `✅ Passed`
                                            : `❌ Failed`}
                                </span>
                            </div>
                            {status.deepfake_result.liveness.provided && (
                                <>
                                    <div className="result-row">
                                        <span className="label">Head rotation:</span>
                                        <span className="value">{status.deepfake_result.liveness.yaw_range}°</span>
                                    </div>
                                    <div className="result-row">
                                        <span className="label">Detection rate:</span>
                                        <span className="value">{Math.round(status.deepfake_result.liveness.detection_rate * 100)}%</span>
                                    </div>
                                    <div className="result-row">
                                        <span className="label">Method:</span>
                                        <span className="value mono">{status.deepfake_result.liveness.method}</span>
                                    </div>
                                    <div className="result-row">
                                        <span className="label">Detail:</span>
                                        <span className="value">{status.deepfake_result.liveness.reason}</span>
                                    </div>
                                </>
                            )}
                        </div>
                    )}

                    <button
                        type="button"
                        className="btn-secondary"
                        onClick={handleCheckStatus}
                        disabled={polling}
                    >
                        {polling ? 'Checking…' : '↻ Check Status'}
                    </button>

                    {status?.status === 'APPROVED_PENDING_WALLET' && (
                        <WalletLinkForm kycId={kycId} onSuccess={handleCheckStatus} />
                    )}

                    {status?.status === 'APPROVED' && status.wallet_address && (
                        <div className="divider" />
                    )}

                    {status?.status === 'APPROVED' && status.wallet_address && (
                        <MyDocumentDownload walletAddress={status.wallet_address} />
                    )}
                </div>
            )}
        </form>
    );
}
