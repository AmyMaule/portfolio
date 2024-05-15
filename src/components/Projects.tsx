import Project from "./Project";

import { ExtendedProject } from "../types";

type ProjectsProps = {
  title: string,
  projectData: ExtendedProject[]
}

const Projects = ({ title, projectData }: ProjectsProps) => {
  return (
    <section className="projects-section">
      <h1 className="projects-title">{title}</h1>
      <div className="projects-container">
        {projectData.map((project: ExtendedProject) => {
          return <Project project={project} key={project.title} />
        })}
      </div>
  </section>
  )
}

export default Projects;
