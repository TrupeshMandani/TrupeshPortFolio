import Certification from "./components/main/Certification";
import "devicon/devicon.min.css";

import Footer from "./components/main/Footer";
import Hero from "./components/main/Hero"; // Importing the Hero component
import Projects from "./components/main/Projects";
import Skill from "./components/main/Skill";

export default function Home() {
  return (
    <main className="h-full w-full overflow-y-auto snap-y snap-mandatory">
      {" "}
      {/* // Main container */}
      <div className="flex flex-col">
        <section id="about-me" className="snap-start">
          <Hero />
        </section>
        <section id="skills" className="snap-start">
          <Skill />
        </section>
        <section id="certifications" className="snap-start">
          <Certification />
        </section>
        <section id="projects" className="snap-start">
          <Projects />
        </section>
        <section id="footer" className="min-h-screen snap-start">
          <Footer />
        </section>
      </div>
    </main>
  );
}
