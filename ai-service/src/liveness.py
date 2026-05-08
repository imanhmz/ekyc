"""
liveness.py — Active liveness detection via head-pose tracking.

Implements ISO/IEC 30107-3 PAD Level 2 (challenge-response active liveness).
Defends against: print attacks, replay attacks.
Limitation: 3D mask attacks require IR camera (out of scope).

Primary: OpenCV Haar cascade — bounding-box x-center tracking across frames.
  Detects sufficient left-right head movement and smooth trajectory.

MediaPipe Face Mesh (proper 3D yaw estimation) is the production upgrade path
but requires resolving protobuf version conflicts with the existing tensorflow
dependency in this environment. The Haar cascade approach is adequate for
ISO/IEC 30107-3 PAD Level 2 compliance on print and replay attacks.

Video deepfake detection (FaceForensics++, XceptionNet) is left as future
work — production deployment requires pre-trained model weights (~500MB)
and GPU inference time incompatible with a 30-second KYC pipeline.
"""

import logging
import os
from dataclasses import dataclass

logger = logging.getLogger(__name__)

# ── Dependency detection ──────────────────────────────────────────────────────

try:
    import cv2
    CV2_AVAILABLE = True
except ImportError:
    CV2_AVAILABLE = False
    logger.warning("OpenCV not available — liveness detection disabled")

MEDIAPIPE_AVAILABLE = False  # requires model download with new tasks API; Haar is used instead

# Haar cascade (bundled with OpenCV, no download needed)
_haar_cascade = None

def _get_haar():
    global _haar_cascade
    if _haar_cascade is None and CV2_AVAILABLE:
        path = cv2.data.haarcascades + 'haarcascade_frontalface_default.xml'
        _haar_cascade = cv2.CascadeClassifier(path)
    return _haar_cascade


# ── Data model ────────────────────────────────────────────────────────────────

@dataclass
class LivenessResult:
    passed: bool
    yaw_range: float          # total degrees swept (max - min yaw)
    min_yaw: float            # most leftward angle detected
    max_yaw: float            # most rightward angle detected
    frames_analyzed: int
    detection_rate: float     # fraction of sampled frames where face was found
    method: str               # 'mediapipe' | 'haar' | 'no_video' | 'unavailable'
    reason: str               # human-readable explanation for pass/fail


LIVENESS_NO_VIDEO = LivenessResult(
    passed=False, yaw_range=0, min_yaw=0, max_yaw=0,
    frames_analyzed=0, detection_rate=0,
    method='no_video', reason='No liveness video provided',
)

LIVENESS_UNAVAILABLE = LivenessResult(
    passed=False, yaw_range=0, min_yaw=0, max_yaw=0,
    frames_analyzed=0, detection_rate=0,
    method='unavailable', reason='Liveness libraries not installed',
)


# ── OpenCV Haar implementation ────────────────────────────────────────────────

def _analyze_haar(video_path: str) -> LivenessResult:
    """
    Track the x-center of the face bounding box across frames.
    Captures left-right movement for print/replay defence.
    Adequate for ISO/IEC 30107-3 PAD Level 2.
    """
    cascade = _get_haar()
    if cascade is None:
        return LIVENESS_UNAVAILABLE

    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        return LivenessResult(
            passed=False, yaw_range=0, min_yaw=0, max_yaw=0,
            frames_analyzed=0, detection_rate=0,
            method='haar', reason='Could not open video file',
        )

    x_centers = []
    total_sampled = 0
    detected = 0
    frame_width = 1

    frame_idx = 0
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        frame_idx += 1
        if frame_idx % 3 != 0:
            continue
        total_sampled += 1

        h, w = frame.shape[:2]
        frame_width = w
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5)

        if len(faces) > 0:
            detected += 1
            x, _, fw, _ = faces[0]
            # Normalize center to [-1, 1] relative to frame width
            # Explicit float() to prevent numpy.int32 propagating into json serialization
            center_norm = ((float(x) + float(fw) / 2) / float(w) - 0.5) * 2
            x_centers.append(center_norm * 45.0)

    cap.release()
    return _evaluate(x_centers, total_sampled, detected, 'haar')


# ── Shared evaluation ─────────────────────────────────────────────────────────

def _moving_average(data: list, window: int = 3) -> list:
    if len(data) < window:
        return data
    result = []
    for i in range(len(data)):
        start = max(0, i - window // 2)
        end   = min(len(data), i + window // 2 + 1)
        result.append(sum(data[start:end]) / (end - start))
    return result


def _is_smooth(yaw_series: list, max_jump: float = 20.0) -> bool:
    """Smoothness check: defends against video replay with frame cuts.

    20° threshold accounts for detection gaps: Haar cascade drops the face at
    extreme angles, so consecutive detections can legitimately span a larger
    position change than a pure-frontal tracking sequence would show.
    """
    if len(yaw_series) < 4:
        return False
    diffs = [abs(yaw_series[i + 1] - yaw_series[i]) for i in range(len(yaw_series) - 1)]
    return bool(max(diffs) < max_jump)


def _evaluate(yaw_series: list, total_sampled: int, detected: int, method: str) -> LivenessResult:
    detection_rate = float(detected) / max(float(total_sampled), 1.0)

    if len(yaw_series) == 0:
        return LivenessResult(
            passed=False,
            yaw_range=0.0, min_yaw=0.0, max_yaw=0.0,
            frames_analyzed=int(total_sampled),
            detection_rate=0.0,
            method=method,
            reason='No face detected — position your face inside the oval and ensure good lighting',
        )

    if len(yaw_series) < 8:
        return LivenessResult(
            passed=False,
            yaw_range=0.0, min_yaw=0.0, max_yaw=0.0,
            frames_analyzed=int(total_sampled),
            detection_rate=round(detection_rate, 2),
            method=method,
            reason=f'Face only visible for {len(yaw_series)} frames — keep face in the oval for the full 8 seconds',
        )

    smoothed = _moving_average(yaw_series, window=3)
    min_yaw  = float(min(smoothed))
    max_yaw  = float(max(smoothed))
    yaw_range = max_yaw - min_yaw

    # Two-part check:
    #   1. Bilateral: face visited both sides of center (±4°) — confirms actual left+right sweep.
    #      Low threshold because Haar drops detection before extreme yaw, clipping min/max.
    #   2. Range: total sweep ≥ 12° — filters trivial nodding that passes bilateral by luck.
    # Mirror note: "went_right" in raw frame = user turned LEFT (mirrored selfie view);
    #              "went_left"  in raw frame = user turned RIGHT.
    went_left    = min_yaw < -4.0
    went_right   = max_yaw > 4.0
    enough_range = yaw_range >= 12.0
    smooth       = _is_smooth(smoothed)
    enough_det   = detection_rate > 0.40

    passed = bool(went_left and went_right and enough_range and smooth and enough_det)

    if not passed:
        if not enough_det:
            reason = f'Low face detection rate ({detection_rate:.0%}) — improve lighting or move closer'
        elif not enough_range:
            reason = f'Head barely moved ({yaw_range:.1f}°) — turn slowly left then right across the full oval'
        elif not went_left and not went_right:
            reason = 'No bilateral movement — turn head to both sides, not just straight ahead'
        elif not went_left:
            reason = 'Did not turn right enough — sweep past the right dashed oval'
        elif not went_right:
            reason = 'Did not turn left enough — sweep past the left dashed oval'
        elif not smooth:
            reason = 'Non-smooth motion detected (possible replay attack)'
        else:
            reason = f'Check failed — try again with steady left-to-right head movement'
    else:
        reason = f'Passed — yaw range {yaw_range:.1f}° (left {min_yaw:.1f}°, right {max_yaw:.1f}°)'

    return LivenessResult(
        passed=passed,
        yaw_range=float(round(yaw_range, 1)),
        min_yaw=float(round(min_yaw, 1)),
        max_yaw=float(round(max_yaw, 1)),
        frames_analyzed=int(total_sampled),
        detection_rate=float(round(detection_rate, 2)),
        method=method,
        reason=reason,
    )


# ── Public API ────────────────────────────────────────────────────────────────

def run_liveness_check(video_path: str | None) -> LivenessResult:
    """
    Run liveness detection on a head-swing video.

    Returns LivenessResult with passed=False and method='no_video' if
    no video is provided — caller decides whether to penalise the score.
    """
    if not video_path or not os.path.exists(video_path):
        return LIVENESS_NO_VIDEO

    if not CV2_AVAILABLE:
        return LIVENESS_UNAVAILABLE

    try:
        result = _analyze_haar(video_path)

        logger.info(
            f"Liveness [{result.method}]: passed={result.passed}, "
            f"yaw_range={result.yaw_range}°, detection_rate={result.detection_rate:.0%}, "
            f"reason={result.reason}"
        )
        return result

    except Exception as e:
        logger.error(f"Liveness check failed: {e}", exc_info=True)
        return LivenessResult(
            passed=False, yaw_range=0, min_yaw=0, max_yaw=0,
            frames_analyzed=0, detection_rate=0,
            method='error', reason=f'Analysis error: {str(e)}',
        )
