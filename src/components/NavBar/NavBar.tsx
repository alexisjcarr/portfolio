import React, { useState } from "react";
import Sidebar from "react-sidebar";
import "../../react-burgers.d.ts";
import { Slider } from "react-burgers";

import "./NavBar.scss";

export interface NavBarProps {}

const NavBar: React.SFC<NavBarProps> = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active_, setActive] = useState(false);

  const onSetSidebarOpen = (): void => {
    setSidebarOpen(!sidebarOpen);
    setActive(!active_);
  };

  return (
    <div>
      <Sidebar
        sidebar={
          <>
            <h3>MENU</h3>{" "}
            <a href="#aboutme">
              <p>about me</p>
            </a>{" "}
            <a href="#skills">
              <p>skills</p>
            </a>{" "}
            <a href="#projects">
              <p>projects</p>
            </a>
            <a href="#contact">
              <p>contact</p>
            </a>
          </>
        }
        open={sidebarOpen}
        onSetOpen={onSetSidebarOpen}
        styles={{
          sidebar: {
            background: "black",
            color: "yellowgreen",
            width: "200px",
            position: "fixed",
            top: "0"
          }
        }}
        pullRight={true}
      >
        <div
          onClick={(): void => onSetSidebarOpen()}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            backgroundColor: "black",
            position: "fixed",
            top: "0",
            width: "100%"
          }}
        >
          <Slider active={active_} color="yellowgreen" />
        </div>
      </Sidebar>
    </div>
  );
};

export default NavBar;
