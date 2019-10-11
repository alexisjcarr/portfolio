import * as React from "react";

import Project from "./Project";

import sleeptrackr from "../../assets/images/sleeptrackr.gif";
import demo from "../../assets/images/rtsp.gif";
import fitness from "../../assets/images/fitness.gif";
import servable from "../../assets/images/servable2.gif";
import lol from "../../assets/images/portf.gif";
import sauti from "../../assets/images/ogImage.jpeg";

import "./ProjectsList.scss";

const ProjectsList: React.SFC = () => {
  const sautiDesc =
    "Sauti Africa is a non-profit organization that serves to empower cross border traders (who are predominately women) by providing real-time market prices, exchange rates and trade procedures." +
    "\n" +
    "Sauti has done so well that other organizations, policy makers, and developers have asked for access to the data that Sauti uses for their platform. However, as it currently stands, such a public-facing data platform doesn't exist." +
    "\n" +
    "The purpose of this app is to fill this need by providing what is essentially a pivot table fed by a RESTful backend. My team will be able to provide data in a tabular/chart form for those who aren't tech-minded and a consumable API for those who are.";

  return (
    <div className="container" id="projects">
      <div className="projects-card">
        <h1>projects</h1>
        <Project
          projectName="this portfolio ;)"
          deploymentLink="https://www.alexisjcarr.com/"
          githubRepo="https://github.com/alexisjcarr/portfolio"
          role="Front End Developer"
          gif={lol}
          description="A software developer portfolio that was coded from scratch"
          techStack="React | React Hooks | TypeScript"
          imgClass="project-img"
        />
        <hr />
        <Project
          projectName="Sauti Africa Market Price Data API"
          deploymentLink="http://price-api.sautiafrica.org"
          githubRepo="https://github.com/orgs/Lambda-School-Labs/teams/labs-17-sauti-africa-market-price-data/repositories"
          role="Fullstack Software Engineer"
          gif={sauti}
          description={sautiDesc}
          techStack="React | React Hooks | Redux | Node | Express | MySQL | Firebase"
          imgClass="project-img"
        />
        <hr />
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
          role="Fullstack Software Engineer"
          gif={servable}
          description="Still under development. A mobile-friendly web app that matches
          users to volunteer opportunities via a Tinder-like interface."
          techStack="React | React Hooks | Typescript | Node | Express | PostgreSQL"
          imgClass="project-img-servable"
        />
        <hr />
        <Project
          projectName="Real-time Data Renderer"
          deploymentLink="http://realtime-viz-practice.surge.sh/"
          githubRepo="https://github.com/alexisjcarr/socket-io-playground-client"
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
