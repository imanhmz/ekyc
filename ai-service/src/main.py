"""
main.py — FastAPI application for the AI service.

Exposes:
  GET /health  — Docker health check
  POST /analyze — Direct analysis for dev/test

On startup, launches the RabbitMQ consumer in a background thread.
"""

import logging
import sys
import os

# Add src to path when running directly
sys.path.insert(0, os.path.dirname(__file__))

from fastapi import FastAPI, UploadFile, File
from contextlib import asynccontextmanager

from consumer import start_consumer_thread
from ocr import run_ocr
from deepfake import run_deepfake_check
from trust_score import compute_trust_score, is_pass

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(name)s %(levelname)s %(message)s")
logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("Starting RabbitMQ consumer thread...")
    start_consumer_thread()
    yield
    logger.info("AI service shutting down")


app = FastAPI(title="KYC AI Service", version="1.0.0", lifespan=lifespan)


@app.get("/health")
def health():
    return {"status": "ok", "service": "kyc-ai"}


@app.post("/analyze")
async def analyze(file: UploadFile = File(...)):
    """Direct analysis endpoint — for development/testing only."""
    import tempfile

    with tempfile.NamedTemporaryFile(delete=False, suffix=f"_{file.filename}") as tmp:
        content = await file.read()
        tmp.write(content)
        tmp_path = tmp.name

    try:
        ocr_result = run_ocr(tmp_path)
        deepfake_result = run_deepfake_check(tmp_path)
        deepfake_confidence = deepfake_result.confidence if deepfake_result.verdict != "NO_FACE" else 0.5
        trust_score = compute_trust_score(ocr_result.confidence, deepfake_confidence)

        return {
            "trust_score": trust_score,
            "passed": is_pass(trust_score),
            "ocr": {**ocr_result.fields, "confidence": ocr_result.confidence},
            "deepfake": {
                "verdict": deepfake_result.verdict,
                "confidence": deepfake_result.confidence,
                "artifacts_detected": deepfake_result.artifacts_detected,
            },
        }
    finally:
        import os as _os
        try:
            _os.unlink(tmp_path)
        except Exception:
            pass
