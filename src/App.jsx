import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SectionDivider from "./components/SectionDivider";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-github-bg">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SectionDivider />
        <Projects />
        <SectionDivider flip />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <footer className="bg-github-bg text-github-text-secondary py-8 text-center border-t border-github-border">
        <p>&copy; 2026 Hugo Oliveira. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
