const express = require("express");
const multer = require("multer");
const cors = require("cors");
const axios = require("axios");
const path = require("path");

const app = express();
app.use(cors());

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("image"), async (req, res) => {
    try {
        const filePath = req.file.path;
        
        // Send image to Flask API
        const flaskResponse = await axios.post("http://127.0.0.1:5000/predict", 
            { file: req.file }, 
            { headers: { "Content-Type": "multipart/form-data" } }
        );

        res.json(flaskResponse.data);
    } catch (error) {
        res.status(500).json({ error: "Error processing image" });
    }
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});
