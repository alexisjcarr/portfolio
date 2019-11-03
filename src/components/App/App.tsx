import React from 'react'

import NavBar from '../NavBar'
import AboutMe from '../AboutMe'
import Skills from '../Skills'
import Projects from '../Projects'
import Contact from '../Contact'

import './App.scss'

const App: React.FC = () => (
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

export default App
