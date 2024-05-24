import { useRef, useEffect } from "react";
import ProjectLinks from "./ProjectLinks";

import { ExtendedProject } from "../types";

const Project = ({ project }: {project: ExtendedProject }) => {
  const projectContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeRef = projectContainerRef.current;
    if (!activeRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          activeRef?.classList.add("animate");
          observer.unobserve(activeRef);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px 20px 0px",
        threshold: 0
      }
    );

    if (activeRef) observer.observe(activeRef);
    return () => {
      if (activeRef) observer.unobserve(activeRef);
    }
  }, []);

  return (
    <div className="project-container" ref={projectContainerRef} id={project.title}>
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
      <p className="project-description">{project.description}</p>
    </div>
  )
}

export default Project;
