import React, { useState, useEffect } from "react";
import { ArrowRight, Facebook, Instagram, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Data dummy untuk project (biasanya ini ditaruh di file terpisah atau API)
const projects = [
    {
        id: 1,
        category: "RESIDENTIAL",
        year: "2023",
        image: "/image/projects/residen.webp",
    },
    {
        id: 2,
        category: "COMMERCIAL",
        year: "2024",
        image: "/image/projects/comer.webp",
    },
    {
        id: 3,
        category: "LANDSCAPE",
        year: "2023",
        image: "/image/projects/layout.webp",
    },
];

export default function Home() {
    const navigate = useNavigate();
    const [loadedImages, setLoadedImages] = useState({});

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -100px 0px",
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting)
                    entry.target.classList.add("animate-fade-in");
            });
        }, observerOptions);

        document
            .querySelectorAll(".fade-in-section")
            .forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const handleImageLoad = (id) => {
        setLoadedImages((prev) => ({ ...prev, [id]: true }));
    };

    return (
        <div className="bg-neutral-50 text-neutral-900">
            {/* HERO SECTION */}
            <section
                id="home"
                className="relative min-h-screen flex items-center justify-center px-6 lg:px-16 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div
                        className={`w-full h-full ${
                            !loadedImages["hero"] ? "image-skeleton" : ""
                        }`}>
                        <img
                            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1800&h=1200&fit=crop&q=90"
                            alt="Modern architecture"
                            className="w-full h-full object-cover"
                            onLoad={() => handleImageLoad("hero")}
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/80 via-neutral-50/60 to-neutral-50/40"></div>
                </div>

                <div className="relative z-10 max-w-[1200px] mx-auto text-center pt-24 pb-16">
                    <h1 className="hero-text text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-8 md:mb-10 px-4 leading-tight">
                        A dream home is no longer an illusion,
                        <br className="hidden sm:block" />
                        but a place slowly unfolding into reality.
                    </h1>
                    <p className="text-neutral-700 text-sm md:text-base mb-2 max-w-3xl mx-auto leading-relaxed">
                        Structura create architecture that blends function,
                        emotion, and timeless form.
                    </p>
                    <p className="text-neutral-700 text-sm md:text-base mb-10 max-w-3xl mx-auto leading-relaxed">
                        From residential retreats to commercial landmarks, every
                        structure tells a story.
                    </p>
                    <button className="bg-neutral-900 text-neutral-50 px-8 py-3 text-sm font-medium hover:bg-neutral-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
                        GET IN TOUCH
                    </button>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section
                id="about"
                className="py-24 md:py-36 px-6 lg:px-16 bg-white fade-in-section">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start mb-16">
                        <div>
                            <h2 className="text-xs uppercase tracking-widest mb-8 text-neutral-400 font-semibold">
                                ABOUT
                            </h2>
                            <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
                                STRUCTURA sees architecture not merely as
                                building, but as the craft of designing
                                environments that move people. Each project is
                                shaped through thoughtful design.
                            </p>
                        </div>
                        <div className="h-80 md:h-96 bg-neutral-100 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=900&fit=crop"
                                alt="Detail"
                                className="w-full h-full object-cover"
                                onLoad={() => handleImageLoad("about1")}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section className="py-24 md:py-36 px-6 lg:px-16 fade-in-section">
                <div className="max-w-[1400px] mx-auto">
                    <h2 className="text-xs uppercase tracking-widest mb-16 text-neutral-400 font-semibold">
                        SERVICES
                    </h2>
                    <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
                        <div className="aspect-square bg-neutral-100 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=900"
                                alt="Service"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="space-y-8">
                            <h3 className="text-3xl md:text-5xl font-semibold text-neutral-900">
                                3D Visualization & Renders
                            </h3>
                            <p className="text-neutral-500">
                                We bring concepts to life before the first stone
                                is laid.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJECTS PREVIEW */}
            <section className="py-24 md:py-36 px-6 lg:px-16 bg-white fade-in-section">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <h2 className="text-xs uppercase tracking-widest mb-4 text-neutral-400 font-semibold">
                                PROJECTS
                            </h2>
                            <p className="text-neutral-600 text-sm">
                                Selected works that define our vision.
                            </p>
                        </div>
                        <button
                            onClick={() => navigate("/projects")}
                            className="hidden md:flex items-center gap-2 text-sm font-medium hover:opacity-50">
                            VIEW ALL <ArrowRight size={16} />
                        </button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="group cursor-pointer"
                                onClick={() => navigate("/projects")}>
                                <div className="aspect-[3/4] overflow-hidden mb-4">
                                    <img
                                        src={project.image}
                                        alt="Project"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <p className="text-xs text-neutral-500 font-medium">
                                    {project.category} — {project.year}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 md:py-48 px-6 lg:px-16 text-center fade-in-section">
                <h2 className="text-5xl md:text-7xl font-semibold mb-10">
                    Ready to build?
                </h2>
                <button
                    onClick={() =>
                        window.open("https://wa.me/6281944131033", "_blank")
                    }
                    className="group inline-flex items-center gap-2 text-lg font-medium hover:opacity-50 transition-all cursor-pointer">
                    Contact us{" "}
                    <ArrowRight
                        size={20}
                        className="transition-transform group-hover:translate-x-1"
                    />
                </button>
            </section>
        </div>
    );
}
