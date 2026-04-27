"""
deepfake.py — Deepfake / liveness detection pipeline.

Uses DeepFace for face detection and a stub classifier.
In production, replace the stub with a fine-tuned FaceForensics++ ResNet50 model.
"""

import logging
import os
import random
from dataclasses import dataclass

logger = logging.getLogger(__name__)

MODEL_PATH = os.getenv("MODEL_PATH", "/models")

try:
    import cv2
    import numpy as np
    CV2_AVAILABLE = True
except ImportError:
    CV2_AVAILABLE = False
    logger.warning("OpenCV not available — deepfake detection is fully mocked")

try:
    from deepface import DeepFace
    DEEPFACE_AVAILABLE = True
except ImportError:
    DEEPFACE_AVAILABLE = False
    logger.warning("DeepFace not available — face detection is mocked")


@dataclass
class DeepfakeResult:
    verdict: str          # "REAL" | "FAKE" | "NO_FACE"
    confidence: float     # 0.0–1.0 (probability of REAL)
    artifacts_detected: bool


def _check_compression_artifacts(image_path: str) -> bool:
    """Heuristic: high blocking noise in JPEG = potential manipulation."""
    if not CV2_AVAILABLE:
        return False
    try:
        img = cv2.imread(image_path)
        if img is None:
            return False
        # Simple laplacian variance check — very manipulated images often have unusual sharpness patterns
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        variance = cv2.Laplacian(gray, cv2.CV_64F).var()
        return variance > 2000  # Threshold tuned for ID documents
    except Exception:
        return False


def _detect_face(image_path: str) -> bool:
    """Returns True if at least one face is found."""
    if not DEEPFACE_AVAILABLE or not CV2_AVAILABLE:
        return True  # assume face present in mock mode
    try:
        faces = DeepFace.extract_faces(image_path, detector_backend='opencv', enforce_detection=False)
        return len(faces) > 0
    except Exception:
        return False


def _infer_deepfake_score(image_path: str) -> float:
    """
    Stub classifier — returns a realistic high-confidence REAL score.
    Replace with actual FaceForensics++ model inference:
        features = preprocess_face(crop)  # normalize, resize to 224x224
        score = model.predict(features)   # FaceForensics++ fine-tuned ResNet50
    """
    # In a real deployment, load a TorchScript or ONNX model here:
    # model_file = os.path.join(MODEL_PATH, 'ff_resnet50.onnx')
    # if os.path.exists(model_file): ...

    # For thesis demonstration: return a realistic deterministic-ish score
    # Seeded on file path so the same document always gets the same score
    rng = random.Random(hash(image_path) % (2**32))
    return rng.uniform(0.78, 0.98)  # Most documents will PASS


def run_deepfake_check(image_path: str) -> DeepfakeResult:
    """Full deepfake detection pipeline."""
    has_face = _detect_face(image_path)
    if not has_face:
        # No face — deepfake score is neutral (0.5), OCR carries full weight
        logger.info(f"No face detected in {image_path}, using neutral score")
        return DeepfakeResult(verdict="NO_FACE", confidence=0.5, artifacts_detected=False)

    score = _infer_deepfake_score(image_path)
    artifacts = _check_compression_artifacts(image_path)
    verdict = "REAL" if score > 0.5 else "FAKE"

    logger.info(f"Deepfake check: verdict={verdict}, confidence={score:.3f}, artifacts={artifacts}")
    return DeepfakeResult(verdict=verdict, confidence=score, artifacts_detected=artifacts)
