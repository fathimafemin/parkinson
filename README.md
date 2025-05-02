

# 🧠 Parkinson's Disease Detection via Handwriting Analysis

This project presents a deep learning-based approach to detect and classify the presence of Parkinson’s Disease using spiral and wave drawings. It uses EfficientNetB3 for high-accuracy image classification and provides both backend prediction logic and a frontend interface.

---

## 🚀 Project Overview

* **🎯 Goal**: Early detection and stage classification of Parkinson's using handwriting patterns.
* **🤖 Model**: EfficientNetB3 (fine-tuned).
* **📈 Performance**:

  * **Training Accuracy**: 97%
  * **Validation Accuracy**: \~97%
  * **Test Accuracy**: \~97%
  * **AUC**: \~0.99
* **🧪 Framework**: TensorFlow + Flask (backend), React.js (frontend)

---

## 📁 Dataset

* **Source**: [Kaggle - Augmented Hand-Drawn Parkinson's Dataset](https://www.kaggle.com/datasets/abdulkhalekmugahed/augmented-hand-drawn-data-for-parkinsons-disease)
* **Structure**:

  * `train/`: Spiral and wave images of healthy and Parkinson's subjects.
  * `val/`: Validation images.
  * `test/`: Testing images.

---

## 🧠 Model Architecture

* **Base Model**: EfficientNetB3 (ImageNet pretrained)
* **Image Input Size**: 224x224 pixels
* **Loss Function**: Binary Crossentropy with Label Smoothing
* **Optimizer**: Adam
* **Augmentations**: Rotation, Zoom, Shear, Flip, Brightness
* **Regularization**: L2 and Dropout

---

## 📦 Download Trained Model

To avoid GitHub file size limits, the model is hosted on Google Drive:

🔗 [Download `parkinsonnew1.keras`](https://drive.google.com/file/d/1-0fYdY_K-SMSpoSrxaSYl6GyN_8Id84Q/view?usp=sharing)

After downloading, place it in the `backend/` directory or adjust the path in `app.py`.

---

## 🖥️ System Architecture

### Backend: `Flask + TensorFlow`

```bash
# Example API Call
POST /predict
Payload: image (form-data)

Response:
{
  "prediction": "Parkinson's Detected",
  "confidence": 0.89
}
```

### Frontend: `React`

* Uploads an image and displays the prediction result (Parkinson’s vs Healthy).
* Simple, responsive UI with real-time preview.

---

## 📊 Results & Evaluation

| Metric    | Value |
| --------- | ----- |
| Accuracy  | 97%   |
| AUC       | 0.99  |
| Precision | High  |
| Recall    | High  |

* Includes Confusion Matrix and ROC Curve.
* Outlier detection using IQR for pixel intensities.

---

## 📂 Folder Structure

```
parkinsons-detection/
├── backend/
│   ├── app.py
│   └── parkinsonnew1.keras  # (Place after download)
├── client/
│   └── src/
│       └── components/
│           └── UploadComponent.js
├── README.md
├── requirements.txt
└── ...
```

---

## 🧪 Getting Started

### 🔧 Backend Setup

```bash
cd backend
pip install -r requirements.txt
python app.py
```

### 🌐 Frontend Setup

```bash
cd client
npm install
npm start
```

---

## 📌 Features

* Class-balanced training using computed class weights.
* Advanced augmentations and fine-tuning for robustness.
* Cross-platform deployment via Flask API and React UI.

---

## 🙋‍♀️ Author

**Fathima Femin**
🔗 [GitHub Profile](https://github.com/fathimafemin)
🌐 [Portfolio](https://fathimafemin.github.io/portfolio/)

---

Would you like me to generate this `README.md` file into your project directory or assist with deploying the app?
