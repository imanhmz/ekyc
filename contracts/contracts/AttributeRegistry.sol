// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

/// IAgeVerifier — minimal interface for the snarkjs-generated AgeVerifier.
interface IAgeVerifier {
    function verifyProof(
        uint[2] calldata pA,
        uint[2][2] calldata pB,
        uint[2] calldata pC,
        uint[3] calldata pubSignals
    ) external view returns (bool);
}

/// AttributeRegistry — attribute-level selective disclosure (Piper et al. 2025 pattern).
///
/// The signer bank publishes a Poseidon commitment per user at approval time. The
/// commitment hides the user's date-of-birth (and salt); the bank can no longer
/// reveal the DOB on chain. A verifier bank can later ask the contract:
/// "given the user's published commitment, does the user prove `age >= minAge`?"
/// The contract calls AgeVerifier with the supplied proof + (commitment, minAge,
/// currentYear) and returns the boolean answer. No personal data is ever stored
/// or revealed on chain.
contract AttributeRegistry is Ownable {

    IAgeVerifier public immutable ageVerifier;

    /// Poseidon(dobYear, salt) per user. Zero == no commitment registered.
    mapping(address => uint256) public ageCommitment;

    event AgeCommitmentSet(address indexed user, uint256 commitment);
    event AgeCommitmentCleared(address indexed user);

    constructor(address ageVerifierAddress) Ownable(msg.sender) {
        ageVerifier = IAgeVerifier(ageVerifierAddress);
    }

    /// Bank publishes the user's age commitment at KYC approval time.
    function setAgeCommitment(address user, uint256 commitment) external onlyOwner {
        ageCommitment[user] = commitment;
        emit AgeCommitmentSet(user, commitment);
    }

    /// GDPR Article 17: a user requests erasure → bank wipes the commitment.
    /// The proof witness held by the user becomes unverifiable.
    function clearAgeCommitment(address user) external onlyOwner {
        delete ageCommitment[user];
        emit AgeCommitmentCleared(user);
    }

    /// Verifier-side check. Returns true iff:
    ///   1. a commitment exists for `user`
    ///   2. the supplied Groth16 proof is valid for (commitment, minAge, currentYear)
    /// Anyone (e.g. a viewer bank) can call this; it is view-only and costs no gas.
    function verifyAge(
        address user,
        uint8 minAge,
        uint16 currentYear,
        uint[2] calldata pA,
        uint[2][2] calldata pB,
        uint[2] calldata pC
    ) external view returns (bool) {
        uint256 commitment = ageCommitment[user];
        if (commitment == 0) return false;

        uint[3] memory pubSignals = [
            commitment,
            uint256(minAge),
            uint256(currentYear)
        ];
        return ageVerifier.verifyProof(pA, pB, pC, pubSignals);
    }
}
