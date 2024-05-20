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
      <a
        className="project-btn"
        href={`https://github.com/AmyMaule/${project.links.github}`}
        rel="noreferrer"
        target="_blank"
      >
        Github
      </a>
      {liveSite && 
        <a
          className="project-btn"
          href={liveSite}
          rel="noreferrer"
          target="_blank"
        >
          View site
        </a>
      }
    </div>
  </div>
  )
}

export default ProjectLinks;
