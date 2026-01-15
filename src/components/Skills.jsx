import { useEffect, useRef } from "react";

// SVG Icons for each category
const FrontendIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

const BackendIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
    />
  </svg>
);

const MobileIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  </svg>
);

const DatabaseIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
    />
  </svg>
);

const DevOpsIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const LanguagesIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C#", "JavaScript", "Python", "TypeScript", "GraphQL"],
      icon: LanguagesIcon,
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Frontend",
      skills: ["React", "Angular", "WPF"],
      icon: FrontendIcon,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend",
      skills: ["Dotnet", "Node.js", "NestJS"],
      icon: BackendIcon,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Mobile",
      skills: ["React Native"],
      icon: MobileIcon,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Database",
      skills: ["OracleSQL", "PostgreSQL", "MongoDb", "Redis"],
      icon: DatabaseIcon,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "DevOps",
      skills: ["Docker", "Git", "CI/CD"],
      icon: DevOpsIcon,
      gradient: "from-indigo-500 to-purple-500",
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="py-20 px-8 bg-github-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>

      <div ref={sectionRef} className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-github-text mb-4 text-center">
          <span className="text-gradient">Skills & Tech Stack</span>
        </h2>
        <p className="text-center text-github-text-secondary mb-12">
          Technologies I work with
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-card opacity-0 bg-github-bg-secondary p-6 rounded-xl border border-github-border hover:border-github-bg-tertiary shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden">
              {/* Gradient border effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}></div>

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center mr-3 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-github-text group-hover:text-accent transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
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
    </section>
  );
};

export default Skills;
