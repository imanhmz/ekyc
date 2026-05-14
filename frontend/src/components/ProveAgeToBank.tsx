import React, { useState } from 'react';
import { fetchWrappedAgeWitness } from '../api';
import { deriveEncryptionKeypair, unwrapDek } from '../lib/ssiCrypto';
import { generateAgeProof, type AgeWitness } from '../lib/ageProof';

interface Props {
    walletAddress: string;
}

declare global {
    interface Window {
        ethereum?: any;
    }
}

const DEFAULT_VIEWER_BANK = 'http://localhost:3001';

export function ProveAgeToBank({ walletAddress }: Props) {
    const [viewerBankUrl, setViewerBankUrl] = useState(DEFAULT_VIEWER_BANK);
    const [minAge, setMinAge] = useState(18);
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<{ verified: boolean; minAge: number } | null>(null);

    const handleProve = async () => {
        if (!window.ethereum) {
            setError('MetaMask not detected.');
            return;
        }
        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const connected: string = accounts[0];
            if (connected.toLowerCase() !== walletAddress.toLowerCase()) {
                throw new Error(`Connected wallet ${connected} does not match ${walletAddress}`);
            }

            // 1. Prove ownership to fetch the wrapped witness.
            setStep('Signing ownership proof…');
            const ownershipMessage = `Generate age proof for ${walletAddress}`;
            const ownershipSignature = await window.ethereum.request({
                method: 'personal_sign',
                params: [ownershipMessage, connected],
            });

            setStep('Fetching wrapped age witness…');
            const payload = await fetchWrappedAgeWitness(connected, ownershipSignature, ownershipMessage);

            // 2. Derive SSI keypair, unwrap witness.
            setStep('Deriving SSI key from wallet…');
            const { privateKey } = await deriveEncryptionKeypair(connected);

            setStep('Unwrapping age witness locally…');
            const witnessJson = await unwrapDek(payload.wrapped_age_witness, privateKey);
            const witness: AgeWitness = JSON.parse(witnessJson);

            // 3. Generate Groth16 proof in browser.
            setStep('Generating Groth16 proof (this may take a few seconds)…');
            const currentYear = new Date().getFullYear();
            const proof = await generateAgeProof(witness, payload.age_commitment, minAge, currentYear);

            // 4. POST to viewer bank.
            setStep('Submitting proof to recipient bank…');
            const res = await fetch(`${viewerBankUrl}/api/verify-age`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    wallet_address: connected,
                    min_age: minAge,
                    current_year: currentYear,
                    pA: proof.pA,
                    pB: proof.pB,
                    pC: proof.pC,
                }),
            });
            if (!res.ok) {
                const err = await res.json().catch(() => ({ message: `HTTP ${res.status}` }));
                throw new Error(err.message || `HTTP ${res.status}`);
            }
            const body = await res.json();
            setStep('');
            setResult({ verified: body.verified, minAge });
        } catch (e: any) {
            if (e.code === 4001) setError('Signature rejected by user');
            else setError(e.message || 'Age proof failed');
            setStep('');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="share-bank-panel">
            <h3>Prove Age to Another Bank (ZK)</h3>
            <p className="download-hint">
                Prove you're at least N years old to a recipient bank without revealing your
                date of birth. The proof is generated in your browser from a wallet-locked
                witness and verified on chain against your published commitment.
            </p>

            <div className="field-group">
                <label htmlFor="age-bank-url">Recipient Bank URL</label>
                <input
                    id="age-bank-url"
                    type="text"
                    value={viewerBankUrl}
                    onChange={(e) => setViewerBankUrl(e.target.value)}
                    disabled={loading}
                />
            </div>

            <div className="field-group">
                <label htmlFor="min-age">Minimum age to prove</label>
                <input
                    id="min-age"
                    type="number"
                    min={0}
                    max={150}
                    value={minAge}
                    onChange={(e) => setMinAge(parseInt(e.target.value || '0', 10))}
                    disabled={loading}
                />
            </div>

            {error && <div className="error-message">⚠ {error}</div>}
            {step && !error && <div className="info-message">{step}</div>}
            {result && (
                <div className={result.verified ? 'success-message' : 'error-message'}>
                    {result.verified
                        ? `✓ Recipient bank verified: you are at least ${result.minAge} years old. DOB never disclosed.`
                        : `✗ Recipient bank rejected the proof.`}
                </div>
            )}

            <button
                type="button"
                className="btn-secondary"
                onClick={handleProve}
                disabled={loading}
            >
                {loading ? 'Working…' : '🔒 Prove Age with ZKP'}
            </button>
        </div>
    );
}
