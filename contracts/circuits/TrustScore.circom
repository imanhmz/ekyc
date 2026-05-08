pragma circom 2.0.0;

include "../node_modules/circomlib/circuits/comparators.circom";

// Proves that score >= threshold without revealing the actual score.
// score   = private input  (the real trust score, 0-100)
// threshold = public input (always 75, but public so the verifier can check it on-chain)
template TrustScoreProof() {
    signal input score;
    signal input threshold;

    // 8 bits handles values 0-255, enough for 0-100
    component gte = GreaterEqThan(8);
    gte.in[0] <== score;
    gte.in[1] <== threshold;

    // Hard constraint: proof is invalid if score < threshold
    gte.out === 1;
}

component main {public [threshold]} = TrustScoreProof();
