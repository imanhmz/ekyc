# GPU-capable AI service
# Base: CUDA 12.1 + cuDNN 8 runtime on Ubuntu 22.04
FROM nvidia/cuda:12.1.0-cudnn8-runtime-ubuntu22.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y --no-install-recommends \
    python3.11 python3.11-dev \
    libglib2.0-0 libsm6 libxext6 libxrender-dev libgomp1 curl \
    libgl1 libglib2.0-0 \
    && rm -rf /var/lib/apt/lists/* \
    && curl -sS https://bootstrap.pypa.io/get-pip.py | python3.11 \
    && python3.11 -m pip install --no-cache-dir --upgrade pip

# Install PyTorch 2.5.1 with CUDA 12.1 BEFORE requirements.txt.
# EasyOCR and DeepFace both depend on torch; installing the GPU wheel first
# prevents pip from pulling the CPU-only wheel from PyPI when resolving
# those transitive dependencies.
RUN python3.11 -m pip install --no-cache-dir \
    torch==2.5.1 torchvision==0.20.1 \
    --index-url https://download.pytorch.org/whl/cu121

WORKDIR /app
COPY requirements.txt .
RUN python3.11 -m pip install --no-cache-dir -r requirements.txt

COPY src/ ./src/

ENV PYTHONPATH=/app/src
# Tell NVIDIA runtime to expose all GPUs and compute capability
ENV NVIDIA_VISIBLE_DEVICES=all
ENV NVIDIA_DRIVER_CAPABILITIES=compute,utility

EXPOSE 8000
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=5 \
    CMD curl -f http://localhost:8000/health || exit 1

CMD ["python3.11", "-m", "uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]
