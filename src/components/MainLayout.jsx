import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-neutral-900">
            {/* Navbar di atas dengan z-index tinggi agar tidak tertutup hotspot */}
            <div className="sticky top-0 z-[100] bg-neutral-900/80 backdrop-blur-md">
                <Navbar />
            </div>

            {/* Konten Utama */}
            <main className="flex-grow">{children}</main>

            {/* Footer di bawah */}
            <Footer />
        </div>
    );
};

export default MainLayout;
