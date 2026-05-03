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
POST   /api/kyc/submit              - Upload document for verification
GET    /api/kyc/status/:id          - Check KYC status
POST   /api/kyc/link-wallet         - Link wallet to KYC record
GET    /api/kyc/verify/:address     - Check blockchain verification
POST   /api/kyc/flag/:address       - Flag identity for re-verification
GET    /api/kyc/document/:id        - Download document (institution)
POST   /api/kyc/my-document         - Download document (user)
```

### Viewer Bank (Port 3001)
```
GET    /api/verify/:wallet             - Check verification status
POST   /api/request-document           - Request document from Signer Bank
GET    /api/transactions/:wallet       - Get transaction history from blockchain
GET    /api/recent-verifications       - See recent blockchain events
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
