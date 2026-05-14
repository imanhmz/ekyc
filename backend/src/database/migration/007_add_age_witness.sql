-- Attribute-level ZKP (selective disclosure) needs two new columns:
--
--   age_commitment            - Poseidon(dobYear, salt) published on chain at approval.
--                               Stored locally so the bank can look up which commitment
--                               belongs to which row.
--
--   wrapped_age_witness       - The witness (dobYear, salt) ECIES-wrapped to the user's
--                               encryption pubkey. The bank cannot read it; the user
--                               unwraps it in the browser to generate ZK age proofs.
--                               Plaintext version transiently lives in `age_witness`
--                               only between approval and wrap.

ALTER TABLE kyc_records ADD COLUMN IF NOT EXISTS age_commitment TEXT;
ALTER TABLE kyc_records ADD COLUMN IF NOT EXISTS wrapped_age_witness TEXT;
ALTER TABLE kyc_records ADD COLUMN IF NOT EXISTS age_witness TEXT;

COMMENT ON COLUMN kyc_records.age_commitment IS
    'Poseidon(dobYear, salt) — published on chain via AttributeRegistry.setAgeCommitment.';
COMMENT ON COLUMN kyc_records.wrapped_age_witness IS
    'ECIES-wrapped JSON {dobYear, salt}. Unwrappable only by the user wallet.';
COMMENT ON COLUMN kyc_records.age_witness IS
    'Transient plaintext JSON {dobYear, salt}. Present only between approval and wrap; nulled out once wrapped.';
