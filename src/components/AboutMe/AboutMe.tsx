import * as React from "react";

import "./AboutMe.scss";
import me from "../../me.jpg";

export interface AboutMeProps {}

const AboutMe: React.SFC<AboutMeProps> = () => {
  return (
    <div className="container" id="aboutme">
      <div className="card">
        <h1>about me</h1>
        <img
          src={me}
          alt="profile pic"
          style={{
            height: "20%",
            width: "20%",
            borderRadius: "1000px",
            border: "5px solid yellowgreen",
            marginTop: "20px"
          }}
        />
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
