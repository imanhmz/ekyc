# Multi-Bank KYC Demonstration

This demonstrates how multiple financial institutions can share KYC verification via blockchain.

## Two Banks

### 🏦 Signer Bank (Port 3000)
**Role:** Verification Provider
**Capabilities:**
- ✅ Full KYC verification (document upload)
- ✅ AI processing (OCR + Deepfake detection)
- ✅ IPFS document storage
- ✅ PostgreSQL database
- ✅ Blockchain registration (writes to blockchain)

**Location:**
- Frontend: http://localhost:5173
- Backend: http://localhost:3000

---

### 👁️ Viewer Bank (Port 3001)
**Role:** Verification Checker
**Capabilities:**
- ✅ Blockchain queries (reads verification status)
- ✅ Document requests (with user permission)
- ❌ NO database
- ❌ NO IPFS node
- ❌ NO AI service
- ❌ NO KYC processing

**Location:**
- Frontend + Backend: http://localhost:3001

---

## How to Run

### Terminal 1: Start Infrastructure
```bash
docker-compose up -d
```

### Terminal 2: Start Signer Bank Backend
```bash
cd backend
npm run start:dev
```

### Terminal 3: Start AI Service
```bash
cd ai-service
source venv/bin/activate
uvicorn src.main:app --reload
```

### Terminal 4: Start Signer Bank Frontend
```bash
cd frontend
npm run dev
```

### Terminal 5: Start Viewer Bank
```bash
cd viewer-bank
npm install  # First time only
npm start
```

---

## Demo Flow

### Step 1: User gets verified at Signer Bank
1. Open http://localhost:5173 (Signer Bank)
2. Enter user ID
3. Upload ID document (JPEG/PNG)
4. **IMPORTANT:** Provide wallet address: `0x9b2679350c9b28b8a2a54f40c576ac8e3fd87b6e`
5. Wait ~30 seconds for AI processing
6. Status changes to APPROVED
7. Blockchain registration happens

### Step 2: User tries to onboard at Viewer Bank
1. Open http://localhost:3001 (Viewer Bank)
2. Enter the SAME wallet address: `0x9b2679350c9b28b8a2a54f40c576ac8e3fd87b6e`
3. Click "Check Verification Status"
4. **Instant approval!** ✅
5. Viewer Bank sees:
   - ✅ Verified status
   - ✅ Trust score
   - ✅ Expiry date
   - ✅ IPFS CID
6. Total time: ~1 second (no AI processing needed)

### Step 3: (Optional) Download document at Viewer Bank
1. Click "Request Document from Signer Bank"
2. Connect MetaMask wallet
3. Sign message (proves wallet ownership)
4. Viewer Bank requests document from Signer Bank
5. Document downloaded!

### Step 3: Share document with Viewer Bank — SSI flow
1. Stay in the **Signer Bank** UI (port 5173) where you already have your wallet connected
2. Scroll to the "Share with Another Bank (SSI)" panel under "Decrypt & Download My Document"
3. Enter the Viewer Bank URL (default: `http://localhost:3001`) and click "Share with Viewer Bank"
4. MetaMask prompts you twice:
   - Once to derive your encryption keypair (`KYC-ENC-KEY-v1`)
   - Once to sign the share-consent message
5. Browser fetches the Viewer Bank's public key, unwraps your DEK locally, re-wraps it for the Viewer Bank, and POSTs the ciphertext + re-wrapped key
6. Now switch to the **Viewer Bank** UI (port 3001), enter the same wallet, and click "View Shared Document"
7. Viewer Bank serves the plaintext it decrypted from the share

### Step 4: Prove age to Viewer Bank — selective disclosure
1. Back in the Signer Bank UI, scroll to "Prove Age to Another Bank (ZK)"
2. Enter the recipient bank URL and minimum age (e.g. 18)
3. Click "Prove Age with ZKP". MetaMask prompts twice (ownership + key derivation)
4. Browser fetches the wrapped age witness, unwraps `{dobYear, salt}` locally, runs `snarkjs.groth16.fullProve` in WebAssembly (~5–10 seconds)
5. Proof is POSTed to `http://localhost:3001/api/verify-age`; viewer bank calls `AttributeRegistry.verifyAge` on chain; returns `verified: true`
6. The user's date of birth is never disclosed at any point

---

## What This Demonstrates

| Aspect | Traditional KYC | This System |
|--------|----------------|-------------|
| User onboards at Bank 1 | Upload docs, wait 24 days | Upload docs, wait 30 sec |
| User onboards at Bank 2 | **Repeat full KYC (24 days)** | **Instant approval (1 sec)** ✅ |
| User onboards at Bank 3 | **Repeat full KYC (24 days)** | **Instant approval (1 sec)** ✅ |
| Total time | 72 days | 30 seconds |
| Total cost | $1,500 ($500 × 3) | $500 (one-time) |

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                   SIGNER BANK (Port 3000)                   │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌─────────┐    │
│  │PostgreSQL│  │ RabbitMQ │  │   IPFS   │  │AI Service│   │
│  └──────────┘  └──────────┘  └──────────┘  └─────────┘    │
│       │              │              │            │          │
│       └──────────────┴──────────────┴────────────┘          │
│                       │                                     │
│                   NestJS Backend                            │
│                       │                                     │
└───────────────────────┼─────────────────────────────────────┘
                        │
                        │ registerIdentity(wallet, cid, score)
                        ▼
        ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
        ┃   SHARED BLOCKCHAIN CONTRACT       ┃
        ┃   KYCRegistry.sol (Polygon)        ┃
        ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
                        ▲
                        │ isVerified(wallet) → TRUE
                        │
┌───────────────────────┼─────────────────────────────────────┐
│                   VIEWER BANK (Port 3001)                   │
│                                                             │
│                  Express.js Backend                         │
│                  (Read-only blockchain queries)             │
│                                                             │
│  ❌ No Database                                             │
│  ❌ No IPFS                                                 │
│  ❌ No AI Service                                           │
│  ✅ Only blockchain queries                                 │
└─────────────────────────────────────────────────────────────┘
```

### Updated Architecture

```
            SIGNER BANK 3000                       VIEWER BANK 3001
  ┌────────────────────────────┐              ┌──────────────────────┐
  │ PostgreSQL / RabbitMQ /    │              │ Express + own ECIES  │
  │ IPFS / AI / NestJS         │              │ keypair (no DB)      │
  │ ECIES-wraps DEK at approve │              │                      │
  └─────────────┬──────────────┘              └──────────┬───────────┘
                │                                        │
                │ registerIdentity(.., ZKP)              │ isVerified(wallet)
                │ setAgeCommitment(wallet, C)            │ verifyAge(..., proof)
                ▼                                        ▼
       ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
       ┃   ON-CHAIN  KYCRegistry  +  AttributeRegistry    ┃
       ┃   Verifier (TrustScore)  +  AgeVerifier          ┃
       ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

  USER BROWSER (the new "middle layer")
  ┌──────────────────────────────────────────────────────────────┐
  │  MetaMask → derive secp256k1 keypair (KYC-ENC-KEY-v1)        │
  │  Fetch wrapped DEK from Signer → unwrap locally              │
  │  Re-wrap DEK to Viewer Bank pubkey → POST receive-document   │
  │  snarkjs Groth16 fullProve (wasm) → POST verify-age          │
  │  Plaintext never leaves the browser                          │
  └──────────────────────────────────────────────────────────────┘
```

---

## Key Points

1. **Same Contract Address**: Both banks connect to the SAME blockchain contract
2. **No Shared Database**: Viewer Bank has NO access to Signer Bank's database
3. **Trust Model**: Viewer Bank trusts verification done by Signer Bank
4. **User Control**: User can prove wallet ownership and share documents
5. **Cost Savings**: Viewer Bank pays $0 for verification (just reads blockchain)
6. **Time Savings**: Instant approval vs 24-day KYC process

---

## Testing Different Scenarios

### Scenario 1: Unverified User
- Use wallet: `0x0000000000000000000000000000000000000000`
- Viewer Bank result: ❌ NOT VERIFIED
- Action: User must complete KYC at Signer Bank first

### Scenario 2: Verified User
- Complete KYC at Signer Bank with wallet address
- Check same wallet at Viewer Bank
- Result: ✅ INSTANT APPROVAL

### Scenario 3: Expired Token
- Wait until `valid_until` date passes
- Check at Viewer Bank
- Result: ❌ NOT VERIFIED (expired)
- Action: User must re-verify

### Scenario 4: Flagged Identity
- Admin flags wallet: `POST http://localhost:3000/api/kyc/flag/:address`
- Check at Viewer Bank
- Result: ❌ NOT VERIFIED (flagged)

---

## API Endpoints Comparison

### Signer Bank (Port 3000)
```
POST   /api/kyc/submit              - Upload document for verification (optional encryption_pubkey)
GET    /api/kyc/status/:id          - Check KYC status
POST   /api/kyc/link-wallet         - Link wallet + (optional) encryption_pubkey to KYC record
GET    /api/kyc/verify/:address     - Check blockchain verification
POST   /api/kyc/flag/:address       - Flag identity for re-verification
GET    /api/kyc/document/:id        - DEPRECATED after approval — returns 400 KEY_HELD_BY_USER
POST   /api/kyc/my-document         - DEPRECATED after approval — returns 400 KEY_HELD_BY_USER

GET    /api/kyc/wrapped-document/:id          - Returns {ciphertext, wrapped_DEK} for in-browser decrypt
POST   /api/kyc/wrapped-document/by-wallet    - Wallet-signature-gated equivalent
POST   /api/kyc/wrapped-age-witness/by-wallet - Returns wrapped (dobYear, salt) for ZKP age proof
```

### Viewer Bank (Port 3001)
```
GET    /api/verify/:wallet             - Check verification status
POST   /api/request-document           - Request document from Signer Bank
GET    /api/transactions/:wallet       - Get transaction history from blockchain
GET    /api/recent-verifications       - See recent blockchain events

GET    /api/encryption-pubkey          - Viewer Bank's secp256k1 pubkey (for re-wrap)
POST   /api/receive-document           - Receive a re-wrapped document from a user
GET    /api/shared-document/:wallet    - Serve the most recently shared document
GET    /api/shared-documents           - List metadata for received shares
POST   /api/verify-age                 - Verify a Groth16 age proof against on-chain commitment
```

---

## Troubleshooting

**Viewer Bank shows "NOT VERIFIED" even after KYC approval:**
- Check if wallet address was provided during KYC submission
- Verify blockchain transaction completed (check backend logs)
- Ensure both banks use same CONTRACT_ADDRESS in .env

**Document request fails:**
- Ensure Signer Bank backend is running (port 3000)
- Check SIGNER_BANK_URL in .env points to http://localhost:3000
- Verify wallet signature is valid

**Blockchain connection error:**
- Check CONTRACT_ADDRESS in .env
- Verify BLOCKCHAIN_RPC_URL is accessible
- For local Hardhat, ensure `npx hardhat node` is running

---

This demonstrates the thesis contribution: **Multi-institutional KYC trust ledger** where verification is done once but trusted by all participating institutions.
