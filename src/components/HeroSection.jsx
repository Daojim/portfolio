export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Jimmy
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2">
              {" "}
              Dao
            </span>
          </h1>
          <p>
            I’m an aspiring software developer dedicated to learning new tools
            and techniques to solve real problems. My goal is to build reliable,
            thoughtful software while continuously growing as a developer.
          </p>
        </div>
      </div>
    </section>
  );
};
