import React from "react";

import NavBar from "../NavBar";
import AboutMe from "../AboutMe";

import "./App.scss";

const App: React.FC = () => (
  <div className="App">
    <NavBar />
    <AboutMe />
  </div>
);

export default App;
