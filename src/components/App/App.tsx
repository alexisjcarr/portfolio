import React from "react";

import NavBar from "../NavBar";
import AboutMe from "../AboutMe";
import Skills from "../Skills";

import "./App.scss";

const App: React.FC = () => (
  <div className="App">
    <NavBar />
    <AboutMe />
    <br />
    <br />
    <Skills />
  </div>
);

export default App;
