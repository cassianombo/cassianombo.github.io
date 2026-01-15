import { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const children = sectionRef.current.querySelectorAll(".fade-in");
      children.forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 relative">
      <div ref={sectionRef} className="max-w-4xl px-4 mx-auto">
        <h2 className="text-4xl font-bold text-github-text mb-4 text-center fade-in opacity-0">
          <span className="text-gradient">About Me</span>
        </h2>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p
            className="text-github-text-secondary mb-6 text-lg leading-relaxed fade-in opacity-0"
            style={{ animationDelay: "0.2s" }}>
            I'm a passionate Software Engineer with a strong foundation in
            Computer Engineering and currently pursuing a Master's in Data
            Engineering. I specialize in creating efficient, scalable solutions
            across web, mobile, and data-driven applications.
          </p>

          <div className="mt-8 space-y-8">
            {/* Education Section */}
            <div
              className="fade-in opacity-0"
              style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center mr-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-github-text">
                  Education
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Master Degree */}
                <div className="group relative bg-github-bg-secondary p-5 rounded-xl border border-github-border hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-blue-600/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <img
                            src="/isep_logo.png"
                            alt="ISEP Logo"
                            className="w-10 h-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                          />
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-github-text group-hover:text-accent transition-colors">
                              Master in Data Engineering
                            </h4>
                            <p className="text-sm text-github-text-secondary mt-0.5">
                              Porto School of Engineering (ISEP)
                            </p>
                          </div>
                        </div>
                      </div>
                      <span className="ml-3 px-2.5 py-1 text-xs font-semibold bg-gradient-to-r from-accent/20 to-blue-600/20 text-accent rounded-full border border-accent/30 whitespace-nowrap">
                        Present
                      </span>
                    </div>
                    <div className="flex items-center text-xs text-github-text-secondary">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Sep 2025 - Present
                    </div>
                  </div>
                </div>

                {/* Bachelor Degree */}
                <div className="group relative bg-github-bg-secondary p-5 rounded-xl border border-github-border hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <img
                            src="/isep_logo.png"
                            alt="ISEP Logo"
                            className="w-10 h-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                          />
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-github-text group-hover:text-accent transition-colors">
                              Bachelor in Computer Engineering
                            </h4>
                            <p className="text-sm text-github-text-secondary mt-0.5">
                              Porto School of Engineering (ISEP)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center text-xs text-github-text-secondary">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Sep 2020 – Sep 2023
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications & Courses Section */}
            <div
              className="fade-in opacity-0"
              style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mr-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-github-text">
                  Certifications & Courses
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {/* React Native Course */}
                <div className="group relative bg-github-bg-secondary p-5 rounded-xl border border-github-border hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <img
                        src="/udemy_logo.png"
                        alt="Udemy Logo"
                        className="w-8 h-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base font-bold text-github-text group-hover:text-purple-400 transition-colors line-clamp-2">
                          React Native – The Practical Guide
                        </h4>
                        <p className="text-xs text-github-text-secondary mt-0.5">
                          Academind/Udemy
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center text-xs text-github-text-secondary">
                      <svg
                        className="w-3.5 h-3.5 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Aug 2025
                    </div>
                  </div>
                </div>

                {/* Docker Course */}
                <div className="group relative bg-github-bg-secondary p-5 rounded-xl border border-github-border hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <img
                        src="/udemy_logo.png"
                        alt="Udemy Logo"
                        className="w-8 h-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base font-bold text-github-text group-hover:text-blue-400 transition-colors line-clamp-2">
                          Docker for absolute Beginners – Hands on – DevOps
                        </h4>
                        <p className="text-xs text-github-text-secondary mt-0.5">
                          Udemy
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center text-xs text-github-text-secondary">
                      <svg
                        className="w-3.5 h-3.5 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Jun 2025
                    </div>
                  </div>
                </div>

                {/* Angular Course */}
                <div className="group relative bg-github-bg-secondary p-5 rounded-xl border border-github-border hover:border-red-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <img
                        src="/isep_logo.png"
                        alt="ISEP Logo"
                        className="w-8 h-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base font-bold text-github-text group-hover:text-red-400 transition-colors">
                          Angular Course
                        </h4>
                        <p className="text-xs text-github-text-secondary mt-0.5">
                          ISEP
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center text-xs text-github-text-secondary">
                      <svg
                        className="w-3.5 h-3.5 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      May 2024 - Jun 2024
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
