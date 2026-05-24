import ProjectGrid from "../components/ProjectGrid";
import { useLocale } from "../i18n/LanguageContext";

const ProjectsPage = () => {
  const { t, profile } = useLocale();

  return (
    <article className="mt-6 flex flex-col gap-6 pb-12 sm:mt-8 sm:gap-8 sm:pb-16">
      <h1 className="title text-2xl sm:text-3xl">{t("projects.pageTitle")}</h1>
      <ProjectGrid projects={profile.projects} />
    </article>
  );
};

export default ProjectsPage;
