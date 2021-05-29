import React from 'react'
import { Route } from 'react-router-dom'

import NavBar from '../NavBar'
import AboutMe from '../AboutMe'
import Skills from '../Skills'
import Projects from '../Projects'
import Contact from '../Contact'
import Designs from "../Designs/Designs"

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

    <Route path="/designs" component={Designs} />
  </div>
)

export default MainPage