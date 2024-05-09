import Project from "./Project";

import { ProjectType } from "../types";

type ProjectsProps = {
  title: string,
  projectData: ProjectType[]
}

const Projects = ({ title, projectData }: ProjectsProps) => {
  return (
    <section className="projects-section">
    <h1 className="projects-title">{title}</h1>
      <>
        {projectData.map((project: ProjectType) => {
          return <Project project={project} key={project.title} />
        })}
      </>
  </section>
  )
}

export default Projects;
