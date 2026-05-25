%%{init: {'theme':'base', 'themeVariables': {'fontSize':'14px', 'fontFamily':'Arial'}, 'flowchart': {'nodeSpacing':25, 'rankSpacing':50}}}%%
graph TB
    subgraph ENC["1 — Encryption Step (AES-256-GCM)"]
        direction TB
        DOC["<b>Original Document</b><br/>passport.jpg • 2.5 MB"]
        KEY["Generate AES-256 DEK<br/>32 bytes (random)"]
        IV["Generate IV<br/>16 bytes (random)"]
        ENCOP["Encrypt with AES-256-GCM"]
        TAG["Auth Tag (16 bytes)"]
        CIPHER["<b>Encrypted File</b><br/>IV + Tag + Ciphertext"]
    end

    subgraph IPFSUP["2 — IPFS Upload"]
        direction TB
        UP["Upload to IPFS"]
        CID["Receive CID"]
    end

    subgraph SSI["3 — SSI Wrap-and-Shred at Approval"]
        direction TB
        UPK["User's secp256k1 pubkey<br/>derived from wallet signature"]
        WRAP["ECIES wrap DEK<br/>(eth-crypto)"]
        WRAPPED[("<b>wrapped_encryption_key</b><br/>only user can unwrap")]
        SHRED["NULL encryption_key<br/>plaintext destroyed"]
    end

    subgraph ANCHOR["4 — On-Chain Anchoring"]
        direction TB
        ZKP["Groth16 trust-score proof"]
        REG["<b>KYCRegistry.registerIdentity</b><br/>CID + ZKP"]
    end

    subgraph RET["5 — SSI Retrieval (in user's browser)"]
        direction TB
        SIG["personal_sign challenge<br/>derive uPriv in RAM"]
        FETCH_C["Fetch ciphertext + wrapped DEK<br/>POST /wrapped-document/by-wallet"]
        UNW["ECIES unwrap DEK (local)"]
        DEC["WebCrypto AES-GCM decrypt (local)"]
        ORIG["<b>Original document restored</b><br/>backend never saw plaintext"]
    end

    subgraph GDPR["6 — GDPR Article 17 (Right to Erasure)"]
        direction TB
        ERA1["User stops authorizing access"]
        ERA2["Or user destroys wallet"]
        ERA3["Wrapped DEK unrecoverable<br/>ciphertext effectively anonymous"]
    end

    %% Invisible ordering — forces subgraphs to stack vertically
    ENC ~~~ IPFSUP
    IPFSUP ~~~ SSI
    SSI ~~~ ANCHOR
    ANCHOR ~~~ RET
    RET ~~~ GDPR

    %% Visible connections
    DOC --> KEY
    DOC --> IV
    KEY --> ENCOP
    IV --> ENCOP
    ENCOP --> TAG
    TAG --> CIPHER
    CIPHER --> UP
    UP --> CID

    KEY --> WRAP
    UPK --> WRAP
    WRAP --> WRAPPED
    WRAP --> SHRED

    CID --> REG
    WRAPPED --> REG
    ZKP --> REG

    SIG --> FETCH_C
    FETCH_C --> UNW
    WRAPPED -. "read" .-> UNW
    CIPHER -. "fetched" .-> DEC
    UNW --> DEC
    DEC --> ORIG

    ERA1 --> ERA3
    ERA2 --> ERA3
    WRAPPED -. "locked without wallet" .-> ERA3

    classDef src    fill:#E3F2FD,stroke:#1565C0,stroke-width:1.5px,color:#0D1B2A
    classDef crypto fill:#FFF8E1,stroke:#F9A825,stroke-width:1.5px,color:#0D1B2A
    classDef store  fill:#E8F5E9,stroke:#2E7D32,stroke-width:1.5px,color:#0D1B2A
    classDef wrap   fill:#FFEBEE,stroke:#C62828,stroke-width:1.5px,color:#0D1B2A
    classDef user   fill:#EDE7F6,stroke:#4527A0,stroke-width:1.5px,color:#0D1B2A
    classDef gdpr   fill:#FFF3E0,stroke:#E65100,stroke-width:1.5px,color:#0D1B2A

    class DOC,CIPHER src
    class KEY,IV,ENCOP,TAG crypto
    class UP,CID,REG,ZKP store
    class UPK,WRAP,WRAPPED,SHRED wrap
    class SIG,FETCH_C,UNW,DEC,ORIG user
    class ERA1,ERA2,ERA3 gdpr

    style ENC    fill:#FFFDF5,stroke:#FFD54F,stroke-dasharray:3 3
    style IPFSUP fill:#F5FBF5,stroke:#A5D6A7,stroke-dasharray:3 3
    style SSI    fill:#FFF5F5,stroke:#EF9A9A,stroke-dasharray:3 3
    style ANCHOR fill:#F5FBF5,stroke:#A5D6A7,stroke-dasharray:3 3
    style RET    fill:#F4F1FB,stroke:#B39DDB,stroke-dasharray:3 3
    style GDPR   fill:#FFF8EE,stroke:#FFB74D,stroke-dasharray:3 3
