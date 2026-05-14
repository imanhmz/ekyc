const API_BASE = '/api';

export interface SubmitResponse {
    kyc_id: string;
    status: string;
    message: string;
}

export interface LivenessInfo {
    passed: boolean;
    provided: boolean;
    yaw_range: number;
    min_yaw: number;
    max_yaw: number;
    detection_rate: number;
    method: string;
    reason: string;
}

export interface DeepfakeResult {
    verdict: 'REAL' | 'FAKE' | 'NO_FACE';
    confidence: number;
    artifacts_detected: boolean;
    liveness?: LivenessInfo;
}

export interface StatusResponse {
    kyc_id: string;
    status: 'PENDING' | 'PROCESSING' | 'APPROVED_PENDING_WALLET' | 'APPROVED' | 'REJECTED' | 'FLAGGED';
    trust_score?: number;
    ipfs_cid?: string;
    blockchain_tx_hash?: string;
    wallet_address?: string;
    token_expires_at?: string;
    created_at?: string;
    rejection_reason?: string;
    deepfake_result?: DeepfakeResult | null;
}

export interface LinkWalletResponse {
    success: boolean;
    message: string;
    kyc_id: string;
    wallet_address: string;
    blockchain_tx_hash?: string;
    status: string;
}

export async function submitKyc(
    userId: string,
    file: File,
    walletAddress?: string,
    livenessVideo?: Blob | null,
    encryptionPubkey?: string,
): Promise<SubmitResponse> {
    const formData = new FormData();
    formData.append('user_id', userId);
    formData.append('document', file);
    if (walletAddress) {
        formData.append('wallet_address', walletAddress);
    }
    if (livenessVideo) {
        formData.append('liveness_video', livenessVideo, 'liveness.webm');
    }
    if (encryptionPubkey) {
        formData.append('encryption_pubkey', encryptionPubkey);
    }

    const res = await fetch(`${API_BASE}/kyc/submit`, {
        method: 'POST',
        body: formData,
    });

    if (!res.ok) {
        const err = await res.json().catch(() => ({ message: 'Unknown error' }));
        throw new Error(err.message || `HTTP ${res.status}`);
    }

    return res.json();
}

export async function linkWallet(
    kycId: string,
    walletAddress: string,
    signature: string,
    message: string,
    encryptionPubkey?: string,
): Promise<LinkWalletResponse> {
    const res = await fetch(`${API_BASE}/kyc/link-wallet`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            kyc_id: kycId,
            wallet_address: walletAddress,
            signature,
            message,
            encryption_pubkey: encryptionPubkey,
        }),
    });

    if (!res.ok) {
        const err = await res.json().catch(() => ({ message: 'Unknown error' }));
        throw new Error(err.message || `HTTP ${res.status}`);
    }

    return res.json();
}

export interface WrappedDocumentResponse {
    kyc_id: string;
    ipfs_cid: string;
    ciphertext_base64: string;
    wrapped_encryption_key: string;
    mimetype: string;
}

export async function fetchWrappedDocument(
    walletAddress: string,
    signature: string,
    message: string,
): Promise<WrappedDocumentResponse> {
    const res = await fetch(`${API_BASE}/kyc/wrapped-document/by-wallet`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ wallet_address: walletAddress, signature, message }),
    });
    if (!res.ok) {
        const err = await res.json().catch(() => ({ message: 'Unknown error' }));
        throw new Error(err.message || `HTTP ${res.status}`);
    }
    return res.json();
}

export interface WrappedAgeWitnessResponse {
    kyc_id: string;
    age_commitment: string;
    wrapped_age_witness: string;
}

export async function fetchWrappedAgeWitness(
    walletAddress: string,
    signature: string,
    message: string,
): Promise<WrappedAgeWitnessResponse> {
    const res = await fetch(`${API_BASE}/kyc/wrapped-age-witness/by-wallet`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ wallet_address: walletAddress, signature, message }),
    });
    if (!res.ok) {
        const err = await res.json().catch(() => ({ message: 'Unknown error' }));
        throw new Error(err.message || `HTTP ${res.status}`);
    }
    return res.json();
}

export async function getStatus(kycId: string): Promise<StatusResponse> {
    const res = await fetch(`${API_BASE}/kyc/status/${kycId}`);
    if (!res.ok) {
        const err = await res.json().catch(() => ({ message: 'Unknown error' }));
        throw new Error(err.message || `HTTP ${res.status}`);
    }
    return res.json();
}
