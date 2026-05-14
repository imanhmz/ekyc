-- SSI: separate the user-controlled wrapped key from the transient plaintext DEK.
--
-- The plaintext DEK lives in `encryption_key` only during the PROCESSING window
-- (so the AI service can decrypt the document). On approval the backend wraps
-- the DEK to the user's secp256k1 pubkey and NULLs `encryption_key`, leaving
-- only the wrapped form. Without the user's wallet signature, the wrapped DEK
-- cannot be opened — the institution can no longer decrypt the document on
-- its own.

ALTER TABLE kyc_records ADD COLUMN IF NOT EXISTS wrapped_encryption_key TEXT;
ALTER TABLE kyc_records ADD COLUMN IF NOT EXISTS user_encryption_pubkey TEXT;

COMMENT ON COLUMN kyc_records.wrapped_encryption_key IS
    'ECIES blob: DEK encrypted to user_encryption_pubkey. Unwrappable only by the user wallet.';
COMMENT ON COLUMN kyc_records.user_encryption_pubkey IS
    'secp256k1 pubkey (hex, no 0x04 prefix) the user provided at submission. Used to wrap the DEK at approval.';
COMMENT ON COLUMN kyc_records.encryption_key IS
    'Transient plaintext AES-256 DEK (base64). Present only during PROCESSING; nulled at APPROVED once wrapped.';
