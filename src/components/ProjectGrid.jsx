import ProjectCard from "./ProjectCard";

const ProjectGrid = ({ projects }) => (
  <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
    {projects.map((project) => (
      <ProjectCard key={project.name} project={project} />
    ))}
  </section>
);

export default ProjectGrid;
