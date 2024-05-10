import React from "react";

import { 
  BaseProject, 
  ExtendedProject 
} from "../types";

type ProjectLinksProps = {
  project: BaseProject | ExtendedProject,
  projectType: string,
  liveSite?: string
}

const ProjectLinks = ({ project, projectType, liveSite }: ProjectLinksProps) => {
  return (
    <div className="project-title-container">
    <h3 className="project-title">{project.title}</h3>
    <div className="project-hr"></div>
    <div className="project-technologies">
      {project.techUsed.map((tech: string, i: number) => {
        if (i === project.techUsed.length - 1) {
          return tech
        } return (
          <React.Fragment key={tech}>
            <span>{tech}</span>
            <span>•</span>
          </React.Fragment>
        )
      })}
    </div>
    <div className={`${projectType}-btn-container`}>
      <button className="project-btn">Github</button>
      {liveSite && <button className="project-btn">View site</button>}
    </div>
  </div>
  )
}

export default ProjectLinks;
