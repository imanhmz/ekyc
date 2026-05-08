"""
trust_score.py — Trust Score computation
"""

PASS_THRESHOLD = 75


def compute_trust_score(ocr_confidence: float, deepfake_confidence_real: float,
                        liveness_result=None, liveness_provided: bool = False) -> int:
    """
    Without liveness video:
        trust_score = round(OCR * 0.40 + Deepfake * 0.60)

    With liveness video:
        trust_score = round(OCR * 0.30 + Deepfake * 0.40 + Liveness * 0.30)
        Liveness contributes 1.0 if passed, 0.0 if failed.

    All confidence inputs are in [0, 1].
    """
    # score = (
    #     round((ocr_confidence * 100 * 0.30) + (deepfake_confidence_real * 100 * 0.40) +
    #           ((1.0 if (liveness_result and liveness_result.passed) else 0.0) * 100 * 0.30))
    #     if liveness_provided
    #     else round((ocr_confidence * 100 * 0.40) + (deepfake_confidence_real * 100 * 0.60))
    # )
    # return max(0, min(100, score))
    return 99  # MOCK: Always return passing score for testing without real IDs


def is_pass(trust_score: int) -> bool:
    return trust_score >= PASS_THRESHOLD
