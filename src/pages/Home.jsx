import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { BackgroundBeams } from "../components/ui/BackgroundBeams";
import { TracingBeam } from "../components/ui/TracingBeam";

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
      <TracingBeam>
        <main>
          <HeroSection />
          <AboutSection />
        </main>
      </TracingBeam>
      {/* {Footer} */}
    </div>
  );
};
