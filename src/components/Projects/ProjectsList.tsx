import * as React from "react";

import sleeptrackr from "../../sleeptrackr.gif";
import demo from "../../rtsp.gif";

import "./ProjectsList.scss";

export interface ProjectsListProps {}

const ProjectsList: React.SFC<ProjectsListProps> = () => {
  return (
    <div className="container" id="projects">
      <div className="projects-card">
        <h1>projects</h1>
        <br />
        <div className="project">
          <img
            src={sleeptrackr}
            alt="sleeptrackr app"
            className="project-img"
          />
          <h3>Sleep Tracker</h3>
          <p>Front End Developer</p>
          <p>React | React Router | Redux | Material UI | Axios</p>
          <a
            href="https://sleeptrackr.netlify.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Deployed Link</p>
          </a>
          <a
            href="https://github.com/alexisjcarr/Sleep-Tracker-Frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Github Repo</p>
          </a>
        </div>
        <br />
        <div className="project">
          <img
            src={demo}
            alt="realtime app"
            className="project-img"
          />
          <h3>Real Time Data Renderer</h3>
          <p>Front End Developer | Data Viz Engineer</p>
          <p>React | React Hooks | SocketIO</p>
          <a
            href="http://realtime-viz-practice.surge.sh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Deployed Link</p>
          </a>
          <a
            href="https://github.com/alexisjcarr/socket-io-playground-client"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Github Repo</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
