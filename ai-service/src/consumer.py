"""
consumer.py — RabbitMQ consumer for the AI service.

Consumes messages from `kyc_processing`, runs OCR + deepfake detection,
publishes result to `kyc_results`.
"""

import json
import logging
import os
import time
import threading

import pika

from ocr import run_ocr
from deepfake import run_deepfake_check
from liveness import run_liveness_check
from trust_score import compute_trust_score, is_pass

logger = logging.getLogger(__name__)

RABBITMQ_URL = os.getenv("RABBITMQ_URL", "amqp://kyc_mq:kyc_mq_pass@localhost:5672")
EXCHANGE = "kyc.direct"
PROCESSING_QUEUE = "kyc_processing"
RESULTS_QUEUE = "kyc_results"
PROCESSING_KEY = "kyc.process"
RESULTS_KEY = "kyc.result"


def process_message(body: dict) -> dict:
    kyc_id = body["kyc_id"]
    user_id = body["user_id"]
    file_path = body["file_path"]
    liveness_video_path = body.get("liveness_video_path")

    logger.info(f"Processing KYC job: {kyc_id}")

    # Run OCR
    ocr_result = run_ocr(file_path)
    ocr_confidence = ocr_result.confidence

    # Run document deepfake detection (static image)
    deepfake_result = run_deepfake_check(file_path)
    deepfake_confidence = deepfake_result.confidence if deepfake_result.verdict != "NO_FACE" else 0.5

    # Run liveness detection (video, optional)
    liveness_result = run_liveness_check(liveness_video_path)
    liveness_provided = liveness_video_path is not None

    # Compute trust score
    trust_score = compute_trust_score(ocr_confidence, deepfake_confidence, liveness_result, liveness_provided)
    passed = is_pass(trust_score)

    import datetime
    processed_at = datetime.datetime.utcnow().isoformat() + "Z"

    # Build combined biometric result (deepfake + liveness stored together)
    biometric_result = {
        "verdict": deepfake_result.verdict,
        "confidence": round(deepfake_result.confidence, 4),
        "artifacts_detected": deepfake_result.artifacts_detected,
        "liveness": {
            "passed": liveness_result.passed,
            "provided": liveness_provided,
            "yaw_range": liveness_result.yaw_range,
            "min_yaw": liveness_result.min_yaw,
            "max_yaw": liveness_result.max_yaw,
            "detection_rate": liveness_result.detection_rate,
            "method": liveness_result.method,
            "reason": liveness_result.reason,
        },
    }

    # Liveness failure is a hard block regardless of trust score.
    if liveness_provided and not liveness_result.passed:
        return {
            "kyc_id": kyc_id,
            "result": "REJECTED",
            "trust_score": trust_score,
            "rejection_reason": "LIVENESS_FAILED",
            "deepfake_result": biometric_result,
            "processed_at": processed_at,
        }

    if passed:
        return {
            "kyc_id": kyc_id,
            "result": "APPROVED",
            "trust_score": trust_score,
            "ocr_data": {
                **ocr_result.fields,
                "ocr_confidence": round(ocr_confidence, 4),
            },
            "deepfake_result": biometric_result,
            "processed_at": processed_at,
        }
    else:
        if deepfake_result.verdict == "FAKE":
            rejection_reason = "DEEPFAKE_DETECTED"
        elif ocr_confidence < 0.3:
            rejection_reason = "OCR_FAILURE"
        else:
            rejection_reason = "LOW_TRUST_SCORE"

        return {
            "kyc_id": kyc_id,
            "result": "REJECTED",
            "trust_score": trust_score,
            "rejection_reason": rejection_reason,
            "deepfake_result": biometric_result,
            "processed_at": processed_at,
        }


def _publish_result(channel, result: dict):
    channel.basic_publish(
        exchange=EXCHANGE,
        routing_key=RESULTS_KEY,
        body=json.dumps(result),
        properties=pika.BasicProperties(delivery_mode=2),  # persistent
    )
    logger.info(f"Published result for kyc_id={result['kyc_id']}: {result['result']}")


def _on_message(channel, method, properties, body):
    try:
        payload = json.loads(body)
        result = process_message(payload)
        _publish_result(channel, result)
        channel.basic_ack(delivery_tag=method.delivery_tag)
    except Exception as e:
        logger.error(f"Failed to process message: {e}", exc_info=True)
        channel.basic_nack(delivery_tag=method.delivery_tag, requeue=False)


def start_consumer():
    retries = 15
    for attempt in range(retries):
        try:
            params = pika.URLParameters(RABBITMQ_URL)
            connection = pika.BlockingConnection(params)
            channel = connection.channel()

            channel.exchange_declare(exchange=EXCHANGE, exchange_type="direct", durable=True)
            channel.queue_declare(queue=PROCESSING_QUEUE, durable=True)
            channel.queue_declare(queue=RESULTS_QUEUE, durable=True)
            channel.queue_bind(queue=PROCESSING_QUEUE, exchange=EXCHANGE, routing_key=PROCESSING_KEY)
            channel.queue_bind(queue=RESULTS_QUEUE, exchange=EXCHANGE, routing_key=RESULTS_KEY)

            channel.basic_qos(prefetch_count=1)
            channel.basic_consume(queue=PROCESSING_QUEUE, on_message_callback=_on_message)

            logger.info(f"AI consumer connected to RabbitMQ, waiting for messages...")
            channel.start_consuming()
        except Exception as e:
            logger.warning(f"RabbitMQ connection attempt {attempt + 1}/{retries} failed: {e}")
            time.sleep(5)

    logger.error("Could not connect to RabbitMQ after all retries")


def start_consumer_thread():
    t = threading.Thread(target=start_consumer, daemon=True, name="rabbitmq-consumer")
    t.start()
    return t
