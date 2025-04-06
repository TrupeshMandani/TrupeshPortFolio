"use client";

import React, { useState, useRef, useEffect } from "react";
import { GripVertical } from "lucide-react";
import { motion } from "framer-motion";

interface DraggableNavBlockProps {
  scrollToSection: (sectionId: string) => void;
}

const DraggableNavBlock: React.FC<DraggableNavBlockProps> = ({
  scrollToSection,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 10 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<HTMLDivElement | null>(null);
  const offset = useRef({ x: 0, y: 0 });

  // Center nav block on load
  useEffect(() => {
    if (dragRef.current) {
      const rect = dragRef.current.getBoundingClientRect();
      const centerX = window.innerWidth / 2 - rect.width / 2;
      setPosition({ x: centerX, y: 10 });
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const rect = dragRef.current?.getBoundingClientRect();
    if (rect) {
      setIsDragging(true);
      offset.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <motion.div
      ref={dragRef}
      className="absolute z-50"
      style={{ left: position.x, top: position.y }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: position.y, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-row items-center gap-x-6 border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] mt-2 rounded-full text-gray-200 whitespace-nowrap shadow-md backdrop-blur-sm">
        {/* Drag Handle Button */}
        <div
          onMouseDown={handleMouseDown}
          className="cursor-grab active:cursor-grabbing"
          title="Drag menu"
        >
          <GripVertical size={20} />
        </div>

        {/* Navigation buttons */}
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
    </motion.div>
  );
};

export default DraggableNavBlock;
