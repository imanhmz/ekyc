# e-KYC Live-Check Ledger - User & Developer Instructions

## Table of Contents
1. [System Overview](#system-overview)
2. [What are Trust Tokens?](#what-are-trust-tokens)
3. [User Workflows](#user-workflows)
4. [Financial Institution Workflows](#financial-institution-workflows)
5. [Technical Flow Diagrams](#technical-flow-diagrams)
6. [API Usage Guide](#api-usage-guide)
7. [Troubleshooting](#troubleshooting)

---

## System Overview

**e-KYC Live-Check Ledger** is a blockchain-based identity verification platform that combines AI-powered document analysis with smart contract trust anchoring.

### Key Features
- **AI-Powered Verification**: OCR + Deepfake detection on ID documents + Active liveness detection
- **Active Liveness Check**: ISO/IEC 30107-3 PAD Level 2 head-swing video — mandatory for submission
- **Blockchain Trust Anchoring**: Verification stored immutably on Polygon blockchain
- **Encrypted Document Storage**: Documents encrypted with AES-256 before IPFS upload
- **Expiring Trust Tokens**: Verifications expire after 90-365 days based on trust score
- **Live-Check Mechanism**: Identities can be flagged for re-verification if fraud patterns emerge
- **Wallet Ownership Proof**: Cryptographic signatures verify wallet ownership
- **Zero-Knowledge Proof Verification**: Groth16 proof proves trust score ≥ 75 on-chain without revealing the exact score

### Architecture
```
User (Browser + MetaMask)
    ↓
Frontend (React)
    ↓
Backend (NestJS API)
    ↓ ↔ RabbitMQ ↔ AI Service (Python)
    ↓
PostgreSQL Database
    ↓
IPFS (Encrypted Docs) + Polygon Blockchain (Trust Registry)
```

---

## What are Trust Tokens?

### Definition
A **Trust Token** is a blockchain-registered verification that proves a wallet address has completed KYC verification. It has:
- **Wallet Address**: Ethereum address (e.g., `0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb`)
- **IPFS CID**: Hash of encrypted ID document stored on IPFS
- **Trust Score**: 0-100 score from AI analysis (OCR accuracy + deepfake confidence)
- **Expiry Date**: Unix timestamp when token becomes invalid
- **Active Status**: Can be flagged false if fraud detected

### Token Expiry Logic

Trust Tokens are **time-limited** based on AI confidence:

| Trust Score | Expiry Duration | Reasoning |
|-------------|----------------|-----------|
| **95-100** (High confidence) | **365 days** (1 year) | Strong evidence of genuine identity |
| **80-94** (Medium confidence) | **180 days** (6 months) | Standard verification |
| **75-79** (Low pass) | **90 days** (3 months) | Marginal pass, requires frequent re-check |
| **Below 75** | **Rejected** | Does not meet threshold |

**Code Reference**: `/var/www/kyc/backend/src/kyc/kyc.service.ts:134-138`

```typescript
let expiryDays = 180; // Default: 6 months
if (trustScore >= 95) expiryDays = 365;      // High trust: 1 year
else if (trustScore < 80) expiryDays = 90;   // Low pass: 3 months
const expiresAt = new Date(Date.now() + expiryDays * 24 * 60 * 60 * 1000);
```

### Why Tokens Expire

1. **Documents age**: ID documents can expire, people change appearance
2. **Fraud evolves**: Deepfake technology improves over time
3. **Regulatory compliance**: Many jurisdictions require periodic re-verification
4. **Live-Check advantage**: Allows system to invalidate verifications if new fraud patterns detected

### What Happens When Token Expires?

- User's wallet address returns `is_verified: false` from blockchain
- Financial institutions see verification as invalid
- User must re-submit KYC to get new token
- Old encrypted document remains on IPFS (GDPR: can delete encryption key)

---

## User Workflows

### Workflow 1: Submit KYC with Wallet Address (Recommended)

**When to use**: You already have a MetaMask wallet and want immediate verification.

#### Steps:

1. **Open Application**
   - Navigate to `http://localhost:5173` (or production URL)

2. **Prepare Your Document**
   - Acceptable formats: JPEG, PNG, or PDF
   - Maximum size: 10MB
   - Document types: Passport, National ID, Driver's License

3. **Fill Form**
   - **User ID**: Auto-generated UUID (or provide custom ID)
   - **Wallet Address**: Enter your Ethereum address (e.g., `0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb`)
     - Must be valid Ethereum format (0x + 40 hex characters)
     - You can copy from MetaMask
   - **ID Document**: Drag-drop or click to upload

4. **Submit**
   - Click "Submit for Verification"
   - You'll receive a **KYC ID** (e.g., `550e8400-e29b-41d4-a716-446655440000`)
   - Status shows: `PENDING`

5. **Wait for AI Processing** (usually 30-60 seconds)
   - Document is encrypted and sent to AI service
   - OCR extracts: name, date of birth, document number, expiry
   - Deepfake detection analyzes photo for authenticity
   - Trust score calculated (weighted: 60% deepfake + 40% OCR)

6. **Check Status**
   - Click "Check Status" button
   - If **APPROVED**:
     - Trust Score displayed (e.g., 87/100)
     - IPFS CID shown (encrypted document hash)
     - Blockchain TX Hash shown (verification registered on-chain)
     - Token Expires date shown (e.g., 6 months from now)

7. **Download Your Document** (optional)
   - Click "Download My Document" button
   - MetaMask pops up requesting signature
   - Sign message: "Download my KYC document"
   - Document downloads as `kyc-{kyc_id}.pdf`

#### Result:
✅ Your wallet address is now verified on blockchain
✅ Other services can check verification status
✅ Valid until expiry date (90-365 days)

---

### Workflow 2: Submit KYC, Link Wallet Later

**When to use**: You don't have a wallet yet, or want to link it after approval.

#### Steps:

1. **Submit Without Wallet**
   - Follow Workflow 1, but **leave Wallet Address field empty**
   - Upload document and submit

2. **Wait for Processing**
   - Status changes: `PENDING` → `PROCESSING` → `APPROVED_PENDING_WALLET`

3. **Link Your Wallet**
   - **Install MetaMask** (if not already): https://metamask.io
   - Create or import wallet
   - On the KYC status page, you'll see: **"Link Your Wallet to Complete Verification"**
   - Click "Connect Wallet & Sign"

4. **MetaMask Signature Flow**
   - MetaMask pops up: "Connect to this site"
   - Click "Connect"
   - MetaMask shows message: `I authorize linking wallet 0x... to KYC ID {kyc_id}`
   - Click "Sign" (this proves you own the wallet)

5. **Blockchain Registration**
   - Backend verifies your signature
   - Registers your wallet + IPFS CID on blockchain
   - Status changes: `APPROVED_PENDING_WALLET` → `APPROVED`
   - Blockchain TX hash appears

6. **Download Document** (optional)
   - Same as Workflow 1, step 7

#### Result:
✅ Wallet linked via cryptographic proof
✅ Blockchain registration completed
✅ Verification valid until expiry date

---

### Workflow 3: Check Verification Status (Returning User)

**When to use**: You submitted KYC previously and want to check if still valid.

#### Steps:

1. **Find Your KYC ID**
   - Check email confirmation (if implemented)
   - Or check blockchain explorer with your wallet address

2. **Query Status Endpoint**
   ```bash
   curl http://localhost:3000/api/kyc/status/{your_kyc_id}
   ```

3. **Check Response**
   ```json
   {
     "kyc_id": "550e8400-e29b-41d4-a716-446655440000",
     "status": "APPROVED",
     "trust_score": 87,
     "ipfs_cid": "QmX7M9CiYXjVeFnrfZ6MzH...",
     "blockchain_tx_hash": "0x9f8a6b3c2d1e...",
     "wallet_address": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
     "token_expires_at": "2027-01-15T10:30:00Z",
     "created_at": "2026-05-03T10:30:00Z"
   }
   ```

4. **Verify Expiry**
   - Compare `token_expires_at` to current date
   - If expired: Re-submit KYC (Workflow 1 or 2)

---

## Financial Institution Workflows

### Workflow 1: Verify a User's Wallet Address

**When to use**: A user claims to be KYC-verified and provides wallet address.

#### Steps:

1. **Get User's Wallet Address**
   - User provides: `0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb`

2. **Query Verification Endpoint**
   ```bash
   curl http://localhost:3000/api/kyc/verify/0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb
   ```

3. **Check Response**
   ```json
   {
     "address": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
     "is_verified": true,
     "is_active": true,
     "ipfs_cid": "QmX7M9CiYXjVeFnrfZ6MzH...",
     "trust_score": 87,
     "valid_until": "2027-01-15T10:30:00Z"
   }
   ```

4. **Decision Logic**
   - ✅ **Accept** if:
     - `is_verified: true`
     - `is_active: true`
     - `valid_until` is in the future
     - `trust_score >= 75` (or your institution's threshold)

   - ❌ **Reject** if:
     - `is_verified: false` → Not verified or expired
     - `is_active: false` → Flagged for fraud
     - `valid_until` passed → Token expired
     - `trust_score` below your threshold

#### Important Notes:
- **You CANNOT decrypt the document** (no encryption key access)
- **You CAN see**: Verification status, trust score, expiry date, IPFS hash
- **This is blockchain data**: Immutable, publicly verifiable

---

### Workflow 2: Flag an Identity for Re-Verification

**When to use**: You detect fraud or suspicious activity from a verified wallet.

#### Steps:

1. **Call Flag Endpoint** (requires admin access)
   ```bash
   curl -X POST http://localhost:3000/api/kyc/flag/0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb
   ```

2. **Result**
   ```json
   {
     "address": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
     "flagged": true,
     "tx_hash": "0x3a8f9c2b1d..."
   }
   ```

3. **What Happens**
   - Smart contract sets `active: false` on blockchain
   - Database record updated to `status: FLAGGED`
   - **User's verification immediately invalid**
   - All FIs querying this wallet see `is_verified: false`

4. **User Must Re-Verify**
   - User must submit new KYC with fresh document
   - Previous verification remains flagged permanently

**This is the "Live-Check" mechanism** - active fraud prevention vs. passive expiry.

---

## Technical Flow Diagrams

### Complete KYC Submission Flow

```
┌─────────────────────────────────────────────────────────────────────────┐
│ USER SUBMITS DOCUMENT                                                   │
└─────────────────────────────────────────────────────────────────────────┘
                                    ↓
                    POST /api/kyc/submit
                    ├─ user_id
                    ├─ document (file)
                    └─ wallet_address (optional)
                                    ↓
┌─────────────────────────────────────────────────────────────────────────┐
│ BACKEND: kyc.service.ts → submit()                                      │
│ 1. Validate file type (JPEG/PNG/PDF)                                   │
│ 2. Validate wallet address format (if provided)                        │
│ 3. Create user record in PostgreSQL (if not exists)                    │
│ 4. Create KYC record: status = PENDING                                 │
│ 5. Save file to /shared_uploads/{kyc_id}.{ext}                         │
│ 6. Return 202 Accepted with kyc_id                                     │
└─────────────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────────────┐
│ BACKEND: queue.service.ts → publishKycJob()                             │
│ Publish to RabbitMQ queue: kyc_processing                              │
│ Message:                                                                │
│   {                                                                     │
│     kyc_id: "550e8400-...",                                            │
│     user_id: "user123",                                                │
│     file_path: "/shared_uploads/550e8400.jpg",                         │
│     file_type: "image/jpeg",                                           │
│     submitted_at: "2026-05-03T10:00:00Z"                               │
│   }                                                                     │
└─────────────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────────────┐
│ AI SERVICE: consumer.py → consume_kyc_jobs()                            │
│ 1. Read message from kyc_processing queue                              │
│ 2. Load file from shared volume                                        │
│ 3. Run OCR (EasyOCR):                                                  │
│    - Extract: name, DOB, doc number, expiry, nationality              │
│    - Calculate OCR confidence                                          │
│ 4. Run Deepfake Detection (DeepFace):                                  │
│    - Detect face in image                                              │
│    - Classify: REAL vs FAKE                                            │
│    - Analyze compression artifacts                                     │
│ 5. Calculate Trust Score:                                              │
│    - Formula: (OCR_conf * 0.4) + (Deepfake_conf * 0.6)               │
│    - Threshold: >= 75 = APPROVED, < 75 = REJECTED                     │
│ 6. Publish result to kyc_results queue                                 │
└─────────────────────────────────────────────────────────────────────────┘
                                    ↓
                    AI publishes to kyc_results:
                    {
                      kyc_id: "550e8400-...",
                      result: "APPROVED",
                      trust_score: 87,
                      ocr_data: { full_name: "Jane Doe", ... },
                      deepfake_result: { verdict: "REAL", confidence: 0.91 }
                    }
                                    ↓
┌─────────────────────────────────────────────────────────────────────────┐
│ BACKEND: queue.service.ts → consume_results()                           │
│ → Calls kyc.service.ts → processResult()                               │
└─────────────────────────────────────────────────────────────────────────┘
                                    ↓
                    ┌───────────────┴───────────────┐
                    │   result === "APPROVED"?      │
                    └───────────────┬───────────────┘
                            YES ↓           NO ↓
                                            │
┌───────────────────────────────────┐      │    ┌──────────────────────┐
│ APPROVED PATH                     │      │    │ REJECTED PATH        │
│ 1. Generate AES-256 key          │      │    │ 1. Set status:       │
│ 2. Encrypt document (crypto.svc) │      │    │    REJECTED          │
│ 3. Upload to IPFS (ipfs.svc)    │      │    │ 2. Save rejection    │
│    - Returns: IPFS CID           │      │    │    reason            │
│ 4. Generate ZKP (zkp.svc)       │      │    │ 3. Delete file       │
│    - Groth16 proof: score >= 75  │      │    └──────────────────────┘
│    - ~2-5 seconds overhead       │      │
│ 5. Save to DB:                   │      │
│    - ipfs_cid                    │      │
│    - encryption_key               │      │
│    - trust_score                 │      │
│    - ocr_data, deepfake_result   │      │
│ 6. Calculate token expiry:       │      │
│    - Score >= 95: +365 days      │      │
│    - Score 80-94: +180 days      │      │
│    - Score 75-79: +90 days       │      │
│ 7. Check wallet address...       │      │
└───────────────┬───────────────────┘      │
                │                           │
        ┌───────┴────────┐                 │
        │ Wallet exists? │                 │
        └───────┬────────┘                 │
                │                           │
    YES ↓               NO ↓               │
    │                   │                   │
┌───────────────────┐ ┌──────────────────────────┐
│ BLOCKCHAIN PATH   │ │ PENDING WALLET PATH      │
│ 1. Call smart     │ │ 1. Set status:           │
│    contract:      │ │    APPROVED_PENDING_WALLET│
│    registerIdentity│ │ 2. Wait for user to      │
│    - wallet addr  │ │    call /link-wallet     │
│    - ipfs_cid     │ │ 3. Then → Blockchain Path│
│    - validUntil   │ └──────────────────────────┘
│    - trustScore   │
│    - pA, pB, pC   │
│      (ZKP proof)  │
│ 2. Get TX hash    │
│ 3. Set status:    │
│    APPROVED       │
│ 4. Save tx_hash   │
│ 5. Delete file    │
└───────────────────┘
        │
        ↓
┌─────────────────────────────────────────────────────────────────────────┐
│ USER POLLS: GET /api/kyc/status/{kyc_id}                               │
│ Response:                                                               │
│   {                                                                     │
│     status: "APPROVED",                                                │
│     trust_score: 87,                                                   │
│     ipfs_cid: "QmX7M9CiY...",                                          │
│     blockchain_tx_hash: "0x9f8a6b3c...",                               │
│     wallet_address: "0x742d35Cc...",                                   │
│     token_expires_at: "2027-01-15T10:30:00Z"                           │
│   }                                                                     │
└─────────────────────────────────────────────────────────────────────────┘
```

### Wallet Linking Flow (After APPROVED_PENDING_WALLET)

```
┌─────────────────────────────────────────────────────────────────────────┐
│ USER: Status shows "APPROVED_PENDING_WALLET"                            │
│ Frontend displays: WalletLinkForm component                             │
└─────────────────────────────────────────────────────────────────────────┘
                                    ↓
                User clicks "Connect Wallet & Sign"
                                    ↓
┌─────────────────────────────────────────────────────────────────────────┐
│ FRONTEND: WalletLinkForm.tsx                                            │
│ 1. Request MetaMask connection:                                         │
│    window.ethereum.request({ method: 'eth_requestAccounts' })          │
│ 2. Get wallet address: accounts[0]                                     │
│ 3. Create message:                                                      │
│    "I authorize linking wallet 0x... to KYC ID {kyc_id}"               │
│ 4. Request signature:                                                   │
│    window.ethereum.request({                                            │
│      method: 'personal_sign',                                          │
│      params: [message, walletAddress]                                  │
│    })                                                                   │
│ 5. User approves in MetaMask → Get signature                           │
└─────────────────────────────────────────────────────────────────────────┘
                                    ↓
                    POST /api/kyc/link-wallet
                    {
                      kyc_id: "550e8400-...",
                      wallet_address: "0x742d35Cc...",
                      signature: "0x8f3a9c2b...",
                      message: "I authorize linking..."
                    }
                                    ↓
┌─────────────────────────────────────────────────────────────────────────┐
│ BACKEND: kyc.service.ts → linkWallet()                                  │
│ 1. Find KYC record by kyc_id                                           │
│ 2. Verify signature using ethers.js:                                   │
│    recoveredAddress = verifyMessage(message, signature)                │
│ 3. Check: recoveredAddress === wallet_address                          │
│    (Proves user owns the private key for this wallet)                  │
│ 4. Update DB: set wallet_address = 0x742d35Cc...                       │
│ 5. If status === APPROVED_PENDING_WALLET:                              │
│    a. Call blockchain.service.ts → registerIdentity()                  │
│    b. Get transaction hash                                             │
│    c. Update status: APPROVED                                          │
│    d. Save blockchain_tx_hash                                          │
│ 6. Log audit trail                                                      │
│ 7. Return success response                                             │
└─────────────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────────────┐
│ SMART CONTRACT: KYCRegistry.sol → registerIdentity()                   │
│ 1. verifier.verifyProof(pA, pB, pC, [75]) → must return true          │
│    (Groth16Verifier checks ZKP on-chain; reverts if invalid)           │
│ 2. mapping[0x742d35Cc...] = Identity({                                 │
│      ipfsCid: "QmX7M9CiY...",                                          │
│      validUntil: 1736938200 (Unix timestamp),                          │
│      trustScore: 87,                                                   │
│      active: true,                                                     │
│      verifiedAt: block.timestamp                                       │
│    })                                                                   │
│ emit IdentityRegistered(address, ipfsCid, validUntil, trustScore)     │
└─────────────────────────────────────────────────────────────────────────┘
                                    ↓
                    Frontend shows: ✅ Wallet linked successfully
                    Status updates: APPROVED
```

### Document Download Flow (User)

```
┌─────────────────────────────────────────────────────────────────────────┐
│ USER: Status shows "APPROVED" with wallet_address                       │
│ Frontend displays: MyDocumentDownload component                         │
└─────────────────────────────────────────────────────────────────────────┘
                                    ↓
                User clicks "Download My Document"
                                    ↓
┌─────────────────────────────────────────────────────────────────────────┐
│ FRONTEND: MyDocumentDownload.tsx                                        │
│ 1. Request MetaMask connection                                          │
│ 2. Verify connected wallet === KYC wallet                              │
│ 3. Create message: "Download my KYC document"                          │
│ 4. Request signature from MetaMask                                      │
└─────────────────────────────────────────────────────────────────────────┘
                                    ↓
                    POST /api/kyc/my-document
                    {
                      wallet_address: "0x742d35Cc...",
                      signature: "0x5b2c8d9a...",
                      message: "Download my KYC document"
                    }
                                    ↓
┌─────────────────────────────────────────────────────────────────────────┐
│ BACKEND: kyc.service.ts → downloadMyDocument()                          │
│ 1. Verify signature (proves wallet ownership)                          │
│ 2. Find KYC record by wallet_address                                   │
│ 3. Check status === APPROVED (only approved docs can download)         │
│ 4. Get ipfs_cid and encryption_key from DB                             │
│ 5. Download encrypted file from IPFS:                                  │
│    ipfsService.getFile(ipfs_cid) → Buffer                              │
│ 6. Decrypt using stored key:                                           │
│    cryptoService.decryptBuffer(encryptedBuffer, encryption_key)        │
│ 7. Return decrypted document                                           │
│ 8. Log audit: action = "document_downloaded"                           │
└─────────────────────────────────────────────────────────────────────────┘
                                    ↓
                    Frontend downloads file as: kyc-{kyc_id}.pdf
```

### Verification Query Flow (Financial Institution)

```
┌─────────────────────────────────────────────────────────────────────────┐
│ FINANCIAL INSTITUTION: User claims wallet 0x742d35Cc... is verified    │
└─────────────────────────────────────────────────────────────────────────┘
                                    ↓
                GET /api/kyc/verify/0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb
                                    ↓
┌─────────────────────────────────────────────────────────────────────────┐
│ BACKEND: kyc.controller.ts → verifyAddress()                            │
│         → kyc.service.ts → verifyAddress()                              │
│         → blockchain.service.ts → isVerified()                          │
└─────────────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────────────┐
│ SMART CONTRACT QUERY: KYCRegistry.sol                                   │
│ 1. Read: registry[0x742d35Cc...]                                       │
│    Returns: { ipfsCid, validUntil, trustScore, active, verifiedAt }   │
│ 2. Call: isVerified(0x742d35Cc...)                                     │
│    Logic: return active && block.timestamp < validUntil                │
└─────────────────────────────────────────────────────────────────────────┘
                                    ↓
                    Response:
                    {
                      "address": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
                      "is_verified": true,
                      "is_active": true,
                      "ipfs_cid": "QmX7M9CiYXjVeFnrfZ6MzH...",
                      "trust_score": 87,
                      "valid_until": "2027-01-15T10:30:00Z"
                    }
                                    ↓
┌─────────────────────────────────────────────────────────────────────────┐
│ FI DECISION LOGIC:                                                      │
│ if (is_verified && is_active && Date.now() < valid_until) {            │
│   // Allow transaction / grant access                                  │
│ } else {                                                                │
│   // Reject / Request re-verification                                  │
│ }                                                                       │
│                                                                         │
│ NOTE: FI CANNOT decrypt document (no encryption key access)            │
│       FI CAN ONLY see: verification status, trust score, expiry        │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## API Usage Guide

### 1. Submit KYC Document

**Endpoint**: `POST /api/kyc/submit`

**Request** (multipart/form-data):
```bash
curl -X POST http://localhost:3000/api/kyc/submit \
  -F "user_id=user_abc123" \
  -F "document=@/path/to/passport.jpg" \
  -F "wallet_address=0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb"
```

**Parameters**:
- `user_id` (string, required): Unique user identifier
- `document` (file, required): JPEG/PNG/PDF, max 10MB
- `wallet_address` (string, optional): Ethereum address (0x + 40 hex chars)

**Response** (202 Accepted):
```json
{
  "kyc_id": "550e8400-e29b-41d4-a716-446655440000",
  "status": "PENDING",
  "message": "Verification submitted. Poll /kyc/status/{kyc_id} for updates."
}
```

**Errors**:
- 400: Invalid file type or wallet address format
- 413: File too large (>10MB)

---

### 2. Get KYC Status

**Endpoint**: `GET /api/kyc/status/:kyc_id`

**Request**:
```bash
curl http://localhost:3000/api/kyc/status/550e8400-e29b-41d4-a716-446655440000
```

**Response** (200 OK):
```json
{
  "kyc_id": "550e8400-e29b-41d4-a716-446655440000",
  "status": "APPROVED",
  "trust_score": 87,
  "ipfs_cid": "QmX7M9CiYXjVeFnrfZ6MzHq8R3TpL9kN2sV1wU4xY6zB5a",
  "blockchain_tx_hash": "0x9f8a6b3c2d1e5f7a4b8c0d2e6f9a1b3c5d7e9f0a2b4c6d8e",
  "wallet_address": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
  "token_expires_at": "2027-01-15T10:30:00Z",
  "created_at": "2026-05-03T10:30:00Z",
  "rejection_reason": null
}
```

**Status Values**:
- `PENDING`: Awaiting AI processing
- `PROCESSING`: AI is analyzing document
- `APPROVED_PENDING_WALLET`: Approved, awaiting wallet linkage
- `APPROVED`: Fully verified and registered on blockchain
- `REJECTED`: Failed verification (see rejection_reason)
- `FLAGGED`: Marked for re-verification due to fraud detection

**Errors**:
- 404: KYC ID not found

---

### 3. Link Wallet Address

**Endpoint**: `POST /api/kyc/link-wallet`

**Request**:
```bash
curl -X POST http://localhost:3000/api/kyc/link-wallet \
  -H "Content-Type: application/json" \
  -d '{
    "kyc_id": "550e8400-e29b-41d4-a716-446655440000",
    "wallet_address": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    "signature": "0x8f3a9c2b1d5e7a4f9b3c6d8e1a2f5b7c9d0e3f6a8b1c4d7e9f2a5b8c0d3e6f9a",
    "message": "I authorize linking wallet 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb to KYC ID 550e8400-e29b-41d4-a716-446655440000"
  }'
```

**How to Generate Signature** (JavaScript + MetaMask):
```javascript
const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
const walletAddress = accounts[0];
const message = `I authorize linking wallet ${walletAddress} to KYC ID ${kycId}`;
const signature = await window.ethereum.request({
  method: 'personal_sign',
  params: [message, walletAddress]
});
```

**Response** (200 OK):
```json
{
  "success": true,
  "message": "Wallet linked and blockchain registration completed",
  "kyc_id": "550e8400-e29b-41d4-a716-446655440000",
  "wallet_address": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
  "blockchain_tx_hash": "0x9f8a6b3c2d1e5f7a4b8c0d2e6f9a1b3c5d7e9f0a2b4c6d8e",
  "status": "APPROVED"
}
```

**Errors**:
- 400: Invalid signature or wallet address format
- 404: KYC ID not found

---

### 4. Verify Wallet Address (Blockchain Query)

**Endpoint**: `GET /api/kyc/verify/:wallet_address`

**Request**:
```bash
curl http://localhost:3000/api/kyc/verify/0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb
```

**Response** (200 OK):
```json
{
  "address": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
  "is_verified": true,
  "is_active": true,
  "ipfs_cid": "QmX7M9CiYXjVeFnrfZ6MzHq8R3TpL9kN2sV1wU4xY6zB5a",
  "trust_score": 87,
  "valid_until": "2027-01-15T10:30:00Z"
}
```

**Field Meanings**:
- `is_verified`: true if active AND not expired
- `is_active`: false if flagged for fraud
- `ipfs_cid`: Hash of encrypted document on IPFS (cannot decrypt without key)
- `trust_score`: AI confidence (0-100)
- `valid_until`: Token expiration timestamp

**Use Case**: Financial institutions query this before allowing transactions.

**Errors**:
- 400: Invalid wallet address format

---

### 5. Download My Document (User)

**Endpoint**: `POST /api/kyc/my-document`

**Request**:
```bash
curl -X POST http://localhost:3000/api/kyc/my-document \
  -H "Content-Type: application/json" \
  -d '{
    "wallet_address": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    "signature": "0x5b2c8d9a3e1f6a7b4c0d2e5f8a9b1c3d5e7f9a0b2c4d6e8f1a3b5c7d9e0f2a4",
    "message": "Download my KYC document"
  }' \
  --output my_document.pdf
```

**How to Generate Signature**:
```javascript
const message = 'Download my KYC document';
const signature = await window.ethereum.request({
  method: 'personal_sign',
  params: [message, walletAddress]
});
```

**Response** (200 OK):
- **Content-Type**: `image/jpeg`, `image/png`, or `application/pdf`
- **Content-Disposition**: `attachment; filename="kyc-{kyc_id}.pdf"`
- **Body**: Decrypted document file

**Errors**:
- 400: Invalid signature, document not approved, or no encryption key
- 404: No KYC record found for this wallet

---

### 6. Flag Identity (Admin)

**Endpoint**: `POST /api/kyc/flag/:wallet_address`

**Request**:
```bash
curl -X POST http://localhost:3000/api/kyc/flag/0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb
```

**Response** (200 OK):
```json
{
  "address": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
  "flagged": true,
  "tx_hash": "0x3a8f9c2b1d5e7a4f9b3c6d8e1a2f5b7c9d0e3f6a8b1c4d7e9f2a5b8c0d3e6f9a"
}
```

**Effect**:
- Smart contract sets `active: false`
- Database status set to `FLAGGED`
- Verification queries return `is_verified: false`
- User must re-submit KYC

**Errors**:
- 400: Blockchain transaction failed

---

## Troubleshooting

### Problem: Status stuck on PENDING

**Possible Causes**:
1. RabbitMQ not running
2. AI service not running
3. AI service crashed during processing

**Solutions**:
```bash
# Check RabbitMQ
docker-compose logs mq
# Should see: "Server startup complete"

# Check AI service
cd ai-service
source venv/bin/activate
uvicorn src.main:app --reload
# Should see: "Started consuming from kyc_processing queue"

# Check RabbitMQ UI
# http://localhost:15672 (user: kyc_mq, pass: kyc_mq_pass)
# Look for messages stuck in kyc_processing queue
```

---

### Problem: APPROVED_PENDING_WALLET not changing to APPROVED

**Cause**: User hasn't linked wallet yet

**Solution**: User must:
1. Click "Connect Wallet & Sign" button
2. Approve MetaMask connection
3. Sign the message in MetaMask
4. Wait for blockchain transaction (5-30 seconds)

---

### Problem: "Invalid signature" error when linking wallet

**Possible Causes**:
1. Message text doesn't match exactly
2. Wrong wallet address in message
3. Signature from different wallet than claimed

**Solution**:
```javascript
// Message MUST match this format exactly:
const message = `I authorize linking wallet ${walletAddress} to KYC ID ${kycId}`;

// Common mistake: wrong case sensitivity
const walletAddress = accounts[0]; // Must be checksum address from MetaMask

// Verify signature locally before sending:
const recoveredAddress = ethers.utils.verifyMessage(message, signature);
console.log('Recovered:', recoveredAddress);
console.log('Expected:', walletAddress);
```

---

### Problem: Blockchain transaction fails (registerIdentity)

**Possible Causes**:
1. Hardhat node not running (local development)
2. Insufficient gas (testnet)
3. Wrong contract address in .env
4. Private key has no funds

**Solutions**:
```bash
# Check Hardhat node
cd contracts
npx hardhat node
# Should show: "Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/"

# Verify contract address
cat /var/www/kyc/.env | grep CONTRACT_ADDRESS
# Should be 0x... from deployment output

# Check backend logs
npm run start:dev
# Look for: "Blockchain registration failed: ..."
```

---

### Problem: Document download fails

**Possible Causes**:
1. Status is not APPROVED
2. No IPFS CID (IPFS upload failed)
3. No encryption key (encryption failed)
4. IPFS node not running

**Solutions**:
```bash
# Check IPFS node
docker-compose ps ipfs
# Should be "Up"

# Check KYC record has required fields
curl http://localhost:3000/api/kyc/status/{kyc_id}
# Must have: ipfs_cid, status: "APPROVED"

# Check IPFS gateway
curl http://localhost:8080/ipfs/{ipfs_cid}
# Should return encrypted binary data
```

---

### Problem: Trust score always 99 (AI validation mocked)

**This is intentional** per user request during development.

**To enable real AI validation**:
1. Edit `ai-service/src/trust_score.py`:
   ```python
   # Remove the mock return and use the real formula:
   if liveness_provided and liveness_result and liveness_result.passed:
       liveness_score = 1.0
       score = (ocr_confidence * 0.30) + (deepfake_confidence * 0.40) + (liveness_score * 0.30)
   else:
       score = (ocr_confidence * 0.40) + (deepfake_confidence * 0.60)
   return round(score * 100)
   ```

2. Ensure OCR and deepfake detection work properly
3. Liveness detection is **always live** — it is not mocked

---

### Problem: Submission rejected with LIVENESS_FAILED

**Cause**: User provided a liveness video but it did not pass the head-swing check.

**Possible Reasons** (shown in `deepfake_result.liveness.reason`):
- `No face detected` — camera too dark, face not in oval, or camera covered
- `Head barely moved (X°)` — user did not sweep head far enough left and right
- `Did not turn left/right enough` — one side of the sweep was insufficient
- `Non-smooth motion detected` — abrupt jump, possibly a replay attack or bad video
- `Low face detection rate` — lighting too low or face partially obstructed

**Solution**: Re-submit with a new liveness video. Tips:
1. Ensure face fills the oval on screen
2. Make sure lighting is sufficient (face clearly visible)
3. Turn head **slowly** — about 2–3 seconds per direction
4. Complete a full left-to-right sweep within the 8-second recording

---

### Problem: Token expired, user needs re-verification

**Expected behavior** - this is by design.

**User workflow**:
1. Check expiry: `GET /api/kyc/status/{kyc_id}`
   - Look at `token_expires_at`
2. If expired: Submit new KYC (Workflow 1 or 2)
3. Can reuse same wallet address
4. Old verification remains in blockchain (active: false)

---

### Problem: Cannot decrypt document from IPFS

**Cause**: Encryption key lost or document corrupted

**Prevention**:
- **Backup database regularly** (encryption keys in `kyc_records.encryption_key`)
- **Do NOT delete encryption keys** unless GDPR erasure requested

**GDPR Note**: Deleting encryption key makes document permanently unrecoverable (this is a feature for right to erasure).

---

## Security Best Practices

### For Users:
1. **Never share your private key** - MetaMask signatures prove ownership without exposing key
2. **Verify contract address** before interacting
3. **Check expiry dates** regularly
4. **Use hardware wallet** for high-value accounts
5. **Download document backup** before token expires

### For Institutions:
1. **Always verify signatures** before linking wallets
2. **Check is_active flag** - user might be flagged for fraud
3. **Validate expiry dates** - don't trust expired tokens
4. **Set trust score thresholds** based on risk tolerance
5. **Monitor for flagged identities** - implement webhook for IdentityFlagged events
6. **Backup encryption keys securely** - losing keys = losing documents
7. **Implement key rotation** for long-term storage
8. **Log all document access** for audit compliance

### For Developers:
1. **Never log encryption keys** or private keys
2. **Use environment variables** for sensitive config
3. **Validate all inputs** - wallet addresses, signatures, file types
4. **Sanitize file uploads** - check magic bytes, not just extensions
5. **Rate limit API endpoints** - prevent abuse
6. **Monitor RabbitMQ queues** - detect processing delays
7. **Implement circuit breakers** for blockchain calls
8. **Test signature verification** thoroughly - critical security component

---

## Glossary

**Trust Token**: Blockchain-registered verification with expiration date
**IPFS CID**: Content Identifier - cryptographic hash of encrypted document on IPFS
**Smart Contract**: KYCRegistry.sol - Solidity code on Polygon blockchain
**Encryption Key**: AES-256 key stored in database, used to encrypt/decrypt documents
**Live-Check**: Ability to flag/invalidate verifications before natural expiry
**Signature**: Cryptographic proof of wallet ownership using private key
**Gas**: Transaction fee paid to blockchain miners (in ETH/MATIC)
**MetaMask**: Browser wallet extension for Ethereum
**EIP-191**: Ethereum standard for signed data (personal_sign method)
**ZKP (Zero-Knowledge Proof)**: Cryptographic proof that a fact is true without revealing the underlying data
**Groth16**: A ZKP proving scheme; used here to prove trust score ≥ 75 on-chain
**snarkjs**: JavaScript library used to generate Groth16 proofs off-chain
**circom**: Circuit language used to define the ZKP constraint (TrustScore.circom)
**Groth16Verifier**: Auto-generated Solidity contract that verifies ZKP proofs on-chain
**OCR**: Optical Character Recognition - extracting text from images
**Deepfake**: AI-generated fake identity document or photo
**Liveness Detection**: Active check that proves the user is physically present; implemented as ISO/IEC 30107-3 PAD Level 2 challenge-response via head-swing video
**PAD Level 2**: Presentation Attack Detection Level 2 — defends against print attacks and replay attacks; requires an active challenge-response
**Haar Cascade**: OpenCV classifier used to detect and track face position across video frames for yaw-proxy liveness analysis
**Yaw**: Horizontal rotation of the head (left/right); used as the liveness movement metric
**LIVENESS_FAILED**: Rejection reason code when a liveness video was submitted but the head-swing check did not pass
**GDPR**: General Data Protection Regulation - EU privacy law
**RabbitMQ**: Message queue broker for async communication
**TypeORM**: Object-Relational Mapping library for database
**Hardhat**: Ethereum development environment

---

## Next Steps

### For Users:
1. Complete KYC verification (Workflow 1 or 2)
2. Download document backup
3. Add expiry reminder to calendar
4. Share wallet address with services requiring KYC

### For Developers:
1. Read `CLAUDE.md` for technical architecture
2. Read `prd.md` for research context
3. Set up local development environment
4. Run test suite: `cd contracts && npm test`
5. Enable real AI validation (remove mocked trust score)

### For Institutions:
1. Deploy smart contract to testnet (Polygon Mumbai)
2. Test verification queries with test wallets
3. Implement webhook listeners for IdentityRegistered events
4. Set trust score acceptance thresholds
5. Plan key backup and rotation strategy

---

**Last Updated**: 2026-05-08
**Version**: 1.1
**System Status**: Production-ready (trust score mocked; liveness detection fully live)
