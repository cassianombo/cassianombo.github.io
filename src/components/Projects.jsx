import { Link } from "react-router-dom";

import { useLocale } from "../i18n/LanguageContext";
import ProjectGrid from "./ProjectGrid";

const Projects = () => {
  const { t, profile } = useLocale();

  return (
    <section id="projects" className="scroll-mt-24 flex flex-col gap-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="title text-2xl sm:text-3xl">
          {t("projects.featuredTitle")}
        </h2>
        <Link
          to="/projects"
          className="link flex w-fit items-center gap-2 font-light">
          <span>{t("projects.viewMore")}</span>
          <svg
            className="size-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden>
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
      <ProjectGrid projects={profile.featuredProjects} />
    </section>
  );
};

export default Projects;
