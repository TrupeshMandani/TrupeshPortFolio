"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { slideInFromLeft } from "@/utils/motion";
import { slideInFromRight } from "@/utils/motion";

import { useTranslation } from "next-i18next";
import { useTheme } from "next-themes";
import { SparklesIcon } from "@heroicons/react/16/solid";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col item-center justify-center">
      <motion.div
        variants={slideInFromTop} // Animation variant for sliding in from the top
        className="welcome-box py-2 px-7 border border-[#7042f88b] rounded-full max-w-max opacity-[0.9] mt-[-20px]"
      >
        <div className="flex items-center">
          <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
          <h1 className="welcome-text text-[13px] text-white">
            Think Better with Next.Js 13
          </h1>
        </div>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)} // Animation variant for sliding in from the Left
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Making apps with modern technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursiv text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Never miss a task deadline
      </motion.div>
    </div>
  );
};

export default SkillText;
