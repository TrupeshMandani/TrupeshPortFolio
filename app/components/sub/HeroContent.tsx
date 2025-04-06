"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SpeakerWaveIcon } from "@heroicons/react/16/solid";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const Herocontent = () => {
  const plateRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/trupesh-mandani.mp3");
    audioRef.current.load(); // Preload
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
        className="flex flex-row items-center justify-between w-full"
      >
        {/* Left Section */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="w-1/2 h-full flex flex-col justify-center text-center"
        >
          <div className="flex-1 flex">
            <div
              ref={plateRef}
              onMouseMove={(e) => handleMouseMove(e, plateRef)}
              onMouseLeave={() => resetTilt(plateRef)}
              className=" w-full flex items-center justify-center transition-transform py-40 duration-150 ease-out will-change-transform px-10 rounded-xl hover:bg-white/5 "
            >
              <p className="text-6xl sm:text-7xl md:text-9xl font-bold tracking-wide cursor-default leading-tight pb-10 uppercase flex flex-col gap-4 justify-center items-center select-none">
                <span className="relative flex hover:tracking-widest transition-all ease-in-out duration-500 cursor-crosshair">
                  <button
                    onClick={speakContent}
                    className="absolute -top-10 right-[-12px] z-10 bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition cursor-pointer"
                    title="Click to speak"
                  >
                    <SpeakerWaveIcon className="h-5 w-5 text-white pointer-events-none" />
                  </button>

                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-100">
                    Trupesh
                  </span>
                </span>
                <span className="text-gray-400">Mandani</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          variants={slideInFromRight(0.5)}
          className="w-1/2 h-full flex justify-center items-center"
        >
          <div
            ref={imageRef}
            onMouseMove={(e) => handleMouseMove(e, imageRef)}
            onMouseLeave={() => resetTilt(imageRef)}
            className="transition-transform duration-150 ease-out will-change-transform p-6 rounded-xl"
          >
            <Image
              src="/mainIconsdark.svg"
              alt="work icons"
              height={650}
              width={650}
              className="object-contain"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Description */}
      {/* Bottom Description */}
      <motion.div
        variants={slideInFromLeft(0.7)}
        initial="hidden"
        animate="visible"
        className="w-full mt-6"
      >
        <p className="text-lg text-gray-400 max-w-[700px] text-center mx-auto leading-relaxed">
          I am Trupesh Mandani, a software developer with skills in mobile app
          development, web development, and software development. Check out my
          skills and projects below.
        </p>
      </motion.div>
    </div>
  );
};

export default Herocontent;
