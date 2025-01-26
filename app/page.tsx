import Certification from "./components/main/Certification";
import "devicon/devicon.min.css";

import Footer from "./components/main/Footer";
import Hero from "./components/main/Hero"; // Importing the Hero component
import Projects from "./components/main/Projects";
import Skill from "./components/main/Skill";

export default function Home() {
  return (
    <main className="h-full w-full">
      {" "}
      {/* // Main container */}
      <div className="flex flex-col  gap-20">
        <Hero />
        <Skill />
        <Certification />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
