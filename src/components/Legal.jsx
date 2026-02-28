import React, { useEffect } from "react";

const LegalPage = () => {
    // Scroll ke atas otomatis saat halaman dibuka
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        {
            id: "privacy",
            title: "Privacy Policy",
            content: [
                "At Structura, your privacy is our priority. We only collect essential information such as your name and contact details when you reach out to us via WhatsApp or email for project inquiries.",
                "The data collected is used strictly for internal project management and professional communication. We do not sell or share your personal data with third-party marketing agencies.",
                "By using our site, you consent to the collection and use of information in accordance with this policy.",
            ],
        },
        {
            id: "policy",
            title: "Service Policy",
            content: [
                "All architectural renderings, 3D walkthroughs, and interior concepts are artistic representations. Final construction and material finishes may vary depending on on-site conditions and technical feasibility.",
                "Project timelines and consultation schedules provided are estimates. Structura is committed to transparency regarding any adjustments needed during the design process.",
                "Intellectual property rights for all custom designs remain with Structura and Codex Project until final project handover and full settlement of fees.",
            ],
        },
        {
            id: "terms",
            title: "Terms & Conditions",
            content: [
                "All visual content on this website is protected by copyright law. Unauthorized reproduction, distribution, or commercial use of our design assets is strictly prohibited.",
                "Users are encouraged to explore the interactive viewer for inspiration; however, technical drawings and design specifications are only provided to official clients.",
                "Structura reserves the right to modify these terms and website content at any time to reflect the studio's latest operational standards.",
            ],
        },
    ];

    return (
        <div className="bg-neutral-950 text-white min-h-screen pt-40 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Header Legal */}
                <div className="mb-24">
                    <h1 className="text-5xl md:text-8xl font-light tracking-tighter mb-4 italic font-serif">
                        Legal{" "}
                        <span className="text-neutral-500 font-sans not-italic font-light">
                            Details
                        </span>
                    </h1>
                    <div className="h-[1px] w-24 bg-white/20" />
                </div>

                <div className="space-y-32">
                    {sections.map((section) => (
                        <section
                            key={section.id}
                            id={section.id}
                            className="scroll-mt-32 group">
                            <div className="grid md:grid-cols-3 gap-12">
                                <div className="md:col-span-1">
                                    <h2 className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-bold sticky top-32 transition-colors group-hover:text-white">
                                        {section.title}
                                    </h2>
                                </div>
                                <div className="md:col-span-2 space-y-8">
                                    {section.content.map((para, index) => (
                                        <p
                                            key={index}
                                            className="text-neutral-400 text-lg md:text-xl leading-relaxed font-light">
                                            {para}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </section>
                    ))}
                </div>

                {/* Footer Legal Area */}
                <div className="mt-40 pt-12 border-t border-white/5 text-center">
                    <p className="text-neutral-600 text-[10px] tracking-[0.2em] uppercase">
                        © 2026 Structura Studio — Jakarta, Indonesia
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LegalPage;
