const API_BASE = '/api';

export interface SubmitResponse {
    kyc_id: string;
    status: string;
    message: string;
}

export interface StatusResponse {
    kyc_id: string;
    status: 'PENDING' | 'PROCESSING' | 'APPROVED' | 'REJECTED' | 'FLAGGED';
    trust_score?: number;
    ipfs_cid?: string;
    blockchain_tx_hash?: string;
    token_expires_at?: string;
    created_at?: string;
    rejection_reason?: string;
}

export async function submitKyc(userId: string, file: File): Promise<SubmitResponse> {
    const formData = new FormData();
    formData.append('user_id', userId);
    formData.append('document', file);

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

export async function getStatus(kycId: string): Promise<StatusResponse> {
    const res = await fetch(`${API_BASE}/kyc/status/${kycId}`);
    if (!res.ok) {
        const err = await res.json().catch(() => ({ message: 'Unknown error' }));
        throw new Error(err.message || `HTTP ${res.status}`);
    }
    return res.json();
}
