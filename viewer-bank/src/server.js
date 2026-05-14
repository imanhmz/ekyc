/**
 * VIEWER BANK - Independent Institution
 *
 * This bank does NOT perform KYC verification.
 * It ONLY reads verification status from the shared blockchain.
 *
 * Demonstrates multi-institution trust model:
 * - No access to Signer Bank's database
 * - No access to Signer Bank's IPFS encryption keys
 * - Only queries the public blockchain
 */

const express = require('express');
const cors = require('cors');
const { ethers } = require('ethers');
const EthCrypto = require('eth-crypto');
const path = require('path');
// In Docker env vars come from docker-compose; locally fall back to project root .env
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
require('dotenv').config(); // also check local .env if present

const app = express();
const PORT = process.env.VIEWER_BANK_PORT || 3001;

// SSI: the viewer bank holds its own secp256k1 keypair so users can re-wrap
// their DEK to this bank. For the prototype we generate ephemerally on boot;
// a production deployment would load this from a secrets manager and rotate
// the key on a schedule.
const VIEWER_KEYPAIR = process.env.VIEWER_BANK_PRIVATE_KEY
    ? (() => {
        const priv = process.env.VIEWER_BANK_PRIVATE_KEY;
        return { privateKey: priv, publicKey: EthCrypto.publicKeyByPrivateKey(priv) };
    })()
    : EthCrypto.createIdentity();

console.log('🔐 Viewer Bank SSI pubkey: ' + VIEWER_KEYPAIR.publicKey.slice(0, 32) + '…');

// In-memory store for documents shared with this bank (prototype only).
// Keyed by wallet address (lower-case); each entry is the most recent share.
const SHARED_DOCUMENTS = new Map();

// Bodies carrying re-wrapped DEK + base64 ciphertext can be large; raise the
// JSON body limit so a multi-MB document still fits.
app.use(cors());
app.use(express.json({ limit: '20mb' }));
app.use(express.static(path.join(__dirname, '../public')));

// Blockchain connection (SAME contract as Signer Bank)
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const BLOCKCHAIN_RPC_URL = process.env.BLOCKCHAIN_RPC_URL;

// Load contract ABI (copied from Signer Bank at build time)
const contractABI = require('../abi/KYCRegistry.abi.json');
const attributeRegistryABI = require('../abi/AttributeRegistry.abi.json');

const ATTRIBUTE_REGISTRY_ADDRESS = process.env.ATTRIBUTE_REGISTRY_ADDRESS;

let provider;
let contract;
let attributeRegistry;
let blockchainReady = false;

// Initialize blockchain connection
async function initBlockchain() {
    try {
        if (!CONTRACT_ADDRESS || !BLOCKCHAIN_RPC_URL) {
            console.warn('⚠️  Blockchain not configured. Set CONTRACT_ADDRESS and BLOCKCHAIN_RPC_URL in .env');
            return;
        }

        provider = new ethers.JsonRpcProvider(BLOCKCHAIN_RPC_URL);
        contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, provider);
        if (ATTRIBUTE_REGISTRY_ADDRESS) {
            attributeRegistry = new ethers.Contract(ATTRIBUTE_REGISTRY_ADDRESS, attributeRegistryABI, provider);
            console.log(`   AttributeRegistry: ${ATTRIBUTE_REGISTRY_ADDRESS}`);
        }
        blockchainReady = true;

        console.log('✅ Viewer Bank connected to blockchain');
        console.log(`   Contract: ${CONTRACT_ADDRESS}`);
        console.log(`   RPC: ${BLOCKCHAIN_RPC_URL}`);
    } catch (error) {
        console.error('❌ Blockchain connection failed:', error.message);
    }
}

// Health check
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        bank: 'VIEWER_BANK',
        blockchain_connected: blockchainReady
    });
});

// SSI: expose the viewer bank's secp256k1 encryption pubkey so users can
// re-wrap their DEK to this bank.
app.get('/api/encryption-pubkey', (req, res) => {
    res.json({
        bank: 'VIEWER_BANK',
        encryption_pubkey: VIEWER_KEYPAIR.publicKey,
        algorithm: 'secp256k1-ECIES',
    });
});

// SSI: accept a document the user has re-wrapped for this bank. The user has
// already proven verification status on chain (the demo flow shows isVerified
// first) so this endpoint trusts the share-time wallet signature only as a
// freshness/consent marker — no document content leaves the user's control
// without their explicit re-wrap step.
app.post('/api/receive-document', async (req, res) => {
    const { wallet_address, signature, message, ciphertext_base64, rewrapped_dek, mimetype, kyc_id } = req.body || {};
    if (!wallet_address || !signature || !message || !ciphertext_base64 || !rewrapped_dek) {
        return res.status(400).json({ error: 'MISSING_PARAMETERS' });
    }
    try {
        const recovered = ethers.verifyMessage(message, signature);
        if (recovered.toLowerCase() !== wallet_address.toLowerCase()) {
            return res.status(401).json({ error: 'SIGNATURE_MISMATCH' });
        }

        // Unwrap the DEK locally with this bank's private key, then AES-GCM
        // decrypt the ciphertext. From here on the viewer bank holds the
        // plaintext document — the user explicitly chose to share it.
        const parsed = EthCrypto.cipher.parse(rewrapped_dek);
        const dekBase64 = await EthCrypto.decryptWithPrivateKey(VIEWER_KEYPAIR.privateKey, parsed);
        const dek = Buffer.from(dekBase64, 'base64');
        const blob = Buffer.from(ciphertext_base64, 'base64');

        // Layout matches CryptoService.encryptFile: IV(16) | AuthTag(16) | Ciphertext
        const iv = blob.subarray(0, 16);
        const authTag = blob.subarray(16, 32);
        const body = blob.subarray(32);
        const decipher = require('crypto').createDecipheriv('aes-256-gcm', dek, iv);
        decipher.setAuthTag(authTag);
        const plaintext = Buffer.concat([decipher.update(body), decipher.final()]);

        SHARED_DOCUMENTS.set(wallet_address.toLowerCase(), {
            wallet_address,
            kyc_id: kyc_id || null,
            mimetype: mimetype || 'application/octet-stream',
            plaintext_base64: plaintext.toString('base64'),
            received_at: new Date().toISOString(),
            size_bytes: plaintext.length,
        });

        res.json({
            bank: 'VIEWER_BANK',
            received: true,
            wallet_address,
            size_bytes: plaintext.length,
            note: 'Viewer bank decrypted the document locally using its own private key after the user re-wrapped the DEK.',
        });
    } catch (e) {
        console.error('receive-document error:', e);
        res.status(500).json({ error: 'RECEIVE_FAILED', message: e.message });
    }
});

// SSI: list shared documents (metadata only) and stream the latest one back.
app.get('/api/shared-document/:wallet_address', (req, res) => {
    const entry = SHARED_DOCUMENTS.get(req.params.wallet_address.toLowerCase());
    if (!entry) return res.status(404).json({ error: 'NO_SHARED_DOCUMENT' });
    const ext = ({ 'image/jpeg': 'jpg', 'image/png': 'png', 'application/pdf': 'pdf' })[entry.mimetype] || 'bin';
    res.setHeader('Content-Type', entry.mimetype);
    res.setHeader('Content-Disposition', `attachment; filename="shared-${entry.wallet_address}.${ext}"`);
    res.send(Buffer.from(entry.plaintext_base64, 'base64'));
});

app.get('/api/shared-documents', (req, res) => {
    const items = Array.from(SHARED_DOCUMENTS.values()).map(({ plaintext_base64, ...meta }) => meta);
    res.json({ bank: 'VIEWER_BANK', count: items.length, shared_documents: items });
});

// Selective-disclosure age proof: client supplies Groth16 proof params, we ask
// the AttributeRegistry on chain whether the proof verifies against the user's
// published commitment. Returns boolean — no PII ever travels here.
app.post('/api/verify-age', async (req, res) => {
    if (!attributeRegistry) {
        return res.status(503).json({ error: 'ATTRIBUTE_REGISTRY_NOT_CONFIGURED' });
    }
    const { wallet_address, min_age, current_year, pA, pB, pC } = req.body || {};
    if (!wallet_address || min_age == null || !current_year || !pA || !pB || !pC) {
        return res.status(400).json({ error: 'MISSING_PARAMETERS' });
    }
    if (!ethers.isAddress(wallet_address)) {
        return res.status(400).json({ error: 'INVALID_WALLET_ADDRESS' });
    }
    try {
        // Convert hex/decimal strings to BigInt for the contract call.
        const pAArg = [BigInt(pA[0]), BigInt(pA[1])];
        const pBArg = [
            [BigInt(pB[0][0]), BigInt(pB[0][1])],
            [BigInt(pB[1][0]), BigInt(pB[1][1])],
        ];
        const pCArg = [BigInt(pC[0]), BigInt(pC[1])];

        const verified = await attributeRegistry.verifyAge(
            wallet_address,
            min_age,
            current_year,
            pAArg, pBArg, pCArg,
        );

        const commitment = await attributeRegistry.ageCommitment(wallet_address);
        res.json({
            bank: 'VIEWER_BANK',
            verified,
            wallet_address,
            min_age,
            current_year,
            on_chain_commitment: commitment.toString(),
            note: verified
                ? `User cryptographically proved age >= ${min_age} as of ${current_year} without revealing DOB.`
                : 'Proof failed verification.',
        });
    } catch (e) {
        console.error('verify-age error:', e);
        res.status(500).json({ error: 'VERIFY_FAILED', message: e.shortMessage || e.message });
    }
});

// Get verification status for a wallet address
app.get('/api/verify/:wallet_address', async (req, res) => {
    const { wallet_address } = req.params;

    if (!blockchainReady) {
        return res.status(503).json({
            error: 'BLOCKCHAIN_NOT_AVAILABLE',
            message: 'Blockchain connection not configured'
        });
    }

    try {
        // Validate wallet address format
        if (!ethers.isAddress(wallet_address)) {
            return res.status(400).json({
                error: 'INVALID_WALLET_ADDRESS',
                message: 'Invalid Ethereum address format'
            });
        }

        // Query blockchain (read-only, no authentication needed)
        const isVerified = await contract.isVerified(wallet_address);
        const identity = await contract.registry(wallet_address);

        const validUntil = Number(identity.validUntil);
        const verifiedAt = Number(identity.verifiedAt);

        res.json({
            bank: 'VIEWER_BANK',
            wallet_address,
            is_verified: isVerified,
            identity: {
                ipfs_cid: identity.ipfsCid || null,
                trust_score: Number(identity.trustScore) || null,
                valid_until: validUntil > 0 ? new Date(validUntil * 1000).toISOString() : null,
                verified_at: verifiedAt > 0 ? new Date(verifiedAt * 1000).toISOString() : null,
                active: identity.active,
                has_verification: identity.ipfsCid !== ''
            },
            decision: isVerified
                ? '✅ INSTANT APPROVAL - Verified by another institution'
                : '❌ REQUIRES KYC - No verification found',
            note: isVerified
                ? 'Viewer Bank trusts the verification from the blockchain. No document upload needed.'
                : 'User must complete KYC verification at Signer Bank first.'
        });

    } catch (error) {
        console.error('Blockchain query error:', error);
        res.status(500).json({
            error: 'BLOCKCHAIN_QUERY_FAILED',
            message: error.message
        });
    }
});

// Request document from Signer Bank (with user permission)
app.post('/api/request-document', async (req, res) => {
    const { wallet_address, signature, message } = req.body;

    if (!wallet_address || !signature || !message) {
        return res.status(400).json({
            error: 'MISSING_PARAMETERS',
            message: 'wallet_address, signature, and message are required'
        });
    }

    try {
        // Verify signature (user consent)
        const recoveredAddress = ethers.verifyMessage(message, signature);

        if (recoveredAddress.toLowerCase() !== wallet_address.toLowerCase()) {
            return res.status(401).json({
                error: 'SIGNATURE_MISMATCH',
                message: 'Signature does not match wallet address'
            });
        }

        // Call Signer Bank's document endpoint
        const SIGNER_BANK_URL = process.env.SIGNER_BANK_URL || 'http://localhost:3000';

        const response = await fetch(`${SIGNER_BANK_URL}/api/kyc/my-document`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                wallet_address,
                signature,
                message
            })
        });

        if (!response.ok) {
            const error = await response.json().catch(() => ({ message: 'Failed to retrieve document' }));
            return res.status(response.status).json({
                error: 'DOCUMENT_REQUEST_FAILED',
                message: error.message || `HTTP ${response.status}`,
                note: 'Viewer Bank requested document from Signer Bank but request failed'
            });
        }

        // Get document from Signer Bank
        const contentType = response.headers.get('content-type');
        const contentDisposition = response.headers.get('content-disposition');

        // Forward document to client
        const buffer = await response.arrayBuffer();

        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Disposition', contentDisposition);
        res.setHeader('X-Shared-From', 'SIGNER_BANK');
        res.setHeader('X-Viewer-Bank', 'Document retrieved via inter-institutional query');
        res.send(Buffer.from(buffer));

    } catch (error) {
        console.error('Document request error:', error);
        res.status(500).json({
            error: 'DOCUMENT_REQUEST_FAILED',
            message: error.message
        });
    }
});

// Get transaction history for a wallet address from PolygonScan
app.get('/api/transactions/:wallet_address', async (req, res) => {
    const { wallet_address } = req.params;

    if (!ethers.isAddress(wallet_address)) {
        return res.status(400).json({
            error: 'INVALID_WALLET_ADDRESS',
            message: 'Invalid Ethereum address format'
        });
    }

    try {
        const POLYGONSCAN_API = 'https://api-amoy.polygonscan.com/api';
        const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

        // Fetch transactions from PolygonScan API
        const response = await fetch(
            `${POLYGONSCAN_API}?module=account&action=txlist&address=${wallet_address}&startblock=0&endblock=99999999&sort=desc`
        );

        const data = await response.json();

        if (data.status !== '1') {
            return res.json({
                wallet_address,
                transactions: [],
                total_count: 0,
                kyc_transactions: [],
                polygonscan_url: `https://amoy.polygonscan.com/address/${wallet_address}`
            });
        }

        // Filter KYC-related transactions
        const kycTransactions = data.result.filter(tx =>
            tx.to && tx.to.toLowerCase() === CONTRACT_ADDRESS.toLowerCase()
        );

        // Format transactions
        const formattedTransactions = kycTransactions.map(tx => {
            const methodId = tx.input.substring(0, 10);
            let methodName = 'Unknown';

            if (methodId === '0xc18d5038') methodName = 'registerIdentity()';
            if (methodId === '0x6f5f67b9') methodName = 'flagIdentity()';
            if (methodId === '0x9b2bcb7b') methodName = 'revokeIdentity()';

            return {
                hash: tx.hash,
                block_number: tx.blockNumber,
                timestamp: new Date(parseInt(tx.timeStamp) * 1000).toISOString(),
                from: tx.from,
                to: tx.to,
                method_id: methodId,
                method_name: methodName,
                gas_used: tx.gasUsed,
                gas_price: tx.gasPrice,
                status: tx.txreceipt_status === '1' ? 'success' : 'failed',
                polygonscan_url: `https://amoy.polygonscan.com/tx/${tx.hash}`
            };
        });

        res.json({
            wallet_address,
            total_transactions: data.result.length,
            kyc_transactions: formattedTransactions,
            kyc_transaction_count: formattedTransactions.length,
            polygonscan_url: `https://amoy.polygonscan.com/address/${wallet_address}`,
            contract_address: CONTRACT_ADDRESS
        });

    } catch (error) {
        console.error('Transaction fetch error:', error);
        res.status(500).json({
            error: 'TRANSACTION_FETCH_FAILED',
            message: error.message,
            polygonscan_url: `https://amoy.polygonscan.com/address/${wallet_address}`
        });
    }
});

// Get all verification events from blockchain (optional: for audit/demo)
app.get('/api/recent-verifications', async (req, res) => {
    if (!blockchainReady) {
        return res.status(503).json({
            error: 'BLOCKCHAIN_NOT_AVAILABLE',
            message: 'Blockchain connection not configured'
        });
    }

    try {
        // Query recent IdentityRegistered events
        const filter = contract.filters.IdentityRegistered();
        const events = await contract.queryFilter(filter, -1000); // Last 1000 blocks

        const verifications = events.slice(-10).reverse().map(event => ({
            wallet_address: event.args.user,
            ipfs_cid: event.args.ipfsCid,
            valid_until: new Date(Number(event.args.validUntil) * 1000).toISOString(),
            block_number: event.blockNumber,
            transaction_hash: event.transactionHash
        }));

        res.json({
            bank: 'VIEWER_BANK',
            recent_verifications: verifications,
            count: verifications.length,
            note: 'These are verifications performed by other institutions (visible to all)'
        });

    } catch (error) {
        console.error('Event query error:', error);
        res.status(500).json({
            error: 'EVENT_QUERY_FAILED',
            message: error.message
        });
    }
});

// Start server
async function start() {
    await initBlockchain();

    app.listen(PORT, () => {
        console.log('\n' + '='.repeat(60));
        console.log('🏦 VIEWER BANK - Started');
        console.log('='.repeat(60));
        console.log(`📍 Server: http://localhost:${PORT}`);
        console.log(`🔗 Blockchain: ${blockchainReady ? 'Connected' : 'Not configured'}`);
        console.log(`📜 Contract: ${CONTRACT_ADDRESS || 'Not set'}`);
        console.log('\n💡 This bank ONLY reads from blockchain');
        console.log('   - No database');
        console.log('   - No IPFS node');
        console.log('   - No AI service');
        console.log('   - Just blockchain queries\n');
        console.log('='.repeat(60) + '\n');
    });
}

start().catch(console.error);
