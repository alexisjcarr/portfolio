import React from 'react'

import NavBar from '../NavBar'
import AboutMe from '../AboutMe'
import Skills from '../Skills'
import Projects from '../Projects'
import Contact from '../Contact'

import '../App/App.scss'

const MainPage: React.FC = () => (
  <div className="App">
    <NavBar />
    <AboutMe />
    <br />
    <br />
    <Skills />
    <br />
    <br />
    <Projects />
    <br />
    <br />
    <Contact />
  </div>
)

export default MainPage