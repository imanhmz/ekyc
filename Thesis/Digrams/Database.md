```mermaid
 erDiagram
    direction LR

    KYC_RECORDS {
        uuid id PK
        varchar wallet_address
        varchar status
        text ipfs_cid
        text blockchain_tx_hash
        smallint trust_score
        jsonb ocr_data
        text wrapped_encryption_key
        text user_encryption_pubkey
        text age_commitment
        text wrapped_age_witness
        timestamptz token_expires_at
        timestamptz created_at
    }

    KYC_AUDIT_LOG {
        uuid id PK
        uuid kyc_id FK
        varchar from_status
        varchar to_status
        varchar actor
        jsonb metadata
        timestamptz created_at
    }

    KYC_RECORDS ||--o{ KYC_AUDIT_LOG : "tracks"
 ```
