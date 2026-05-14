# Product Requirements Document (PRD)
# e-KYC Live-Check Ledger
**Version:** 2.0
**Status:** Draft
**Author:** Senior Engineering Lead
**Target:** Thesis Implementation + Fintech Deployment Reference

---

## Table of Contents

1. [Problem Statement & Research Context](#1-problem-statement--research-context)
2. [System Goals & Research Questions Mapping](#2-system-goals--research-questions-mapping)
3. [Architecture Overview](#3-architecture-overview)
4. [Tech Stack (Justified)](#4-tech-stack-justified)
5. [Detailed Functional Flow](#5-detailed-functional-flow)
6. [API Specification (Backend)](#6-api-specification-backend)
7. [Message Queue Contracts (RabbitMQ)](#7-message-queue-contracts-rabbitmq)
8. [AI Service Specification](#8-ai-service-specification)
9. [Blockchain & Smart Contract Specification](#9-blockchain--smart-contract-specification)
10. [Database Schema (PostgreSQL)](#10-database-schema-postgresql)
11. [Infrastructure (Docker Compose)](#11-infrastructure-docker-compose)
12. [Frontend Specification](#12-frontend-specification)
13. [Trust Token Lifecycle (Live-Check Mechanism)](#13-trust-token-lifecycle-live-check-mechanism)
14. [Security, Privacy & Compliance](#14-security-privacy--compliance)
15. [Non-Functional Requirements](#15-non-functional-requirements)
16. [Project Structure](#16-project-structure)
17. [Implementation Phases](#17-implementation-phases)

---

## 1. Problem Statement & Research Context

### 1.1 The Gap This System Closes

Existing e-KYC research covers individual components in isolation — OCR tools, blockchain storage, IPFS anchoring, or fraud detection — but no published system integrates all of these into one deployable, production-aware architecture. This project builds that missing integration.

Key facts from literature:

- Large financial institutions spend close to **$500 million/year** on KYC; onboarding can take up to **24 days** per customer (Islam, 2021).
- A shared ledger allows banks to verify a user once and share that trust securely (Hannan et al., 2023).
- Storing raw documents on-chain is too expensive and risky; IPFS + on-chain hash is the accepted pattern (Khadka, 2020).
- Basic OCR for ID reading is already common; the gap is **fraud-aware, deepfake-resistant AI** (Vepsäläinen, 2024).
- Deepfake attacks grew by over **2,000% between 2023 and 2025** (KYC-Chain, 2025).
- By end of 2026, every EU country must offer a digital identity wallet under **eIDAS 2.0** (Signaturit, 2026).

### 1.2 The Novel Contribution: Live-Check Ledger

Traditional KYC is "one-and-done." This system introduces **continuous verification** via a Trust Token with an expiry mechanism. The AI service does not just validate a passport — it produces a signed Trust Token that:

- Expires on a fixed schedule (default: 6 months).
- Can be **invalidated early** by the smart contract when the AI detects new deepfake patterns in the market.
- Turns the blockchain from a passive storage box into an **active security layer**.

---

## 2. System Goals & Research Questions Mapping

| Research Question | System Component That Answers It |
|---|---|
| How can a full-stack AI-enhanced blockchain KYC system be designed? | Entire system architecture (Sections 3–11) |
| What are the main weaknesses in current KYC processes? | PRD Section 1; addressed by async pipeline |
| How can AI detect deepfakes and synthetic identities? | AI Service (Section 8) |
| How can blockchain + IPFS store KYC data securely? | Smart Contract + IPFS flow (Section 9) |
| How can the system support GDPR, auditability, and eIDAS 2.0? | Section 14 |
| How feasible is the system in terms of performance? | Non-functional requirements (Section 15) |

---

## 3. Architecture Overview

### 3.1 Single Institution View (Signer Bank)

```
┌─────────────────────────────────────────────────────────────────┐
│                         FRONTEND (React)                        │
│              Simple ID upload form → POST /kyc/submit           │
└────────────────────────────┬────────────────────────────────────┘
                             │ HTTPS
┌────────────────────────────▼────────────────────────────────────┐
│                      BACKEND (NestJS)                           │
│  - REST API layer                                               │
│  - RabbitMQ Producer (kyc_processing queue)                     │
│  - RabbitMQ Consumer (kyc_results queue)                        │
│  - PostgreSQL persistence (TypeORM)                             │
│  - IPFS client (uploads doc hash on PASS)                       │
│  - Blockchain client (ethers.js → smart contract)               │
└──────────┬──────────────────────────────────┬───────────────────┘
           │ RabbitMQ                          │ RabbitMQ
           │ kyc_processing                    │ kyc_results
┌──────────▼─────────────────┐                │
│      AI SERVICE (Python)   │────────────────┘
│  - FastAPI HTTP (internal) │
│  - RabbitMQ Consumer       │
│  - OCR: EasyOCR / Tesseract│
│  - Deepfake: FaceForensics │
│  - Trust Score computation │
└────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│                    INFRASTRUCTURE (Docker)                       │
│   PostgreSQL | RabbitMQ | IPFS Node | NestJS | Python Worker     │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│                   BLOCKCHAIN (Polygon / Hardhat local)           │
│   KYCRegistry.sol — stores IPFS hash, expiry, active flag        │
└──────────────────────────────────────────────────────────────────┘
```

### 3.2 Multi-Institution View (Demonstrating Shared Trust)

```
SIGNER BANK (Port 3000)              BLOCKCHAIN CONTRACT              VIEWER BANK (Port 3001)
┌───────────────────────┐            ┌─────────────────┐             ┌───────────────────────┐
│ Frontend (React)      │            │ KYCRegistry.sol │             │ Express.js + HTML     │
│ Backend (NestJS)      │   WRITE    │                 │   READ      │                       │
│   ↕ RabbitMQ          │   ────→    │ Shared Ledger   │   ←────     │ (Read-only queries)   │
│   ↕ AI Service        │            │                 │             │                       │
│   ↕ PostgreSQL        │            │ Trust Tokens    │             │ ❌ No Database         │
│   ↕ IPFS              │            │ Expiry Logic    │             │ ❌ No IPFS             │
└───────────────────────┘            └─────────────────┘             │ ❌ No AI Service       │
                                                                      └───────────────────────┘
registerIdentity()                                                    isVerified()
flagIdentity()                                                        getTransactions()
revokeIdentity()                                                      requestDocument()

📊 VALUE DEMONSTRATION:
- User verifies at Signer Bank: 30 seconds, $500 cost
- Same user at Viewer Bank: 1 second, $0 cost
- Time savings: 99.9% | Cost savings: 100%
```

**Key Innovation:** Viewer Bank has NO verification infrastructure (no AI, database, or IPFS) yet can instantly verify users by trusting the shared blockchain ledger. This demonstrates how multiple financial institutions can share verification costs while maintaining data privacy and GDPR compliance.

### Communication Principles

- **Frontend → Backend:** Synchronous HTTPS (REST).
- **Backend → AI:** Asynchronous via RabbitMQ. Backend is non-blocking; returns `202 Accepted` immediately.
- **AI → Backend:** Asynchronous result published back on `kyc_results` queue.
- **Backend → Blockchain:** Synchronous ethers.js call only after PASS decision, so latency is acceptable.
- **File exchange:** Shared Docker volume (`/shared_uploads`) — avoids re-encoding files over the network between backend and AI.

---

## 4. Tech Stack (Justified)

### 4.1 Backend — NestJS (Node.js + TypeScript)

- **Why NestJS:** Modular, decorator-based architecture maps cleanly to this domain (KycModule, QueueModule, BlockchainModule). Built-in support for Guards (auth), Interceptors (logging), and Pipes (validation) — all needed for a compliant system.
- **TypeORM:** PostgreSQL ORM that integrates natively with NestJS DI system.
- **amqplib / @golevelup/nestjs-rabbitmq:** RabbitMQ producer/consumer support.
- **ethers.js v6:** Interact with smart contracts from Node.js.
- **ipfs-http-client:** Connect to the local IPFS node.

### 4.2 Frontend — React + TypeScript + Vite

- Minimal by design. One page, one purpose: capture ID and submit.
- **Vite** for fast local development inside Docker.
- No external UI library needed — keep it lightweight.

### 4.3 AI Service — Python + FastAPI

- **FastAPI:** Async HTTP server; also exposes a health endpoint for Docker health checks.
- **EasyOCR** (preferred over Tesseract for multilingual ID support): Reads name, DOB, document number from ID cards.
- **DeepFace:** Static image deepfake detection on the ID photo (REAL/FAKE/NO_FACE verdict).
- **OpenCV Haar Cascade:** Active liveness detection via face-centre yaw tracking across video frames (ISO/IEC 30107-3 PAD Level 2). FaceForensics++ / XceptionNet video-deepfake detection is identified as future work (~500 MB weights, GPU required).
- **OpenCV:** Image preprocessing (denoising, deskewing, contrast normalization) before OCR and face analysis.
- **Pika:** RabbitMQ client for Python.

### 4.4 Blockchain — Solidity + Hardhat + Polygon Mumbai (testnet)

- **Why Polygon (L2) over Ethereum mainnet:** Gas costs are 100–1000x cheaper on L2. Thesis can demonstrate real txns without financial cost.
- **Hardhat:** Local development network for testing; easy migration to testnet.
- **OpenZeppelin:** Base contracts for access control (Ownable) on the registry.

### 4.5 Storage — IPFS (local node via Kubo)

- `ipfs/kubo` Docker image runs a local IPFS node.
- Documents are added to IPFS; the returned CID (Content Identifier) is the hash stored on-chain.
- No raw PII ever touches the blockchain — GDPR compliant by design.

### 4.6 Database — PostgreSQL 15

- Single source of truth for KYC record state machine.
- JSONB column for flexible OCR metadata storage.
- UUID primary keys throughout.

### 4.7 Message Broker — RabbitMQ 3.12

- Two durable queues: `kyc_processing` and `kyc_results`.
- Durable queues survive broker restarts — critical for not losing verification jobs.
- Management UI (`port 15672`) for thesis demonstration and debugging.

---

## 5. Detailed Functional Flow

### 5.1 Phase 1 — Document Submission

```
User                 Frontend              Backend (NestJS)         PostgreSQL
 │                      │                        │                       │
 │── uploads ID image ──►│                        │                       │
 │                      │── POST /kyc/submit ────►│                       │
 │                      │                        │── INSERT kyc_record ──►│
 │                      │                        │   status: PENDING      │
 │                      │                        │   kyc_id: UUID         │
 │                      │◄── 202 { kyc_id } ─────│                       │
 │◄── "Verification      │                        │                       │
 │     submitted" ───────│                        │                       │
```

1. User uploads ID image (JPEG/PNG/PDF, max 10MB).
2. Backend validates file type and size.
3. Saves file to `/shared_uploads/{kyc_id}.{ext}`.
4. Creates PostgreSQL record: status = `PENDING`.
5. Returns `202 Accepted` with `{ kyc_id }`.
6. User can poll `GET /kyc/status/{kyc_id}` for updates.

---

### 5.2 Phase 2 — AI Processing Pipeline

```
Backend (NestJS)         RabbitMQ            AI Service (Python)
       │                     │                       │
       │── publish ─────────►│  kyc_processing       │
       │                     │── deliver ───────────►│
       │                     │                       │── OpenCV preprocess
       │                     │                       │── EasyOCR (Task A)
       │                     │                       │── DeepFake detect (Task B)
       │                     │                       │── Compute Trust Score
       │                     │◄── publish ───────────│  kyc_results
       │◄── deliver ─────────│                       │
       │                     │                       │
```

**Task A — OCR:**
1. OpenCV preprocesses image (grayscale, denoise, deskew).
2. EasyOCR extracts: `full_name`, `date_of_birth`, `document_number`, `expiry_date`, `nationality`, `document_type`.
3. Confidence score per field is recorded.

**Task B — Deepfake / Fraud Detection:**
1. Face is detected and cropped from ID photo.
2. FaceForensics++ model classifies: `REAL` / `FAKE`.
3. Additional checks: pixel compression artifact analysis, metadata consistency (EXIF vs visual content).

**Trust Score Computation:**
```
trust_score = (ocr_confidence * 0.4) + (deepfake_score * 0.6)
```
- Score range: `0–100`
- Threshold for PASS: `>= 75`
- Result: `APPROVED` or `REJECTED`

---

### 5.3 Phase 3 — Result Finalization & Blockchain Anchoring

```
AI Service    RabbitMQ    Backend (NestJS)    PostgreSQL     IPFS      Smart Contract
     │             │              │                │           │              │
     │─publish────►│  kyc_results │               │           │              │
     │             │─deliver─────►│               │           │              │
     │             │              │─UPDATE record─►│           │              │
     │             │              │  status: X     │           │              │
     │             │              │                │           │              │
     │             │  [if PASS]   │                │           │              │
     │             │              │─── add file ──────────────►│              │
     │             │              │◄── CID returned ───────────│              │
     │             │              │─UPDATE ipfs_cid────────────►│             │
     │             │              │                │           │              │
     │             │              │─── registerIdentity() ─────────────────►│
     │             │              │◄── tx_hash ────────────────────────────-│
     │             │              │─UPDATE tx_hash─►│           │              │
```

If **APPROVED:**
1. Backend uploads encrypted document to local IPFS node → receives `CID`.
2. Backend calls `ZkpService.generateProof(trustScore)` → Groth16 proof that `score >= 75`.
3. Calls `KYCRegistry.registerIdentity(address, CID, expiryTimestamp, trustScore, pA, pB, pC)` on smart contract.
   - Contract verifies proof on-chain via Groth16Verifier before writing; reverts if invalid.
4. Records `blockchain_tx_hash` and `ipfs_cid` in PostgreSQL.
5. Status → `APPROVED`.

**additional approval-time steps:**
6. **SSI wrap-and-shred**: if the user provided an `encryption_pubkey` at submission (derived in browser from `personal_sign("KYC-ENC-KEY-v1")`), the backend ECIES-wraps the AES document key to that pubkey via `eth-crypto`, stores the result in `wrapped_encryption_key`, and NULLs `encryption_key`. The institution loses the ability to decrypt the document unilaterally.
7. **Attribute commitment**: backend extracts `dob_year` from `ocr_data.date_of_birth`, generates a random BN128-bounded salt, computes `commitment = Poseidon(dobYear, salt)` via `circomlibjs`, and writes it on chain via `AttributeRegistry.setAgeCommitment(walletAddress, commitment)`. The witness `(dobYear, salt)` is ECIES-wrapped to the same user pubkey and stored in `wrapped_age_witness`; the plaintext `age_witness` column is NULLed.
8. If the user has not yet linked a wallet (status was `APPROVED_PENDING_WALLET`), the plaintext DEK and age witness are kept transiently until link-wallet time, when the pubkey arrives and the wrap-and-shred runs.

If **REJECTED:**
1. Status → `REJECTED`.
2. Rejection reason stored in `rejection_reason` column.
3. Document deleted from `/shared_uploads` (no IPFS upload for failed verifications).

---

## 6. API Specification (Backend)

### Base URL: `http://localhost:3000/api`

---

### `POST /kyc/submit`

Submit a new KYC verification request.

**Request:**
```
Content-Type: multipart/form-data

Fields:
  user_id     string (required) — unique identifier for the applicant
  document    file   (required) — JPEG, PNG, or PDF, max 10MB
```

**Response `202 Accepted`:**
```json
{
  "kyc_id": "550e8400-e29b-41d4-a716-446655440000",
  "status": "PENDING",
  "message": "Verification submitted. Poll /kyc/status/{kyc_id} for updates."
}
```

**Response `400 Bad Request`:**
```json
{
  "error": "INVALID_FILE_TYPE",
  "message": "Only JPEG, PNG, and PDF files are accepted."
}
```

---

### `GET /kyc/status/:kyc_id`

Poll the status of a KYC verification.

**Response `200 OK`:**
```json
{
  "kyc_id": "550e8400-e29b-41d4-a716-446655440000",
  "status": "APPROVED",
  "trust_score": 87,
  "ipfs_cid": "QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco",
  "blockchain_tx_hash": "0xabc123...",
  "token_expires_at": "2026-10-27T00:00:00Z",
  "created_at": "2026-04-27T10:00:00Z"
}
```

**Possible `status` values:** `PENDING` | `PROCESSING` | `APPROVED` | `REJECTED` | `FLAGGED`

---

### `GET /kyc/verify/:address`

Query the blockchain directly for a wallet address's live verification status.

**Response `200 OK`:**
```json
{
  "address": "0xUserWalletAddress",
  "is_verified": true,
  "is_active": true,
  "ipfs_cid": "QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco",
  "valid_until": "2026-10-27T00:00:00Z"
}
```

---

### `POST /kyc/flag/:address` *(Internal / Admin)*

Trigger a re-verification flag on the smart contract for a given address. Called by the AI service when new fraud pattern thresholds are updated.

**Response `200 OK`:**
```json
{
  "address": "0xUserWalletAddress",
  "flagged": true,
  "tx_hash": "0xdef456..."
}
```

---

## 7. Message Queue Contracts (RabbitMQ)

### Queue: `kyc_processing` (Backend → AI)

**Exchange:** `kyc.direct`
**Routing Key:** `kyc.process`
**Durable:** `true`

**Message Payload:**
```json
{
  "kyc_id": "550e8400-e29b-41d4-a716-446655440000",
  "user_id": "user_abc123",
  "file_path": "/shared_uploads/550e8400.jpg",
  "file_type": "image/jpeg",
  "submitted_at": "2026-04-27T10:00:00Z"
}
```

---

### Queue: `kyc_results` (AI → Backend)

**Exchange:** `kyc.direct`
**Routing Key:** `kyc.result`
**Durable:** `true`

**Message Payload (APPROVED):**
```json
{
  "kyc_id": "550e8400-e29b-41d4-a716-446655440000",
  "result": "APPROVED",
  "trust_score": 87,
  "ocr_data": {
    "full_name": "Jane Doe",
    "date_of_birth": "1990-05-15",
    "document_number": "AB123456",
    "expiry_date": "2030-05-14",
    "nationality": "FIN",
    "document_type": "PASSPORT",
    "ocr_confidence": 0.94
  },
  "deepfake_result": {
    "verdict": "REAL",
    "confidence": 0.91,
    "artifacts_detected": false
  },
  "processed_at": "2026-04-27T10:00:45Z"
}
```

**Message Payload (REJECTED):**
```json
{
  "kyc_id": "550e8400-e29b-41d4-a716-446655440000",
  "result": "REJECTED",
  "trust_score": 32,
  "rejection_reason": "DEEPFAKE_DETECTED",
  "deepfake_result": {
    "verdict": "FAKE",
    "confidence": 0.97,
    "artifacts_detected": true
  },
  "processed_at": "2026-04-27T10:00:45Z"
}
```

**Rejection reason codes:** `DEEPFAKE_DETECTED` | `OCR_FAILURE` | `LOW_TRUST_SCORE` | `DOCUMENT_EXPIRED` | `UNSUPPORTED_DOCUMENT`

---

## 8. AI Service Specification

### 8.1 Endpoints (Internal FastAPI)

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/health` | Docker health check |
| `POST` | `/analyze` | Direct analysis (for testing/dev only) |

The AI service is **primarily a RabbitMQ consumer**, not an HTTP service. The FastAPI server exists only for health checks and direct dev testing.

---

### 8.2 OCR Pipeline

```python
# Pseudocode — implementation guide
def run_ocr(image_path: str) -> OcrResult:
    img = cv2.imread(image_path)
    img = preprocess(img)           # grayscale, denoise, deskew
    reader = easyocr.Reader(['en', 'fi', 'de', 'fr'])
    raw = reader.readtext(img, detail=1)
    fields = extract_fields(raw)    # regex + positional heuristics
    confidence = mean([r[2] for r in raw])
    return OcrResult(fields=fields, confidence=confidence)
```

**Supported document types:** Passport, National ID Card, Driver's Licence
**Supported languages:** English, Finnish, German, French (extensible)

---

### 8.3 Deepfake Detection Pipeline

```python
# Pseudocode — implementation guide
def run_deepfake_check(image_path: str) -> DeepfakeResult:
    img = cv2.imread(image_path)
    face = detect_and_crop_face(img)       # MTCNN or RetinaFace
    if face is None:
        return DeepfakeResult(verdict="NO_FACE", confidence=0)
    features = preprocess_face(face)       # normalize, resize to 224x224
    score = model.predict(features)        # FaceForensics++ fine-tuned model
    verdict = "REAL" if score > 0.5 else "FAKE"
    artifacts = check_compression_artifacts(img)
    return DeepfakeResult(verdict=verdict, confidence=score, artifacts=artifacts)
```

**Model:** FaceForensics++ (ResNet50 backbone), fine-tuned on synthetic ID dataset.
**Fallback:** If no face detected (e.g., document-only ID), deepfake score defaults to `0.5` (neutral) and OCR confidence carries full weight.

---

### 8.4 Active Liveness Detection Pipeline

**Implementation**: `ai-service/src/liveness.py`
**Standard**: ISO/IEC 30107-3 Presentation Attack Detection (PAD) Level 2
**Defends against**: print attacks, replay attacks
**Limitation**: 3D mask attacks require IR depth sensor (future work)

```python
# Pseudocode — reflects actual implementation
def run_liveness_check(video_path: str | None) -> LivenessResult:
    if not video_path:
        return LivenessResult(passed=False, method='no_video', ...)

    cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
    cap = cv2.VideoCapture(video_path)
    x_centers = []

    for every 3rd frame:
        faces = cascade.detectMultiScale(frame, scaleFactor=1.1, minNeighbors=5)
        if face detected:
            # Normalise face centre to [-45°, +45°] proxy yaw range
            center_norm = ((x + w/2) / frame_width - 0.5) * 2
            x_centers.append(center_norm * 45.0)

    smoothed = moving_average(x_centers, window=3)
    yaw_range = max(smoothed) - min(smoothed)

    passed = (
        min(smoothed) < -4.0 and   # face moved to left of raw frame (user turned right)
        max(smoothed) > 4.0 and    # face moved to right of raw frame (user turned left)
        yaw_range >= 12.0 and      # total sweep ≥ 12° (filters micro-movements)
        is_smooth(smoothed) and    # max frame-to-frame jump < 20° (anti-replay)
        detection_rate > 0.40      # face detected in ≥ 40% of sampled frames
    )
```

**Mirror-display note**: The frontend mirrors the video preview (`scaleX(-1)`) so users see a natural reflection. The recorded WebM is *not* mirrored; the analysis runs on the raw camera frame. "Face went right in raw frame" = user turned their head left as seen in the mirror. The bilateral pass criteria (±4°) account for this correctly.

**Why Haar cascade (not MediaPipe)**: MediaPipe Face Mesh provides true 3D yaw but requires `mediapipe ≥ 0.10.20` which has an unresolvable protobuf version conflict with `tensorflow 2.21` in this environment. The Haar-cascade x-centre proxy is adequate for PAD Level 2 and requires no model download.

**Future upgrade path**: MediaPipe (resolves with independent Python env) → true 3D yaw in degrees. Video deepfake detection (XceptionNet / FaceForensics++) → PAD Level 3 (GPU required, ~500 MB weights).

---

### 8.5 Trust Score Formula

```
# Without liveness video:
trust_score = round(
    (ocr_confidence * 100 * 0.40) +
    (deepfake_confidence_real * 100 * 0.60)
)

# With liveness video provided:
trust_score = round(
    (ocr_confidence * 100 * 0.30) +
    (deepfake_confidence_real * 100 * 0.40) +
    (liveness_score * 100 * 0.30)
)
# liveness_score = 1.0 if passed, 0.0 if failed

PASS threshold: trust_score >= 75

# Liveness hard gate (applied BEFORE trust score):
if liveness_provided and not liveness_result.passed:
    result = REJECTED  # reason: LIVENESS_FAILED — bypass trust score entirely
```

---

## 9. Blockchain & Smart Contract Specification

### 9.1 Network

- **Development:** Hardhat local network (`localhost:8545`)
- **Testing/Thesis demo:** Polygon Mumbai testnet (or Amoy testnet)
- **Production target:** Polygon Mainnet (PoS, low gas)

---

### 9.2 KYCRegistry.sol

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./IVerifier.sol";

contract KYCRegistry is Ownable {

    IVerifier public immutable verifier;
    uint8 public constant PASS_THRESHOLD = 75;

    struct Identity {
        string  ipfsCid;          // IPFS content identifier (no raw PII)
        uint256 validUntil;       // Unix timestamp — Trust Token expiry
        uint8   trustScore;       // 0–100, recorded at time of verification
        bool    active;           // false = flagged for re-check
        uint256 verifiedAt;       // Unix timestamp of initial verification
    }

    // address = user's wallet address
    mapping(address => Identity) public registry;

    event IdentityRegistered(address indexed user, string ipfsCid, uint256 validUntil);
    event IdentityFlagged(address indexed user, string reason);
    event IdentityRevoked(address indexed user);

    // verifierAddress = address(0) disables ZKP check (dev mode)
    constructor(address verifierAddress) Ownable(msg.sender) {
        verifier = IVerifier(verifierAddress);
    }

    /// Register or update a verified identity (requires valid Groth16 ZKP)
    function registerIdentity(
        address user,
        string calldata ipfsCid,
        uint256 validUntil,
        uint8 trustScore,
        uint[2] calldata pA,
        uint[2][2] calldata pB,
        uint[2] calldata pC
    ) external onlyOwner {
        if (address(verifier) != address(0)) {
            require(
                verifier.verifyProof(pA, pB, pC, [uint(PASS_THRESHOLD)]),
                "ZKP: score proof failed"
            );
        }
        registry[user] = Identity({
            ipfsCid:     ipfsCid,
            validUntil:  validUntil,
            trustScore:  trustScore,
            active:      true,
            verifiedAt:  block.timestamp
        });
        emit IdentityRegistered(user, ipfsCid, validUntil);
    }

    /// Flag identity for re-verification (Live-Check trigger)
    function flagIdentity(address user, string calldata reason) external onlyOwner {
        require(registry[user].active, "Identity not active");
        registry[user].active = false;
        emit IdentityFlagged(user, reason);
    }

    /// Revoke identity entirely (e.g., fraud confirmed)
    function revokeIdentity(address user) external onlyOwner {
        delete registry[user];
        emit IdentityRevoked(user);
    }

    /// Check if an address has a live, non-expired verification
    function isVerified(address user) external view returns (bool) {
        Identity memory id = registry[user];
        return id.active && block.timestamp < id.validUntil;
    }
}
```

**ZKP integration notes:**
- `Groth16Verifier.sol` is auto-generated by snarkjs from `TrustScore.circom` and deployed separately
- `IVerifier.sol` is a minimal interface: `verifyProof(pA, pB, pC, pubSignals) → bool`
- Setting `verifierAddress = address(0)` at deploy time disables ZKP check (dev mode)
- `PASS_THRESHOLD = 75` is the public signal passed to the verifier — the circuit proves `score >= 75` without revealing the score
- Gas cost: ~270,000–350,000 gas with ZKP vs ~50,000 without; economical on Polygon, prohibitive on Ethereum mainnet

---

### 9.3 Trust Token Expiry

| Scenario | Expiry |
|---|---|
| Standard verification pass | `now + 180 days` (6 months) |
| High trust score (>= 95) | `now + 365 days` (1 year) |
| Low-confidence pass (75–79) | `now + 90 days` (3 months) |
| Deepfake trend detected globally | Smart contract `flagIdentity()` called for all active records below a new threshold |

---

### 9.4 GDPR Compliance Note

- The `address` used in the registry is the **user's wallet address** or a **keccak256 hash of their `user_id`** — not their name or national ID number.
- The `ipfsCid` points to an encrypted document on IPFS. The decryption key is held off-chain by the institution.
- **No personally identifiable information is ever written to the blockchain.**

**updated GDPR posture:**
- The AES document key is sealed (ECIES) to the user's wallet-derived public key at the moment of approval; the institution's plaintext copy is destroyed at the same instant. Article 17 (right to erasure) is therefore satisfied implicitly: the institution cannot read the document at all, with or without an erasure request.
- A Poseidon commitment `C = Poseidon(dobYear, salt)` per user is written on chain via the new `AttributeRegistry` contract. It is information-theoretically hiding under the random-oracle assumption — the on-chain value reveals nothing about the underlying DOB. The user holds the witness `(dobYear, salt)` in encrypted form bound to their wallet.
- A trade-off emerges: AMLD requires institutions to retain customer records for 5 years after the end of the business relationship. Under this design the institution cannot satisfy a regulator's record request unilaterally — it would need to ask the user to re-share. A dual-wrap escrow scheme (wrapping the DEK both to the user and to a regulator key) is the expected production resolution and is identified as future work.

### 9.5 AttributeRegistry.sol

Selective-disclosure proofs are anchored in a second contract:

```solidity
contract AttributeRegistry is Ownable {
    IAgeVerifier public immutable ageVerifier;
    mapping(address => uint256) public ageCommitment;  // Poseidon(dobYear, salt)

    function setAgeCommitment(address user, uint256 commitment) external onlyOwner;
    function clearAgeCommitment(address user) external onlyOwner;     // GDPR Article 17
    function verifyAge(address user, uint8 minAge, uint16 currentYear,
                       uint[2] pA, uint[2][2] pB, uint[2] pC) external view returns (bool);
}
```

`verifyAge` is a view function, delegated to the auto-generated `AgeVerifier.sol` (a Groth16Verifier produced by snarkjs from `AgeProof.circom`). Any party — typically another bank — can call it free of gas to check whether a Groth16 proof attests that `currentYear - dobYear >= minAge` against the user's published commitment. The DOB itself is never disclosed.

---

## 10. Database Schema (PostgreSQL)

```sql
-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Core KYC records table
CREATE TABLE kyc_records (
    id                  UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id             VARCHAR(255) NOT NULL,
    status              VARCHAR(20)  NOT NULL DEFAULT 'PENDING',
                        -- PENDING | PROCESSING | APPROVED | REJECTED | FLAGGED
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

-- Index for fast user lookups
CREATE INDEX idx_kyc_user_id   ON kyc_records (user_id);
CREATE INDEX idx_kyc_status    ON kyc_records (status);
CREATE INDEX idx_kyc_wallet    ON kyc_records (wallet_address);

-- Auto-update updated_at on any row change
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_kyc_updated_at
    BEFORE UPDATE ON kyc_records
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Audit log — immutable record of every status transition
CREATE TABLE kyc_audit_log (
    id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    kyc_id      UUID        NOT NULL REFERENCES kyc_records(id),
    from_status VARCHAR(20),
    to_status   VARCHAR(20) NOT NULL,
    actor       VARCHAR(100),   -- 'system', 'ai-service', 'admin'
    metadata    JSONB,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_audit_kyc_id ON kyc_audit_log (kyc_id);
```

---

## 11. Infrastructure (Docker Compose)

```yaml
# docker-compose.yml
version: "3.9"

services:

  db:
    image: postgres:15-alpine
    container_name: kyc_postgres
    restart: unless-stopped
    environment:
      POSTGRES_USER: kyc_user
      POSTGRES_PASSWORD: kyc_pass
      POSTGRES_DB: kyc_db
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U kyc_user -d kyc_db"]
      interval: 10s
      timeout: 5s
      retries: 5

  mq:
    image: rabbitmq:3.12-management-alpine
    container_name: kyc_rabbitmq
    restart: unless-stopped
    environment:
      RABBITMQ_DEFAULT_USER: kyc_mq
      RABBITMQ_DEFAULT_PASS: kyc_mq_pass
    ports:
      - "5672:5672"    # AMQP
      - "15672:15672"  # Management UI
    healthcheck:
      test: ["CMD", "rabbitmq-diagnostics", "ping"]
      interval: 10s
      timeout: 5s
      retries: 5

  ipfs:
    image: ipfs/kubo:latest
    container_name: kyc_ipfs
    restart: unless-stopped
    ports:
      - "4001:4001"   # Swarm
      - "5001:5001"   # API
      - "8080:8080"   # Gateway
    volumes:
      - ipfs_data:/data/ipfs

  api:
    build:
      context: ./backend
      dockerfile: Dockerfile
    container_name: kyc_backend
    restart: unless-stopped
    depends_on:
      db:
        condition: service_healthy
      mq:
        condition: service_healthy
    environment:
      DATABASE_URL: postgresql://kyc_user:kyc_pass@db:5432/kyc_db
      RABBITMQ_URL: amqp://kyc_mq:kyc_mq_pass@mq:5672
      IPFS_API_URL: http://ipfs:5001
      CONTRACT_ADDRESS: ${CONTRACT_ADDRESS}
      BLOCKCHAIN_RPC_URL: ${BLOCKCHAIN_RPC_URL}
      PRIVATE_KEY: ${PRIVATE_KEY}
      SHARED_UPLOADS_PATH: /shared_uploads
    ports:
      - "3000:3000"
    volumes:
      - shared_uploads:/shared_uploads

  ai:
    build:
      context: ./ai-service
      dockerfile: Dockerfile
    container_name: kyc_ai
    restart: unless-stopped
    depends_on:
      mq:
        condition: service_healthy
    environment:
      RABBITMQ_URL: amqp://kyc_mq:kyc_mq_pass@mq:5672
      SHARED_UPLOADS_PATH: /shared_uploads
      MODEL_PATH: /models
    volumes:
      - shared_uploads:/shared_uploads
      - ai_models:/models
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/health"]
      interval: 15s
      timeout: 5s
      retries: 5

  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    container_name: kyc_frontend
    restart: unless-stopped
    depends_on:
      - api
    ports:
      - "5173:5173"

volumes:
  postgres_data:
  ipfs_data:
  shared_uploads:
  ai_models:
```

**Environment file (`.env`):**
```
CONTRACT_ADDRESS=0x...
BLOCKCHAIN_RPC_URL=http://127.0.0.1:8545
PRIVATE_KEY=0x...
```

---

## 12. Frontend Specification

### Purpose

The frontend is **intentionally minimal**. Its only role is to demonstrate the submission flow for the thesis. It is not a full onboarding UI.

### Single Page Layout

```
┌─────────────────────────────────┐
│   e-KYC Live-Check Ledger       │
│   ─────────────────────────     │
│                                 │
│   User ID: [_______________]    │
│                                 │
│   ID Document:                  │
│   [  Drop file or click  ]      │
│   Accepted: JPEG, PNG, PDF      │
│   Max size: 10MB                │
│                                 │
│   [  Submit for Verification ]  │
│                                 │
│   ─────────────────────────     │
│   Status: ● PENDING             │
│   KYC ID: 550e8400-...          │
│                                 │
│   [  Check Status  ]            │
└─────────────────────────────────┘
```

### Behaviour

1. User enters their `user_id` and selects a file.
2. On submit: `POST /api/kyc/submit` (multipart/form-data).
3. Displays returned `kyc_id` and initial status `PENDING`.
4. "Check Status" button polls `GET /api/kyc/status/{kyc_id}`.
5. Status badge updates with colour: grey (PENDING), blue (PROCESSING), green (APPROVED), red (REJECTED).

### Tech

- React 18 + TypeScript + Vite
- No CSS framework — plain CSS or CSS Modules
- `fetch` API — no Axios needed for this scope

---

## 13. Trust Token Lifecycle (Live-Check Mechanism)

This is the thesis's novel contribution. The diagram below shows the full lifecycle:

```
   SUBMIT
      │
      ▼
  [AI Analysis]
      │
   PASS? ──── NO ──► REJECTED (no token issued)
      │
     YES
      │
      ▼
  Trust Token Created
  ┌─────────────────────────┐
  │ ipfsCid: Qm...          │
  │ validUntil: +180 days   │
  │ trustScore: 87          │
  │ active: true            │
  └─────────────────────────┘
      │
      ▼
  Token Written to Blockchain
  (KYCRegistry.registerIdentity)
      │
      ▼
  ┌──────────────────────────────────────────┐
  │            ACTIVE PHASE                  │
  │                                          │
  │  Any bank queries isVerified(address)    │
  │  → returns TRUE                          │
  │                                          │
  │  AI detects new deepfake trend           │
  │  → flagIdentity(address, reason) called  │
  │  → active = false                        │
  │  → isVerified returns FALSE              │
  │  → user must re-submit                   │
  └──────────────────────────────────────────┘
      │
      ▼
  Token Expires (validUntil reached)
  → isVerified returns FALSE automatically
  → User prompted to re-verify
```

---

## 14. Security, Privacy & Compliance

### 14.1 GDPR

| Requirement | Implementation |
|---|---|
| No PII on-chain | Only IPFS CID + wallet address hash stored on blockchain |
| Right to erasure | `revokeIdentity()` removes on-chain record; IPFS document deletion handled off-chain by institution |
| Data minimisation | OCR data stored only in PostgreSQL (institutional control), not on IPFS or chain |
| Purpose limitation | System processes identity documents only for KYC verification — no secondary use |

### 14.2 eIDAS 2.0 Compatibility

- The `wallet_address` field in the KYC record is designed to accommodate an **EU Digital Identity Wallet address** when the standard is finalised.
- The `isVerified(address)` contract function is interoperable: any compliant system with the ABI can query it.
- The IPFS + hash pattern is compatible with the W3C Verifiable Credentials standard used by EU Digital Wallets.

### 14.3 Deepfake Defense

- FaceForensics++ model is retrained on quarterly cadence as new synthetic ID datasets become available.
- When model confidence on a new attack vector drops below an internal threshold, the `flagIdentity()` function is called for all at-risk records — forcing re-verification without waiting for token expiry.
- This is the "active security wall" behaviour described in the thesis.

### 14.4 Infrastructure Security

- All inter-service communication inside Docker network — nothing exposed except the API port and frontend port.
- Private key for blockchain signing is injected via environment variable (never hardcoded).
- `/shared_uploads` volume is ephemeral per-record: files are deleted after IPFS upload or after REJECTED status.
- RabbitMQ and PostgreSQL credentials are environment-variable driven.

---

## 15. Non-Functional Requirements

| Requirement | Target | Measurement Method |
|---|---|---|
| API response time (submit) | < 200ms (file save + DB write) | Load test with k6 |
| End-to-end KYC time (PASS) | < 30 seconds (AI processing) | Timestamp delta in DB |
| AI OCR accuracy | > 90% field accuracy on test set | Labelled dataset evaluation |
| Deepfake detection accuracy | > 85% on FaceForensics++ test set | Model evaluation metrics |
| System availability | 99.5% uptime in demo window | Docker health check monitoring |
| RabbitMQ message loss | Zero (durable queues, ack-based) | RabbitMQ management UI |
| Blockchain tx confirmation | < 5 seconds on Polygon Mumbai | ethers.js `wait()` timing |
| GDPR: PII on-chain | Zero bytes of PII on-chain | Smart contract audit |
| Concurrent KYC submissions | 10 simultaneous (thesis scope) | k6 virtual users |

---

## 16. Project Structure

```
/kyc-live-ledger
│
├── /backend                        # NestJS application
│   ├── /src
│   │   ├── /kyc                    # KycModule: controller, service, DTOs
│   │   ├── /queue                  # QueueModule: RabbitMQ producer/consumer
│   │   ├── /blockchain             # BlockchainModule: ethers.js + contract ABI
│   │   ├── /ipfs                   # IpfsModule: ipfs-http-client wrapper
│   │   ├── /database               # TypeORM entities, migrations
│   │   └── main.ts
│   ├── Dockerfile
│   └── package.json
│
├── /ai-service                     # Python FastAPI + RabbitMQ worker
│   ├── /src
│   │   ├── consumer.py             # RabbitMQ consumer loop
│   │   ├── ocr.py                  # EasyOCR pipeline
│   │   ├── deepfake.py             # FaceForensics++ inference
│   │   ├── trust_score.py          # Score computation logic
│   │   └── main.py                 # FastAPI app (health endpoint)
│   ├── /models                     # Pre-trained model weights (gitignored)
│   ├── requirements.txt
│   └── Dockerfile
│
├── /contracts                      # Solidity smart contracts
│   ├── /contracts
│   │   └── KYCRegistry.sol
│   ├── /scripts
│   │   └── deploy.js
│   ├── /test
│   │   └── KYCRegistry.test.js
│   ├── hardhat.config.js
│   └── package.json
│
├── /frontend                       # React + TypeScript + Vite (Signer Bank)
│   ├── /src
│   │   ├── App.tsx
│   │   ├── components/
│   │   │   ├── UploadForm.tsx
│   │   │   ├── StatusBadge.tsx
│   │   │   ├── WalletLinkForm.tsx
│   │   │   └── MyDocumentDownload.tsx
│   │   └── api.ts                  # fetch wrapper
│   ├── Dockerfile
│   └── package.json
│
├── /viewer-bank                    # Viewer Bank (Multi-Institution Demo)
│   ├── /src
│   │   └── server.js               # Express.js backend (blockchain queries only)
│   ├── /public
│   │   └── index.html              # Static frontend (vanilla JS)
│   └── package.json
│
├── /shared_uploads                 # Docker volume mount point (gitignored)
├── docker-compose.yml
├── .env.example
├── PRD.md
├── CLAUDE.md
└── MULTI_BANK_DEMO.md              # Multi-institution demonstration guide
```

---

## 17. Implementation Phases

### Phase 1 — Infrastructure & Skeleton (Week 1–2)
- [ ] Docker Compose up with all 5 services healthy
- [ ] PostgreSQL schema applied via migration
- [ ] RabbitMQ queues declared and durable
- [ ] NestJS project bootstrapped with modules stubbed
- [ ] Python FastAPI health endpoint running

### Phase 2 — Core Pipeline (Week 3–5)
- [ ] `POST /kyc/submit` saves file and creates DB record
- [ ] Backend publishes to `kyc_processing` queue
- [ ] AI service consumes message and runs OCR
- [ ] AI service publishes result to `kyc_results` queue
- [ ] Backend consumes result and updates DB

### Phase 3 — AI Deepfake Detection (Week 6–7)
- [ ] FaceForensics++ model integrated into AI service
- [ ] Trust Score computation and PASS/FAIL threshold working
- [ ] End-to-end APPROVED and REJECTED flow tested

### Phase 4 — Blockchain Integration (Week 8–9)
- [ ] `KYCRegistry.sol` deployed to local Hardhat network
- [ ] Backend calls `registerIdentity()` on PASS
- [ ] `GET /kyc/verify/:address` queries contract
- [ ] IPFS upload on PASS working
- [ ] Smart contract unit tests passing

### Phase 5 — Live-Check & Compliance (Week 10–11)
- [ ] Token expiry enforced in `isVerified()` check
- [ ] `flagIdentity()` callable from backend admin endpoint
- [ ] Audit log table populated on every status transition
- [ ] GDPR review: confirm zero PII on-chain

### Phase 6 — Testing & Thesis Documentation (Week 12+)
- [x] k6 performance tests (submit latency, concurrent users)
- [x] AI model accuracy evaluation on labelled test set
- [x] Deploy to Polygon Mumbai testnet
- [x] System diagrams and flow diagrams finalised
- [x] PRD cross-referenced with thesis chapters

### Phase 7 — Multi-Institution Demonstration (COMPLETED)
- [x] Viewer Bank implementation (Express.js + static HTML)
- [x] Read-only blockchain query endpoints
- [x] Transaction history viewing (PolygonScan API integration)
- [x] Document request from Signer Bank (with user signature)
- [x] Multi-bank demo documentation (MULTI_BANK_DEMO.md)
- [x] Architecture diagrams updated for multi-institution view
- [x] File MIME type storage and correct download extensions
- [x] Frontend updates: Signer Bank branding, link to Viewer Bank

### Phase 8 — Zero-Knowledge Proof Integration (COMPLETED)
- [x] `TrustScore.circom` — Groth16 range proof: proves `trustScore >= 75` without revealing the score
- [x] Trusted setup: PTau ceremony + circuit-specific zkey via `contracts/scripts/zkp-setup.sh`
- [x] `Verifier.sol` auto-generated by snarkjs; deployed separately on Polygon Amoy testnet
- [x] `IVerifier.sol` interface for clean Solidity separation
- [x] `KYCRegistry.sol` updated: constructor takes `verifierAddress`; `registerIdentity` takes `pA, pB, pC`
- [x] `ZkpService` (`backend/src/blockchain/zkp.service.ts`) generates Groth16 proof via snarkjs
- [x] `kyc.service.ts` updated to call `ZkpService.generateProof` before every blockchain write
- [x] ZKP artifacts (`TrustScore.wasm`, `trust_final.zkey`) in `backend/zkp-artifacts/`
- [x] Dev mode: `ZKP_ENABLED=false` or `verifierAddress=address(0)` bypasses ZKP check
- [x] Tested on local Hardhat and Polygon Amoy testnet (~300,000 gas per registration)

### Phase 9 — Active Liveness Detection (COMPLETED)
- [x] `liveness.py` — ISO/IEC 30107-3 PAD Level 2 via OpenCV Haar cascade face-centre tracking
- [x] Bilateral head-turn check: face must visit both sides (±4° raw-frame yaw proxy)
- [x] Total range requirement: ≥ 12° sweep (filters micro-movements)
- [x] Smoothness check: max frame-to-frame jump < 20° (anti-replay defence)
- [x] Detection rate threshold: ≥ 40% of sampled frames (handles Haar drop-out at extreme angles)
- [x] `consumer.py` updated: reads `liveness_video_path` from MQ message, calls liveness check, nests result in `deepfake_result.liveness`
- [x] Trust score formula updated: liveness adds 30% weight when provided (OCR 30%, Deepfake 40%, Liveness 30%)
- [x] Liveness hard gate: `LIVENESS_FAILED` rejection bypasses trust score if video provided but failed
- [x] `kyc.controller.ts` updated: `FileFieldsInterceptor` accepts both `document` and `liveness_video` fields
- [x] `kyc.service.ts` updated: saves liveness video, sends `liveness_video_path` in MQ message, cleans up video after processing
- [x] `LivenessCapture.tsx` — 8-second WebM recorder with 3-2-1 countdown, progress bar, face-framing SVG guide overlay (centre oval + bilateral dashed targets + ← → arrows)
- [x] Liveness mandatory: skip button removed; submit disabled until video captured
- [x] Status panel shows: passed/failed, yaw range, detection rate, method, reason
- [x] `kyc_audit_log` migration 004: widened `from_status`/`to_status` to `VARCHAR(30)` (APPROVED_PENDING_WALLET = 23 chars)

## 18. eIDAS 2.0 Compatibility — Scope & Position

### 18.1 What eIDAS 2.0 Changes

Under eIDAS 2.0, identity data ownership shifts from the institution to the user. By end of 2026, every EU member state must provide citizens with an EU Digital Identity Wallet — a government-issued app that holds Verifiable Credentials (W3C standard). Instead of uploading a passport scan to a bank, the user presents a cryptographically signed credential from their wallet. The institution verifies the government's signature and never stores the raw document at all.

This is a fundamentally different trust model:

| Aspect | Traditional KYC (this system) | eIDAS 2.0 Wallet Model |
|---|---|---|
| Who holds the document | Institution | User (on their device) |
| How identity is proven | User uploads scan → AI checks it | User presents signed credential |
| Who did the identity check | The institution's AI pipeline | The government (pre-issued) |
| Raw document storage | IPFS (institution-controlled) | Never leaves user's device |
| User consent per request | No | Yes — user approves each share |

### 18.2 Scope Decision for This Thesis

This system implements the **institutional pipeline** — the backend, AI verification, IPFS anchoring, and blockchain trust layer that a fintech company operates. It does not implement a user-side EU Digital Identity Wallet, which is a government-issued component outside the scope of a private fintech architecture.

This is an intentional and justified scope boundary for three reasons:

1. The EU Digital Identity Wallet specification (ARF 1.4) is still being finalised by member states as of 2026. No stable SDK exists for private developers to integrate against yet.
2. The core research gap this thesis addresses — full-stack integration of AI fraud detection with blockchain anchoring — exists in both the traditional upload model and the eIDAS wallet model. The backend architecture built here remains valid in both.
3. The deepfake detection layer (the Live-Check mechanism) is arguably *more* important in an eIDAS world, not less — a stolen or cloned wallet credential still needs liveness verification that the government wallet does not provide.

### 18.3 How This System Connects to eIDAS 2.0 in Practice

The blockchain layer built in this thesis is directly compatible with the eIDAS 2.0 direction:

- The `isVerified(address)` contract function maps cleanly to the concept of a reusable trust attestation — exactly what eIDAS 2.0 enables across institutions.
- The IPFS + hash pattern aligns with W3C Verifiable Credentials, where a credential references an off-chain document by content hash.
- The `wallet_address` field in the KYC record is designed to accommodate an EU Digital Identity Wallet address as a drop-in replacement for the current user identifier.

### 18.4 Future Architecture (Out of Scope)

In a full eIDAS 2.0 integration, the document upload flow would be replaced or supplemented by:

```
User's EU Wallet App
        │
        │  presents Verifiable Credential (JSON-LD, government-signed)
        ▼
POST /kyc/verify-credential
        │
        │  backend verifies government signature (no AI OCR needed)
        │  liveness/deepfake check still runs on attached photo
        ▼
Blockchain anchoring (same as current flow)
```

This is left as a recommended extension for future work once the EU wallet SDK stabilises.

---

*This PRD is intended as both an engineering specification and a thesis reference document. Each section maps directly to a research question or a chapter in the implementation analysis.*