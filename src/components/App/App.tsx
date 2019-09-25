import React, { useState } from "react";
import Sidebar from "react-sidebar";
//import { Switch, Route, NavLink } from "react-router-dom";

import "./App.scss";

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const onSetSidebarOpen = (): void => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="App">
      <Sidebar
        sidebar={
          <>
            <h3>Menu</h3> <p>About Me</p> <p>Skills</p> <p>Projects</p>{" "}
            <p>Blog</p> <p>Contact Me</p>{" "}
          </>
        }
        open={sidebarOpen}
        onSetOpen={onSetSidebarOpen}
        styles={{ sidebar: { background: "#f0f8ff", width: "200px" } }}
        pullRight={true}
      >
        <button onClick={() => onSetSidebarOpen()}>Open sidebar</button>
      </Sidebar>
      {/* <Switch>
        <Route exact path="/" component={} />
      </Switch> */}
    </div>
  );
};

export default App;
