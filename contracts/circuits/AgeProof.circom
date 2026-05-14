pragma circom 2.0.0;

include "../node_modules/circomlib/circuits/poseidon.circom";
include "../node_modules/circomlib/circuits/comparators.circom";

// Selective-disclosure age proof (Piper et al. 2025 style).
//
// At approval time the bank computes commitment = Poseidon(dobYear, salt) and
// publishes it on chain. The user holds the witness (dobYear, salt) — wrapped
// to their wallet pubkey alongside the document DEK. To prove "I am at least
// minAge years old as of currentYear", the user generates this proof in their
// browser. The circuit checks:
//
//   1. Poseidon(dobYear, salt) == commitment    (the witness matches the bank's commitment)
//   2. currentYear - dobYear >= minAge          (the age predicate holds)
//
// Both checks happen in zero-knowledge: the verifier learns only that the
// statement is true. The exact dobYear and salt never leave the user.

template AgeProof() {
    signal input dobYear;        // private — e.g. 1990
    signal input salt;           // private — random field element

    signal input commitment;     // public  — Poseidon(dobYear, salt)
    signal input minAge;         // public  — e.g. 18
    signal input currentYear;    // public  — e.g. 2026

    // 1. Recompute commitment from the witness and assert equality.
    component hasher = Poseidon(2);
    hasher.inputs[0] <== dobYear;
    hasher.inputs[1] <== salt;
    commitment === hasher.out;

    // 2. Check the age predicate: (currentYear - dobYear) >= minAge.
    //    12 bits is plenty for any plausible (currentYear - dobYear).
    component gte = GreaterEqThan(12);
    gte.in[0] <== currentYear - dobYear;
    gte.in[1] <== minAge;
    gte.out === 1;
}

component main {public [commitment, minAge, currentYear]} = AgeProof();
