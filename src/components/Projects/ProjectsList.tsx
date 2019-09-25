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
          <h3>Sleep Tracker</h3>
          <p>Front End Developer</p>
          <p>React | React Router | Redux | Material UI | Axios | git</p>
          <a href="https://sleeptrackr.netlify.com" target="_blank">
            <p>Deployed Link</p>
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
