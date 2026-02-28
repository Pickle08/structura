import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    // Logika scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Helper untuk smooth scroll atau navigasi antar page
    const handleNavClick = (target, isAnchor = false) => {
        setMobileMenuOpen(false);
        if (isAnchor && window.location.pathname === "/") {
            const element = document.querySelector(target);
            if (element) {
                const offsetTop = element.offsetTop - 80;
                window.scrollTo({ top: offsetTop, behavior: "smooth" });
            }
        } else {
            navigate(target);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-neutral-50/98 backdrop-blur-md shadow-sm"
                    : "bg-neutral-50/95"
            }`}>
            <div className="max-w-[1600px] mx-auto px-6 lg:px-16 py-6 flex items-center justify-between">
                {/* Logo */}
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => navigate("/")}>
                    <div className="w-7 h-7 bg-neutral-900 transform -skew-x-12"></div>
                    <span className="text-xl font-medium tracking-tight">
                        STRUCTURA
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10 text-sm font-medium">
                    <button
                        onClick={() => handleNavClick("/", true)}
                        className="hover:opacity-50 transition-all">
                        HOME
                    </button>
                    <button
                        onClick={() => handleNavClick("/projects")}
                        className="hover:opacity-50 transition-all">
                        PROJECT
                    </button>
                    <button
                        onClick={() => handleNavClick("/howwework")}
                        className="hover:opacity-50 transition-all">
                        HOW WE WORK
                    </button>
                    <button
                        onClick={() => handleNavClick("/about")}
                        className="hover:opacity-50 transition-all">
                        ABOUT US
                    </button>
                </div>

                {/* Desktop CTA */}
                <button
                    onClick={() =>
                        window.open("https://wa.me/6281944131033", "_blank")
                    }
                    title="+62 819-4413-1033"
                    className="hidden md:flex items-center gap-2 text-sm font-medium hover:opacity-50 transition-all uppercase">
                    GET IN TOUCH <ArrowRight size={16} strokeWidth={2.5} />
                </button>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden hover:opacity-50 transition-opacity">
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-neutral-50 border-t border-neutral-200 px-6 py-6 space-y-4 font-medium animate-in slide-in-from-top duration-300">
                    <button
                        onClick={() => handleNavClick("/", true)}
                        className="block w-full text-left">
                        HOME
                    </button>
                    <button
                        onClick={() => handleNavClick("/projects")}
                        className="block w-full text-left">
                        PROJECT
                    </button>
                    <button
                        onClick={() => handleNavClick("/howwework")}
                        className="block w-full text-left">
                        HOW WE WORK
                    </button>
                    <button
                        onClick={() => handleNavClick("/about")}
                        className="block w-full text-left">
                        ABOUT US
                    </button>
                    <button
                        onClick={() => handleNavClick("#contact", true)}
                        className="flex items-center gap-2 text-sm">
                        GET IN TOUCH <ArrowRight size={16} />
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
