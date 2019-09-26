import * as React from "react";

import sleeptrackr from "../../sleeptrackr.gif";
import demo from "../../rtsp.gif";
import fitness from "../../fitness.gif";
import servable from "../../servable.gif";

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
          <p>
            A web app that recommends how much sleep you need using user inputs
            for mood and time slept.
          </p>
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
          <img src={fitness} alt="fitness app" className="project-img" />
          <h3>Grit 'N Grind</h3>
          <p>Front End Developer</p>
          <p>
            The first web application of its kind: Grit-N-Grind is a fitness
            competition application that gyms can use to throw competitions at
            their local gyms.
          </p>
          <p>React | React Hooks | React Context | Firebase</p>
          <a
            href="https://gritngrind.fitness/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Deployed Link</p>
          </a>
          <a
            href="https://github.com/grit-n-grind/client"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Github Repo</p>
          </a>
        </div>
        <br />
        <div className="project">
          <img
            src={servable}
            alt="community service app"
            className="project-img-servable"
          />
          <h3>Servable</h3>
          <p>Fullstack Developer</p>
          <p>
            Still under development. A mobile-friendly web app that matches users to volunteer
            opportunities via a Tinder-like interface.
          </p>
          <p>React | React Hooks | Typescript | Node | Express | PostgreSQL</p>
          <a>
            <p>Deployed Link: TBA</p>
          </a>
          <a>
            <p>Github Repo: TBA</p>
          </a>
        </div>
        <br />
        <div className="project">
          <img src={demo} alt="realtime app" className="project-img" />
          <h3>Real Time Data Renderer</h3>
          <p>Front End Developer | Data Viz Engineer</p>
          <p>TBA</p>
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
