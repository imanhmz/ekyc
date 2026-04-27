import React from 'react';
import { UploadForm } from './components/UploadForm';
import './index.css';

function App() {
    return (
        <div className="app">
            <header className="header">
                <div className="logo">🔐</div>
                <h1>e-KYC Live-Check Ledger</h1>
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

            <footer className="footer">
                <p>e-KYC Live-Check Ledger · Thesis Implementation · Polygon / IPFS / NestJS</p>
            </footer>
        </div>
    );
}

export default App;
