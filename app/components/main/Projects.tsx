import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { Lightformer } from "@react-three/drei";

const Projects = () => {
  return (
    <div className="flex flex-col item-center justify-center py-20">
      <h1 className="text-[40px] mx-auto font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to bg-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-auto flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="modern Next.js Portfolio"
          description="lorem ipsum sdkfhjasdehkfjasdf bkh sdkhf kjhsdf kshdf sdkfjg"
        />
        <ProjectCard
          src="/CardImage.png"
          title="modern Next.js Portfolio"
          description="lorem ipsum sdkfhjasdehkfjasdf bkh sdkhf kjhsdf kshdf sdkfjg"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="modern Next.js Portfolio"
          description="lorem ipsum sdkfhjasdehkfjasdf bkh sdkhf kjhsdf kshdf sdkfjg"
        />
      </div>
    </div>
  );
};

export default Projects;
