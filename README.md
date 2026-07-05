# e-KYC Live-Check Ledger

The e-KYC Live-Check Ledger is a full-stack, blockchain-based identity verification platform designed as a thesis implementation for multi-institution trust (available on [Theseus](https://www.theseus.fi/handle/10024/925335)). It integrates:

- **AI-Powered Analysis**: Combining OCR document extraction, deepfake verification, and active liveness detection (compliant with ISO/IEC 30107-3 PAD Level 2).
- **On-Chain Zero-Knowledge Proofs**: Utilizing Groth16, Circom, and SnarkJS to perform privacy-preserving validation of trust scores and user age commitments without exposing raw attributes.
- **GDPR-Compliant Storage**: Using dual-layer ECIES-encrypted IPFS storage (secp256k1) where the user retains the decrypting Data Encryption Key (DEK). Revoking wallet access renders files unrecoverable, satisfying GDPR Article 17.
- **Live-Check Expiry Logic**: Dynamically calculates trust token expiry times based on verification scores and enables retroactive flagging/invalidation if new fraud patterns emerge.

The system is split into two primary nodes:
1. **Signer Bank**: A full verification provider that runs the AI services, manages the database, stores encrypted documents, and writes identities to the blockchain registry.
2. **Viewer Bank**: A lightweight, read-only verification checker demonstrating cross-institution trust. It queries the blockchain to instantly verify user statuses and accepts user-permitted shared documents without maintaining a local database or running AI checks.


## System Prerequisites
- Docker and Docker Compose
- Node.js (v18+)
- Python 3.10+

## Local Setup

### 1. Infrastructure
Start the database, message queue, IPFS node, and SeaweedFS object storage:
```bash
docker compose up -d
```

### 2. Smart Contracts
Start a local blockchain node and deploy the contracts:
```bash
cd contracts
npm install
npx hardhat node # Run this in a separate terminal
```

In a new terminal, deploy the contracts locally:
```bash
cd contracts
npm run deploy:local
```
Copy the printed contract addresses (`KYCRegistry`, `AttributeRegistry`, `Verifier`, `AgeVerifier`) to your `.env` file (copied from `.env.example` in the project root).

### 3. Backend Service
Configure your `.env` variables at the project root, then run the NestJS backend:
```bash
cd backend
npm install
npm run start:dev
```

### 4. AI Service
Create a Python virtual environment, install dependencies, and run the FastAPI-based AI service:
```bash
cd ai-service
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn src.main:app --reload
```

### 5. Signer Bank Frontend
Install dependencies and run the React/Vite development server:
```bash
cd frontend
npm install
npm run dev
```

### 6. Viewer Bank Service
Run the secondary Express bank server:
```bash
cd viewer-bank
npm install
npm start
```

## Running Tests
Run the smart contract tests:
```bash
cd contracts
npx hardhat test
```
