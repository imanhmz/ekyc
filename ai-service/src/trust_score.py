"""
trust_score.py — Trust Score computation
"""

PASS_THRESHOLD = 75


def compute_trust_score(ocr_confidence: float, deepfake_confidence_real: float) -> int:
    """
    trust_score = round((ocr_confidence * 100 * 0.40) + (deepfake_confidence_real * 100 * 0.60))
    Both inputs are in [0, 1].
    """
    score = round((ocr_confidence * 100 * 0.40) + (deepfake_confidence_real * 100 * 0.60))
    return max(0, min(100, score))


def is_pass(trust_score: int) -> bool:
    return trust_score >= PASS_THRESHOLD
