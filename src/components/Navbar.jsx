import { useEffect, useState } from "react";

import { scrollToSection } from "../utils/scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-github-bg/80 backdrop-blur-md shadow-sm border-b border-github-border"
          : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold text-github-text hover:text-accent transition-colors">
            Hugo Oliveira
          </button>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection("about")}
                className="text-github-text-secondary hover:text-github-text transition-colors">
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-github-text-secondary hover:text-github-text transition-colors">
                Projects
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-github-text-secondary hover:text-github-text transition-colors">
                Experience
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-github-text-secondary hover:text-github-text transition-colors">
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-github-text-secondary hover:text-github-text transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
