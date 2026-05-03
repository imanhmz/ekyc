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
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const app = express();
const PORT = process.env.VIEWER_BANK_PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Blockchain connection (SAME contract as Signer Bank)
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const BLOCKCHAIN_RPC_URL = process.env.BLOCKCHAIN_RPC_URL;

// Load contract ABI from Signer Bank
const contractABI = require('../../backend/src/blockchain/KYCRegistry.abi.json');

let provider;
let contract;
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
