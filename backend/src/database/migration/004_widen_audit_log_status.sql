-- Widen audit log status columns: APPROVED_PENDING_WALLET is 23 chars, VARCHAR(20) overflows.
ALTER TABLE kyc_audit_log
    ALTER COLUMN from_status TYPE VARCHAR(30),
    ALTER COLUMN to_status   TYPE VARCHAR(30);
