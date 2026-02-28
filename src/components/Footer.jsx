import React from "react";
import {
    Facebook,
    Instagram,
    Linkedin,
    ArrowRight,
    MessageCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    // Fungsi untuk membuka WhatsApp
    const handleWhatsAppChat = () => {
        window.open(
            "https://wa.me/6281944131033?text=Halo%20Structura,%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20proyek%20arsitektur.",
            "_blank"
        );
    };

    return (
        <footer className="bg-neutral-900 text-neutral-100 py-16 md:py-20 px-6 lg:px-16 relative overflow-hidden">
            {/* Background Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <div className="text-[15vw] font-bold tracking-tighter text-white select-none uppercase">
                    STRUCTURA
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-16">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-7 h-7 bg-neutral-100 transform -skew-x-12"></div>
                            <span className="text-xl font-medium tracking-tight">
                                STRUCTURA
                            </span>
                        </div>
                        <p className="text-sm text-neutral-400 leading-relaxed mb-8">
                            Let's collaborate on your next build—residential,
                            commercial, or visionary. Our team is ready to bring
                            clarity and craft to your idea.
                        </p>
                        {/* Tombol Get In Touch -> WhatsApp */}
                        <button
                            onClick={handleWhatsAppChat}
                            className="group bg-neutral-100 text-neutral-900 px-8 py-3 text-xs font-semibold hover:bg-white transition-all duration-300 flex items-center gap-2">
                            GET IN TOUCH
                            <ArrowRight
                                size={14}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </button>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h3 className="text-xs uppercase tracking-widest mb-8 text-neutral-500 font-semibold">
                            NAVIGATION
                        </h3>
                        <div className="flex flex-col space-y-4 text-sm font-medium">
                            <button
                                onClick={() => navigate("/")}
                                className="text-left hover:text-neutral-400 transition-colors uppercase">
                                Home
                            </button>
                            <button
                                onClick={() => navigate("/projects")}
                                className="text-left hover:text-neutral-400 transition-colors uppercase">
                                Project
                            </button>
                            <button
                                onClick={() => navigate("/howwework")}
                                className="text-left hover:text-neutral-400 transition-colors uppercase">
                                How We Work
                            </button>
                            <button
                                onClick={() => navigate("/about")}
                                className="text-left hover:text-neutral-400 transition-colors uppercase">
                                About Us
                            </button>
                        </div>
                    </div>

                    {/* Social Column */}
                    <div>
                        <h3 className="text-xs uppercase tracking-widest mb-8 text-neutral-500 font-semibold">
                            SOCIAL MEDIA
                        </h3>
                        <div className="flex flex-col space-y-4 text-sm font-medium">
                            <a
                                href="#"
                                className="flex items-center gap-3 hover:text-neutral-400 transition-colors uppercase">
                                <Facebook size={16} /> Facebook
                            </a>
                            <a
                                href="#"
                                className="flex items-center gap-3 hover:text-neutral-400 transition-colors uppercase">
                                <Instagram size={16} /> Instagram
                            </a>
                            <a
                                href="#"
                                className="flex items-center gap-3 hover:text-neutral-400 transition-colors uppercase">
                                <Linkedin size={16} /> Linkedin
                            </a>
                            {/* Tambahan baris WhatsApp agar user bisa copy nomor langsung */}
                            <button
                                onClick={handleWhatsAppChat}
                                className="flex items-center gap-3 hover:text-green-400 transition-colors uppercase text-left">
                                <MessageCircle size={16} /> +62 819 4413 1033
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-xs text-neutral-500 font-medium tracking-widest">
                    <p>© 2026 CODEX PROJECT</p>
                    <div className="flex gap-8">
                        {/* Update link ke anchor legal (bisa diarahkan ke page Legal yang kita bahas tadi) */}
                        <a
                            href="/legal#privacy"
                            className="hover:text-neutral-300 transition-colors uppercase">
                            Privacy
                        </a>
                        <a
                            href="/legal#policy"
                            className="hover:text-neutral-300 transition-colors uppercase">
                            Policy
                        </a>
                        <a
                            href="/legal#terms"
                            className="hover:text-neutral-300 transition-colors uppercase">
                            Terms & Conditions
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
