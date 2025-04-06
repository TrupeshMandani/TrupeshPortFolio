"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon, SpeakerWaveIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

const Herocontent = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  const speakContent = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const headingText = headingRef.current?.innerText || "";
      const descText = descRef.current?.innerText || "";
      const fullText = `${headingText}. ${descText}`;

      const utterance = new SpeechSynthesisUtterance(fullText);
      utterance.lang = "en-US";
      utterance.rate = 1;
      window.speechSynthesis.cancel(); // Stop existing speech
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser doesn't support text-to-speech.");
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-between px-20 mt-40 w-full"
    >
      {/* Left Section */}
      <div className="h-full w-full flex flex-col gap-5 justify-center text-start">
        {/* Welcome Box */}
        <motion.div
          variants={slideInFromTop}
          className="welcome-box py-2 px-7 border border-[#7042f88b] rounded-full max-w-max opacity-[0.9] mt-[-20px] flex items-center gap-2"
        >
          <SparklesIcon className="text-[#b49bff] h-5 w-5" />
          <h1 className="welcome-text text-[13px] text-white">
            Full-Stack Developer Portfolio
          </h1>

          {/* Speaker Button */}
          <button
            onClick={speakContent}
            className="ml-3 z-10 relative bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition cursor-pointer"
            title="Click to speak"
          >
            <SpeakerWaveIcon className="h-5 w-5 text-white pointer-events-none" />
          </button>
        </motion.div>

        {/* Main Title */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          ref={headingRef}
          className="flex flex-col gap-6 mt-3 text-6xl font-bold text-white max-w-[600px]"
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

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          ref={descRef}
          className="text-lg text-gray-400 max-w-[600px]"
        >
          I am Trupesh Mandani, a software developer with skills in mobile app
          development, web development, and software development. Check out my
          skills and projects below.
        </motion.p>

        {/* Learn More Button */}
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 bg-purple-500 bg-opacity-30 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More
        </motion.a>
      </div>

      {/* Right Section: Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-end items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default Herocontent;
