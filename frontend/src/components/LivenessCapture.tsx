import React, { useRef, useState, useCallback, useEffect } from 'react';

interface Props {
    onCapture: (video: Blob | null) => void;
    captured: boolean;
}

type Step = 'idle' | 'requesting' | 'preview' | 'countdown' | 'recording' | 'done' | 'error';

const RECORD_SECONDS = 8;

export function LivenessCapture({ onCapture, captured }: Props) {
    const videoRef      = useRef<HTMLVideoElement>(null);
    const recorderRef   = useRef<MediaRecorder | null>(null);
    const streamRef     = useRef<MediaStream | null>(null);
    const chunksRef     = useRef<Blob[]>([]);
    const timerRef      = useRef<ReturnType<typeof setInterval> | null>(null);

    const [step, setStep]           = useState<Step>('idle');
    const [countdown, setCountdown] = useState(3);
    const [progress, setProgress]   = useState(0);  // 0-100
    const [errorMsg, setErrorMsg]   = useState('');
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const stopStream = useCallback(() => {
        streamRef.current?.getTracks().forEach(t => t.stop());
        streamRef.current = null;
        if (timerRef.current) clearInterval(timerRef.current);
    }, []);

    useEffect(() => () => stopStream(), [stopStream]);

    const startCamera = async () => {
        setStep('requesting');
        setErrorMsg('');
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { width: 640, height: 480, facingMode: 'user' },
                audio: false,
            });
            streamRef.current = stream;
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                videoRef.current.play();
            }
            setStep('preview');
        } catch (e: any) {
            setErrorMsg('Camera access denied. Enable camera permissions and try again.');
            setStep('error');
        }
    };

    const startRecording = () => {
        setStep('countdown');
        let count = 3;
        setCountdown(count);
        const cd = setInterval(() => {
            count--;
            if (count <= 0) {
                clearInterval(cd);
                beginRecording();
            } else {
                setCountdown(count);
            }
        }, 1000);
    };

    const beginRecording = () => {
        if (!streamRef.current) return;
        chunksRef.current = [];

        const mimeType = MediaRecorder.isTypeSupported('video/webm;codecs=vp9')
            ? 'video/webm;codecs=vp9'
            : 'video/webm';

        const recorder = new MediaRecorder(streamRef.current, { mimeType });
        recorderRef.current = recorder;

        recorder.ondataavailable = (e) => {
            if (e.data.size > 0) chunksRef.current.push(e.data);
        };

        recorder.onstop = () => {
            const blob = new Blob(chunksRef.current, { type: 'video/webm' });
            const url  = URL.createObjectURL(blob);
            setPreviewUrl(url);
            setStep('done');
            onCapture(blob);
            stopStream();
        };

        recorder.start(100);
        setStep('recording');
        setProgress(0);

        let elapsed = 0;
        timerRef.current = setInterval(() => {
            elapsed += 100;
            setProgress(Math.min((elapsed / (RECORD_SECONDS * 1000)) * 100, 100));
            if (elapsed >= RECORD_SECONDS * 1000) {
                clearInterval(timerRef.current!);
                recorder.stop();
            }
        }, 100);
    };

    const reRecord = () => {
        if (previewUrl) URL.revokeObjectURL(previewUrl);
        setPreviewUrl(null);
        setProgress(0);
        onCapture(null);
        startCamera();
    };

    return (
        <div className="liveness-capture">
            <div className="liveness-header">
                <span className="liveness-icon">👤</span>
                <div>
                    <strong>Liveness Check</strong>
                    <span className={`liveness-badge${captured ? '' : ' liveness-badge-required'}`}>
                        {captured ? '✅ Captured' : 'Required'}
                    </span>
                </div>
            </div>

            {step === 'idle' && (
                <div className="liveness-idle">
                    <p className="liveness-desc">
                        Record a short video turning your head slowly left, then right.
                        Required to prove physical presence (ISO/IEC 30107-3).
                    </p>
                    <div className="liveness-actions">
                        <button type="button" className="btn-liveness-start" onClick={startCamera}>
                            Start Camera
                        </button>
                    </div>
                </div>
            )}

            {step === 'error' && (
                <div className="liveness-error">
                    <p>⚠ {errorMsg}</p>
                    <p className="liveness-error-note">Camera access is required to submit.</p>
                    <button type="button" className="btn-liveness-start" onClick={startCamera}>
                        Retry Camera
                    </button>
                </div>
            )}

            {(step === 'preview' || step === 'countdown' || step === 'recording' || step === 'requesting') && (
                <div className="liveness-video-container">
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        playsInline
                        className="liveness-video"
                        style={{ transform: 'scaleX(-1)' }}
                    />

                    {/* Face-framing guide: center oval + side turn targets */}
                    <svg className="liveness-guide" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                        {/* Left turn target — dashed oval where face should reach */}
                        <ellipse cx="112" cy="148" rx="78" ry="102"
                            fill="none" stroke="rgba(255,255,255,0.20)" strokeWidth="1.5" strokeDasharray="6,4"/>
                        {/* Right turn target */}
                        <ellipse cx="288" cy="148" rx="78" ry="102"
                            fill="none" stroke="rgba(255,255,255,0.20)" strokeWidth="1.5" strokeDasharray="6,4"/>
                        {/* Center face oval — solid guide */}
                        <ellipse cx="200" cy="148" rx="78" ry="102"
                            fill="none" stroke="rgba(255,255,255,0.70)" strokeWidth="2.5"/>
                        {/* Cardinal tick marks on center oval */}
                        <line x1="200" y1="43"  x2="200" y2="57"  stroke="rgba(255,255,255,0.90)" strokeWidth="2.5" strokeLinecap="round"/>
                        <line x1="200" y1="239" x2="200" y2="253" stroke="rgba(255,255,255,0.90)" strokeWidth="2.5" strokeLinecap="round"/>
                        <line x1="119" y1="148" x2="105" y2="148" stroke="rgba(255,255,255,0.90)" strokeWidth="2.5" strokeLinecap="round"/>
                        <line x1="281" y1="148" x2="295" y2="148" stroke="rgba(255,255,255,0.90)" strokeWidth="2.5" strokeLinecap="round"/>
                        {/* Turn direction arrows */}
                        <text x="24"  y="156" fill="rgba(255,255,255,0.55)" fontSize="22" fontFamily="system-ui,sans-serif">←</text>
                        <text x="356" y="156" fill="rgba(255,255,255,0.55)" fontSize="22" fontFamily="system-ui,sans-serif">→</text>
                        {/* "Fit face in oval" label */}
                        <rect x="132" y="7" width="136" height="20" rx="10" fill="rgba(0,0,0,0.52)"/>
                        <text x="200" y="21" textAnchor="middle" fill="rgba(255,255,255,0.82)" fontSize="11" fontFamily="system-ui,sans-serif">Fit face in oval</text>
                    </svg>

                    {step === 'preview' && (
                        <div className="liveness-overlay">
                            <p>Position your face in the frame</p>
                            <button type="button" className="btn-liveness-start" onClick={startRecording}>
                                ● Start Recording
                            </button>
                        </div>
                    )}

                    {step === 'countdown' && (
                        <div className="liveness-overlay countdown">
                            <span className="countdown-number">{countdown}</span>
                        </div>
                    )}

                    {step === 'recording' && (
                        <div className="liveness-overlay recording">
                            <p className="recording-instruction">
                                ← Slowly turn LEFT … then RIGHT →
                            </p>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: `${progress}%` }} />
                            </div>
                            <p className="recording-timer">
                                {Math.ceil(RECORD_SECONDS - (progress / 100) * RECORD_SECONDS)}s remaining
                            </p>
                        </div>
                    )}
                </div>
            )}

            {step === 'done' && previewUrl && (
                <div className="liveness-done">
                    <p className="liveness-success">✅ Liveness video captured ({RECORD_SECONDS}s)</p>
                    <video src={previewUrl} controls className="liveness-preview" />
                    <button type="button" className="btn-liveness-skip" onClick={reRecord}>
                        Re-record
                    </button>
                </div>
            )}
        </div>
    );
}
