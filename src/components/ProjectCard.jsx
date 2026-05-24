import { useLocale } from "../i18n/LanguageContext";

const GitHubIcon = () => (
  <svg
    className="size-3"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    className="size-3"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

const ProjectLink = ({ href, label, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex min-h-8 items-center gap-2 rounded-md border border-transparent bg-primary px-2.5 py-1.5 text-[10px] font-semibold text-primary-foreground shadow hover:bg-primary/80 sm:min-h-0 sm:px-2 sm:py-1">
    <Icon />
    {label}
  </a>
);

const buildProjectLinks = (project, labels) => {
  if (project.links?.length) {
    return project.links.map((link) => ({
      ...link,
      icon: link.icon === "globe" ? GlobeIcon : GitHubIcon,
    }));
  }

  return [
    project.github && {
      label: labels.source,
      href: project.github,
      icon: GitHubIcon,
    },
    project.demo && { label: labels.demo, href: project.demo, icon: GlobeIcon },
    project.website && {
      label: labels.website,
      href: project.website,
      icon: GlobeIcon,
    },
  ].filter(Boolean);
};

const ProjectCard = ({ project }) => {
  const { t } = useLocale();
  const isLogoImage = project.imageBackground === "white";
  const projectLinks = buildProjectLinks(project, {
    source: t("projects.source"),
    demo: t("projects.demo"),
    website: t("projects.website"),
  });

  return (
  <div className="surface flex flex-col">
    <div className="flex flex-col space-y-1.5 p-4 sm:p-6">
      <div
        className={`relative h-40 w-full overflow-hidden rounded-md ${
          isLogoImage ? "bg-white" : "bg-muted"
        }`}>
        <img
          src={project.image}
          alt={project.name}
          className={
            isLogoImage
              ? "h-full w-full origin-center scale-[1.35] object-contain p-2"
              : "h-40 w-full object-cover object-center"
          }
        />
      </div>
    </div>
    <div className="flex flex-col gap-2 p-4 pt-0 sm:p-6 sm:pt-0">
      <h3 className="font-semibold leading-none tracking-tight">{project.name}</h3>
      <p className="max-w-full text-pretty font-sans text-xs text-muted-foreground">
        {project.description}
      </p>
    </div>
    <div className="flex h-full flex-col items-start justify-between gap-4 p-4 pt-0 sm:p-6 sm:pt-0">
      <div className="mt-2 flex flex-wrap gap-1">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-md border border-border bg-background px-1 py-0 text-[10px] font-semibold text-foreground">
            {tech}
          </span>
        ))}
      </div>
      {projectLinks.length > 0 && (
        <div className="flex flex-row flex-wrap items-start gap-1">
          {projectLinks.map((link) => (
            <ProjectLink
              key={link.label}
              href={link.href}
              label={link.label}
              icon={link.icon}
            />
          ))}
        </div>
      )}
    </div>
  </div>
  );
};

export default ProjectCard;
