const { ethers } = require("hardhat");
async function main() {
  const c = await ethers.getContractAt("KYCRegistry", "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853");
  const verifier = await c.verifier();
  const owner = await c.owner();
  const signers = await ethers.getSigners();
  console.log("verifier:", verifier);
  console.log("owner:", owner);
  console.log("signer0:", signers[0].address);

  const zero = [0n, 0n];
  const zero2 = [[0n, 0n], [0n, 0n]];
  try {
    const tx = await c.registerIdentity.staticCall(
      "0x9B2679350C9B28b8a2a54f40C576AC8E3Fd87B6e",
      "QmTest",
      Math.floor(Date.now() / 1000) + 86400,
      99,
      zero, zero2, zero
    );
    console.log("static call OK with zero proof");
  } catch (e) {
    console.log("revert reason (zero proof):", e.shortMessage || e.message);
  }
}
main().catch(e => { console.error(e); process.exit(1); });
