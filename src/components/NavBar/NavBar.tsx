import React, { useState } from "react";
import Sidebar from "react-sidebar";
import "../../react-burgers.d.ts";
import { Slider } from "react-burgers";

import "./NavBar.scss";

export interface NavBarProps {}

const NavBar: React.SFC<NavBarProps> = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [active_, setActive] = useState(true);

  const onSetSidebarOpen = (): void => {
    setSidebarOpen(!sidebarOpen);
    setActive(!active_);
  };

  return (
    <div>
      <Sidebar
        sidebar={
          <>
            <h3>MENU</h3> <p>about me</p> <p>skills</p> <p>projects</p>
            <p>blog</p> <p>contact me</p>
          </>
        }
        open={sidebarOpen}
        onSetOpen={onSetSidebarOpen}
        styles={{
          sidebar: { background: "black", color: "yellowgreen", width: "200px" }
        }}
        pullRight={true}
      >
        <div
          onClick={(): void => onSetSidebarOpen()}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            backgroundColor: "black"
          }}
        >
          <Slider active={active_} color="yellowgreen" />
        </div>
      </Sidebar>
    </div>
  );
};

export default NavBar;
