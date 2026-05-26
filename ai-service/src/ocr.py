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
        _reader = easyocr.Reader(['en', 'de', 'fr'], gpu=True)
    return _reader


def _preprocess(image_path: str):
    img = cv2.imread(image_path)
    if img is None:
        raise ValueError(f"Cannot read image: {image_path}")
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    denoised = cv2.fastNlMeansDenoising(gray, h=30)
    return denoised


_MONTHS = {
    "JAN": 1, "FEB": 2, "MAR": 3, "APR": 4, "MAY": 5, "JUN": 6,
    "JUL": 7, "AUG": 8, "SEP": 9, "OCT": 10, "NOV": 11, "DEC": 12,
}

# Numeric dates: dd/mm/yyyy (and . or - separators) or yyyy-mm-dd.
_NUM_DATE = re.compile(
    r"\b(\d{1,2})[./\-](\d{1,2})[./\-](\d{4})\b"
    r"|\b(\d{4})[./\-](\d{1,2})[./\-](\d{1,2})\b"
)
# Month-name dates: optional day + 3-letter month (+ trailing letters/dot) + 4-digit year.
# Matches "01 JAN 1981", "JAN 1981", "29 NOV 2019", "15 May. 1990".
_MON_DATE = re.compile(
    r"\b(?:(\d{1,2})\s+)?([A-Za-z]{3})[A-Za-z]*\.?\s+(\d{4})\b"
)
_DOC_NUMBER = re.compile(r"\b([A-Z]{1,3}\d{5,9})\b")


def _parse_date(text: str):
    """Return (iso_string, year) for the first date-like token, else None.

    Lenient on the day (OCR often mangles or drops it) but strict on a
    plausible 4-digit year so noise like 'NEW YORK 2009' is rejected upstream
    by the month-name whitelist.
    """
    m = _NUM_DATE.search(text)
    if m:
        if m.group(1):  # dd/mm/yyyy
            day, mon, year = int(m.group(1)), int(m.group(2)), int(m.group(3))
        else:           # yyyy-mm-dd
            year, mon, day = int(m.group(4)), int(m.group(5)), int(m.group(6))
        if 1900 <= year <= 2100 and 1 <= mon <= 12:
            if not (1 <= day <= 31):
                day = 1
            return f"{year:04d}-{mon:02d}-{day:02d}", year

    m = _MON_DATE.search(text)
    if m:
        mon_name = m.group(2).upper()
        if mon_name in _MONTHS:
            mon = _MONTHS[mon_name]
            year = int(m.group(3))
            day = int(m.group(1)) if m.group(1) else 1
            if not (1 <= day <= 31):
                day = 1
            if 1900 <= year <= 2100:
                return f"{year:04d}-{mon:02d}-{day:02d}", year
    return None


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

    dated = []  # (year, iso_string)
    for text, conf in texts:
        upper = text.upper()
        # Document type — tolerate OCR noise ("Passpon Card" still has "PASSP").
        if "PASSP" in upper:
            fields["document_type"] = "PASSPORT"
        elif "NATIONAL" in upper or "IDENTITY" in upper:
            if fields["document_type"] == "UNKNOWN":
                fields["document_type"] = "NATIONAL_ID"
        elif "DRIVIN" in upper or "DRIVER" in upper or "LICEN" in upper:
            if fields["document_type"] == "UNKNOWN":
                fields["document_type"] = "DRIVERS_LICENCE"

        m = _DOC_NUMBER.search(text)
        if m and not fields["document_number"]:
            fields["document_number"] = m.group(1)

        parsed = _parse_date(text)
        if parsed:
            dated.append((parsed[1], parsed[0]))

    # Dates arrive as disordered fragments; OCR can even split off the day.
    # Heuristic: earliest year = date of birth, latest year = expiry.
    if dated:
        dated.sort(key=lambda d: d[0])
        fields["date_of_birth"] = dated[0][1]
        if len(dated) > 1:
            fields["expiry_date"] = dated[-1][1]

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

        # DEBUG: dump every text fragment EasyOCR found, so we can see the
        # actual date/label formats on the card and tune the parser.
        logger.info("RAW OCR fragments:")
        # for (_, text, conf) in raw:
        #     logger.info("  [%.2f] %r", conf, text)

        avg_confidence = float(sum(r[2] for r in raw) / len(raw))
        fields = _extract_fields(raw)
        return OcrResult(fields=fields, confidence=avg_confidence, raw_count=len(raw))
    except Exception as e:
        logger.error(f"OCR failed: {e}")
        return OcrResult(fields={}, confidence=0.0, raw_count=0)
