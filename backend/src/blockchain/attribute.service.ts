import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ethers } from 'ethers';
import * as crypto from 'crypto';
import * as AttributeRegistryAbi from './AttributeRegistry.abi.json';

// circomlibjs is CJS with async init.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const circomlibjs = require('circomlibjs');

export interface AgeWitness {
    dobYear: number;
    salt: string; // decimal string of a field element
}

/**
 * AttributeService - selective-disclosure attribute proofs (Piper et al. 2025).
 *
 * At KYC approval the backend:
 *   1. Extracts dob_year from OCR data
 *   2. Generates a random salt (field-bounded)
 *   3. Computes commitment = Poseidon(dobYear, salt)
 *   4. Writes the commitment on chain via AttributeRegistry.setAgeCommitment
 *   5. Hands the witness (dobYear, salt) back to the user — they ECIES-wrap it
 *      with their wallet pubkey just like the document DEK, so only the user
 *      can later generate ZK age proofs.
 *
 * The bank stops being able to prove the user's age unilaterally the moment it
 * destroys the witness. Only the on-chain commitment remains, which leaks no
 * information without a matching ZKP from the user.
 */
@Injectable()
export class AttributeService implements OnModuleInit {
    private readonly logger = new Logger(AttributeService.name);

    private provider: ethers.JsonRpcProvider;
    private wallet: ethers.Wallet;
    private contract: ethers.Contract;
    private poseidon: any;
    private ready = false;

    async onModuleInit() {
        try {
            const rpcUrl = process.env.BLOCKCHAIN_RPC_URL || 'http://127.0.0.1:8545';
            const privateKey = process.env.PRIVATE_KEY;
            const contractAddress = process.env.ATTRIBUTE_REGISTRY_ADDRESS;

            if (!privateKey || !contractAddress) {
                this.logger.warn('AttributeRegistry not configured — attribute proofs disabled');
                return;
            }

            this.provider = new ethers.JsonRpcProvider(rpcUrl);
            this.wallet = new ethers.Wallet(privateKey, this.provider);
            this.contract = new ethers.Contract(contractAddress, AttributeRegistryAbi, this.wallet);

            // Poseidon over BN128 — must match the circuit hash.
            this.poseidon = await circomlibjs.buildPoseidon();
            this.ready = true;
            this.logger.log(`AttributeRegistry connected at ${contractAddress}`);
        } catch (e) {
            this.logger.warn(`AttributeService init failed: ${e.message}`);
        }
    }

    isReady(): boolean { return this.ready; }

    /**
     * Compute Poseidon(dobYear, salt) and return the commitment as a decimal string.
     * Decimal-string interop with circom and ethers.js avoids any 0x-prefix ambiguity.
     */
    computeCommitment(dobYear: number, saltDecimal: string): string {
        const hash = this.poseidon([BigInt(dobYear), BigInt(saltDecimal)]);
        return this.poseidon.F.toString(hash);
    }

    /**
     * Generate a random salt in the BN128 scalar field.
     * 31 bytes (248 bits) is comfortably below the field modulus (~254 bits).
     */
    generateSalt(): string {
        return BigInt('0x' + crypto.randomBytes(31).toString('hex')).toString();
    }

    /**
     * Build the witness and on-chain commitment for the user's date of birth.
     * Returns the commitment (for the chain) and the witness (to be wrapped to
     * the user's pubkey and stored in their record).
     */
    buildAgeWitness(dobYear: number): { commitment: string; witness: AgeWitness } {
        const salt = this.generateSalt();
        const commitment = this.computeCommitment(dobYear, salt);
        return { commitment, witness: { dobYear, salt } };
    }

    /**
     * Publish the commitment on chain. Idempotent: writing twice for the same
     * user just overwrites — useful when the user re-verifies.
     */
    async publishAgeCommitment(userAddress: string, commitment: string): Promise<string | null> {
        if (!this.ready) return null;
        const tx = await this.contract.setAgeCommitment(userAddress, BigInt(commitment));
        const receipt = await tx.wait();
        return receipt.hash;
    }
}
