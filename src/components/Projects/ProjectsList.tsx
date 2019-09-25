import * as React from "react";

import "./ProjectsList.scss";

export interface ProjectsListProps {}

const ProjectsList: React.SFC<ProjectsListProps> = () => {
  return (
    <div className="container" id="projects">
      <div className="projects-card">
        <h1>projects</h1>
        <p>UNDER CONSTRUCTION</p>
      </div>
    </div>
  );
};

export default ProjectsList;
