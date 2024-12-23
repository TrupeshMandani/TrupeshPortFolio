import Encryption from "./components/main/Encryption";

import Footer from "./components/main/Footer";
import Hero from "./components/main/Hero"; // Importing the Hero component
import Projects from "./components/main/Projects";
import Skill from "./components/main/Skill";
import Herocontent from "./components/sub/HeroContent";

export default function Home() {
  return (
    <main className="h-full w-full">
      {" "}
      // Main container
      <div className="flex flex-col  gap-20">
        <Hero />
        <Skill />
        <Encryption />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
