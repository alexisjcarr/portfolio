import * as React from "react";

import "./Skills.scss";

export interface SkillsProps {}

const Skills: React.SFC<SkillsProps> = () => {
  return (
    <div className="container" id="skills">
      <div className="skills-card">
        <h1>skills</h1>
        <div className="skills">
          <div className="skill">
            <i className="icon fab fa-react"></i>
            <p>React</p>
          </div>
          <div className="skill">
            <i className="icon fab fa-node"></i>
            <p>Node/Express</p>
          </div>
          <div className="skill">
            <i className="icon fab fa-html5"></i>
            <p>HTML</p>
          </div>
          <div className="skill">
            <i className="icon fab fa-css3-alt"></i>
            <p>CSS</p>
          </div>
          <div className="skill">
            <i className="icon fab fa-js-square"></i>
            <p>Javascript</p>
          </div>
          <div className="skill">
            <i className="icon fab fa-sass"></i>
            <p>Sass</p>
          </div>
          <div className="skill">
            <i className="icon fab fa-python"></i>
            <p>Python</p>
          </div>
          <div className="skill">
            <i className="icon fab fa-git"></i>
            <p>git</p>
          </div>
          <div className="skill">
            <i className="icon fas fa-database"></i>
            <p>Databases</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
