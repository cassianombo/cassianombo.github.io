import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const HomePage = () => (
  <article className="mt-6 flex flex-col gap-12 pb-12 sm:mt-8 sm:gap-16 sm:pb-16">
    <Hero />
    <Experience />
    <Projects />
    <Skills />
    <Contact />
  </article>
);

export default HomePage;
