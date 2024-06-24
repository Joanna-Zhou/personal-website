import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects.json";
import Section from "./Section";

function Projects() {
  const style =
    "text-neutral-400 px-4 pb-2 border-b border-neutral-300 dark:border-neutral-800 font-semibold";

  const sortedProjects = Object.entries(projects).sort(
    ([, projectA], [, projecctB]) => {
      const dateA = new Date(projectA.date);
      const dateB = new Date(projecctB.date);
      return dateB - dateA;
    }
  );

  return (
    <Section id="projects" title="Projects">
      <div className="flex flex-col gap-4">
        {sortedProjects.map(([key, project]) => {
          const { date, title, role, target } = projects[key];
          return (
            <ProjectCard
              key={key}
              date={date}
              projectTitle={title}
              role={role}
              target={target}
            />
          );
        })}
      </div>
    </Section>
  );
}

export default Projects;
