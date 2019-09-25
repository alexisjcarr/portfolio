import * as React from "react";

import "./AboutMe.scss";
import me from "../../me.jpg";

export interface AboutMeProps {}

const AboutMe: React.SFC<AboutMeProps> = () => {
  return (
    <div className="container">
      <div className="card">
        <h1>About Me</h1>
        <img
          src={me}
          alt="profile pic"
          style={{
            height: "20%",
            width: "20%",
            borderRadius: "1000px",
            border: "1px solid yellowgreen",
            marginTop: "20px"
          }}
        />
        <h1>{`<Alexis />`}</h1>
        <br />
        <h1>fullstack engineer living in the great state of texas</h1>
        <br />
        <h1>let's talk</h1>
      </div>
    </div>
  );
};

export default AboutMe;
