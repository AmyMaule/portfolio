import React from 'react';
import { ExtendedProject } from "../types";

const Project = ({ project }: {project: ExtendedProject }) => {
  return (
    <div className="project-container">
      <div className="project-inner-container">
        <div className="project-img-container">
          <img src={project.baseImg} alt="Project desktop layout" className="project-img" />
          <img src={project.hoverImg} alt="Project overview gif" className="project-img project-img-gif" />
        </div>
        <div className="project-title-container">
          <h3 className="project-title">{project.title}</h3>
          <div className="project-hr"></div>
          <div className="project-technologies">
            {project.techUsed.map((tech, i) => {
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
          <div className="project-btn-container">
            <button className="project-btn">Github</button>
            <button className="project-btn">View site</button>
          </div>
        </div>
      </div>
      <div className="project-details-container">
        <p className="project-description">{project.description}</p>
      </div>
    </div>
  )
}

export default Project;
