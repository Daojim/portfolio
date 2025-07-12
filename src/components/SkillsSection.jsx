import React from "react";
import { skillsTimeline } from "../data/skillsTimeline";

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-background text-foreground">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Learning Journey</span>
        </h2>

        <div className="relative border-l-2 border-primary/50 pl-6">
          {skillsTimeline.map((item, index) => (
            <div key={index} className="mb-12 relative">
              <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-primary"></div>

              <h3 className="text-xl font-semibold mb-1">{item.timeframe}</h3>
              <h4 className="text-lg font-medium mb-2">{item.title}</h4>
              <p className="text-muted-foreground mb-4">{item.description}</p>

              <div className="flex flex-wrap gap-4 mt-4">
                {item.skills.map((skill, idx) => (
                  <div key={idx} className="flex flex-col items-center w-20">
                    <img
                      src={skill.logoUrl}
                      alt={skill.label}
                      className="w-12 h-12 object-contain"
                    />
                    <span className="text-sm text-muted-foreground text-center mt-2">
                      {skill.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
