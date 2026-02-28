import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // TAMBAH INI
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            {" "}
            {/* WRAP DENGAN INI */}
            <App />
        </BrowserRouter>
    </StrictMode>
);
