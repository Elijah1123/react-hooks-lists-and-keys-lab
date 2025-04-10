import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects); // This will print the array of project objects

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* Map through the projects array to render ProjectItem components */}
        {projects.map((project) => (
          <ProjectItem
            key={project.id} // Use the project id as the key
            name={project.name}
            about={project.about}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
