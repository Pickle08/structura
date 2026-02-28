import React from "react";
import HotspotItem from "./HotspotItem";

const ProjectViewer = ({
    displayImage,
    hotspots,
    showHotspots,
    zoom,
    isFading,
    ...props
}) => {
    return (
        <div className="relative w-full h-full overflow-hidden bg-black">
            <img
                src={displayImage}
                alt="Architectural View"
                className="w-full h-full object-cover select-none"
                style={{ transform: `scale(${zoom})` }}
            />

            {/* Hotspots hanya muncul jika tidak sedang loading/fade */}
            {!isFading && showHotspots && (
                <div className="absolute inset-0 z-10">
                    {hotspots.map((hotspot) => (
                        <HotspotItem
                            key={hotspot.id}
                            hotspot={hotspot}
                            zoom={zoom}
                            onClick={() => props.onHotspotClick(hotspot)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjectViewer;
