import { Socials } from "@/app/constants"; // Importing social media links from constants
import Image from "next/image"; // Importing Image component from Next.js

import React from "react"; // Importing React

// Functional component for the navigation bar
const NavBar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2a0e61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      {/* Container for the navigation bar */}
      <div className="w-full h-full flex flex-row px-10px m-auto justify-between items-center">
        {/* Logo section */}
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/navlogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            {" "}
            Webchain Dev{" "}
          </span>
        </a>

        {/* Navigation links section */}
        <div className="w-[500px] h-full flex flex-row item-center justify-center">
          <div className="items-center justify-between w-full h-[50px] flex border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] mt-2 rounded-full text-gray-200">
            <a href="#About-me" className="cursor-pointer">
              About me
            </a>
            <a href="#Skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#Projects" className="cursor-pointer">
              Projects
            </a>
          </div>
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
