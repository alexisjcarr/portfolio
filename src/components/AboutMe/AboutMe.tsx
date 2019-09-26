import * as React from "react";

import "./AboutMe.scss";
import me from "../../assets/images/me.jpg";

const AboutMe: React.SFC = () => {
  return (
    <div className="container" id="aboutme">
      <div className="card">
        <h1>about me</h1>
        <img src={me} alt="profile pic" className="profile-pic" />
        <br />
        <br />
        <h1>{`<alexis carr/>`}</h1>
        <br />
        <h3>fullstack software engineer | biomedical engineer | writer</h3>
        <br />
        <h4>
          University of Houston '16 》Texas A&M University '19 》 Lambda School
          '20
        </h4>
      </div>
    </div>
  );
};

export default AboutMe;
