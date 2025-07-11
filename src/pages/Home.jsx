import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { BackgroundBeams } from "../components/ui/BackgroundBeams";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* {Theme Toggle} */}
      <ThemeToggle />

      {/* {Background Effects} */}

      <BackgroundBeams />

      {/* {Navbar} */}
      <Navbar />
      {/* {Main Content} */}
      <main>
        <HeroSection />
        <AboutSection />
      </main>

      {/* {Footer} */}
    </div>
  );
};
