import * as React from "react";

import Project from "./Project";

import sleeptrackr from "../../assets/images/sleeptrackr.gif";
import demo from "../../assets/images/rtsp.gif";
import fitness from "../../assets/images/fitness.gif";
import servable from "../../assets/images/servable.gif";

import "./ProjectsList.scss";

const ProjectsList: React.SFC = () => {
  return (
    <div className="container" id="projects">
      <div className="projects-card">
        <h1>projects</h1>
        <Project
          projectName="Sleep Tracker"
          deploymentLink="https://sleeptrackr.netlify.com"
          githubRepo="https://github.com/alexisjcarr/Sleep-Tracker-Frontend"
          role="Front End Developer"
          gif={sleeptrackr}
          description="A web app that recommends how much sleep you need using user inputs for mood and time slept."
          techStack="React | React Router | Redux | Material UI | Axios"
          imgClass="project-img"
        />
        <hr />
        <Project
          projectName="Grit 'N Grind"
          deploymentLink="https://gritngrind.fitness/"
          githubRepo="https://github.com/grit-n-grind/client"
          role="Front End Developer"
          gif={fitness}
          description="The first web application of its kind: Grit-N-Grind is a fitness
          competition application that gyms can use to throw competitions at
          their local gyms."
          techStack="React | React Hooks | React Context | Firebase"
          imgClass="project-img"
        />
        <hr />
        <Project
          projectName="Servable"
          role="Fullstack Developer"
          gif={servable}
          description="Still under development. A mobile-friendly web app that matches
          users to volunteer opportunities via a Tinder-like interface."
          techStack="React | React Hooks | Typescript | Node | Express | PostgreSQL"
          imgClass="project-img-servable"
        />
        <hr />
        <Project
          projectName="Real-time Data Renderer"
          role="Front End Developer | Data Viz Engineer"
          gif={demo}
          description="TBA"
          techStack="React | React Hooks | SocketIO"
          imgClass="project-img"
        />
      </div>
    </div>
  );
};

export default ProjectsList;
