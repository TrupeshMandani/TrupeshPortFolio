// ProjectCard.tsx
"use client";

import Image from "next/image";
import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import { FaGithub } from "react-icons/fa";

interface TechStack {
  src: string;
  label: string;
}

interface Props {
  src: string;
  title: string;
  description: string;
  techStack: TechStack[];
  githubLink: string;
  liveLink: string;
  isRealLife?: boolean;
}

const ProjectCard = ({
  src,
  title,
  description,
  techStack,
  githubLink,
  liveLink,
  isRealLife = false,
}: Props) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-transparent backdrop-blur-md transition duration-300 hover:brightness-75">
      {/* Real Life Project Tag */}
      {isRealLife && (
        <div className="absolute top-2 right-2 z-10 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          Real Life Project
        </div>
      )}

      {/* Image Section */}
      <div className="relative w-full h-56">
        <Image
          src={src}
          alt={title}
          layout="fill"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-lg"
        />

        {/* Hover Overlay Icons */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center gap-6 transition duration-300">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
            title="View GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gray-800 p-3 rounded-full hover:bg-gray-700 "
            title="Live Demo"
          >
            <EyeIcon className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-white mb-2">{title}</h1>
        <p className="text-gray-300 mb-4">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mt-4">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-gray-700/70 p-2 rounded-full shadow-md"
            >
              <Image
                src={tech.src}
                alt={tech.label}
                width={24}
                height={24}
                className="object-contain"
              />
              <span className="text-sm text-gray-300">{tech.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
