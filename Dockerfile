FROM python:3.11-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY src-does-not-exist/ .

ENTRYPOINT ["python", "app.py"]