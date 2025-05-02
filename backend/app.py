import os
import gdown
import tensorflow as tf
from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import numpy as np

app = Flask(__name__)
CORS(app)

MODEL_PATH = "parkinsonnew25.keras"

model = tf.keras.models.load_model(MODEL_PATH)
print("✅ Model loaded successfully")

# Image Preprocessing
def preprocess_image(image_path):
    img = cv2.imread(image_path)
    img = cv2.resize(img, (224, 224))
    img = img.astype(np.float32) / 255.0  # Normalize
    img = np.expand_dims(img, axis=0)  # Add batch dimension
    return img

@app.route("/predict", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    file_path = "temp.jpg"
    file.save(file_path)

    img = preprocess_image(file_path)
    prediction = model.predict(img)[0][0]  # Extract prediction
    os.remove(file_path)

    result = "Parkinson's Detected" if prediction > 0.5 else "Healthy"
    return jsonify({"prediction": result, "confidence": float(prediction)})

if __name__ == "__main__":
    app.run(debug=True, port=5000)