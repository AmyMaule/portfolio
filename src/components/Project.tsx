import ProjectLinks from "./ProjectLinks";

import { ExtendedProject } from "../types";

const Project = ({ project }: {project: ExtendedProject }) => {
  return (
    <div className="project-container">
      <div className="project-inner-container">
        <div className="project-img-container">
          <img src={project.baseImg} alt="Project desktop layout" className="project-img" />
          <img src={project.hoverImg} alt="Project overview gif" className="project-img project-img-gif" />
        </div>
        <ProjectLinks
          liveSite={project.links.live}
          project={project}
          projectType="project"
        />
      </div>
      <div className="project-details-container">
        <p className="project-description">{project.description}</p>
      </div>
    </div>
  )
}

export default Project;
