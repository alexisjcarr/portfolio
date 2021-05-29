import * as React from 'react'

import './Skills.scss'

const Skills: React.SFC = () => {
  return (
    <div className="container" id="skills">
      <div className="skills-card">
        <h1>skills</h1>
        <hr />
        <h3>Industry Knowledge</h3>
        <div className="skills">
          <div className="skill">
            <i className="icon fab fa-aws"></i>
            <p>AWS</p>
            <p>(Certified Solutions</p>
              <p>Architect)</p>
          </div>
          <div className="skill">
            <i className="icon fas fa-project-diagram"></i>
            <p>Systems Design</p>
          </div>
          <div className="skill">
            <i className="icon fas fa-cogs"></i>
            <p>Microservices</p>
          </div>
          <div className="skill">
            <i className="icon fab fa-git"></i>
            <p>git</p>
          </div>
          <div className="skill">
            <i className="icon fas fa-flask"></i>
            <p>Testing</p>
          </div>
        </div>
      </div>
      
      <div className="skills-card">
        <hr />
        <h3>Languages</h3>
        <div className="skills">
          <div className="skill">
              <i className="icon fab fa-python"></i>
              <p>Python</p>
            </div>
            <div className="skill">
              <i className="icon fab fa-js-square"></i>
              <p>JavaScript/</p>
              <p>TypeScript</p>
            </div>
            <div className="skill">
              <i className="icon fas fa-registered"></i>
              <p>R</p>
            </div>
            <div className="skill">
              <i className="icon fab fa-java"></i>
              <p>Java/Kotlin</p>
            </div>
            <div className="skill">
              <i className="icon fab fa-google"></i>
              <p>Golang</p>
            </div>
            <div className="skill">
              <i className="icon fas fa-window-maximize"></i>
              <p>Bash</p>
            </div>
          </div>
      </div>

      <div className="skills-card">
        <hr />
        <h3>Platforms</h3>
        <div className="skills">
          <div className="skill">
            <i className="icon fas fa-network-wired"></i>
            <p>Kubernetes</p>
          </div>
          <div className="skill">
            <i className="icon fab fa-docker"></i>
            <p>Docker</p>
          </div>
          <div className="skill">
            <i className="icon fab fa-node"></i>
            <p>Node/</p>
            <p>Express</p>
          </div>
          <div className="skill">
            <i className="icon fas fa-rocket"></i>
            <p>Micronaut</p>
          </div>
          <div className="skill">
            <i className="icon fas fa-seedling"></i>
            <p>Spring Boot</p>
          </div>
          <div className="skill">
            <i className="icon far fa-window-maximize"></i>
            <p>MATLAB</p>
          </div>
          </div>
      </div>

      <div className="skills-card">
        <hr />
        <h3>Frameworks</h3>
        <div className="skills">
          <div className="skill">
          <i className ="icon fas fa-cog"></i>
          <p>gRPC</p>
          </div>
          <div className="skill">
          <i className="icon fab fa-react"></i>
          <p>React/Redux</p>
          </div>
        </div>
      </div>

      <div className="skills-card">
        <hr />
        <h3>Databases</h3>
        <div className="skills">
          <div className="skill">
            <i className="icon fas fa-database"></i>
            <p>MySQL</p>
          </div>
          <div className="skill">
            <i className="icon fas fa-server"></i>
            <p>DynamoDB</p>
          </div>
          <div className="skill">
            <i className="icon fab fa-searchengin"></i>
            <p>Elasticsearch</p>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Skills
