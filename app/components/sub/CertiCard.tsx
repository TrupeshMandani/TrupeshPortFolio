"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const CertiCard = ({ src, title, description }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [sparkle, setSparkle] = useState(false);

  // ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Click outside to close
  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  // Trigger sparkle on click
  const handleClickCard = () => {
    setIsOpen(true);
    setSparkle(true);
    setTimeout(() => setSparkle(false), 1000); // reset sparkles
  };

  return (
    <>
      <div
        onClick={handleClickCard}
        className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-white/5 backdrop-blur-md transition-transform hover:scale-[1.02] duration-300 cursor-pointer group z-10"
      >
        <div className="relative w-full h-full">
          {/* Image */}
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover brightness-110 transition-all group-hover:brightness-50"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

          {/* Text */}
          <div className="absolute bottom-0 p-4 z-10">
            <h1 className="text-2xl font-semibold text-white">{title}</h1>
            <p className="mt-2 text-gray-300">{description}</p>
          </div>

          {/* Click me + Arrow */}
          <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-white text-xl font-bold animate-pulse flex items-center gap-2">
              <span>Click me to see</span>
              <div className={`relative`}>
                <div className="w-6 h-6 border-2 border-white rounded-full animate-arrow relative">
                  <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full" />
                </div>
                {sparkle && (
                  <div className="absolute -top-2 -left-2 w-10 h-10 rounded-full pointer-events-none sparkle-animation" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          onClick={handleClickOutside}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100]"
        >
          <div
            ref={modalRef}
            className="relative w-[90%] max-w-4xl h-[80%] bg-[#0f0f0f] rounded-lg overflow-hidden shadow-2xl border border-[#2A0E61] animate-zoom"
          >
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={title}
                fill
                className="object-contain p-4"
              />
              {/* ❌ X Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white text-2xl hover:text-red-500 transition-colors"
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        @keyframes click {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-click {
          animation: click 1.2s infinite;
        }

        @keyframes zoom {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-zoom {
          animation: zoom 0.4s ease-in-out;
        }

        @keyframes arrowPulse {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-4px) scale(1.1);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }

        .animate-arrow {
          animation: arrowPulse 1s infinite;
        }

        .sparkle-animation {
          background: radial-gradient(circle, white 10%, transparent 10.01%);
          background-size: 5px 5px;
          background-repeat: repeat;
          animation: sparkle 0.8s ease-out forwards;
        }

        @keyframes sparkle {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(2);
          }
        }
      `}</style>
    </>
  );
};

export default CertiCard;
