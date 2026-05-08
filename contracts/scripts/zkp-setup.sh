#!/usr/bin/env bash
# ZKP Trusted Setup for TrustScore circuit
# Run once from the contracts/ directory: bash scripts/zkp-setup.sh
set -e

CIRCUITS_DIR="circuits"
BUILD_DIR="circuits/build"
ARTIFACTS_DIR="../backend/zkp-artifacts"

echo "=== ZKP Setup for TrustScore circuit ==="

# 1. Install npm dependencies (circomlib, snarkjs)
echo "[1/9] Installing npm dependencies..."
npm install --silent

# 2. Resolve circom 2.x binary
# The globally installed 'circom' is v1.x and does not support pragma circom 2.0.0.
# We need circom 2.x (Rust-based). Download it locally if not already present.
CIRCOM_BIN=""

# Check if a local binary already exists
if [ -f "bin/circom2" ]; then
    CIRCOM_BIN="./bin/circom2"
    echo "[2/9] Using cached circom 2.x at bin/circom2"
# Check if 'circom' in PATH is already version 2.x
elif circom --version 2>/dev/null | grep -q "^2"; then
    CIRCOM_BIN="circom"
    echo "[2/9] circom 2.x found at $(which circom)"
else
    # Download circom 2.x binary from GitHub releases
    echo "[2/9] Downloading circom 2.x binary (current circom is v1.x)..."
    mkdir -p bin

    ARCH=$(uname -m)
    OS=$(uname -s)
    if [ "$OS" = "Linux" ] && [ "$ARCH" = "x86_64" ]; then
        CIRCOM_URL="https://github.com/iden3/circom/releases/latest/download/circom-linux-amd64"
    elif [ "$OS" = "Linux" ] && [ "$ARCH" = "aarch64" ]; then
        CIRCOM_URL="https://github.com/iden3/circom/releases/latest/download/circom-linux-arm64"
    elif [ "$OS" = "Darwin" ]; then
        CIRCOM_URL="https://github.com/iden3/circom/releases/latest/download/circom-macos-amd64"
    else
        echo "ERROR: Unsupported OS/arch: $OS/$ARCH"
        echo "Please install circom 2.x manually: https://docs.circom.io/getting-started/installation/"
        exit 1
    fi

    curl -L -s "$CIRCOM_URL" -o bin/circom2
    chmod +x bin/circom2
    CIRCOM_BIN="./bin/circom2"
    echo "      => Downloaded to bin/circom2"
fi

# 3. Create build directory
mkdir -p "$BUILD_DIR"
mkdir -p "$ARTIFACTS_DIR"

# 4. Compile the circuit
echo "[3/9] Compiling TrustScore.circom with circom 2.x..."
$CIRCOM_BIN "$CIRCUITS_DIR/TrustScore.circom" \
    --r1cs --wasm --sym \
    -o "$BUILD_DIR" \
    -l node_modules
echo "      => r1cs and wasm generated"

# 5. Powers of Tau (phase 1)
echo "[4/9] Creating Powers of Tau (bn128, 12 constraints)..."
npx snarkjs powersoftau new bn128 12 "$BUILD_DIR/pot12_0000.ptau" -v

echo "[5/9] Contributing to ceremony (phase 1)..."
npx snarkjs powersoftau contribute \
    "$BUILD_DIR/pot12_0000.ptau" \
    "$BUILD_DIR/pot12_0001.ptau" \
    --name="kyc-thesis-setup" -v \
    -e="KYC thesis ZKP entropy $(date +%s)"

echo "[6/9] Preparing phase 2..."
npx snarkjs powersoftau prepare phase2 \
    "$BUILD_DIR/pot12_0001.ptau" \
    "$BUILD_DIR/pot12_final.ptau" -v

# 6. Groth16 trusted setup (phase 2)
echo "[7/9] Groth16 circuit-specific setup..."
npx snarkjs groth16 setup \
    "$BUILD_DIR/TrustScore.r1cs" \
    "$BUILD_DIR/pot12_final.ptau" \
    "$BUILD_DIR/trust_0000.zkey"

echo "[8/9] Contributing to zkey..."
npx snarkjs zkey contribute \
    "$BUILD_DIR/trust_0000.zkey" \
    "$BUILD_DIR/trust_final.zkey" \
    --name="kyc-thesis-zkey" -v \
    -e="zkey entropy $(date +%s)"

# 7. Export Solidity verifier
echo "[9/9] Exporting Verifier.sol..."
npx snarkjs zkey export solidityverifier \
    "$BUILD_DIR/trust_final.zkey" \
    "contracts/Verifier.sol"
echo "      => contracts/Verifier.sol created"

# 8. Copy proving artifacts to backend
echo "Copying proving artifacts to backend..."
cp "$BUILD_DIR/TrustScore_js/TrustScore.wasm" "$ARTIFACTS_DIR/TrustScore.wasm"
cp "$BUILD_DIR/trust_final.zkey"              "$ARTIFACTS_DIR/trust_final.zkey"

echo ""
echo "=== Setup complete! ==="
echo ""
echo "Next steps:"
echo "  1. Redeploy contracts (deploys Verifier.sol + KYCRegistry):"
echo "     npx hardhat node         # Terminal 1"
echo "     npm run deploy:local     # Terminal 2"
echo ""
echo "  2. Add to .env:"
echo "     CONTRACT_ADDRESS=0x...   (printed by deploy script)"
echo "     VERIFIER_ADDRESS=0x...   (printed by deploy script)"
echo "     ZKP_ENABLED=true"
echo ""
echo "  3. Restart backend — ZKP proofs are generated automatically."
