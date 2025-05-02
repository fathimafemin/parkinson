import React, { useState } from "react"; 
import { Link } from "react-router-dom"; 
import axios from "axios"; 
import medicalIcon from "./images/image1.jpeg"; 
import aboutImage from "./images/image2.jpg"; 
import "../styles/UploadComponent.css"; 

const UploadComponent = () => { 
    const [selectedFile, setSelectedFile] = useState(null); 
    const [previewSrc, setPreviewSrc] = useState(null); 
    const [fileName, setFileName] = useState(""); 
    const [prediction, setPrediction] = useState(""); 
    const [confidence, setConfidence] = useState(""); 

    const handleFileChange = (event) => { 
        const file = event.target.files[0]; 
        if (file) { 
            setSelectedFile(file); 
            setFileName(file.name); 
            setPreviewSrc(URL.createObjectURL(file)); 
        } 
    }; 

    const handleUpload = async () => { 
        if (!selectedFile) { 
            alert("Please select an image first."); 
            return; 
        } 
        const formData = new FormData(); 
        formData.append("file", selectedFile); 
        try { 
            const response = await axios.post("http://127.0.0.1:5000/predict", formData); 
            setPrediction(response.data.prediction); 
            setConfidence(response.data.confidence.toFixed(2)); 
        } catch (error) { 
            console.error("Error uploading image:", error); 
        } 
    }; 

    return ( 
        <div className="app-container"> 
            <header className="header"> 
                <nav> 
                    <Link to="/">Home</Link> 
                    <a href="#parkinson-section">About</a> 
                </nav> 
                <img src={medicalIcon} alt="Medical Icon" className="centered image" /> 
                <h1>Parkinson's Disease Detection</h1> 
                <p>Upload an image to detect Parkinson's Disease using AI.</p> 
            </header> 

            <div className="upload-section"> 
                <div className="button-row"> 
                    <label className="upload-label"> 
                        Upload Image 
                        <input type="file" onChange={handleFileChange} accept="image/*" /> 
                    </label> 
                </div> 

                {previewSrc && ( 
                    <div className="preview-container"> 
                        <img src={previewSrc} alt="Preview" className="preview image" /> 
                        <p className="file-name">File: {fileName}</p> 
                    </div> 
                )} 

                <button className="button submit-button" onClick={handleUpload}> 
                    Submit for Prediction 
                </button> 

                {prediction && ( 
                    <div className={`result ${prediction.toLowerCase().includes("parkinson") ? "positive" : "negative"}`}> 
                        <h3>Prediction: {prediction}</h3> 
                        <p>Confidence: {confidence}%</p> 
                    </div> 
                )} 
            </div> 

            <section id="parkinson-section" className="parkinson-section"> 
                <div className="about-container"> 
                    <div className="about-image-wrapper"> 
                        <img src={aboutImage} alt="Parkinson's Awareness" className="about-image" /> 
                    </div> 
                    <div className="about-text"> 
                        <h2>About Parkinson's Disease</h2> 
                        <p> 
                            This initiative offers genetic testing and counseling at no cost for people 
                            with Parkinson's disease (PD). Help scientists better understand how Parkinson's 
                            works and support the discovery of new, more effective therapies. 
                        </p> 
                    </div> 
                </div> 
            </section> 

            <footer className="footer"> 
                <a href="https://fathimafemin.github.io/portfolio/">Contact Us</a> 
            </footer> 
        </div> 
    ); 
}; 

export default UploadComponent;
