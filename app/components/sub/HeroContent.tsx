"use client";

import React from "react";
import { motion } from "framer-motion"; // Import motion for animations
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion"; // Import animation variants
import { SparklesIcon } from "@heroicons/react/16/solid"; // Import icon from Heroicons

// HeroContent Component
const Herocontent = () => {
  return (
    <motion.div
      initial="hidden" // Initial state for animation
      animate="visible" // Animate to the visible state
      className="flex flex-row items-center justify-center px-20 mt-40 w-full"
    >
      {/* Main content container */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* Welcome Box */}
        <motion.div
          variants={slideInFromTop} // Animation variant for sliding in from the top
          className="welcome-box py-2 px-7 border border-[#7042f88b] rounded-full max-w-max opacity-[0.9] mt-[-20px]"
        >
          <div className="flex items-center">
            <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
            <h1 className="welcome-text text-[13px] text-white">
              Full-Stack Developer Portfolio
            </h1>
          </div>
        </motion.div>

        {/* Main Title with Gradient Text */}
        <motion.div
          variants={slideInFromLeft(0.5)} // Animation variant for sliding in from the left
          className="flex flex-col gap-6 mt-3 text-6xl font-bold text-white max-w-[600px w-auto h-auto]"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-100">
              {" "}
              The best{" "}
            </span>
            Project Experience
          </span>
        </motion.div>

        {/* Description Paragraph */}
        <motion.p
          variants={slideInFromLeft(0.8)} // Animation variant for sliding in from the left
          className="text-lg text-gray-400 mx-5 max-w-[600px]"
        >
          I am Trupesh Mandani, a software developer with skills in mobile app
          development, web development, and software development. Check out my
          skills and projects below.
        </motion.p>

        {/* Learn More Button */}
        <motion.a
          variants={slideInFromLeft(1)} // Animation variant for sliding in from the left
          className="py-2 bg-purple-500 bg-opacity-30 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More
        </motion.a>
      </div>

      {/* Image Section */}
      <motion.div
        variants={slideInFromRight(0.8)} // Animation variant for sliding in from the right
        className="w-full h-full flex items-center justify-center"
      >
        <img
          src="/mainIconsdark.svg" // Image source
          alt="work icons" // Image alt text
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default Herocontent;
