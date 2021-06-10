import * as React from 'react'

import Project from './Project'

import sleeptrackr from '../../assets/images/sleeptrackr.gif'
import fitness from '../../assets/images/fitness.gif'
import lol from '../../assets/images/portf.gif'
import sauti from '../../assets/images/ogImage.jpeg'
import insuline from '../../assets/images/insuline.gif'
import zipy from '../../assets/images/zipy.jpg'
import poster from '../../assets/images/poster.png'
import cartoon from "../../assets/images/cartoon.jpeg"
import wip from "../../assets/images/coming_soon.jpeg"
import abb from '../../assets/images/abb.gif'

import './ProjectsList.scss'

const ProjectsList: React.SFC = () => {
  const sautiDesc =
    "Sauti Africa is a non-profit organization that serves to empower cross border traders by providing real-time market prices, exchange rates, and trade procedures. This web app provides a public-facing data platform that allows for users to access Sauti Africa's market price data. "

  return (
    <div className="container" id="projects">
      <div className="projects-card">
        <h1>projects</h1>
        <hr />
        <Project
          projectName="Solutions Architecture Samples"
          role="Solutions/Systems Architect"
          description="A collection of systems/solutions architecture write-ups"
          deploymentLink="/designs"
          gif={cartoon}
          techStack="AWS, draw.io"
          imgClass="project-img"
        />
        <hr />
        <Project
          projectName="QUIC-gRPC"
          role="Backend Engineer"
          description="Still under development. gRPC is a modern open source high performance Remote Procedure Call (RPC) framework that can run in any environment. The current implementations of gRPC use HTTP/2 as the transport protocol. This project aims to replace HTTP/2 with QUIC in the Go implementation of gRPC."
          gif={wip}
          techStack="Go"
          imgClass="project-img"
        />
        <hr />
        <Project 
          projectName='Angry Beanie Babies'
          githubRepo="https://github.com/alexisjcarr/angrybeaniebabies"
          role='Game Developer'
          description='Still under development. A simple two player game where each of the two players tries to shoot down the other one. Currently working on refactoring and making an AI player for a single player experience.'
          gif={abb}
          techStack='Python, pygame'
          imgClass='project-img'
        />
        <hr />
        <Project
          projectName="this portfolio ;)"
          deploymentLink="https://www.alexisjcarr.com/"
          githubRepo="https://github.com/alexisjcarr/portfolio"
          role="Front End Engineer"
          gif={lol}
          description="A software engineer portfolio that was coded from scratch"
          techStack="React | React Hooks | TypeScript"
          imgClass="project-img"
        />
        <hr />
        <Project
          projectName="Sauti Africa Market Price Data API"
          deploymentLink="https://price-api.sautiafrica.org/"
          githubRepo="https://github.com/orgs/Lambda-School-Labs/teams/labs-17-sauti-africa-market-price-data/repositories"
          role="Fullstack Software Engineer"
          gif={sauti}
          description={sautiDesc}
          techStack="React | React Hooks | Context API | Redux | Node | Express | Redis | Auth0 | MySQL | PostgreSQL"
          imgClass="project-img"
        />
        <hr />
        {/* <Project
          projectName="macrolimiter"
          deploymentLink="https://www.npmjs.com/package/macrolimiter"
          githubRepo="https://github.com/alexisjcarr/macrolimiter"
          role="Backend Engineer"
          gif={npm}
          description="An npm package that facilitates both the generation and validation of API keys, as well as the limiting of calls for specific API keys on key-protected routes."
          techStack="Node | Express | Redis"
          imgClass="project-img"
        />
        <hr /> */}
        <Project
          projectName="Sleep Tracker"
          deploymentLink="https://sleeptrackr.netlify.com"
          githubRepo="https://github.com/alexisjcarr/Sleep-Tracker-Frontend"
          role="Front End Engineer"
          gif={sleeptrackr}
          description="A web app that recommends how much sleep you need using user inputs for mood and time slept."
          techStack="React | React Router | Redux | Material UI | Axios"
          imgClass="project-img"
        />
        <hr />
        <Project
          projectName="Grit 'N Grind"
          // deploymentLink="https://gritngrind.fitness/"
          githubRepo="https://github.com/grit-n-grind/client"
          role="Front End Engineer"
          gif={fitness}
          description="The first web application of its kind: Grit-N-Grind is a fitness
          competition application that gyms can use to throw competitions at
          their local gyms."
          techStack="React | React Hooks | React Context | Firebase"
          imgClass="project-img"
        />
        <hr />
        {/* <Project
          projectName="Servable"
          role="Fullstack Software Engineer"
          gif={servable}
          description="Still under development. A mobile-friendly web app that matches
          users to volunteer opportunities via a Tinder-like interface."
          techStack="React | React Hooks | Typescript | Node | Express | PostgreSQL"
          imgClass="project-img-servable"
        />
        <hr /> */}
        {/* <Project
          projectName="Real-time Data Renderer"
          deploymentLink="http://realtime-viz-practice.surge.sh/"
          githubRepo="https://github.com/alexisjcarr/socket-io-playground-client"
          role="Front End Engineer | Data Viz Engineer"
          gif={demo}
          description="TBA"
          techStack="React | React Hooks | SocketIO"
          imgClass="project-img"
        />
        <hr /> */}
        <Project
          projectName="Insuline (Diabetes Manager)"
          deploymentLink="https://diabetesmanager.netlify.com/"
          role="Project Lead"
          gif={insuline}
          description="A web app that allows users to input glucose levels and predicts glucose levels over the next 24 hours."
          techStack="React | React Hooks | Context API | Redux | Node | Express | SQLite | PostgreSQL | Python | Flask"
          imgClass="project-img"
        />
        <hr />
        <Project
          projectName="Brain-Machine Interface Algorithm"
          deploymentLink="https://drive.google.com/uc?exportexport=download&id=1xTlCt97Mcc4zZnFkheu11CUqovmVDO3R"
          role="Biomedical Algorithm Engineer"
          gif={poster}
          description="An algorithm that improves the accuracy of the decoder (the software that translates EEG signals into physical prosthetic movement) in an existing brain-machine interface system."
          techStack="MATLAB"
          imgClass="project-img"
        />
        <hr />
        <Project
          projectName="ZiPy (Zero-Inflated Poisson Regression Python Package)"
          githubRepo="https://github.com/alexisjcarr/ZiPy"
          role="Data Scientist/Computational Statistician"
          gif={zipy}
          description="A Python package for maximum likelihood estimation of zero-inflated models for count data."
          techStack="Python | NumPy | SciPy | Pandas"
          imgClass="project-img"
        />
      </div>
    </div>
  )
}

export default ProjectsList
