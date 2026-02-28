const HotspotItem = ({ hotspot, zoom, onClick }) => {
    return (
        <div
            className={`absolute group cursor-pointer pointer-events-auto ${
                // Tambahkan pointer-events-auto & cursor-pointer
                hotspot.isPortal ? "hotspot-portal-enter" : ""
            }`}
            style={{
                left: `${hotspot.x}%`,
                top: `${hotspot.y}%`,
                transform: `translate(-50%, -50%) scale(${1 / zoom})`,
                zIndex: 20, // Pastikan berada di atas gambar
            }}
            onClick={(e) => {
                e.stopPropagation(); // Mencegah event klik "tembus" ke elemen di bawahnya
                onClick();
            }}>
            <div className="hotspot">
                {/* Efek Berdenyut: Biru untuk portal, Putih untuk info */}
                <div
                    className={`absolute w-12 h-12 rounded-full animate-ping ${
                        hotspot.isPortal ? "bg-blue-400/20" : "bg-white/20"
                    }`}></div>

                {/* Titik Utama */}
                <div
                    className={`hotspot-outer ${
                        hotspot.isPortal
                            ? "bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)] border-2 border-blue-200"
                            : "bg-white"
                    }`}></div>

                <div className="hotspot-dot"></div>

                {/* Tooltip */}
                <div className="hotspot-tooltip shadow-2xl">
                    <p className="text-white text-sm font-semibold">
                        {hotspot.label}
                    </p>
                    <p className="text-neutral-400 text-xs mt-1">
                        {hotspot.description}
                    </p>
                    {hotspot.isPortal && (
                        <span className="mt-2 block text-[10px] text-blue-400 font-bold tracking-widest uppercase">
                            View Room →
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HotspotItem;
