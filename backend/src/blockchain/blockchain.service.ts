import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ethers } from 'ethers';
import * as KYCRegistryAbi from './KYCRegistry.abi.json';

@Injectable()
export class BlockchainService implements OnModuleInit {
    private readonly logger = new Logger(BlockchainService.name);
    private provider: ethers.JsonRpcProvider;
    private wallet: ethers.Wallet;
    private contract: ethers.Contract;
    private ready = false;

    async onModuleInit() {
        try {
            const rpcUrl = process.env.BLOCKCHAIN_RPC_URL || 'http://127.0.0.1:8545';
            const privateKey = process.env.PRIVATE_KEY;
            const contractAddress = process.env.CONTRACT_ADDRESS;
            console.log({
                rpcUrl,privateKey,contractAddress
            })
            if (!privateKey || !contractAddress) {
                this.logger.warn('Blockchain not configured (PRIVATE_KEY or CONTRACT_ADDRESS missing). Blockchain features disabled.');
                return;
            }

            this.provider = new ethers.JsonRpcProvider(rpcUrl);
            this.wallet = new ethers.Wallet(privateKey, this.provider);
            this.contract = new ethers.Contract(contractAddress, KYCRegistryAbi, this.wallet);
            this.ready = true;
            this.logger.log(`Blockchain connected to ${rpcUrl}, contract: ${contractAddress}`);
        } catch (e) {
            this.logger.warn(`Blockchain init failed: ${e.message}`);
        }
    }

    async registerIdentity(address: string, ipfsCid: string, validUntil: number, trustScore: number): Promise<string | null> {
        if (!this.ready) return null;
        const tx = await this.contract.registerIdentity(address, ipfsCid, validUntil, trustScore);
        const receipt = await tx.wait();
        return receipt.hash;
    }

    async flagIdentity(address: string, reason: string): Promise<string | null> {
        if (!this.ready) return null;
        const tx = await this.contract.flagIdentity(address, reason);
        const receipt = await tx.wait();
        return receipt.hash;
    }

    async isVerified(address: string): Promise<any> {
        if (!this.ready) {
            return { address, is_verified: false, is_active: false, error: 'Blockchain not configured' };
        }
        const identity = await this.contract.registry(address);
        const isVerified = await this.contract.isVerified(address);
        return {
            address,
            is_verified: isVerified,
            is_active: identity.active,
            ipfs_cid: identity.ipfsCid,
            trust_score: Number(identity.trustScore),
            valid_until: new Date(Number(identity.validUntil) * 1000).toISOString(),
        };
    }
}
