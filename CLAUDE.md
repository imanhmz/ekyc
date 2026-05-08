# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**e-KYC Live-Check Ledger** — A full-stack blockchain-based identity verification platform combining AI-powered document analysis with smart contract trust anchoring. This is a thesis implementation demonstrating novel "Live-Check" verification where Trust Tokens can expire or be invalidated based on emerging fraud patterns.

**Read `prd.md` for complete system specification, research context, and architectural decisions.**

## Multi-Bank Architecture (NEW)

The system now demonstrates **multi-institution trust** via two independent banks:

### **🏦 Signer Bank (Port 3000)** - Verification Provider
- Full KYC verification capabilities (AI, IPFS, Database)
- **Writes** to blockchain (registerIdentity)
- Location: `/backend`, `/frontend`, `/ai-service`

### **👁️ Viewer Bank (Port 3001)** - Verification Checker
- Read-only blockchain queries
- **NO** database, IPFS, or AI service
- Can request documents from Signer Bank (with user permission)
- Location: `/viewer-bank`

**Key Demonstration:** User verifies at Signer Bank → Instant approval at Viewer Bank (blockchain trust).

## High-Level Architecture

```
SIGNER BANK (Port 3000)             BLOCKCHAIN CONTRACT              VIEWER BANK (Port 3001)
┌──────────────────────┐            ┌─────────────────┐             ┌──────────────────────┐
│ Frontend (React)     │            │ KYCRegistry.sol │             │ Express.js + HTML    │
│ Backend (NestJS)     │   WRITE    │                 │   READ      │                      │
│   ↕ RabbitMQ         │   ────→    │ Shared Ledger   │   ←────     │ (Read-only queries)  │
│   ↕ AI Service       │            │                 │             │                      │
│   ↕ PostgreSQL       │            │ Trust Tokens    │             │ ❌ No Database        │
│   ↕ IPFS             │            │ Expiry Logic    │             │ ❌ No IPFS            │
└──────────────────────┘            └─────────────────┘             │ ❌ No AI Service      │
                                                                     └──────────────────────┘
registerIdentity()                                                   isVerified()
flagIdentity()                                                       getTransactionHistory()
```

**Communication Pattern:**
- Frontend → Backend: Synchronous HTTPS (returns 202 Accepted immediately)
- Backend ⟷ AI: Asynchronous via RabbitMQ (non-blocking)
- Backend → Blockchain: Synchronous (only after AI approval)
- File sharing: Shared Docker volume `/shared_uploads` (avoids network overhead)

**Critical Flow:**
1. Document upload → DB (status: PENDING) → RabbitMQ `kyc_processing` queue
2. AI consumes → OCR + Deepfake detection → Trust score → RabbitMQ `kyc_results` queue
3. Backend consumes result → If APPROVED: IPFS upload → Blockchain write → Status: APPROVED
4. Frontend polls `GET /kyc/status/:kyc_id` for updates

## Development Commands

### Infrastructure Setup

```bash
# Start core services (PostgreSQL, RabbitMQ, IPFS)
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs -f [db|mq|ipfs]

# Access RabbitMQ Management UI
# http://localhost:15672 (user: kyc_mq, pass: kyc_mq_pass)
```

**Note:** Backend, AI service, and frontend are commented out in docker-compose.yml — run locally for development.

### Backend (NestJS)

```bash
cd backend

npm install
npm run start:dev    # Development with watch mode
npm run build        # Production build
npm run start:prod   # Run production build
```

Backend reads `.env` from `/var/www/kyc/.env` (project root).

### AI Service (Python)

```bash
cd ai-service

# First time setup
python3 -m venv venv
source venv/bin/activate  # or `venv/bin/activate` on Windows
pip install -r requirements.txt

# Run service
uvicorn src.main:app --host 0.0.0.0 --port 8000 --reload
```

**Important:** The AI service is primarily a RabbitMQ consumer (auto-started via FastAPI lifespan). The `/analyze` endpoint exists only for direct testing.

**GPU Note:** Recent commit switched OCR to GPU mode. If running locally without GPU, modify `src/ocr.py` EasyOCR initialization to use `gpu=False`.

### Smart Contracts (Hardhat)

```bash
cd contracts

npm install
npm run compile              # Compile Solidity
npm test                     # Run contract tests
npm run deploy:local         # Deploy to local Hardhat network
npm run deploy:mumbai        # Deploy to Polygon Mumbai testnet
```

**Local blockchain workflow:**
1. Terminal 1: `npx hardhat node` (starts local chain at http://127.0.0.1:8545)
2. Terminal 2: `npm run deploy:local` (deploys KYCRegistry contract)
3. Copy printed contract address to `/var/www/kyc/.env` as `CONTRACT_ADDRESS`

### Frontend - Signer Bank (React/Vite)

```bash
cd frontend

npm install
npm run dev          # Dev server at http://localhost:5173
npm run build        # Production build
npm run preview      # Preview production build
```

### Viewer Bank (Express.js + Static HTML)

```bash
cd viewer-bank

npm install
npm start            # Server at http://localhost:3001
```

**Note:** Viewer Bank is a lightweight Express server that:
- Serves static HTML frontend
- Provides blockchain query API endpoints
- Has NO database, IPFS, or AI dependencies
- Only reads from the shared blockchain contract

## Module Architecture (Backend)

The NestJS backend is organized into domain modules:

- **`KycModule`** (`src/kyc/`): REST controller, service logic, file upload, status management
- **`QueueModule`** (`src/queue/`): RabbitMQ producer/consumer, message routing between backend and AI
- **`BlockchainModule`** (`src/blockchain/`): ethers.js wrapper, contract ABI, transaction signing
- **`IpfsModule`** (`src/ipfs/`): IPFS HTTP client, document upload
- **Database entities** (`src/database/`): TypeORM models for `KycRecord`, `KycAuditLog`, `User`

**Module dependencies:**
- KycModule depends on QueueModule (to publish jobs) and uses BlockchainModule + IpfsModule (when processing approvals)
- QueueModule has two roles: producer (submit endpoint) and consumer (results handler)

**Database schema:** Managed via raw SQL migration files in `backend/src/database/migration/`. PostgreSQL auto-loads `001_initial.sql` on first startup (via docker-compose volume mount).

## AI Service Pipeline

Located in `ai-service/src/`:

- **`consumer.py`**: RabbitMQ consumer loop, orchestrates OCR + deepfake analysis
- **`ocr.py`**: OpenCV preprocessing → EasyOCR extraction → Field parsing
- **`deepfake.py`**: Face detection → DeepFace classification → Artifact analysis
- **`trust_score.py`**: Computes weighted score (OCR 40% + Deepfake 60%), applies PASS threshold (≥75)

**Field extraction (OCR):**
- `full_name`, `date_of_birth`, `document_number`, `expiry_date`, `nationality`, `document_type`
- Supports: English, Finnish, German, French (configurable in EasyOCR reader)

**Deepfake verdict:**
- `REAL`, `FAKE`, or `NO_FACE` (if no face detected, defaults to neutral 0.5 confidence)

## RabbitMQ Message Contracts

### Queue: `kyc_processing` (Backend → AI)

```json
{
  "kyc_id": "550e8400-e29b-41d4-a716-446655440000",
  "user_id": "user_abc123",
  "file_path": "/shared_uploads/550e8400.jpg",
  "file_type": "image/jpeg",
  "submitted_at": "2026-04-27T10:00:00Z"
}
```

### Queue: `kyc_results` (AI → Backend)

```json
{
  "kyc_id": "uuid",
  "result": "APPROVED" | "REJECTED",
  "trust_score": 87,
  "ocr_data": {
    "full_name": "Jane Doe",
    "date_of_birth": "1990-05-15",
    "document_number": "AB123456",
    "ocr_confidence": 0.94
  },
  "deepfake_result": {
    "verdict": "REAL" | "FAKE" | "NO_FACE",
    "confidence": 0.91,
    "artifacts_detected": false
  },
  "rejection_reason": "DEEPFAKE_DETECTED" | "OCR_FAILURE" | "LOW_TRUST_SCORE" | null
}
```

**Important:** Both queues are declared as **durable** (survive broker restarts). Messages must be acknowledged after successful processing.

## Smart Contract (KYCRegistry.sol)

**Location:** `contracts/contracts/KYCRegistry.sol`

**Key functions:**
- `registerIdentity(address, ipfsCid, validUntil, trustScore)`: Write verified identity to chain
- `isVerified(address)`: Check if address has active, non-expired verification
- `flagIdentity(address, reason)`: Invalidate identity for re-verification (Live-Check trigger)
- `revokeIdentity(address)`: Permanently delete identity record

**Storage structure:**
```solidity
struct Identity {
    string  ipfsCid;        // IPFS hash (NOT raw document)
    uint256 validUntil;     // Unix timestamp expiry
    uint8   trustScore;     // 0-100
    bool    active;         // false = flagged
    uint256 verifiedAt;     // Registration timestamp
}
```

**GDPR compliance:** Only `ipfsCid` and `wallet_address` are stored on-chain. No PII ever touches the blockchain.

**ABI location:** `backend/src/blockchain/KYCRegistry.abi.json` (must be updated if contract changes)

## Database Schema

### `kyc_records` Table

Primary storage for KYC verification state machine:

- **Status flow:** `PENDING` → `PROCESSING` → `APPROVED` / `REJECTED` / `FLAGGED`
- **JSONB columns:** `ocr_data`, `deepfake_result` (flexible storage for AI results)
- **Blockchain references:** `ipfs_cid`, `blockchain_tx_hash`, `wallet_address`
- **Auto-trigger:** `updated_at` timestamp auto-updates on any row change

### `kyc_audit_log` Table

Immutable audit trail of all status transitions. Records:
- `kyc_id` (FK to kyc_records)
- `from_status`, `to_status`
- `actor` ('system', 'ai-service', 'admin')
- `metadata` (JSONB for additional context)

## Environment Variables

Create `/var/www/kyc/.env` based on `.env.example`:

**Required:**
```bash
CONTRACT_ADDRESS=0x...                      # From hardhat deployment output
BLOCKCHAIN_RPC_URL=http://127.0.0.1:8545   # Local hardhat node
PRIVATE_KEY=0x...                           # Deployer wallet private key
```

**Optional (defaults exist in docker-compose.yml):**
```bash
DATABASE_HOST=db
DATABASE_PORT=5432
DATABASE_USER=kyc_user
DATABASE_PASSWORD=kyc_pass
DATABASE_NAME=kyc_db
RABBITMQ_URL=amqp://kyc_mq:kyc_mq_pass@mq:5672
IPFS_API_URL=http://ipfs:5001

# Multi-Bank Configuration
VIEWER_BANK_PORT=3001
SIGNER_BANK_URL=http://localhost:3000
```

## Complete Local Development Setup

### Single-Bank Mode (Signer Bank Only)

1. **Start infrastructure:**
   ```bash
   docker-compose up -d
   ```

2. **Deploy smart contract:**
   ```bash
   # Terminal 1
   cd contracts
   npx hardhat node

   # Terminal 2
   cd contracts
   npm run deploy:local
   # Copy contract address to .env
   ```

3. **Start backend:**
   ```bash
   cd backend
   npm run start:dev
   ```

4. **Start AI service:**
   ```bash
   cd ai-service
   source venv/bin/activate
   uvicorn src.main:app --reload
   ```

5. **Start frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

6. **Access:**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000/api
   - RabbitMQ UI: http://localhost:15672
   - IPFS Gateway: http://localhost:8080

### Multi-Bank Mode (Demonstrates Inter-Institutional Trust)

Follow steps 1-5 above, then add:

6. **Start Viewer Bank:**
   ```bash
   # Terminal 5
   cd viewer-bank
   npm install  # First time only
   npm start
   ```

7. **Access Multi-Bank System:**
   - **Signer Bank Frontend:** http://localhost:5173
   - **Signer Bank API:** http://localhost:3000/api
   - **Viewer Bank (both frontend + API):** http://localhost:3001
   - RabbitMQ UI: http://localhost:15672
   - IPFS Gateway: http://localhost:8080

8. **Demo Flow:**
   - Submit KYC at Signer Bank (port 5173) with wallet address
   - Wait for APPROVED status (~30 seconds)
   - Open Viewer Bank (port 3001)
   - Enter same wallet address
   - See instant verification from blockchain ✅
   - View transaction history on PolygonScan

**See `MULTI_BANK_DEMO.md` for detailed multi-institution demonstration guide.**

## Testing

### Smart Contract Tests

```bash
cd contracts
npx hardhat test
```

Tests cover: identity registration, expiry checks, flagging, revocation.

### Manual API Testing

```bash
# Submit KYC
curl -X POST http://localhost:3000/api/kyc/submit \
  -F "user_id=test123" \
  -F "document=@/path/to/id.jpg"

# Check status
curl http://localhost:3000/api/kyc/status/{kyc_id}

# Query blockchain directly
curl http://localhost:3000/api/kyc/verify/0xUserAddress
```

### AI Service Direct Testing

```bash
# Bypass queue, test AI pipeline directly
curl -X POST http://localhost:8000/analyze \
  -F "file=@/path/to/test_id.jpg"
```

## Common Modification Workflows

### Adding New OCR Fields

1. Update field extraction logic in `ai-service/src/ocr.py`
2. No backend changes needed (JSONB `ocr_data` is schema-less)
3. Optionally update frontend to display new fields

### Modifying Smart Contract

1. Edit `contracts/contracts/KYCRegistry.sol`
2. Run `npm run compile`
3. Update tests in `test/KYCRegistry.test.js`
4. Redeploy: `npm run deploy:local` (or testnet)
5. Update `.env` with new `CONTRACT_ADDRESS`
6. If function signatures changed: Copy ABI from `artifacts/contracts/KYCRegistry.sol/KYCRegistry.json` to `backend/src/blockchain/KYCRegistry.abi.json`

### Changing Trust Score Formula

Edit `ai-service/src/trust_score.py`:
```python
def compute_trust_score(ocr_conf, deepfake_conf):
    return round((ocr_conf * 0.4) + (deepfake_conf * 0.6)) * 100

PASS_THRESHOLD = 75  # Modify this threshold
```

## Critical Implementation Details

### Shared Volume Pattern

`/shared_uploads` is a Docker volume mounted to both backend and AI service:
- Backend writes files here with pattern `{kyc_id}.{ext}`
- AI service reads from same path
- **Files must be deleted after processing** (backend deletes on APPROVED/REJECTED)

### Message Acknowledgment

RabbitMQ consumers must explicitly `ack` messages:
- Backend consumer: Only after DB update succeeds
- AI consumer: Only after result published to results queue

### Token Expiry Logic

Trust Token expiry is computed in backend when registering identity:
- Default: `now + 180 days` (6 months)
- High trust (≥95): `now + 365 days`
- Low pass (75-79): `now + 90 days`

Smart contract `isVerified()` enforces expiry check: `block.timestamp < validUntil`

### Live-Check Mechanism

The novel contribution: When AI service detects new fraud patterns, backend can call `flagIdentity()` on all at-risk addresses, forcing re-verification without waiting for natural expiry. This is an "active security wall" vs traditional passive KYC.

## Recent Implementation Updates

### Document Encryption (COMPLETED)
- **CryptoService** (`backend/src/ipfs/crypto.service.ts`): AES-256-GCM encryption for IPFS documents
- **Encryption key storage**: `kyc_records.encryption_key` column (base64-encoded, institution-controlled)
- **GDPR compliance**: Delete key → document becomes permanently unrecoverable
- **Format**: IV (16 bytes) + Auth Tag (16 bytes) + Ciphertext

### Wallet Linking with Signature Verification (COMPLETED)
- **Optional wallet at submission**: Users can provide `wallet_address` during KYC upload
- **Link wallet later**: `POST /api/kyc/link-wallet` with EIP-191 signature verification using ethers.js
- **New status**: `APPROVED_PENDING_WALLET` - KYC approved but awaiting wallet linkage
- **MetaMask integration**: Frontend `WalletLinkForm` component for browser wallet connection
- **Blockchain registration**: Only occurs after wallet is verified via signature

### Document Retrieval (COMPLETED)
- **Institution endpoint**: `GET /api/kyc/document/:kyc_id` - Admin access by KYC ID
- **User endpoint**: `POST /api/kyc/my-document` - Users download their own documents via wallet signature
- **Flow**: Download from IPFS → Decrypt with stored key → Return original file
- **Access control**:
  - Institution: Direct access with kyc_id (no auth for demo)
  - Users: Must prove wallet ownership via EIP-191 signature
  - Only APPROVED documents can be downloaded by users

### Conditional Blockchain Registration
- **Old behavior**: Used fake wallet address derived from userId
- **New behavior**: Only registers on blockchain when real wallet address is verified
- **Flow**: KYC approved → status=APPROVED_PENDING_WALLET → user links wallet → blockchain registration → status=APPROVED

### Multi-Bank Architecture (COMPLETED)
- **Viewer Bank** (`/viewer-bank/`): Lightweight Express.js server demonstrating multi-institutional trust
- **Purpose**: Shows how OTHER banks can verify users without repeating full KYC
- **Architecture**:
  - ✅ Read-only blockchain queries (isVerified)
  - ✅ Transaction history viewing (PolygonScan API integration)
  - ✅ Document requests from Signer Bank (with user signature)
  - ❌ NO database (trust blockchain as source of truth)
  - ❌ NO IPFS node (documents retrieved from Signer Bank)
  - ❌ NO AI service (trust existing verification)
- **API Endpoints**:
  - `GET /api/verify/:wallet` - Check blockchain verification status
  - `GET /api/transactions/:wallet` - Fetch transaction history from PolygonScan
  - `POST /api/request-document` - Request document from Signer Bank (user signature required)
  - `GET /api/recent-verifications` - View recent blockchain events
- **Frontend**: Static HTML with vanilla JavaScript (no React)
- **Demonstration Value**:
  - User verified at Signer Bank (30 seconds)
  - Same user at Viewer Bank (instant approval, 1 second)
  - Total time savings: 99.9% (vs repeating full KYC)
  - Cost savings: $0 vs $500 per verification

### Zero-Knowledge Proof Integration (COMPLETED)
- **Circuit**: `contracts/circuits/TrustScore.circom` — Groth16 range proof: proves `trustScore >= 75` without revealing the score
- **Trusted setup**: `contracts/scripts/zkp-setup.sh` — downloads circom 2.x, compiles circuit, runs PTau ceremony, exports `Verifier.sol`
- **Verifier contract**: `contracts/contracts/Verifier.sol` — auto-generated by snarkjs, deployed separately on Polygon Amoy
- **IVerifier interface**: `contracts/contracts/IVerifier.sol` — Solidity interface for the verifier
- **KYCRegistry change**: Constructor now takes `verifierAddress`; `registerIdentity` takes 3 extra proof params (`pA`, `pB`, `pC`); calls `verifier.verifyProof()` before writing; `address(0)` disables check (dev mode)
- **ZkpService**: `backend/src/blockchain/zkp.service.ts` — generates Groth16 proof via snarkjs before every blockchain write; returns `ZERO_PROOF` if `ZKP_ENABLED=false`
- **Flow**: AI approves → `ZkpService.generateProof(score)` → `BlockchainService.registerIdentity(..., proof)` → contract verifies on-chain → identity written
- **Artifacts location**: `backend/zkp-artifacts/TrustScore.wasm` + `trust_final.zkey`
- **Env vars**: `ZKP_ENABLED=true`, `ZKP_ARTIFACTS_PATH=/var/www/kyc/backend/zkp-artifacts`, `VERIFIER_ADDRESS=0x...`
- **Gas cost**: ~300k gas with ZKP vs ~50k without — economical on Polygon, prohibitive on Ethereum mainnet
- **Known limitation**: `trustScore` is still stored on-chain in the struct — score is publicly readable; removing it is the next step for full privacy
- **Dev mode**: Set `ZKP_ENABLED=false` or deploy with `verifierAddress=address(0)` to bypass ZKP check (proof params are passed as zeros)

### File MIME Type Storage (COMPLETED)
- **Database migration**: `003_add_file_mime_type.sql` adds `file_mime_type` column
- **Purpose**: Store original uploaded file MIME type (image/jpeg, image/png, application/pdf)
- **Download fix**: Documents now download with correct file extension (.jpg, .png, .pdf)
- **Entity update**: `KycRecord` entity includes `fileMimeType` field
- **Controller logic**: Helper method `getExtensionFromMimeType()` maps MIME to file extension

### Active Liveness Detection (COMPLETED)
- **Standard**: ISO/IEC 30107-3 Presentation Attack Detection (PAD) Level 2 — defends against print and replay attacks
- **Implementation**: `ai-service/src/liveness.py` — OpenCV Haar cascade tracks face bounding-box x-centre across video frames as a yaw proxy
- **Pass criteria**: bilateral check (face visited both ±4° sides of raw frame) + total sweep ≥ 12° + smoothness (max jump < 20°) + detection rate > 40%
- **Hard gate**: liveness provided + failed → `REJECTED / LIVENESS_FAILED` regardless of trust score
- **Trust score update**: with liveness — OCR 30% + Deepfake 40% + Liveness 30%; without — OCR 40% + Deepfake 60%
- **Dependency decision**: MediaPipe dropped (unresolvable protobuf conflict with tensorflow 2.21); Haar cascade is adequate for PAD Level 2
- **Backend**: `FileFieldsInterceptor` accepts `document` + `liveness_video`; saves video to `{kyc_id}_liveness.{ext}`; sends `liveness_video_path` in MQ message
- **Frontend**: `LivenessCapture.tsx` — mandatory 8-second WebM recorder; SVG overlay with face oval + bilateral turn-target guides; submit disabled until captured
- **Result display**: `deepfake_result.liveness` nested in status response — shows passed/failed, yaw_range, detection_rate, method, reason
- **DB migration**: `004_widen_audit_log_status.sql` widens `kyc_audit_log.from_status`/`to_status` to `VARCHAR(30)` (APPROVED_PENDING_WALLET = 23 chars overflowed old VARCHAR(20))
- **Future upgrade**: MediaPipe Face Mesh for true 3D yaw; XceptionNet/FaceForensics++ for video deepfake detection (requires GPU + ~500 MB weights)

## Known Implementation Notes

- AI and backend services are commented out in docker-compose.yml (run locally for active development)
- Database uses `synchronize: false` — schema is managed by SQL migration, not TypeORM auto-sync
- No automated integration tests across service boundaries
- Recent commit changed OCR to GPU mode — may need adjustment for CPU-only environments
- AI validation remains mocked (trust_score.py returns 99) - as requested by user

## Research Context

This is a **thesis implementation** for academic research. Key areas:
- Full-stack AI + blockchain integration
- Deepfake detection in identity verification
- Active liveness detection (ISO/IEC 30107-3 PAD Level 2, OpenCV Haar cascade)
- GDPR-compliant blockchain architecture
- Live-Check expiring Trust Tokens
- Zero-Knowledge Proof range proof (Groth16, circom, snarkjs) — implemented and tested on Polygon Amoy

See `prd.md` for complete research questions mapping, eIDAS 2.0 considerations, and implementation phases.
