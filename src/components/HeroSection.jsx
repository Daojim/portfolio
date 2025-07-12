import { ArrowDown } from "lucide-react";
import SplitText from "./ui/SplitText";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <SplitText
            text={`Hi, I'm Jimmy Dao`}
            splitType="chars"
            delay={50}
            duration={2}
            ease="elastic.out"
            className="text-4xl md:text-6xl font-bold tracking-tight text-center"
            charColorMap={{
              6: "text-primary",
              7: "text-primary",
              8: "text-primary",
              9: "text-primary",
              10: "text-primary",
              11: "text-gradient",
              12: "text-gradient",
              13: "text-gradient",
            }}
          />

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
            I’m an aspiring software developer dedicated to learning new tools
            and techniques to solve real problems. My goal is to build reliable,
            thoughtful software while continuously growing as a developer.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
