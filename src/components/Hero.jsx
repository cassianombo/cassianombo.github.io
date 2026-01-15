import { useEffect, useRef } from "react";

import SectionDivider from "./SectionDivider";
import { scrollToSection } from "../utils/scroll";

const Hero = () => {
  const heroRef = useRef(null);

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

    if (heroRef.current) {
      const children = heroRef.current.querySelectorAll(".fade-in");
      children.forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center bg-github-bg overflow-hidden pt-12 pb-0 sm:pt-16 sm:pb-0 lg:py-12 lg:pt-16 lg:pb-0">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-github-bg via-github-bg to-github-bg-secondary/30"></div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 -right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-accent/5 rounded-full blur-3xl"></div>

      {/* Grid pattern overlay (subtle) */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}></div>

      <div
        ref={heroRef}
        className="relative max-w-7xl mx-auto w-full z-10 flex-1 flex items-center justify-center px-6 sm:px-8 lg:px-8">
        {/* Two-column layout: stacked on mobile, side-by-side on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Avatar (main visual element) */}
          <div className="fade-in opacity-0 order-2 lg:order-1 flex flex-row lg:flex-col items-center lg:items-end gap-4 lg:gap-0 relative z-20">
            <div
              className="relative pointer-events-none"
              style={{ perspective: "1000px" }}>
              {/* Glow effect behind avatar */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-blue-500/20 to-purple-500/20 rounded-full blur-2xl scale-125 opacity-60 animate-pulse pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-blue-500/30 to-purple-500/30 rounded-full blur-xl scale-110 opacity-40 pointer-events-none"></div>

              {/* Avatar image */}
              <img
                src="/icon.png"
                alt="Hugo Oliveira"
                className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 animate-rotate-3d hover:scale-105 transition-transform duration-500 drop-shadow-2xl pointer-events-none"
                style={{
                  transformStyle: "preserve-3d",
                  filter: "drop-shadow(0 0 30px rgba(59, 130, 246, 0.3))",
                }}
              />
            </div>

            {/* Social Links */}
            <div className="flex flex-col lg:flex-row align-center gap-3 sm:gap-4 ml-6 lg:mt-8 lg:w-96 justify-center lg:justify-start relative z-30">
              <a
                href="https://github.com/cassianombo"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-github-bg-secondary/50 hover:bg-github-bg-secondary border border-github-border/50 hover:border-accent/50 rounded-lg transition-all duration-300 transform hover:scale-110 backdrop-blur-sm z-30 pointer-events-auto"
                aria-label="GitHub Profile">
                <svg
                  className="w-6 h-6 text-github-text group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/34hugooliveira/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-github-bg-secondary/50 hover:bg-github-bg-secondary border border-github-border/50 hover:border-accent/50 rounded-lg transition-all duration-300 transform hover:scale-110 backdrop-blur-sm z-30 pointer-events-auto"
                aria-label="LinkedIn Profile">
                <svg
                  className="w-6 h-6 text-github-text group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="fade-in opacity-0 order-1 lg:order-2 text-center lg:text-left space-y-4 sm:space-y-6">
            {/* Greeting line */}
            <p
              className="text-sm sm:text-base md:text-lg text-github-text font-medium opacity-90"
              style={{ animationDelay: "0.1s" }}>
              Hi, I'm Hugo 👋
            </p>

            {/* Main title */}
            <h1
              className="text-5xl xl:text-7xl font-bold leading-tight"
              style={{ animationDelay: "0.2s" }}>
              <span className="text-white drop-shadow-lg">Software</span>
              <br />
              <span className="text-gradient drop-shadow-lg">Engineer</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-github-text leading-relaxed max-w-xl mx-auto lg:mx-0 opacity-90 px-2 sm:px-0"
              style={{ animationDelay: "0.3s" }}>
              Building scalable web and mobile applications with modern
              technologies and best practices.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-row gap-4 justify-center lg:justify-start pt-2 sm:pt-4 h-[64px] sm:h-auto"
              style={{ animationDelay: "0.4s" }}>
              {/* Primary CTA */}
              <button
                onClick={() => scrollToSection("projects")}
                className="group relative px-6 sm:px-8 py-2.5 sm:py-4 bg-accent hover:bg-blue-600 text-white rounded-lg font-semibold text-sm sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden whitespace-nowrap flex-1 sm:flex-initial">
                <span className="relative z-10">View Projects</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>

              {/* CV Download Button */}
              <a
                href="/Hugo Oliviera CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 sm:px-8 py-2.5 sm:py-4 bg-transparent border-2 border-github-border/50 text-white hover:bg-github-bg-secondary/50 hover:border-accent/50 rounded-lg font-semibold text-sm sm:text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap flex-1 sm:flex-initial">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-[-2px] transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>View CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator and Section Divider */}
      <div className="relative lg:absolute bottom-0 left-0 right-0 w-full z-0 md:z-0 lg:z-10 mt-8 sm:mt-12 lg:mt-0 order-last lg:order-none">
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-0 md:z-0 lg:z-20">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-github-text opacity-80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
        {/* Section Divider - positioned at the very bottom */}
        <div className="relative w-full">
          <SectionDivider flip fillColor="fill-zinc-950" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
