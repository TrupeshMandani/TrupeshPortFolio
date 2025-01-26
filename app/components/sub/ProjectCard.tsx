import Image from "next/image";
import React from "react";

interface TechStack {
  src: string; // Updated to use an image link
  label: string;
}

interface Props {
  src: string;
  title: string;
  description: string;
  techStack: TechStack[];
}

const ProjectCard = ({ src, title, description, techStack }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-transparent backdrop-blur-md">
      {/* Image Section */}
      <div className="relative w-full h-56">
        <Image
          src={src}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-white mb-2">{title}</h1>

        {/* Description */}
        <p className="text-gray-300 mb-4">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mt-4">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-gray-700/70 p-2 rounded-full shadow-md"
            >
              <img
                src={tech.src}
                alt={tech.label}
                className="w-6 h-6 object-contain"
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
