// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract KYCRegistry is Ownable {

    struct Identity {
        string  ipfsCid;          // IPFS content identifier (no raw PII)
        uint256 validUntil;       // Unix timestamp — Trust Token expiry
        uint8   trustScore;       // 0–100, recorded at time of verification
        bool    active;           // false = flagged for re-check
        uint256 verifiedAt;       // Unix timestamp of initial verification
    }

    // address = user's wallet address (or a hashed user_id for GDPR)
    mapping(address => Identity) public registry;

    event IdentityRegistered(address indexed user, string ipfsCid, uint256 validUntil);
    event IdentityFlagged(address indexed user, string reason);
    event IdentityRevoked(address indexed user);

    constructor() Ownable(msg.sender) {}

    /// Register or update a verified identity
    function registerIdentity(
        address user,
        string calldata ipfsCid,
        uint256 validUntil,
        uint8 trustScore
    ) external onlyOwner {
        registry[user] = Identity({
            ipfsCid:     ipfsCid,
            validUntil:  validUntil,
            trustScore:  trustScore,
            active:      true,
            verifiedAt:  block.timestamp
        });
        emit IdentityRegistered(user, ipfsCid, validUntil);
    }

    /// Flag identity for re-verification (Live-Check trigger)
    function flagIdentity(address user, string calldata reason) external onlyOwner {
        require(registry[user].active, "Identity not active");
        registry[user].active = false;
        emit IdentityFlagged(user, reason);
    }

    /// Revoke identity entirely (e.g., fraud confirmed)
    function revokeIdentity(address user) external onlyOwner {
        delete registry[user];
        emit IdentityRevoked(user);
    }

    /// Check if an address has a live, non-expired verification
    function isVerified(address user) external view returns (bool) {
        Identity memory id = registry[user];
        return id.active && block.timestamp < id.validUntil;
    }
}
