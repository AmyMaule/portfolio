import Project from "./Project";

import { projectData } from "../utilities/data";
import { ProjectType } from "../types";


const Projects = () => {
  return (
    <section className="projects-section">
    <h1 className="projects-title">Portfolio</h1>
      <>
        {projectData.map((project: ProjectType) => {
          return <Project project={project} key={project.title} />
        })}
      </>
  </section>
  )
}

export default Projects;
