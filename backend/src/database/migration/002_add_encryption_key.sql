-- Add encryption_key column for IPFS document encryption
ALTER TABLE kyc_records ADD COLUMN IF NOT EXISTS encryption_key TEXT;
COMMENT ON COLUMN kyc_records.encryption_key IS 'AES-256 key for IPFS document decryption (base64)';

-- Add APPROVED_PENDING_WALLET status to support wallet linking flow
-- This status indicates KYC is approved but awaiting wallet address linkage
-- Status flow: PENDING → PROCESSING → APPROVED_PENDING_WALLET → APPROVED (after wallet linked)
COMMENT ON COLUMN kyc_records.status IS 'PENDING | PROCESSING | APPROVED_PENDING_WALLET | APPROVED | REJECTED | FLAGGED';
