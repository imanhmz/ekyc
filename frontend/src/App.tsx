import React, { useState } from 'react';
import { UploadForm } from './components/UploadForm';
import { FlagWallet } from './components/FlagWallet';
import { LivenessCapture } from './components/LivenessCapture';
import './index.css';

function App() {
    // Liveness state is lifted here so it can live in its own section
    // alongside the submission form while the form still reads it on submit.
    const [livenessVideo, setLivenessVideo] = useState<Blob | null>(null);

    return (
        <div className="app">
            <header className="header">
                {/*<div className="logo">✍️</div>*/}
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
                <div className="col">
                    <section className="card">
                        <h2>Submit Verification</h2>
                        <UploadForm livenessVideo={livenessVideo} />
                    </section>
                </div>

                <div className="col">
                    <section className="card">
                        <h2>Liveness Check</h2>
                        <LivenessCapture
                            onCapture={setLivenessVideo}
                            captured={livenessVideo !== null}
                        />
                    </section>

                    <section className="card" style={{ borderTop: '3px solid #e53e3e' }}>
                        <FlagWallet />
                    </section>
                </div>
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
