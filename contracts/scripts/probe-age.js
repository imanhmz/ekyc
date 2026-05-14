const { ethers } = require("hardhat");
async function main() {
  const ar = await ethers.getContractAt("AttributeRegistry", "0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0");
  console.log("ageVerifier:", await ar.ageVerifier());
  console.log("owner:      ", await ar.owner());
}
main().catch(e => { console.error(e); process.exit(1); });
