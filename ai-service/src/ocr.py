"""
ocr.py — EasyOCR + OpenCV pipeline for ID document field extraction.

Falls back to mock data gracefully if EasyOCR is unavailable (e.g., no GPU in CI).
"""

import logging
import re
from dataclasses import dataclass, field
from typing import Optional

logger = logging.getLogger(__name__)

try:
    import cv2
    import easyocr
    import numpy as np
    EASYOCR_AVAILABLE = True
except ImportError:
    EASYOCR_AVAILABLE = False
    logger.warning("EasyOCR / OpenCV not available — OCR will use mock output")

_reader = None


def _get_reader():
    global _reader
    if _reader is None and EASYOCR_AVAILABLE:
        _reader = easyocr.Reader(['en', 'de', 'fr'], gpu=False)
    return _reader


def _preprocess(image_path: str):
    img = cv2.imread(image_path)
    if img is None:
        raise ValueError(f"Cannot read image: {image_path}")
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    denoised = cv2.fastNlMeansDenoising(gray, h=30)
    return denoised


def _extract_fields(raw_results: list) -> dict:
    """Heuristic field extraction from raw EasyOCR output."""
    texts = [(text.strip(), conf) for (_, text, conf) in raw_results]
    fields = {
        "full_name": None,
        "date_of_birth": None,
        "document_number": None,
        "expiry_date": None,
        "nationality": None,
        "document_type": "UNKNOWN",
    }

    date_pattern = re.compile(r"\b(\d{1,2}[./\-]\d{1,2}[./\-]\d{2,4}|\d{4}[./\-]\d{2}[./\-]\d{2})\b")
    doc_number_pattern = re.compile(r"\b([A-Z]{1,3}\d{5,9})\b")

    for text, conf in texts:
        upper = text.upper()
        if "PASSPORT" in upper:
            fields["document_type"] = "PASSPORT"
        elif "NATIONAL" in upper or "IDENTITY" in upper:
            fields["document_type"] = "NATIONAL_ID"
        elif "DRIVING" in upper or "DRIVER" in upper:
            fields["document_type"] = "DRIVERS_LICENCE"

        m = doc_number_pattern.search(text)
        if m and not fields["document_number"]:
            fields["document_number"] = m.group(1)

        dates = date_pattern.findall(text)
        if dates:
            if not fields["date_of_birth"]:
                fields["date_of_birth"] = dates[0]
            if len(dates) > 1 and not fields["expiry_date"]:
                fields["expiry_date"] = dates[1]

    return fields


@dataclass
class OcrResult:
    fields: dict
    confidence: float
    raw_count: int = 0


def run_ocr(image_path: str) -> OcrResult:
    """Run OCR on an ID document image."""
    if not EASYOCR_AVAILABLE:
        logger.warning("OCR running in mock mode")
        return OcrResult(
            fields={
                "full_name": "MOCK USER",
                "date_of_birth": "1990-01-01",
                "document_number": "AB123456",
                "expiry_date": "2030-01-01",
                "nationality": "FIN",
                "document_type": "PASSPORT",
            },
            confidence=0.90,
            raw_count=0,
        )

    try:
        img = _preprocess(image_path)
        reader = _get_reader()
        raw = reader.readtext(img, detail=1)
        if not raw:
            return OcrResult(fields={}, confidence=0.0, raw_count=0)

        avg_confidence = float(sum(r[2] for r in raw) / len(raw))
        fields = _extract_fields(raw)
        return OcrResult(fields=fields, confidence=avg_confidence, raw_count=len(raw))
    except Exception as e:
        logger.error(f"OCR failed: {e}")
        return OcrResult(fields={}, confidence=0.0, raw_count=0)
