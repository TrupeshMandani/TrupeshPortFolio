"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SpeakerWaveIcon } from "@heroicons/react/16/solid";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const Herocontent = () => {
  const plateRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Add this array at the top inside the component
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const translations = [
    "Mandani", // English
    "मंडानी", // Hindi (Devanagari)
    "مندنی", // Urdu/Arabic
    "マンダニ", // Japanese (Katakana)
    "만다니", // Korean
    "Мандани", // Russian (Cyrillic)
    "மண்டானி", // Tamil
  ];
  const fadeVariant = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const [currentTranslation, setCurrentTranslation] = useState(translations[0]);

  useEffect(() => {
    audioRef.current = new Audio("/trupesh-mandani.mp3");
    audioRef.current.load(); // Preload
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % translations.length;
      setCurrentTranslation(translations[index]);
    }, 2500); // Changes every 2.5 seconds

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const speakContent = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    targetRef: React.RefObject<HTMLDivElement>
  ) => {
    const el = targetRef.current;
    if (!el) return;

    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    const rotateX = y * -15;
    const rotateY = x * 25;

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const resetTilt = (targetRef: React.RefObject<HTMLDivElement>) => {
    if (targetRef.current) {
      targetRef.current.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 md:px-20">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col lg:flex-row items-center justify-between w-full"
      >
        {/* Left Section */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="w-full lg:w-1/2 h-full flex flex-col justify-center text-center"
        >
          <div className="flex-1 flex">
            <div
              ref={plateRef}
              onMouseMove={(e) => handleMouseMove(e, plateRef)}
              onMouseLeave={() => resetTilt(plateRef)}
              className="w-full flex items-center justify-center transition-transform py-20 md:py-32 lg:py-40 duration-150 ease-out will-change-transform rounded-xl"
            >
              <p className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold tracking-wide cursor-default leading-tight pb-6 md:pb-10 uppercase flex flex-col gap-2 md:gap-4 justify-center items-center select-none">
                <span className="relative flex hover:tracking-widest transition-all ease-in-out duration-500 cursor-crosshair">
                  <button
                    onClick={speakContent}
                    className="absolute -top-8 md:-top-10 right-[-12px] z-10 bg-white bg-opacity-20 p-1.5 md:p-2 rounded-full hover:bg-opacity-30 transition cursor-pointer"
                    title="Click to speak"
                  >
                    <SpeakerWaveIcon className="h-4 w-4 md:h-5 md:w-5 text-white pointer-events-none" />
                  </button>

                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-100">
                    Trupesh
                  </span>
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentTranslation}
                    variants={fadeVariant}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="text-gray-400"
                  >
                    {currentTranslation}
                  </motion.span>
                </AnimatePresence>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          variants={slideInFromRight(0.5)}
          className="w-full lg:w-1/2 h-full flex justify-center items-center mt-8 lg:mt-0"
        >
          <div
            ref={imageRef}
            onMouseMove={(e) => handleMouseMove(e, imageRef)}
            onMouseLeave={() => resetTilt(imageRef)}
            className="transition-transform duration-150 ease-out will-change-transform p-4 md:p-6 rounded-xl"
          >
            <Image
              src="/mainIconsdark.svg"
              alt="work icons"
              height={650}
              width={650}
              className="object-contain w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px]"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Description */}
      <motion.div
        variants={slideInFromLeft(0.7)}
        initial="hidden"
        animate="visible"
        className="w-full mt-4 md:mt-6"
      >
        <p className="text-base md:text-lg text-gray-400 max-w-[700px] text-center mx-auto leading-relaxed px-4 md:px-0">
          I am Trupesh Mandani, a software developer with skills in mobile app
          development, web development, and software development. Check out my
          skills and projects below.
        </p>
      </motion.div>
    </div>
  );
};

export default Herocontent;
