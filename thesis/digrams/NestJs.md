```mermaid
 %%{init: {'theme':'base', 'themeVariables': {'fontSize':'11px'}, 'flowchart': {'nodeSpacing':20, 'rankSpacing':40}}}%%
graph TB

    subgraph KYC["KycModule"]
        KC["KycController\n/submit · /link-wallet\n/wrapped-document\n/wrapped-age-witness"]
        KS["KycService\nmaybeWrapDek · buildAgeWitness"]
        KC --> KS
    end

    subgraph QUEUE["QueueModule"]
        QP["Producer"]
        QC["Consumer"]
    end

    subgraph BC["BlockchainModule"]
        BS["BlockchainService\nregisterIdentity"]
        ZS["ZkpService\nGroth16 proof"]
        AS["AttributeService\nPoseidon commit"]
    end

    subgraph INFRA["Infrastructure"]
        IS["IpfsService"]
        CS["CryptoService\nAES-256 · ECIES"]
        TR["TypeORM"]
    end

    KS --> QP
    QC --> KS
    KS --> BS
    KS --> ZS
    KS --> AS
    KS --> IS
    KS --> CS
    KS --> TR

    style KC fill:#B71C1C,stroke:#7F0000,color:#fff
    style KS fill:#1565C0,stroke:#0D47A1,color:#fff
    style QP fill:#F9A825,stroke:#F57F17,color:#fff
    style QC fill:#F9A825,stroke:#F57F17,color:#fff
    style BS fill:#2E7D32,stroke:#1B5E20,color:#fff
    style ZS fill:#2E7D32,stroke:#1B5E20,color:#fff
    style AS fill:#2E7D32,stroke:#1B5E20,color:#fff
    style IS fill:#6A1B9A,stroke:#4A148C,color:#fff
    style CS fill:#E65100,stroke:#BF360C,color:#fff
    style TR fill:#4527A0,stroke:#311B92,color:#fff

    style KYC   fill:#FFEBEE,stroke:#B71C1C,stroke-width:2px,stroke-dasharray:3 3
    style QUEUE fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,stroke-dasharray:3 3
    style BC    fill:#E8F5E9,stroke:#2E7D32,stroke-width:2px,stroke-dasharray:3 3
    style INFRA fill:#EDE7F6,stroke:#4527A0,stroke-width:2px,stroke-dasharray:3 3
 ```
