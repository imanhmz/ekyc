```mermaid

 %%{init: {'theme':'base', 'themeVariables': {'fontSize':'12px'}, 'flowchart': {'nodeSpacing':12, 'rankSpacing':20}}}%%
graph TB

    DOC["Document"] --> ENCOP["AES-256-GCM"] --> CIPHER["Ciphertext → IPFS → CID"]
    CIPHER --> WRAP["ECIES wrap DEK → user pubkey"] --> WRAPPED["wrapped_DEK · NULL plaintext"]
    WRAPPED --> REG["registerIdentity · CID + wrapped_DEK + ZKP"]
    REG --> DEC["wallet sign → unwrap → decrypt → ✓"]
    DEC --> ERA["wallet gone → ciphertext anonymous"]

    classDef src    fill:#1565C0,stroke:#0D47A1,color:#fff
    classDef crypto fill:#F9A825,stroke:#F57F17,color:#fff
    classDef store  fill:#2E7D32,stroke:#1B5E20,color:#fff
    classDef wrap   fill:#B71C1C,stroke:#7F0000,color:#fff
    classDef user   fill:#4527A0,stroke:#311B92,color:#fff
    classDef gdpr   fill:#E65100,stroke:#BF360C,color:#fff

    class DOC src
    class ENCOP crypto
    class CIPHER store
    class WRAP,WRAPPED wrap
    class REG store
    class DEC user
    class ERA gdpr
'''
 
