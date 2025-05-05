"use client";

import React, { useRef, useState, useEffect, CSSProperties } from "react";
import { GripVertical } from "lucide-react";

interface DraggableNavBlockProps {
  scrollToSection: (sectionId: string) => void;
}

const DraggableNavBlock: React.FC<DraggableNavBlockProps> = ({
  scrollToSection,
}) => {
  const dragRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 10 });
  const [dragging, setDragging] = useState(false);
  const [visible, setVisible] = useState(false); // For fade-in effect
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isMobile) return; // Disable dragging on mobile
    e.preventDefault();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setDragging(true);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isMobile) return; // Disable dragging on mobile
    if (dragging) {
      setPosition((prev) => ({
        x: prev.x + e.movementX,
        y: prev.y + e.movementY,
      }));
    }
  };

  const handlePointerUp = () => {
    if (isMobile) return; // Disable dragging on mobile
    setDragging(false);
  };

  useEffect(() => {
    if (dragRef.current && !isMobile) {
      const rect = dragRef.current.getBoundingClientRect();
      const centerX = window.innerWidth / 2 - rect.width / 2;
      setPosition({ x: centerX, y: 10 });
    }

    // Trigger fade-in
    const timeout = setTimeout(() => setVisible(true), 400);
    return () => clearTimeout(timeout);
  }, [isMobile]);

  const navStyle: CSSProperties = isMobile
    ? {
        position: "relative",
        left: 0,
        top: 0,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.6s ease-out",
      }
    : {
        position: "absolute",
        left: position.x,
        top: position.y,
        zIndex: 50,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.6s ease-out",
      };

  return (
    <div
      ref={dragRef}
      style={navStyle}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      <div
        className={`flex ${
          isMobile ? "flex-col" : "flex-row"
        } items-center gap-4 md:gap-x-6 border border-[#7042f861] bg-[#0300145e] px-4 md:px-[20px] py-2 md:py-[10px] mt-2 rounded-full text-gray-200 whitespace-nowrap shadow-md backdrop-blur-sm`}
      >
        {!isMobile && (
          <div className="cursor-grab active:cursor-grabbing" title="Drag menu">
            <GripVertical size={20} />
          </div>
        )}

        {/* Navigation Buttons */}
        <button
          onClick={() => scrollToSection("about-me")}
          className="cursor-pointer hover:text-purple-400 transition-colors"
        >
          About me
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className="cursor-pointer hover:text-purple-400 transition-colors"
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection("certifications")}
          className="cursor-pointer hover:text-purple-400 transition-colors"
        >
          Certifications
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="cursor-pointer hover:text-purple-400 transition-colors"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="cursor-pointer hover:text-purple-400 transition-colors"
        >
          Connect Me
        </button>
      </div>
    </div>
  );
};

export default DraggableNavBlock;
