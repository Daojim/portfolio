import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "LAN Beam",
    description:
      "Simple Windows app for seamless file sharing between devices on the same Wi-Fi network. Direct transfers, no cloud storage needed.",
    image: "projects/lanbeam.png",
    tags: ["Flutter", "Dart"],
    demoUrl: "https://github.com/Daojim/lan_beam/releases/",
    githubURL: "https://github.com/Daojim/lan_beam",
  },
  {
    id: 2,
    title: "Pokédex",
    description:
      "A full-stack Pokédex built with Flask, HTML/CSS, and Jinja2, using the PokéAPI for data.",
    image: "projects/pokedex.png",
    tags: ["Python", "HTML/CSS", "Flask", "Jinja2"],
    demoUrl: "https://pokedex-jvah.onrender.com/",
    githubURL: "https://github.com/Daojim/pokedex",
  },

  {
    id: 3,
    title: "To-do List",
    description:
      "A streamlined To-do List app built to strengthen my skills with TypeScript, Tailwind CSS, and React.",
    image: "projects/todo.png",
    tags: ["React", "TypeScript", "TailwindCSS"],
    demoUrl: "https://to-do-list-weld-kappa.vercel.app/",
    githubURL: "https://github.com/Daojim/to-do-list",
  },

  {
    id: 4,
    title: "Pomodoro",
    description:
      "Developed to improve my React and JavaScript skills while implementing a classic Pomodoro timer for productivity.",
    image: "projects/pomodoro.png",
    tags: ["React", "JavaScript"],
    demoUrl: "https://pomodoro-lac-ten.vercel.app/",
    githubURL: "https://github.com/Daojim/pomodoro",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These are some of my recent projects where I put what I've been
          learning into practice, with a focus on usability and thoughtful
          design.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 ">
                      {tag}
                    </span>
                  ))}
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm  mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        {" "}
                        <ExternalLink />
                      </a>
                      <a
                        href={project.githubURL}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        {" "}
                        <Github />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Daojim"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check my GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
