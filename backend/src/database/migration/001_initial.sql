-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Core users table
CREATE TABLE IF NOT EXISTS users (
    id              UUID         PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name      VARCHAR(100) NOT NULL,
    last_name       VARCHAR(100) NOT NULL,
    age             SMALLINT,
    status          SMALLINT     DEFAULT 1,
    created_at      TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- Core KYC records table
CREATE TABLE IF NOT EXISTS kyc_records (
    id                  UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id             UUID        NOT NULL REFERENCES users(id),
    status              VARCHAR(30)  NOT NULL DEFAULT 'PENDING',
                        -- PENDING | PROCESSING | APPROVED_PENDING_WALLET | APPROVED | REJECTED | FLAGGED
    document_path       TEXT,
    document_type       VARCHAR(50),
                        -- PASSPORT | NATIONAL_ID | DRIVERS_LICENCE
    ipfs_cid            TEXT,
    blockchain_tx_hash  TEXT,
    wallet_address      VARCHAR(42),
    trust_score         SMALLINT,
    rejection_reason    VARCHAR(50),
    ocr_data            JSONB,
    deepfake_result     JSONB,
    token_expires_at    TIMESTAMPTZ,
    created_at          TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- Indexes for fast lookups
CREATE INDEX IF NOT EXISTS idx_users_status      ON users (status);
CREATE INDEX IF NOT EXISTS idx_kyc_user_id   ON kyc_records (user_id);
CREATE INDEX IF NOT EXISTS idx_kyc_status    ON kyc_records (status);
CREATE INDEX IF NOT EXISTS idx_kyc_wallet    ON kyc_records (wallet_address);

-- Auto-update updated_at on any row change
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_kyc_updated_at ON kyc_records;
CREATE TRIGGER trg_kyc_updated_at
    BEFORE UPDATE ON kyc_records
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Audit log — immutable record of every status transition
CREATE TABLE IF NOT EXISTS kyc_audit_log (
    id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    kyc_id      UUID        NOT NULL REFERENCES kyc_records(id),
    from_status VARCHAR(20),
    to_status   VARCHAR(20) NOT NULL,
    actor       VARCHAR(100),   -- 'system', 'ai-service', 'admin'
    metadata    JSONB,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_audit_kyc_id ON kyc_audit_log (kyc_id);
