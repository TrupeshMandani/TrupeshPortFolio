"use client";

import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import DraggableNavBlock from "../sub/DragableNavBlock";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 65;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <div className="w-full h-[65px] font-bold fixed top-0 z-50 px-4 md:px-10 bg-transparent backdrop-blur-sm">
      <div className="w-full h-full flex flex-row justify-between items-center">
        {/* Navigation links */}
        <div className="hidden md:flex justify-center">
          <DraggableNavBlock scrollToSection={scrollToSection} />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-[65px] left-0 w-full bg-black/90 backdrop-blur-sm md:hidden">
            <div className="flex flex-col items-center py-4">
              <DraggableNavBlock scrollToSection={scrollToSection} />
            </div>
          </div>
        )}

        {/* Social Buttons */}
        <div className="flex gap-4 md:gap-6 text-white text-xl">
          <a
            href="https://github.com/TrupeshMandani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition"
            title="GitHub"
          >
            <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a
            href="https://linkedin.com/in/trupeshmandani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            title="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a
            href="https://instagram.com/trupesh_16"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
            title="Instagram"
          >
            <FaInstagram className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
