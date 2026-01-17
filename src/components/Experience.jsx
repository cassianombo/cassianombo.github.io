import { getGradientStyle, lightenColor } from "../utils/color";
import { useEffect, useRef } from "react";

import { EXPERIENCE_KEYWORDS } from "../constants/keywords";
import { highlightKeywords } from "../utils/textHighlight";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Internship",
      company: "N4IT",
      period: "Feb 2023 – Jun 2023",
      logo: "/n4it_logo.jpeg",
      description: [
        "Developed a React-based internal web application to simplify infrastructure provisioning and deployment tracking",
        "Designed and integrated a .NET REST API to automate Kubernetes cluster provisioning using PostgreSQL",
        "Improved system reliability by implementing unit and integration tests (≈70% coverage with xUnit)",
      ],
      color: "#6366f1",
    },
    {
      title: "Software Engineer",
      company: "SARKKIS Robotics",
      period: "Jan 2024 – Feb 2025",
      logo: "/sarkkis_robotics_lda_logo.jpeg",
      description: [
        "Developed enterprise-grade .NET/WPF applications using advanced design patterns",
        "Reduced technical debt and simulation errors by 85% through a custom 3D CAD visualization module",
        "Collaborated with international teams (Canada & Europe) on industrial robotics solutions",
      ],
      color: "#cf0f13",
    },
    {
      title: "Software Developer",
      company: "Glintt Global",
      period: "Mar 2025 – Nov 2025",
      logo: "/glintt_logo.jpeg",
      description: [
        "Built scalable frontend applications using ReactJS and Micro Frontend architectures",
        "Integrated .NET APIs with Apollo GraphQL, improving data-fetching performance",
        "Maintained 90%+ test coverage using Jest and React Testing Library",
        "Delivered mission-critical digital solutions for hospitals in Portugal and Spain",
      ],
      color: "#01e4d1",
    },
    {
      title: "Software Engineer",
      company: "Capgemini Engineering",
      period: "Nov 2025 – Present",
      logo: "/capgemini_logo.jpeg",
      description: [
        "Develop and maintain web applications using Next.js (React) and Tailwind CSS",
        "Manage application state with Zustand and consume REST APIs",
        "Implement runtime data validation with Zod to ensure data consistency and reliability",
        "Work in an Agile (SCRUM) environment within the public healthcare sector (SPMS - Portal Inovar)",
      ],
      color: "#2790f5",
    },
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const timeouts = [];
    let hasAnimated = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            const items = entry.target.querySelectorAll(".experience-item");
            items.forEach((item, index) => {
              const timeoutId = setTimeout(() => {
                item.classList.add("animate-fade-in-up");
              }, index * 200);
              timeouts.push(timeoutId);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  return (
    <section id="experience" className="py-12 sm:py-20 px-8 bg-zinc-950">
      <div ref={sectionRef} className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-github-text mb-3 sm:mb-4 text-center">
          <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-center text-github-text-secondary text-base sm:text-lg mb-8 sm:mb-0">
          My professional journey
        </p>

        {/* Horizontal Timeline - Desktop View */}
        <div className="hidden lg:block">
          <div className="relative py-24">
            {/* Container with 3 vertical rows */}
            <div className="relative px-0">
              {/* Top row - All cards */}
              <div className="flex justify-between items-stretch mb-8 relative z-10 gap-4">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="experience-item opacity-0 flex-1 flex justify-center">
                    <div className="group relative bg-github-bg-secondary/80 backdrop-blur-sm p-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-github-border/50 hover:border-github-bg-tertiary z-20 w-full max-w-sm flex flex-col overflow-hidden h-full">
                      {/* Subtle gradient overlay */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(to bottom right, ${
                            exp.color
                          }, ${lightenColor(exp.color, 30)})`,
                        }}></div>

                      <div className="relative z-10 flex flex-col h-full">
                        <div className="mb-4">
                          <span
                            className="inline-flex items-center text-xs font-semibold px-4 py-2 text-github-text border border-github-border/30 rounded-full backdrop-blur-sm"
                            style={{
                              backgroundColor: `${exp.color}1A`,
                              borderColor: `${exp.color}30`,
                            }}>
                            {exp.period}
                          </span>
                        </div>

                        <div className="flex items-start gap-4 mb-4">
                          {exp.logo && (
                            <div className="relative flex-shrink-0">
                              <img
                                src={exp.logo}
                                alt={`${exp.company} Logo`}
                                className="w-12 h-12 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                              />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-bold text-github-text mb-1 group-hover:text-white transition-colors duration-300">
                              {exp.title}
                            </h3>
                            <p
                              className="text-base font-semibold"
                              style={{ color: exp.color }}>
                              {exp.company}
                            </p>
                          </div>
                        </div>

                        {exp.location && (
                          <p className="text-xs text-github-text-secondary mb-4 flex items-center gap-1.5">
                            <svg
                              className="w-3.5 h-3.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            {exp.location}
                          </p>
                        )}

                        <ul className="space-y-2.5 flex-1">
                          {exp.description.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="text-sm text-github-text-secondary flex items-start leading-relaxed group-hover:text-github-text transition-colors duration-300">
                              <span
                                className="inline-block mr-3 mt-0.5 font-bold flex-shrink-0 text-lg"
                                style={getGradientStyle(exp.color, "to-r")}>
                                ▸
                              </span>
                              <span className="flex-1">
                                {highlightKeywords(
                                  item,
                                  EXPERIENCE_KEYWORDS,
                                  exp.color
                                )}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Middle row - Timeline line and dots */}
              <div className="relative flex justify-between items-center z-10 gap-4 mt-8">
                {/* Horizontal timeline line */}
                <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-accent/50 via-purple-500/50 to-transparent -translate-y-1/2 rounded-full z-0"></div>
                <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-accent via-purple-500 to-transparent -translate-y-1/2 rounded-full z-0 blur-sm"></div>

                {/* Timeline dots */}
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="flex-1 flex justify-center relative z-20">
                    <div
                      className="relative w-12 h-12 rounded-full shadow-lg transform transition-all duration-300 flex items-center justify-center ring-4 ring-github-bg group cursor-pointer"
                      style={{
                        background: `linear-gradient(to bottom right, ${
                          exp.color
                        }, ${lightenColor(exp.color, 20)})`,
                      }}>
                      <div
                        className="absolute inset-0 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(to bottom right, ${
                            exp.color
                          }, ${lightenColor(exp.color, 20)})`,
                        }}></div>
                      <div className="relative w-6 h-6 bg-github-bg rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Timeline - Mobile/Tablet View */}
        <div className="block lg:hidden">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 via-purple-500/50 to-transparent"></div>
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-purple-500 to-transparent blur-sm"></div>

            <div className="space-y-8 sm:space-y-12">
              {[...experiences].reverse().map((exp, index) => (
                <div
                  key={index}
                  className="experience-item opacity-0 relative pl-12 sm:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-[1.0625rem] sm:left-[2.0625rem] top-0 z-10 -translate-x-1/2">
                    <div
                      className="relative w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-lg transform transition-all duration-300 flex items-center justify-center group"
                      style={{
                        background: `linear-gradient(to bottom right, ${
                          exp.color
                        }, ${lightenColor(exp.color, 20)})`,
                      }}>
                      <div
                        className="absolute inset-0 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(to bottom right, ${
                            exp.color
                          }, ${lightenColor(exp.color, 20)})`,
                        }}></div>
                      <div className="relative w-2.5 h-2.5 sm:w-3 sm:h-3 bg-github-bg rounded-full"></div>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="group relative bg-github-bg-secondary/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-github-border/50 hover:border-github-bg-tertiary overflow-hidden w-full flex flex-col">
                    {/* Subtle gradient overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(to bottom right, ${
                          exp.color
                        }, ${lightenColor(exp.color, 30)})`,
                      }}></div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-3 sm:mb-4">
                        <span
                          className="inline-flex items-center text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-1.5 sm:py-2 text-github-text border border-github-border/30 rounded-full backdrop-blur-sm"
                          style={{
                            backgroundColor: `${exp.color}1A`,
                            borderColor: `${exp.color}30`,
                          }}>
                          {exp.period}
                        </span>
                      </div>

                      <div className="flex items-start gap-3 sm:gap-4 mb-3">
                        {exp.logo && (
                          <div className="relative flex-shrink-0">
                            <div className="relative bg-github-bg-tertiary/50 p-1.5 sm:p-2 rounded-lg sm:rounded-xl border border-github-border/30 group-hover:border-github-bg-tertiary transition-colors duration-300">
                              <img
                                src={exp.logo}
                                alt={`${exp.company} Logo`}
                                className="w-10 h-10 sm:w-12 sm:h-12 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                              />
                            </div>
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl font-bold text-github-text mb-0.5 sm:mb-1 group-hover:text-white transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <p
                            className="text-sm sm:text-lg font-semibold"
                            style={{ color: exp.color }}>
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {exp.location && (
                        <p className="text-[10px] sm:text-xs text-github-text-secondary mb-3 sm:mb-4 flex items-center gap-1 sm:gap-1.5">
                          <svg
                            className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {exp.location}
                        </p>
                      )}

                      <ul className="space-y-2 sm:space-y-2.5 flex-1">
                        {exp.description.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-xs sm:text-sm text-github-text-secondary flex items-start leading-relaxed sm:leading-relaxed group-hover:text-github-text transition-colors duration-300">
                            <span
                              className="inline-block mr-2 sm:mr-3 mt-0.5 font-bold flex-shrink-0 text-base sm:text-lg"
                              style={getGradientStyle(exp.color, "to-r")}>
                              ▸
                            </span>
                            <span className="flex-1">
                              {highlightKeywords(
                                item,
                                EXPERIENCE_KEYWORDS,
                                exp.color
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
