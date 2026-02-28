import React, { useState, useEffect, useRef } from "react";

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

const Award = ({ size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
    </svg>
);

const Users = ({ size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);

const Briefcase = ({ size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
);

const Globe = ({ size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
);

const Check = ({ size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
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

export default function AboutUsPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [contactModalOpen, setContactModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [formStatus, setFormStatus] = useState(null); // 'loading', 'success', 'error'
    const [imagesLoaded, setImagesLoaded] = useState({});
    const [statsAnimated, setStatsAnimated] = useState(false);
    const statsRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
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

    // Stats counter animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !statsAnimated) {
                        setStatsAnimated(true);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => observer.disconnect();
    }, [statsAnimated]);

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
        // Simulate navigation - in real app, this would use actual routing
        console.log(`Navigating to: ${path}`);
        setMobileMenuOpen(false);
    };

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        setFormStatus("loading");

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setFormStatus("success");
        setTimeout(() => {
            setContactModalOpen(false);
            setFormStatus(null);
            setFormData({ name: "", email: "", message: "" });
        }, 2000);
    };

    const handleImageLoad = (id) => {
        setImagesLoaded((prev) => ({ ...prev, [id]: true }));
    };

    const principles = [
        {
            icon: <Award size={32} />,
            title: "Intentional Design",
            description:
                "Every decision is purposeful. We design with restraint, removing the unnecessary to reveal what truly matters.",
        },
        {
            icon: <Users size={32} />,
            title: "Collaborative Spirit",
            description:
                "Great architecture emerges from dialogue. We listen deeply, adapt thoughtfully, and co-create with our clients.",
        },
        {
            icon: <Briefcase size={32} />,
            title: "Timeless Craft",
            description:
                "Trends fade, but good design endures. We build for longevity, creating spaces that age gracefully.",
        },
        {
            icon: <Globe size={32} />,
            title: "Contextual Awareness",
            description:
                "Architecture must respond to its environment. We honor place, climate, and culture in every project.",
        },
    ];

    const stats = [
        { number: "50+", label: "Projects Completed", value: 50, suffix: "+" },
        { number: "8", label: "Years of Excellence", value: 8, suffix: "" },
        { number: "12", label: "Team Members", value: 12, suffix: "" },
        { number: "5", label: "Countries Served", value: 5, suffix: "" },
    ];

    const team = [
        {
            name: "Sarah Mitchell",
            role: "Founding Principal",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop&q=90",
            bio: "Licensed architect with 15+ years shaping thoughtful spaces.",
        },
        {
            name: "David Chen",
            role: "Design Director",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&q=90",
            bio: "Specialist in sustainable architecture and material innovation.",
        },
        {
            name: "Maya Patel",
            role: "Senior Architect",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop&q=90",
            bio: "Expert in residential design and interior spatial planning.",
        },
        {
            name: "James Rodriguez",
            role: "Project Manager",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=600&fit=crop&q=90",
            bio: "Ensures seamless execution from concept to completion.",
        },
    ];

    const LazyImage = ({ src, alt, className, id }) => {
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

    // Counter animation component
    const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if (!statsAnimated) return;

            let startTime = null;
            const startValue = 0;

            const animate = (currentTime) => {
                if (!startTime) startTime = currentTime;
                const progress = Math.min(
                    (currentTime - startTime) / duration,
                    1
                );

                // Easing function (easeOutExpo)
                const easeProgress =
                    progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

                setCount(Math.floor(easeProgress * end));

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        }, [statsAnimated, end, duration]);

        return (
            <span>
                {count}
                {suffix}
            </span>
        );
    };

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

                .team-card {
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .team-card:hover {
                    transform: translateY(-8px);
                }

                .principle-card {
                    transition: all 0.3s ease;
                }

                .principle-card:hover {
                    background: white;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
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
                <div className="absolute inset-0 z-0">
                    <LazyImage
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&h=1200&fit=crop&q=90"
                        alt="Modern architecture studio workspace"
                        className="w-full h-full object-cover opacity-40"
                        id="hero"
                    />
                </div>
                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <p className="text-neutral-600 text-sm font-medium tracking-wider uppercase mb-6">
                        About Us
                    </p>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-8 leading-tight">
                        We build presence,
                        <br />
                        not just places
                    </h1>
                    <p className="text-neutral-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Founded on the belief that architecture should serve
                        both function and feeling, we design spaces that speak
                        quietly but powerfully.
                    </p>
                </div>
            </section>
            {/* Origin Story */}
            <section className="py-24 md:py-36 px-6 lg:px-16 bg-white fade-in-section">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-neutral-500 text-sm font-medium tracking-wider uppercase mb-6">
                                Our Story
                            </p>
                            <h2 className="text-4xl md:text-5xl font-semibold mb-8 leading-tight">
                                It began with a simple question
                            </h2>
                            <div className="space-y-6 text-neutral-600 leading-relaxed">
                                <p>
                                    What if architecture wasn't about imposing
                                    form, but about listening first? In 2016, we
                                    founded STRUCTURA with a commitment to
                                    design that emerges from context, not ego.
                                </p>
                                <p>
                                    Every space has a story waiting to be told.
                                    Our role is to uncover it—through careful
                                    observation, thoughtful dialogue, and a deep
                                    respect for material, light, and place.
                                </p>
                                <p>
                                    Today, our studio operates at the
                                    intersection of precision and poetry,
                                    creating architecture that feels both
                                    inevitable and surprising. We don't chase
                                    trends. We build for time.
                                </p>
                            </div>
                        </div>
                        <div className="image-overlay h-[600px]">
                            <LazyImage
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop&q=90"
                                alt="STRUCTURA founding team collaboration"
                                className="w-full h-full object-cover"
                                id="founders"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Philosophy/Principles */}
            <section className="py-24 md:py-36 px-6 lg:px-16 fade-in-section">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-center mb-20">
                        <p className="text-neutral-500 text-sm font-medium tracking-wider uppercase mb-6">
                            What Guides Us
                        </p>
                        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
                            Our Principles
                        </h2>
                        <p className="text-neutral-600 max-w-2xl mx-auto">
                            These values shape every decision we make, from
                            initial sketches to final construction.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {principles.map((principle, index) => (
                            <div
                                key={index}
                                className="principle-card p-8 border border-neutral-200"
                                role="article">
                                <div
                                    className="text-neutral-900 mb-6"
                                    aria-hidden="true">
                                    {principle.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-4">
                                    {principle.title}
                                </h3>
                                <p className="text-neutral-600 leading-relaxed">
                                    {principle.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Stats */}
            <section
                ref={statsRef}
                className="py-24 px-6 lg:px-16 bg-neutral-900 text-white fade-in-section"
                aria-label="Company statistics">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div
                                    className="text-5xl md:text-6xl font-bold mb-3"
                                    aria-label={`${stat.number} ${stat.label}`}>
                                    <AnimatedCounter
                                        end={stat.value}
                                        suffix={stat.suffix}
                                    />
                                </div>
                                <div className="text-sm text-neutral-400 font-medium tracking-wide">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Team */}
            <section className="py-24 md:py-36 px-6 lg:px-16 bg-white fade-in-section">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-center mb-20">
                        <p className="text-neutral-500 text-sm font-medium tracking-wider uppercase mb-6">
                            Meet the Team
                        </p>
                        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
                            The People Behind the Work
                        </h2>
                        <p className="text-neutral-600 max-w-2xl mx-auto">
                            A diverse group united by a shared commitment to
                            thoughtful design and exceptional craft.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <article key={index} className="team-card">
                                <div className="image-overlay mb-6 h-80">
                                    <LazyImage
                                        src={member.image}
                                        alt={`${member.name}, ${member.role}`}
                                        className="w-full h-full object-cover"
                                        id={`team-${index}`}
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-neutral-500 font-medium mb-3">
                                    {member.role}
                                </p>
                                <p className="text-sm text-neutral-600">
                                    {member.bio}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            {/* Studio/Workspace */}
            <section className="py-24 px-6 lg:px-16 fade-in-section">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-neutral-500 text-sm font-medium tracking-wider uppercase mb-6">
                            Our Space
                        </p>
                        <h2 className="text-4xl md:text-5xl font-semibold">
                            Where Ideas Take Shape
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="image-overlay h-96">
                            <LazyImage
                                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=800&fit=crop&q=90"
                                alt="STRUCTURA studio workspace with natural lighting"
                                className="w-full h-full object-cover"
                                id="workspace-1"
                            />
                        </div>
                        <div className="image-overlay h-96">
                            <LazyImage
                                src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&h=800&fit=crop&q=90"
                                alt="Design studio with collaborative work areas"
                                className="w-full h-full object-cover"
                                id="workspace-2"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* CTA */}
            <section
                id="contact"
                className="py-32 md:py-48 px-6 lg:px-16 bg-neutral-900 text-white fade-in-section">
                <div className="max-w-5xl mx-auto text-center">
                    <p className="text-white/60 mb-8">
                        Let's create something meaningful together.
                    </p>
                    <h2 className="text-5xl md:text-7xl font-semibold mb-12 leading-tight">
                        Work with us
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
