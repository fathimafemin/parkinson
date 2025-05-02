
# Parkinson's Disease Detection via Handwriting Analysis

This project presents a deep learning-based approach for early detection and stage classification of Parkinson's Disease using hand-drawn spiral and wave patterns. The model leverages the EfficientNetB3 architecture to achieve high accuracy in identifying Parkinsonian patterns in handwriting.

## 🚀 Project Overview

- 📌 **Objective**: Classify Parkinson’s Disease stages using spiral and wave drawings.
- 🤖 **Model**: EfficientNetB3 Convolutional Neural Network.
- 🎯 **Accuracy**: Achieved 97% test accuracy.
- 📊 **Dataset**: Augmented hand-drawn dataset sourced from Kaggle.

## 📁 Dataset

The dataset used for this project is available on Kaggle:

🔗 [Augmented Hand-Drawn Data for Parkinson's Disease – Kaggle](https://www.kaggle.com/datasets/abdulkhalekmugahed/augmented-hand-drawn-data-for-parkinsons-disease)

- Includes both spiral and wave drawings from healthy and affected individuals.

## 📥 Download Trained Model

To avoid GitHub’s file size limits, the trained model is hosted externally:

📦 [Download Model (.keras) from Google Drive](https://drive.google.com/file/d/1-0fYdY_K-SMSpoSrxaSYl6GyN_8Id84Q/view?usp=sharing)

> After downloading, place the file in the `backend/` folder or adjust the path in your code accordingly.

## 🧠 Model Architecture

* Base model: **EfficientNetB3**
* Input size: 300x300 images
* Optimizer: Adam
* Loss function: Categorical Crossentropy
* Augmentations: Rotation, Zoom, Flip, and Brightness adjustments

## 📊 Results

| Metric    | Value |
| --------- | ----- |
| Accuracy  | 97%   |
| Precision | High  |
| Recall    | High  |

## 📌 Folder Structure

```
parkinson/
├── backend/
│   ├── app.py
│   ├── parkinsonnew1.keras
│   └── ...
├── client/
│   └── ...
├── server/
│   └── ...
├── README.md
├── requirements.txt
└── ...
```


## 🙋‍♀️ Author

**Fathima Femin**
Feel free to connect on [GitHub](https://github.com/fathimafemin)


