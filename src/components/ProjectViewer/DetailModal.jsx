import React from "react";
import { X } from "lucide-react";

const DetailModal = ({ hotspot, onClose }) => {
    if (!hotspot) return null;

    return (
        <div
            className="absolute inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
            onClick={onClose}>
            <div
                className="max-w-5xl w-full bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
                onClick={(e) => e.stopPropagation()} // Supaya klik di dalam modal gak nutup modal
            >
                {/* Bagian Gambar Detail */}
                <div className="w-full md:w-3/5 h-[300px] md:h-auto relative">
                    <img
                        src={hotspot.image}
                        alt={hotspot.label}
                        className="w-full h-full object-cover"
                    />
                    {/* Tombol Close untuk Mobile (di atas gambar) */}
                    <button
                        onClick={onClose}
                        className="md:hidden absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white">
                        <X size={20} />
                    </button>
                </div>

                {/* Bagian Konten Teks */}
                <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col relative">
                    {/* Tombol Close untuk Desktop */}
                    <button
                        onClick={onClose}
                        className="hidden md:flex absolute top-6 right-6 text-neutral-500 hover:text-white transition-colors">
                        <X size={28} />
                    </button>

                    <div className="mt-4">
                        <span className="text-xs tracking-[0.2em] text-orange-500 uppercase font-bold">
                            Detail Concept
                        </span>
                        <h3 className="text-3xl md:text-4xl font-semibold text-white mt-2 mb-4">
                            {hotspot.label}
                        </h3>
                        <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-6">
                            {hotspot.description}
                        </p>
                        <div className="h-[1px] w-12 bg-neutral-700 mb-6"></div>
                        <p className="text-neutral-300 text-sm leading-relaxed overflow-y-auto italic">
                            "
                            {hotspot.fullDescription ||
                                "No detailed description available for this item."}
                            "
                        </p>
                    </div>

                    <div className="mt-auto pt-8">
                        <button
                            onClick={onClose}
                            className="w-full py-4 border border-neutral-700 text-white text-sm tracking-widest hover:bg-white hover:text-neutral-900 transition-all duration-300 uppercase">
                            Back to Overview
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailModal;
