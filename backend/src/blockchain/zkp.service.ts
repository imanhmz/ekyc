import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

export interface ZkProof {
    pA: [bigint, bigint];
    pB: [[bigint, bigint], [bigint, bigint]];
    pC: [bigint, bigint];
}

// Zero proof passed when ZKP is disabled (contract in dev mode ignores it)
const ZERO_PROOF: ZkProof = {
    pA: [0n, 0n],
    pB: [[0n, 0n], [0n, 0n]],
    pC: [0n, 0n],
};

@Injectable()
export class ZkpService {
    private readonly logger = new Logger(ZkpService.name);
    private readonly PASS_THRESHOLD = 75;
    private readonly enabled: boolean;

    private readonly wasmPath: string;
    private readonly zkeyPath: string;

    constructor() {
        this.enabled = process.env.ZKP_ENABLED === 'true';

        const artifactsDir = path.resolve(
            process.env.ZKP_ARTIFACTS_PATH || path.join(__dirname, '../../zkp-artifacts')
        );
        this.wasmPath = path.join(artifactsDir, 'TrustScore.wasm');
        this.zkeyPath = path.join(artifactsDir, 'trust_final.zkey');

        if (this.enabled) {
            const wasmOk = fs.existsSync(this.wasmPath);
            const zkeyOk = fs.existsSync(this.zkeyPath);
            if (!wasmOk || !zkeyOk) {
                this.logger.warn(
                    'ZKP_ENABLED=true but artifacts missing. ' +
                    'Run: cd contracts && bash scripts/zkp-setup.sh'
                );
                (this as any).enabled = false;
            } else {
                this.logger.log('ZKP enabled — artifacts found.');
            }
        } else {
            this.logger.log('ZKP disabled (set ZKP_ENABLED=true to enable).');
        }
    }

    async generateProof(trustScore: number): Promise<ZkProof> {
        if (!this.enabled) {
            return ZERO_PROOF;
        }

        // Lazy-load snarkjs to avoid import issues when ZKP is disabled
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const { groth16 } = require('snarkjs');

        const input = {
            score: trustScore,
            threshold: this.PASS_THRESHOLD,
        };

        this.logger.log(`Generating ZK proof for score=${trustScore}...`);
        const { proof } = await groth16.fullProve(input, this.wasmPath, this.zkeyPath);

        // Convert to BigInt arrays for ethers.js contract call.
        // pB elements are swapped per Groth16 Solidity convention.
        return {
            pA: [BigInt(proof.pi_a[0]), BigInt(proof.pi_a[1])],
            pB: [
                [BigInt(proof.pi_b[0][1]), BigInt(proof.pi_b[0][0])],
                [BigInt(proof.pi_b[1][1]), BigInt(proof.pi_b[1][0])],
            ],
            pC: [BigInt(proof.pi_c[0]), BigInt(proof.pi_c[1])],
        };
    }
}
