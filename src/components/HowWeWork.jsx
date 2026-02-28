import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// SVG Icons as components
const ArrowRight = ({ size = 24, strokeWidth = 2 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);

const Menu = ({ size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

const X = ({ size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

const Check = ({ size = 24, strokeWidth = 2, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}>
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

const Loader2 = ({ size = 24, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}>
        <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
    </svg>
);

export default function HowWeWorkPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activePhase, setActivePhase] = useState(0);
    const [contactModalOpen, setContactModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [formStatus, setFormStatus] = useState(null);
    const navigate = useNavigate();

    const navigateToHome = () => navigate("/");
    const navigateToProjects = () => navigate("/projects");
    const navigateToHowWeWork = () => navigate("/howwework");
    const navigateToAboutUs = () => navigate("/about");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Detect which phase is in view
            const phases = document.querySelectorAll(".phase-section");
            phases.forEach((phase, index) => {
                const rect = phase.getBoundingClientRect();
                if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
                    setActivePhase(index);
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -100px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-fade-in");
                }
            });
        }, observerOptions);

        document
            .querySelectorAll(".fade-in-section")
            .forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const smoothScroll = (e, target) => {
        e.preventDefault();
        const element = document.querySelector(target);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }
        setMobileMenuOpen(false);
    };

    const handleNavigation = (path) => {
        console.log(`Navigating to: ${path}`);
        setMobileMenuOpen(false);
    };

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        setFormStatus("loading");

        await new Promise((resolve) => setTimeout(resolve, 1500));

        setFormStatus("success");
        setTimeout(() => {
            setContactModalOpen(false);
            setFormStatus(null);
            setFormData({ name: "", email: "", message: "" });
        }, 2000);
    };

    const LazyImage = ({ src, alt, className }) => {
        const [loaded, setLoaded] = useState(false);
        const imgRef = useRef();

        useEffect(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting && imgRef.current) {
                            imgRef.current.src = src;
                        }
                    });
                },
                { rootMargin: "100px" }
            );

            if (imgRef.current) {
                observer.observe(imgRef.current);
            }

            return () => observer.disconnect();
        }, [src]);

        return (
            <div className="relative w-full h-full bg-neutral-200">
                {!loaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-neutral-400 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
                <img
                    ref={imgRef}
                    alt={alt}
                    className={`${className} ${
                        loaded ? "opacity-100" : "opacity-0"
                    } transition-opacity duration-500`}
                    onLoad={() => setLoaded(true)}
                    loading="lazy"
                />
            </div>
        );
    };

    const phases = [
        {
            number: "01",
            title: "Discovery & Research",
            subtitle: "Understanding Your Vision",
            description:
                "We begin by listening. Through in-depth consultations, site analysis, and research, we uncover the essence of your project—your needs, aspirations, and the unique context of the space.",
            features: [
                "Site Analysis",
                "Client Consultation",
                "Research & Inspiration",
                "Budget Planning",
            ],
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop&q=90",
            duration: "1-2 weeks",
        },
        {
            number: "02",
            title: "Concept & Design",
            subtitle: "Bringing Ideas to Life",
            description:
                "With insights gathered, we translate vision into form. Sketches evolve into detailed plans, material palettes are refined, and 3D visualizations help you see the space before it exists.",
            features: [
                "Conceptual Sketches",
                "3D Visualization",
                "Material Selection",
                "Design Refinement",
            ],
            image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop&q=90",
            duration: "3-4 weeks",
        },
        {
            number: "03",
            title: "Development & Build",
            subtitle: "Precision in Execution",
            description:
                "Design becomes reality through meticulous coordination. We work with trusted contractors and artisans, ensuring every detail aligns with the vision while maintaining quality and timeline.",
            features: [
                "Construction Documentation",
                "Contractor Coordination",
                "Quality Control",
                "Project Management",
            ],
            image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=800&fit=crop&q=90",
            duration: "8-12 weeks",
        },
        {
            number: "04",
            title: "Delivery & Support",
            subtitle: "Thoughtful Completion",
            description:
                "The final phase is about refinement. We conduct thorough walkthroughs, address any concerns, and ensure the space not only meets but exceeds expectations. Our relationship doesn't end here.",
            features: [
                "Final Walkthrough",
                "Documentation",
                "Client Training",
                "Ongoing Support",
            ],
            image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop&q=90",
            duration: "1-2 weeks",
        },
    ];

    return (
        <div className="min-h-screen bg-neutral-50 text-neutral-900">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
                
                * {
                    font-family: 'Inter', sans-serif;
                }
                
                html {
                    scroll-behavior: smooth;
                }
                
                .fade-in-section {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
                }
                
                .animate-fade-in {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                .phase-card {
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .phase-card:hover {
                    transform: translateY(-8px);
                }
                
                .phase-card:hover .card-number {
                    transform: scale(1.1);
                }
                
                .card-number {
                    transition: transform 0.3s ease;
                }
                
                .image-overlay {
                    position: relative;
                    overflow: hidden;
                }
                
                .image-overlay::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: rgba(0, 0, 0, 0);
                    transition: background 0.4s ease;
                }
                
                .image-overlay:hover::after {
                    background: rgba(0, 0, 0, 0.2);
                }
                
                .image-overlay img {
                    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .image-overlay:hover img {
                    transform: scale(1.05);
                }

                .btn-primary {
                    transition: all 0.2s ease;
                }

                .btn-primary:active {
                    transform: scale(0.98);
                }

                .btn-primary:focus-visible {
                    outline: 2px solid #000;
                    outline-offset: 2px;
                }

                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .modal-content {
                    animation: slideUp 0.3s ease-out;
                }
            `}</style>

            {/* Contact Modal */}
            {contactModalOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
                    onClick={() => !formStatus && setContactModalOpen(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="contact-modal-title">
                    <div
                        className="bg-white rounded-lg max-w-md w-full p-8 modal-content relative"
                        onClick={(e) => e.stopPropagation()}>
                        {formStatus !== "success" && (
                            <button
                                onClick={() => setContactModalOpen(false)}
                                className="absolute top-4 right-4 hover:opacity-50 transition-opacity"
                                aria-label="Close modal"
                                disabled={formStatus === "loading"}>
                                <X size={24} />
                            </button>
                        )}

                        {formStatus === "success" ? (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Check
                                        size={32}
                                        className="text-green-600"
                                        strokeWidth={3}
                                    />
                                </div>
                                <h3 className="text-2xl font-semibold mb-2">
                                    Thank You!
                                </h3>
                                <p className="text-neutral-600">
                                    We'll get back to you soon.
                                </p>
                            </div>
                        ) : (
                            <>
                                <h2
                                    id="contact-modal-title"
                                    className="text-2xl font-semibold mb-6">
                                    Get in Touch
                                </h2>
                                <form
                                    onSubmit={handleContactSubmit}
                                    className="space-y-4">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium mb-2">
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            required
                                            disabled={formStatus === "loading"}
                                            value={formData.name}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    name: e.target.value,
                                                })
                                            }
                                            className="w-full px-4 py-2 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-neutral-900 disabled:opacity-50"
                                            aria-required="true"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium mb-2">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            required
                                            disabled={formStatus === "loading"}
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    email: e.target.value,
                                                })
                                            }
                                            className="w-full px-4 py-2 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-neutral-900 disabled:opacity-50"
                                            aria-required="true"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            required
                                            disabled={formStatus === "loading"}
                                            value={formData.message}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    message: e.target.value,
                                                })
                                            }
                                            rows={4}
                                            className="w-full px-4 py-2 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-neutral-900 disabled:opacity-50 resize-none"
                                            aria-required="true"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={formStatus === "loading"}
                                        className="w-full bg-neutral-900 text-white py-3 rounded font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 btn-primary">
                                        {formStatus === "loading" ? (
                                            <>
                                                <Loader2
                                                    size={18}
                                                    className="animate-spin"
                                                />
                                                Sending...
                                            </>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-16 pt-24">
                <div className="max-w-5xl mx-auto text-center">
                    <p className="text-neutral-500 text-sm font-medium tracking-wider uppercase mb-6">
                        Our Process
                    </p>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-8 leading-tight">
                        How We Work
                    </h1>
                    <p className="text-neutral-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
                        From first conversation to final walkthrough, we guide
                        every project with care, precision, and a commitment to
                        thoughtful design.
                    </p>
                    <button
                        onClick={(e) => smoothScroll(e, "#overview")}
                        className="bg-neutral-900 text-neutral-50 px-8 py-3 text-sm font-medium hover:bg-neutral-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 btn-primary"
                        aria-label="Scroll to process overview">
                        EXPLORE OUR PROCESS
                    </button>
                </div>
            </section>

            {/* Overview Cards */}
            <section
                id="overview"
                className="py-24 px-6 lg:px-16 fade-in-section">
                <div className="max-w-[1600px] mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {phases.map((phase, index) => (
                            <article
                                key={index}
                                className="phase-card bg-white p-8 border border-neutral-200 hover:border-neutral-900 hover:shadow-lg cursor-pointer">
                                <div
                                    className="card-number text-6xl font-bold text-neutral-200 mb-4"
                                    aria-hidden="true">
                                    {phase.number}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">
                                    {phase.title}
                                </h3>
                                <p className="text-neutral-600 text-sm mb-4">
                                    {phase.subtitle}
                                </p>
                                <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
                                    <div
                                        className="w-1 h-1 bg-neutral-500 rounded-full"
                                        aria-hidden="true"></div>
                                    {phase.duration}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Timeline */}
            <section className="py-24 px-6 lg:px-16 bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-center mb-20 fade-in-section">
                        <p className="text-neutral-500 text-sm font-medium tracking-wider uppercase mb-4">
                            The Journey
                        </p>
                        <h2 className="text-4xl md:text-5xl font-semibold">
                            Step by Step
                        </h2>
                    </div>

                    {phases.map((phase, index) => (
                        <article
                            key={index}
                            className="phase-section mb-32 fade-in-section">
                            <div
                                className={`grid lg:grid-cols-2 gap-12 items-center ${
                                    index % 2 === 0 ? "" : "lg:grid-flow-dense"
                                }`}>
                                <div
                                    className={
                                        index % 2 === 0 ? "" : "lg:col-start-2"
                                    }>
                                    <div className="flex items-baseline gap-4 mb-6">
                                        <span
                                            className="text-7xl md:text-8xl font-bold text-neutral-200"
                                            aria-hidden="true">
                                            {phase.number}
                                        </span>
                                        <div
                                            className="w-16 h-px bg-neutral-900 mt-8"
                                            aria-hidden="true"></div>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-semibold mb-4">
                                        {phase.title}
                                    </h3>
                                    <p className="text-neutral-500 text-sm font-medium mb-6">
                                        {phase.subtitle}
                                    </p>
                                    <p className="text-neutral-600 leading-relaxed mb-8">
                                        {phase.description}
                                    </p>

                                    <div className="space-y-3" role="list">
                                        {phase.features.map((feature, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-3"
                                                role="listitem">
                                                <div
                                                    className="w-5 h-5 rounded-full bg-neutral-900 flex items-center justify-center flex-shrink-0"
                                                    aria-hidden="true">
                                                    <Check
                                                        size={12}
                                                        className="text-white"
                                                        strokeWidth={3}
                                                    />
                                                </div>
                                                <span className="text-sm font-medium">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8 pt-8 border-t border-neutral-200">
                                        <div className="flex items-center gap-3 text-sm">
                                            <span className="text-neutral-500">
                                                Typical Duration:
                                            </span>
                                            <span className="font-semibold">
                                                {phase.duration}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`image-overlay ${
                                        index % 2 === 0
                                            ? ""
                                            : "lg:col-start-1 lg:row-start-1"
                                    }`}>
                                    <div className="h-[500px] overflow-hidden">
                                        <LazyImage
                                            src={phase.image}
                                            alt={`${phase.title} - ${phase.subtitle}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section
                id="contact"
                className="py-32 md:py-48 px-6 lg:px-16 bg-neutral-900 text-white fade-in-section">
                <div className="max-w-5xl mx-auto text-center">
                    <p className="text-white/60 mb-8">
                        Every great project starts with a conversation.
                    </p>
                    <h2 className="text-5xl md:text-7xl font-semibold mb-12 leading-tight">
                        Ready to begin?
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
                </div>
            </section>
        </div>
    );
}
