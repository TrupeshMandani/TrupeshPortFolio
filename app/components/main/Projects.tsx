// Projects.tsx
"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-5">
      {/* Title */}
      <h1 className="text-[40px] mx-auto font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pt-5 pb-20">
        My Projects
      </h1>

      {/* Projects List */}

      <div className="h-full w-auto flex flex-col md:flex-row gap-10 px-10">
        {/* Diamond Management System */}
        <ProjectCard
          src="/proj4.png"
          title="Diamond Management System"
          description="A comprehensive MERN stack application for managing diamond workflow, sales, and customer relationships. Features include real-time tracking, analytics, and secure authentication."
          githubLink="https://github.com/TrupeshMandani/DiamondsOperating"
          liveLink="https://diamondmanagment.vercel.app/Pages/login"
          isRealLife={true}
          techStack={[
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              label: "React.js",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
              label: "Express.js",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
              label: "MongoDB",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
              label: "Node.js",
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
              label: "Tailwind CSS",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
              label: "REST APIs",
            },
          ]}
        />
        {/* Chauffeur Service */}
        <ProjectCard
          src="/proj1.png"
          title="Calgary Chauffeur Service"
          description="A responsive booking website for chauffeur services with advanced search, Google API integration, Square payment gateway, and RESTful APIs for smooth functionality."
          githubLink="https://github.com/TrupeshMandani/calgarychauffeurservices"
          liveLink="https://calgarychauffeurservice.com"
          isRealLife={true}
          techStack={[
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
              label: "Next.js",
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
              label: "Tailwind CSS",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
              label: "MongoDB",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
              label: "REST APIs",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
              label: "Google API",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
              label: "Square API",
            },
          ]}
        />

        {/* BookView */}
        <ProjectCard
          src="/proj2.png"
          title="BookView"
          description="A platform to download and purchase books through Amazon. Features Firebase authentication, a real-time Firebase database, Google API, and RESTful APIs for seamless book access."
          githubLink="https://github.com/TrupeshMandani/BookView"
          liveLink="https://book-review-app-gold.vercel.app"
          techStack={[
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
              label: "Next.js",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
              label: "Firebase",
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
              label: "Tailwind CSS",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
              label: "REST APIs",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
              label: "Google API",
            },
          ]}
        />

        {/* E-commerce Book Store */}
        <ProjectCard
          src="/BookStoreMern.png"
          title="E-commerce Book Store"
          description="A modern MERN-based e-commerce platform with React, Vite, RESTful APIs, and MongoDB integration to provide users a seamless shopping experience."
          githubLink="https://github.com/TrupeshMandani/Book-store-MERN"
          liveLink="https://book-store-mern-sage.vercel.app"
          techStack={[
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
              label: "Vite",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              label: "React.js",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
              label: "MongoDB",
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
              label: "Tailwind CSS",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
              label: "REST APIs",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Projects;
