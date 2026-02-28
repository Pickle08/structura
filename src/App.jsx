import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes & Route
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Project from "./components/ProjectViewer/Project";
import HowWeWork from "./components/HowWeWork";
import Legal from "./components/Legal";

function App() {
    return (
        <MainLayout>
            <Routes>
                {/* Halaman Utama */}
                <Route path="/" element={<Home />} />

                {/* Halaman About */}
                <Route path="/about" element={<Aboutus />} />

                {/* Halaman Projects */}
                <Route path="/projects" element={<Project />} />

                {/* Halaman How We Work */}
                <Route path="/howwework" element={<HowWeWork />} />

                <Route path="/legal" element={<Legal />} />
            </Routes>
        </MainLayout>
    );
}

export default App;
