"use client";

import React, { useRef, useState, useEffect } from "react";
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

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setDragging(true);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragging) {
      setPosition((prev) => ({
        x: prev.x + e.movementX,
        y: prev.y + e.movementY,
      }));
    }
  };

  const handlePointerUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    if (dragRef.current) {
      const rect = dragRef.current.getBoundingClientRect();
      const centerX = window.innerWidth / 2 - rect.width / 2;
      setPosition({ x: centerX, y: 10 });
    }

    // Trigger fade-in
    const timeout = setTimeout(() => setVisible(true), 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      ref={dragRef}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        zIndex: 50,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.6s ease-out",
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      <div className="flex flex-row items-center gap-x-6 border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] mt-2 rounded-full text-gray-200 whitespace-nowrap shadow-md backdrop-blur-sm">
        <div className="cursor-grab active:cursor-grabbing" title="Drag menu">
          <GripVertical size={20} />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => scrollToSection("about-me")}
          className="cursor-pointer"
        >
          About me
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className="cursor-pointer"
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection("certifications")}
          className="cursor-pointer"
        >
          Certifications
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="cursor-pointer"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="cursor-pointer"
        >
          Connect Me
        </button>
      </div>
    </div>
  );
};

export default DraggableNavBlock;
