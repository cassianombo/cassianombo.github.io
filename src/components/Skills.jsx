import { useEffect, useRef } from "react";

import SectionDivider from "./SectionDivider";

// SVG Icons for each strength level
const PrimaryIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const ProductionIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const FamiliarIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const Skills = () => {
  const skillLevels = [
    {
      title: "Primary Stack",
      description: "Technologies I'm strongest at",
      skills: ["React", ".NET", "Node.js", "PostgreSQL", "MongoDB"],
      icon: PrimaryIcon,
      color: "bg-blue-500",
    },
    {
      title: "Production Experience",
      description: "Used in real-world projects",
      skills: [
        "Docker",
        "GraphQL",
        "Next.js",
        "OracleSQL",
        "Jest",
        "Redis",
        "WPF",
      ],
      icon: ProductionIcon,
      color: "bg-purple-500",
    },
    {
      title: "Familiar With",
      description: "Working knowledge",
      skills: ["Angular", "NestJS", "React Native", "Python", "Java"],
      icon: FamiliarIcon,
      color: "bg-orange-500",
    },
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".skill-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-fade-in-up");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className=" bg-github-bg relative overflow-hidden">
      <div className="relative z-10">
        <SectionDivider />
      </div>

      <div className="px-8 py-20 ">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl z-0"></div>

        <div ref={sectionRef} className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-github-text mb-4 text-center">
            <span className="text-accent">Skills & Tech Stack</span>
          </h2>
          <p className="text-center text-github-text-secondary mb-12">
            Organized by experience level
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillLevels.map((level, index) => (
              <div
                key={index}
                className="skill-card opacity-0 bg-github-bg-secondary p-6 rounded-xl border border-github-border hover:border-github-bg-tertiary shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden">
                {/* Subtle flat border effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl"
                  style={{ backgroundColor: "rgba(59, 130, 246, 0.15)" }}></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-3">
                    <div
                      className={`w-12 h-12 rounded-lg ${level.color} flex items-center justify-center mr-3 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                      <level.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-github-text group-hover:text-accent transition-colors">
                        {level.title}
                      </h3>
                      <p className="text-xs text-github-text-secondary mt-0.5">
                        {level.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {level.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 bg-github-bg-tertiary text-github-text-secondary rounded-full text-sm font-medium border border-transparent group-hover:border-github-border transition-all duration-300 transform group-hover:scale-105">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative z-10">
        <SectionDivider flip />
      </div>
    </section>
  );
};

export default Skills;
