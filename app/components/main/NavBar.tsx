"use client";

import { Socials } from "@/app/constants"; // Importing social media links from constants
import Image from "next/image"; // Importing Image component from Next.js
import React from "react"; // Importing React
import DraggableNavBlock from "../sub/DragableNavBlock";

// Functional component for the navigation bar
const NavBar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 65; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full h-[65px] font-bold fixed top-0 z-50 px-10">
      {/* Container for the navigation bar */}
      <div className="w-full h-full flex flex-row px-10px m-auto justify-between items-center">
        {/* Logo section */}

        {/* Navigation links section */}
        <div className="justify-center">
          <DraggableNavBlock scrollToSection={scrollToSection} />
        </div>

        {/* Social media icons section */}
        <div className="flex flex-row gap-7">
          {Socials.map((social) => (
            <Image
              src={social.src} // Source of the social media icon
              alt={social.name} // Alt text for accessibility
              key={social.name} // Unique key for each element
              width={40} // Width of the icon
              height={40} // Height of the icon
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar; // Exporting the NavBar component
