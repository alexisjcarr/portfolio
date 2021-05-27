import * as React from 'react'

import './Skills.scss'

const Skills: React.SFC = () => {
  return (
    <div className="container" id="skills">
      <div className="skills-card">
        <h1>skills</h1>
        <div className="skills">
          <div className="skill">
            <i className="icon fab fa-aws"></i>
            <p>AWS</p>
          </div>
          <div className="skill">
            <i className="icon fas fa-network-wired"></i>
            <p>Systems Design</p>
          </div>
          <div className="skill">
            <i className="icon fab fa-node"></i>
            <p>Node/</p>
            <p>Express</p>
          </div>
          <div className="skill">
            <i className="icon fab fa-js-square"></i>
            <p>JavaScript/</p>
            <p>TypeScript</p>
          </div>
          <div className="skill">
            <i className="icon fab fa-python"></i>
            <p>Python</p>
          </div>
          <div className="skill">
            <i className="icon fas fa-registered"></i>
            <p>R</p>
          </div>
          {/* <div className="skill">
            <i className="icon far fa-window-maximize"></i>
            <p>MATLAB</p>
          </div> */}
          <div className="skill">
            <i className="icon fab fa-git"></i>
            <p>git</p>
          </div>
          <div className="skill">
            <i className="icon fas fa-flask"></i>
            <p>Testing</p>
          </div>
          <div className="skill">
            <i className="icon fas fa-database"></i>
            <p>SQL/NoSQL</p>
          </div>
          <div className="skill">
            <i className="icon fab fa-google"></i>
            <p>Golang</p>
          </div>
          <div className="skill">
            <i className="icon fab fa-java"></i>
            <p>Java/Kotlin</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
