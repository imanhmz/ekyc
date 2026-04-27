const { expect } = require("chai");
const { ethers } = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");

describe("KYCRegistry", function () {
    let registry;
    let owner;
    let user1;
    let user2;
    let nonOwner;

    const IPFS_CID = "QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco";
    const TRUST_SCORE = 87;
    const SIX_MONTHS = 180 * 24 * 60 * 60;

    beforeEach(async function () {
        [owner, user1, user2, nonOwner] = await ethers.getSigners();
        const KYCRegistry = await ethers.getContractFactory("KYCRegistry");
        registry = await KYCRegistry.deploy();
        await registry.waitForDeployment();
    });

    // ─── registerIdentity ───────────────────────────────────────

    describe("registerIdentity", function () {
        it("should register an identity and emit event", async function () {
            const now = await time.latest();
            const validUntil = now + SIX_MONTHS;

            await expect(
                registry.registerIdentity(user1.address, IPFS_CID, validUntil, TRUST_SCORE)
            )
                .to.emit(registry, "IdentityRegistered")
                .withArgs(user1.address, IPFS_CID, validUntil);

            const identity = await registry.registry(user1.address);
            expect(identity.ipfsCid).to.equal(IPFS_CID);
            expect(identity.trustScore).to.equal(TRUST_SCORE);
            expect(identity.active).to.be.true;
        });

        it("should allow updating an existing identity", async function () {
            const now = await time.latest();
            const validUntil = now + SIX_MONTHS;

            await registry.registerIdentity(user1.address, IPFS_CID, validUntil, TRUST_SCORE);
            const newCid = "QmNewCidExample";
            await registry.registerIdentity(user1.address, newCid, validUntil + 86400, 95);

            const identity = await registry.registry(user1.address);
            expect(identity.ipfsCid).to.equal(newCid);
            expect(identity.trustScore).to.equal(95);
        });

        it("should revert when called by non-owner", async function () {
            const now = await time.latest();
            await expect(
                registry.connect(nonOwner).registerIdentity(user1.address, IPFS_CID, now + SIX_MONTHS, TRUST_SCORE)
            ).to.be.revertedWithCustomError(registry, "OwnableUnauthorizedAccount");
        });
    });

    // ─── isVerified ─────────────────────────────────────────────

    describe("isVerified", function () {
        it("should return true for an active, non-expired identity", async function () {
            const now = await time.latest();
            await registry.registerIdentity(user1.address, IPFS_CID, now + SIX_MONTHS, TRUST_SCORE);
            expect(await registry.isVerified(user1.address)).to.be.true;
        });

        it("should return false for an expired identity", async function () {
            const now = await time.latest();
            const shortExpiry = now + 60; // 1 minute
            await registry.registerIdentity(user1.address, IPFS_CID, shortExpiry, TRUST_SCORE);

            // Advance time past expiry
            await time.increase(120);
            expect(await registry.isVerified(user1.address)).to.be.false;
        });

        it("should return false for an unregistered address", async function () {
            expect(await registry.isVerified(user2.address)).to.be.false;
        });
    });

    // ─── flagIdentity ────────────────────────────────────────────

    describe("flagIdentity", function () {
        it("should flag an active identity and emit event", async function () {
            const now = await time.latest();
            await registry.registerIdentity(user1.address, IPFS_CID, now + SIX_MONTHS, TRUST_SCORE);

            await expect(registry.flagIdentity(user1.address, "DEEPFAKE_DETECTED"))
                .to.emit(registry, "IdentityFlagged")
                .withArgs(user1.address, "DEEPFAKE_DETECTED");

            expect(await registry.isVerified(user1.address)).to.be.false;
            const identity = await registry.registry(user1.address);
            expect(identity.active).to.be.false;
        });

        it("should revert when flagging an inactive identity", async function () {
            const now = await time.latest();
            await registry.registerIdentity(user1.address, IPFS_CID, now + SIX_MONTHS, TRUST_SCORE);
            await registry.flagIdentity(user1.address, "REASON_1");

            await expect(
                registry.flagIdentity(user1.address, "REASON_2")
            ).to.be.revertedWith("Identity not active");
        });

        it("should revert when called by non-owner", async function () {
            const now = await time.latest();
            await registry.registerIdentity(user1.address, IPFS_CID, now + SIX_MONTHS, TRUST_SCORE);
            await expect(
                registry.connect(nonOwner).flagIdentity(user1.address, "REASON")
            ).to.be.revertedWithCustomError(registry, "OwnableUnauthorizedAccount");
        });
    });

    // ─── revokeIdentity ─────────────────────────────────────────

    describe("revokeIdentity", function () {
        it("should completely remove an identity and emit event", async function () {
            const now = await time.latest();
            await registry.registerIdentity(user1.address, IPFS_CID, now + SIX_MONTHS, TRUST_SCORE);

            await expect(registry.revokeIdentity(user1.address))
                .to.emit(registry, "IdentityRevoked")
                .withArgs(user1.address);

            const identity = await registry.registry(user1.address);
            expect(identity.ipfsCid).to.equal("");
            expect(identity.trustScore).to.equal(0);
            expect(await registry.isVerified(user1.address)).to.be.false;
        });

        it("should revert when called by non-owner", async function () {
            const now = await time.latest();
            await registry.registerIdentity(user1.address, IPFS_CID, now + SIX_MONTHS, TRUST_SCORE);
            await expect(
                registry.connect(nonOwner).revokeIdentity(user1.address)
            ).to.be.revertedWithCustomError(registry, "OwnableUnauthorizedAccount");
        });
    });

    // ─── Trust Token Expiry Scenarios ───────────────────────────

    describe("Trust Token expiry tiers", function () {
        it("standard pass: active for 180 days", async function () {
            const now = await time.latest();
            const expiry = now + SIX_MONTHS;
            await registry.registerIdentity(user1.address, IPFS_CID, expiry, 85);

            // Still valid at 179 days
            await time.increase(179 * 24 * 60 * 60);
            expect(await registry.isVerified(user1.address)).to.be.true;

            // Expired at 181 days
            await time.increase(2 * 24 * 60 * 60);
            expect(await registry.isVerified(user1.address)).to.be.false;
        });
    });
});
