import React from "react";
import Herocontent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="rotate-180 absolute top-[-375px] left-0 w-full h-full z-[-5] object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
        <source src="/blackhole.mp4" type="video/mp4" /> {/* Fallback format */}
        Your browser does not support the video tag.
      </video>
      <Herocontent />
    </div>
  );
};

export default Hero;
