import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const projects = [
    {
      name: "Personal Budget - Nest.js API (WIP)",
      description:
        "Designed a NestJS API to manage personal finances, focusing on scalability, authentication, and reporting patterns commonly used in fintech products.",
      techStack: ["Nest.js", "TypeScript", "PostgreSQL"],
      github: "https://github.com/cassianombo/personal-budget-api",
    },
    {
      name: "Personal Budget - React Native App (WIP)",
      description:
        "A React Native app developed to manage personal finances. The app is used to track income and expenses, focused on usability, offline-first patterns, and clear financial insights.",
      techStack: ["React Native", "JavaScript", "Expo", "UI/UX Design"],
      github: "https://github.com/cassianombo/personal-budget",
    },
    {
      name: "King's Puppet - Unity Game",
      description:
        "A 2D Unity game developed using C# and the Unity engine. The game is an auto-chess game used as a project exercise to develop core development skills and UI/UX design.",
      techStack: ["Unity", "C#"],
      github: "https://github.com/cassianombo/kings-puppets-unity-project",
      demo: "https://cassianombo.itch.io/kings-puppets",
    },
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".project-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-fade-in-up");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 px-8 bg-github-bg relative">
      <div ref={sectionRef} className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-github-text mb-4 text-center">
          <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-center text-github-text-secondary mb-12">
          A showcase of my recent work and side projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      ref={cardRef}
      className="project-card opacity-0 bg-github-bg-secondary border border-github-border rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group relative hover:border-github-bg-tertiary"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateY(${
              (mousePosition.x - 150) / 20
            }deg) rotateX(${-(mousePosition.y - 150) / 20}deg) translateY(-8px)`
          : "perspective(1000px) rotateY(0deg) rotateX(0deg)",
        transition: "transform 0.1s ease-out",
      }}>
      {/* Gradient overlay on hover */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-accent/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: isHovered
            ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 50%)`
            : "transparent",
        }}
      />

      <div className="relative p-6 z-10">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-2xl font-semibold text-github-text group-hover:text-accent transition-colors">
            {project.name}
          </h3>
        </div>

        <p className="text-github-text-secondary mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-github-bg-tertiary text-github-text-secondary rounded-full text-xs font-medium border border-github-border group-hover:border-github-bg-tertiary transition-colors">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-4 border-t border-github-border">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-github-text-secondary hover:text-github-text transition-colors group/link">
            <svg
              className="w-5 h-5 mr-2 group-hover/link:scale-110 transition-transform"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-github-text-secondary hover:text-github-text transition-colors group/link">
              <svg
                className="w-5 h-5 mr-2 group-hover/link:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
