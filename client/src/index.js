import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import UploadComponent from "./components/UploadComponent"; // adjust path if needed
import "./styles/UploadComponent.css"; // include global CSS if not already done

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <UploadComponent />
        </BrowserRouter>
    </React.StrictMode>
);
