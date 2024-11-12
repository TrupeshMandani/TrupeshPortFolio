import Hero from "./components/main/Hero"; // Importing the Hero component
import Skill from "./components/main/Skill";
import Herocontent from "./components/sub/HeroContent";

export default function Home() {
  return (
    <main className="h-full w-full"> // Main container
      <div className="flex flex-col  gap-20"> 
        <Hero />
        <Skill/>
      </div>

      
    </main>
  );
}
