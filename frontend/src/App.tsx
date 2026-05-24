import React from 'react';
import { UploadForm } from './components/UploadForm';
import { FlagWallet } from './components/FlagWallet';
import './index.css';

function App() {
    return (
        <div className="app">
            <header className="header">
                <div className="logo">✍️</div>
                <h1>Signer Bank - KYC Verification</h1>
                <div style={{
                    display: 'inline-block',
                    background: '#48bb78',
                    color: 'white',
                    padding: '8px 20px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    marginTop: '10px'
                }}>
                    VERIFICATION PROVIDER
                </div>
                <p className="subtitle">Blockchain-anchored identity verification with AI fraud detection</p>
            </header>

            <main className="main">
                <section className="card">
                    <h2>Submit Verification</h2>
                    <UploadForm />
                </section>

                <section className="info-panel">
                    <h3>How it works</h3>
                    <ol className="steps">
                        <li><strong>Upload</strong> your government-issued ID document</li>
                        <li><strong>AI Analysis</strong> — OCR extracts fields; deepfake detection checks authenticity</li>
                        <li><strong>Trust Score</strong> computed: OCR (40%) + Liveness (60%); threshold ≥ 75 to pass</li>
                        <li><strong>IPFS</strong> — document anchored with a content hash</li>
                        <li><strong>Blockchain</strong> — Trust Token with expiry written to KYCRegistry smart contract</li>
                    </ol>
                </section>
            </main>

            <main className="main" style={{ marginTop: '0' }}>
                <section className="card" style={{ borderTop: '3px solid #e53e3e' }}>
                    <FlagWallet />
                </section>
            </main>

            <footer className="footer">
                <p>Signer Bank (Port 3000) · Verification Provider · Polygon / IPFS / NestJS</p>
                <p style={{ marginTop: '10px', fontSize: '14px', opacity: 0.8 }}>
                    👁️ <a href="http://localhost:3001" target="_blank" style={{ color: 'inherit', textDecoration: 'underline' }}>
                        Open Viewer Bank (Port 3001)
                    </a> to see multi-institution verification
                </p>
            </footer>
        </div>
    );
}

export default App;
