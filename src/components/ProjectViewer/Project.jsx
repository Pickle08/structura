import React, { useState, useRef, useEffect } from "react";
import {
    Eye,
    EyeOff,
    Camera,
    ZoomIn,
    ZoomOut,
    Maximize2,
    Minimize2,
} from "lucide-react";
import ProjectViewer from "./ProjectViewer";
import DetailModal from "./DetailModal";

const Project = () => {
    // State Utama
    const [activeTab, setActiveTab] = useState("indoor");
    const [showHotspots, setShowHotspots] = useState(true);
    const [selectedHotspot, setSelectedHotspot] = useState(null);
    const [zoom, setZoom] = useState(1);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const element = document.documentElement;
        if (isFullscreen) {
            if (element.requestFullscreen) {
                element.requestFullscreen().catch((err) => {
                    console.error(
                        `Error attempting to enable full-screen mode: ${err.message}`
                    );
                });
            }
        } else {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            }
        }
    }, [isFullscreen]);

    // Data Dummy (Sesuaikan dengan data asli kamu)
    const displayImage = {
        indoor: "/image/indoor/indoor1.webp",
        kitchen: "/image/kitchen/kitchen.webp",
        outdoor: "/image/outdoor/outdoor1.webp",
        bathroom: "/image/bathroom/bathroom.webp",
    }[activeTab];
    const displayHotspots =
        {
            indoor: [
                {
                    id: 1,
                    x: 28,
                    y: 82,
                    label: "Modern Modular Sofa",
                    description: "Custom curved seating",
                    fullDescription: "Sofa modular dengan desain organik...",
                    image: "/image/indoor/sofa.webp", //
                    isPortal: false,
                },
                {
                    id: 2,
                    x: 50, // Tepat di tengah lampu gantung melingkar
                    y: 15,
                    label: "Halo Pendant Light",
                    description: "Minimalist ring chandelier with warm LED",
                    fullDescription:
                        "Pencahayaan utama berbentuk cincin minimalis yang memberikan efek ambient hangat ke seluruh ruangan.",
                    image: "/image/indoor/lamp.webp",
                    isPortal: false,
                },
                {
                    id: 3,
                    x: 62,
                    y: 52,
                    label: "Kitchen Area",
                    isPortal: true,
                    action: () => handleTabChange("kitchen"), // Pindah ke kitchen
                },
                {
                    id: 4,
                    x: 85, // Geser dari 92 ke 85 supaya lebih masuk ke area pintu kaca
                    y: 55,
                    label: "Outdoor Terrace",
                    description: "Step out to the poolside lounge",
                    isPortal: true,
                    action: () => handleTabChange("outdoor"),
                },
                {
                    id: 5,
                    x: 15,
                    y: 55, // Koordinat pintu di sebelah kiri
                    label: "Guest Bathroom",
                    description: "Powder room with marble finish",
                    isPortal: true,
                    action: () => handleTabChange("bathroom"),
                },
            ],
            // TAMBAHKAN BAGIAN INI:
            kitchen: [
                {
                    id: 1,
                    x: 15,
                    y: 50, // Sesuaikan koordinat untuk posisi pintu keluar
                    label: "Back to Living Room",
                    description: "Return to main area",
                    isPortal: true,
                    action: () => handleTabChange("indoor"), // Kembali ke indoor
                },
                {
                    id: 2,
                    x: 51,
                    y: 15, // Hotspot di Lampu Tengah
                    label: "Copper Pendant Light",
                    description: "Industrial style copper finish",
                    fullDescription:
                        "Lampu gantung material tembaga dengan reka bentuk industri yang memberikan pencahayaan hangat di area island.",
                    image: "/image/kitchen/lamp1.webp",
                    isPortal: false,
                },
                {
                    id: 3,
                    x: 50,
                    y: 65, // Hotspot di Meja Dapur (Island)
                    label: "Kitchen Island",
                    description: "Natural wood with black marble",
                    fullDescription:
                        "Meja island utama menggunakan kemasan kayu asli di bahagian bawah dan permukaan marmar hitam tahan lasak.",
                    image: "/image/kitchen/meja.webp",
                    isPortal: false,
                },
                {
                    id: 4,
                    x: 8,
                    y: 35, // Hotspot di Tembok Bata (Kiri)
                    label: "Exposed Brick Wall",
                    description: "Rustic industrial aesthetic",
                    fullDescription:
                        "Tekstur tembok bata ekspos yang memberikan karakter rustic dan industrial pada ruangan dapur.",
                    image: "/image/kitchen/brick.webp",
                    isPortal: false,
                },
                {
                    id: 5,
                    x: 10,
                    y: 85, // Hotspot di Lantai Kiri Bawah
                    label: "Oak Wood Flooring",
                    description: "High-durability oak planks",
                    fullDescription:
                        "Lantai kayu oak berkualiti tinggi yang tahan calar dan memberikan suasana selesa di kaki.",
                    image: "/image/kitchen/oak.webp",
                    isPortal: false,
                },
            ],
            outdoor: [
                {
                    id: 1,
                    x: 25,
                    y: 55, // Hotspot di Kursi Kayu Utama (Kiri)
                    label: "Teak Dining Chair",
                    description: "Solid plantation teak with outdoor fabric",
                    fullDescription:
                        "Kursi makan outdoor berbahan kayu jati solid dengan bantal kursi tahan cuaca (Sunbrella fabric).",
                    image: "/image/outdoor/chair.webp",
                    isPortal: false,
                },
                {
                    id: 2,
                    x: 48,
                    y: 38, // Hotspot di Kursi Tidur (Sun Lounger) di belakang
                    label: "Adjustable Sun Lounger",
                    description: "Minimalist poolside relaxation",
                    fullDescription:
                        "Kursi jemur dengan sandaran yang dapat diatur, dirancang untuk kenyamanan maksimal di tepi kolam renang.",
                    image: "/image/outdoor/sun.webp",
                    isPortal: false,
                },
                {
                    id: 3,
                    x: 45,
                    y: 85, // Hotspot di Lantai Batu
                    label: "Natural Stone Paving",
                    description: "Non-slip sandblasted finish",
                    fullDescription:
                        "Lantai eksterior menggunakan batu alam dengan tekstur kasar (sandblasted) agar tidak licin saat terkena air.",
                    image: "/image/outdoor/stone.webp",
                    isPortal: false,
                },
                {
                    id: 4,
                    x: 88,
                    y: 45, // Tombol kembali ke dalam rumah
                    label: "Back to Living Room",
                    isPortal: true,
                    action: () => handleTabChange("indoor"),
                },
            ],
            bathroom: [
                {
                    id: 1,
                    x: 50,
                    y: 92,
                    label: "Back to Living Room",
                    isPortal: true,
                    action: () => handleTabChange("indoor"),
                },
                {
                    id: 2,
                    x: 82,
                    y: 88,
                    label: "Freestanding Bathtub",
                    description: "Modern matte white acrylic",
                    fullDescription:
                        "Bathtub ergonomis dengan desain minimalis yang memberikan pengalaman relaksasi maksimal. Material akrilik berkualitas tinggi menjaga suhu air tetap hangat lebih lama.",
                    image: "/image/bathroom/bath.webp",
                    isPortal: false,
                },
                {
                    id: 3,
                    x: 80,
                    y: 35,
                    label: "Minimalist Pendant Light",
                    description: "Black finish with globe LED",
                    fullDescription:
                        "Pencahayaan aksen dengan desain industrial minimalis. Memberikan pendaran cahaya yang lembut dan menciptakan suasana tenang di dalam area mandi.",
                    image: "/image/bathroom/lamp.webp",
                    isPortal: false,
                },
                {
                    id: 4,
                    x: 10,
                    y: 82,
                    label: "Wall-Hung Toilet",
                    description: "Rimless design with soft-close seat",
                    // Deskripsi sudah diperbaiki dari "Lantai batu" ke toilet yang benar:
                    fullDescription:
                        "Toilet gantung dengan tangki tersembunyi untuk menghemat ruang dan memudahkan pembersihan lantai. Dilengkapi dengan teknologi flush yang efisien dan higienis.",
                    image: "/image/bathroom/toilet.webp",
                    isPortal: false,
                },
                {
                    id: 5,
                    x: 25,
                    y: 45,
                    label: "Tempered Glass Partition",
                    description: "8mm clear glass with black frame",
                    fullDescription:
                        "Partisi kaca tempered setebal 8mm yang sangat kuat dan aman. Bingkai aluminium hitam memberikan sentuhan modern dan memisahkan area basah tanpa membuat ruangan terasa sempit.",
                    image: "/image/bathroom/glass.webp",
                    isPortal: false,
                },
            ],
        }[activeTab] || [];

    // Handlers
    const handleTabChange = (tab) => {
        if (tab === activeTab || isFading) return;

        setIsFading(true);
        setTimeout(() => {
            setActiveTab(tab);
            setZoom(1);
            setIsFading(false);
        }, 400);
    };

    const handleScreenshot = () => {
        // 1. Ambil elemen gambar dari viewer
        const imgElement = document.querySelector(
            'img[alt="Architectural View"]'
        );

        if (imgElement) {
            // 2. Buat canvas temporary
            const canvas = document.createElement("canvas");
            canvas.width = imgElement.naturalWidth;
            canvas.height = imgElement.naturalHeight;

            const ctx = canvas.getContext("2d");
            ctx.drawImage(imgElement, 0, 0);

            // 3. Trigger download
            const link = document.createElement("a");
            link.download = `screenshot-${activeTab}.png`;
            link.href = canvas.toDataURL("image/png");
            link.click();
        } else {
            console.error("Gambar tidak ditemukan!");
        }
    };

    return (
        <section className="relative w-full bg-neutral-900 min-h-screen flex flex-col">
            <div className="w-full max-w-[95%] mx-auto pt-24 pb-8 px-4">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                    <div className="space-y-4 max-w-2xl">
                        <span className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-medium">
                            Interior Architecture — 2024
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-light tracking-tight leading-none">
                            Serenity{" "}
                            <span className="italic font-serif">Room</span>
                        </h1>
                        <p className="text-white/50 text-sm md:text-base leading-relaxed font-light max-w-lg">
                            Sebuah eksplorasi ruang yang mengutamakan keheningan
                            dan materialitas alami...
                        </p>
                    </div>

                    {/* Info Detail: Di Mobile jadi baris horizontal, di Desktop tetap vertikal */}
                    <div className="flex flex-wrap gap-x-8 gap-y-4 pt-6 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8">
                        <div className="min-w-[80px]">
                            <p className="text-white/30 text-[9px] uppercase tracking-widest">
                                Location
                            </p>
                            <p className="text-white/80 text-xs">Ubud, Bali</p>
                        </div>
                        <div className="min-w-[80px]">
                            <p className="text-white/30 text-[9px] uppercase tracking-widest">
                                Area
                            </p>
                            <p className="text-white/80 text-xs">120 m²</p>
                        </div>
                        <div className="min-w-[80px]">
                            <p className="text-white/30 text-[9px] uppercase tracking-widest">
                                Status
                            </p>
                            <p className="text-white/80 text-xs">Completed</p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`relative w-full overflow-hidden transition-all duration-700 shadow-2xl mb-20 ${
                    isFullscreen
                        ? "fixed inset-0 z-[200] bg-black"
                        : "aspect-[4/5] md:aspect-video h-auto md:h-[80vh] rounded-2xl md:rounded-3xl mx-auto max-w-[95%] border border-white/5"
                }`}>
                {/* 1. Core Viewer Component */}
                <ProjectViewer
                    displayImage={displayImage}
                    hotspots={displayHotspots}
                    showHotspots={showHotspots}
                    zoom={zoom}
                    setZoom={setZoom}
                    isFading={isFading}
                    onHotspotClick={(h) => {
                        console.log("Hotspot diklik:", h.label);
                        // Jika hotspot adalah portal, pindah ruangan
                        if (h.isPortal && h.action) {
                            h.action();
                        }
                        // Jika hotspot adalah informasi barang, buka modal detail
                        else {
                            setSelectedHotspot(h);
                        }
                    }}
                />

                {/* 2. Top UI Overlay: Information & Navigation */}
                <div className="absolute top-8 left-8 right-8 flex justify-between items-start pointer-events-none select-none">
                    <header className="pointer-events-auto text-white space-y-1">
                        <h3 className="text-3xl md:text-5xl font-semibold tracking-tight">
                            A living room that invites stillness
                        </h3>
                        <p className="text-sm md:text-base text-white/60 font-light italic">
                            Serenity Room — Interior Concept
                        </p>
                    </header>

                    <nav className="flex gap-2 pointer-events-auto bg-black/20 backdrop-blur-md p-1.5 rounded-full border border-white/10">
                        {["indoor", "outdoor"].map((tab) => (
                            <button
                                key={tab}
                                // UBAH BAGIAN INI: panggil handleTabChange, jangan setActiveTab langsung
                                onClick={() => handleTabChange(tab)}
                                className={`px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                                    activeTab === tab
                                        ? "bg-white text-neutral-900 shadow-lg"
                                        : "text-white/70 hover:text-white hover:bg-white/10"
                                }`}>
                                {tab.toUpperCase()}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* 3. Bottom Controls: Actions & Zoom */}
                {/* Left Actions */}
                <div className="absolute bottom-8 left-8 flex gap-3 pointer-events-autoz z-[250]">
                    <button
                        onClick={() => setShowHotspots(!showHotspots)}
                        className="ctrl-btn group"
                        title={
                            showHotspots ? "Hide Hotspots" : "Show Hotspots"
                        }>
                        {showHotspots ? (
                            <Eye size={20} />
                        ) : (
                            <EyeOff size={20} />
                        )}
                    </button>
                    <button
                        onClick={handleScreenshot}
                        className="ctrl-btn group"
                        title="Take Screenshot">
                        <Camera size={20} />
                    </button>
                </div>

                {/* Right Controls (Zoom & Fullscreen) */}
                <div className="absolute bottom-8 right-8 flex flex-col gap-3 pointer-events-auto z-[250]">
                    <div className="flex flex-col bg-black/40 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden shadow-2xl">
                        <button
                            onClick={() => {
                                console.log("Zoom In di klik"); // Cek di console log browser
                                setZoom((prev) => Math.min(prev + 0.5, 3));
                            }}
                            className="p-3 hover:bg-white/10 transition-colors text-white">
                            <ZoomIn size={20} />
                        </button>
                        <div className="h-[1px] w-8 mx-auto bg-white/10" />
                        <button
                            onClick={() =>
                                setZoom((prev) => Math.max(prev - 0.5, 1))
                            }
                            className="p-3 hover:bg-white/10 transition-colors text-white">
                            <ZoomOut size={20} />
                        </button>
                    </div>

                    <button
                        onClick={() => setIsFullscreen(!isFullscreen)}
                        className="p-3 hover:bg-white/10 transition-colors text-white">
                        {isFullscreen ? (
                            <Minimize2 size={20} />
                        ) : (
                            <Maximize2 size={20} />
                        )}
                    </button>
                </div>

                {/* 4. Detail Modal Overlay */}
                {selectedHotspot && (
                    <DetailModal
                        hotspot={selectedHotspot}
                        onClose={() => setSelectedHotspot(null)}
                    />
                )}
            </div>
        </section>
    );
};

export default Project;
