#!/usr/bin/env bash
# Trusted setup for the AgeProof circuit (attribute-level selective disclosure).
# Assumes zkp-setup.sh has already been run once so that:
#   - bin/circom2 exists
#   - node_modules/snarkjs and node_modules/circomlib are installed
#   - circuits/build/pot12_final.ptau exists (we reuse the Powers of Tau from TrustScore)
#
# Run from contracts/ directory:  bash scripts/zkp-age-setup.sh
set -e

CIRCUITS_DIR="circuits"
BUILD_DIR="circuits/build"
ARTIFACTS_DIR="../backend/zkp-artifacts"

echo "=== ZKP Setup for AgeProof circuit ==="

# Resolve circom 2.x binary
if [ -f "bin/circom2" ]; then
    CIRCOM_BIN="./bin/circom2"
elif circom --version 2>/dev/null | grep -q "^2"; then
    CIRCOM_BIN="circom"
else
    echo "ERROR: circom 2.x not found. Run zkp-setup.sh first."
    exit 1
fi

# Powers of Tau must already exist. Poseidon needs > 2^12 constraints, so we
# bump to 14 if pot14 doesn't exist yet.
PTAU_FILE="$BUILD_DIR/pot14_final.ptau"
if [ ! -f "$PTAU_FILE" ]; then
    echo "[1/6] pot14 not found — generating Powers of Tau (bn128, 14)..."
    mkdir -p "$BUILD_DIR"
    npx snarkjs powersoftau new bn128 14 "$BUILD_DIR/pot14_0000.ptau" -v
    npx snarkjs powersoftau contribute \
        "$BUILD_DIR/pot14_0000.ptau" \
        "$BUILD_DIR/pot14_0001.ptau" \
        --name="kyc-thesis-age-setup" -v \
        -e="age proof entropy $(date +%s)"
    npx snarkjs powersoftau prepare phase2 \
        "$BUILD_DIR/pot14_0001.ptau" \
        "$PTAU_FILE" -v
else
    echo "[1/6] Reusing existing pot14_final.ptau"
fi

echo "[2/6] Compiling AgeProof.circom..."
$CIRCOM_BIN "$CIRCUITS_DIR/AgeProof.circom" \
    --r1cs --wasm --sym \
    -o "$BUILD_DIR" \
    -l node_modules

echo "[3/6] Groth16 circuit-specific setup..."
npx snarkjs groth16 setup \
    "$BUILD_DIR/AgeProof.r1cs" \
    "$PTAU_FILE" \
    "$BUILD_DIR/age_0000.zkey"

echo "[4/6] Contributing to zkey..."
npx snarkjs zkey contribute \
    "$BUILD_DIR/age_0000.zkey" \
    "$BUILD_DIR/age_final.zkey" \
    --name="kyc-thesis-age-zkey" -v \
    -e="age zkey entropy $(date +%s)"

echo "[5/6] Exporting AgeVerifier.sol..."
npx snarkjs zkey export solidityverifier \
    "$BUILD_DIR/age_final.zkey" \
    "contracts/AgeVerifier.sol"

# snarkjs names every generated contract "Groth16Verifier". Rename to avoid
# clashing with the existing Verifier.sol when both are compiled by Hardhat.
sed -i 's/contract Groth16Verifier/contract AgeVerifier/' contracts/AgeVerifier.sol

echo "[6/6] Copying proving artifacts to backend..."
mkdir -p "$ARTIFACTS_DIR"
cp "$BUILD_DIR/AgeProof_js/AgeProof.wasm" "$ARTIFACTS_DIR/AgeProof.wasm"
cp "$BUILD_DIR/age_final.zkey"            "$ARTIFACTS_DIR/age_final.zkey"

# Also copy to frontend public/ so the browser can fetch them for in-browser
# proof generation.
FRONTEND_PUBLIC="../frontend/public/zkp"
mkdir -p "$FRONTEND_PUBLIC"
cp "$BUILD_DIR/AgeProof_js/AgeProof.wasm" "$FRONTEND_PUBLIC/AgeProof.wasm"
cp "$BUILD_DIR/age_final.zkey"            "$FRONTEND_PUBLIC/age_final.zkey"

echo ""
echo "=== AgeProof setup complete! ==="
echo ""
echo "Artifacts:"
echo "  backend/zkp-artifacts/AgeProof.wasm"
echo "  backend/zkp-artifacts/age_final.zkey"
echo "  frontend/public/zkp/AgeProof.wasm        (for in-browser proof gen)"
echo "  frontend/public/zkp/age_final.zkey       (for in-browser proof gen)"
echo "  contracts/AgeVerifier.sol                (deployed by deploy.js)"
