import React, { useState } from 'react'
import Sidebar from 'react-sidebar'
import { Slider } from 'react-burgers'
import '../../react-burgers.d.ts'

import './NavBar.scss'

const NavBar: React.SFC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [active_, setActive] = useState(false)

  const onSetSidebarOpen = (): void => {
    setSidebarOpen(!sidebarOpen)
    setActive(!active_)
  }

  return (
    <div>
      <Sidebar
        sidebar={
          <>
            <h3>MENU</h3>{' '}
            <a href="/">
              <p>home</p>
            </a>{' '}
            <a href="#aboutme">
              <p>about me</p>
            </a>{' '}
            <a href="#skills">
              <p>skills</p>
            </a>{' '}
            <a href="#projects">
              <p>projects</p>
            </a>
            <a href="/designs">
              designs
            </a>{' '}
            <a href="https://medium.com/@acarr59"
              target="_blank"
              rel="noopener noreferrer">
                <p>blog</p>
              </a>{' '}
            <a href="#contact">
              <p>contact</p>
            </a>
            <a
              href="https://drive.google.com/uc?exportexport=download&id=148nx-0y45fKz3HSHh64EmkeshYTPHAKP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>resume</p>
            </a>
          </>
        }
        open={sidebarOpen}
        onSetOpen={onSetSidebarOpen}
        styles={{
          sidebar: {
            background: 'black',
            color: 'yellowgreen',
            width: '200px',
            position: 'fixed',
            top: '50px'
          }
        }}
        pullRight={true}
      >
        <div
          onClick={(): void => onSetSidebarOpen()}
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            backgroundColor: 'black',
            position: 'fixed',
            top: '0',
            width: '100%'
          }}
        >
          <Slider active={active_} color="yellowgreen" />
        </div>
      </Sidebar>
    </div>
  )
}

export default NavBar
