import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { BackgroundBeams } from "../components/ui/BackgroundBeams";
import { SkillsSection } from "../components/SkillsSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* {Background Effects} */}

      <BackgroundBeams />

      {/* {Navbar} */}
      <Navbar />
      {/* {Main Content} */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
      </main>

      {/* {Footer} */}
    </div>
  );
};
