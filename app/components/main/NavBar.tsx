"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import DraggableNavBlock from "../sub/DragableNavBlock";

const NavBar = () => {
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
    }
  };

  return (
    <div className="w-full h-[65px] font-bold fixed top-0 z-50 px-10">
      <div className="w-full h-full flex flex-row justify-between items-center">
        {/* Navigation links */}
        <div className="justify-center">
          <DraggableNavBlock scrollToSection={scrollToSection} />
        </div>

        {/* Social Buttons */}
        <div className="flex gap-6 text-white text-xl">
          <a
            href="https://github.com/TrupeshMandani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition"
            title="GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/trupeshmandani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            title="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/trupesh_16"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
            title="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
