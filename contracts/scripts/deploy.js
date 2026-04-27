const hre = require("hardhat");

async function main() {
    console.log("Deploying KYCRegistry...");

    const KYCRegistry = await hre.ethers.getContractFactory("KYCRegistry");
    const registry = await KYCRegistry.deploy();
    await registry.waitForDeployment();

    const address = await registry.getAddress();
    console.log(`KYCRegistry deployed to: ${address}`);
    console.log(`\nAdd this to your .env file:`);
    console.log(`CONTRACT_ADDRESS=${address}`);
    console.log(`BLOCKCHAIN_RPC_URL=http://127.0.0.1:8545`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
