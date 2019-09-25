import * as React from "react";

import sleeptrackr from "../../sleeptrackr.gif";

import "./ProjectsList.scss";

export interface ProjectsListProps {}

const ProjectsList: React.SFC<ProjectsListProps> = () => {
  return (
    <div className="container" id="projects">
      <div className="projects-card">
        <h1>projects</h1>
        <div className="project">
          <img
            src={sleeptrackr}
            alt="sleeptrackr app"
            style={{
              width: "50%",
              border: "1px solid yellowgreen"
            }}
          />
          <p>Sleep Tracker</p>
          <a href="https://sleeptrackr.netlify.com" target="_blank">
            <p>Deployed Project</p>
          </a>
          <a
            href="https://github.com/alexisjcarr/Sleep-Tracker-Frontend"
            target="_blank"
          >
            <p>Github Repo</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
