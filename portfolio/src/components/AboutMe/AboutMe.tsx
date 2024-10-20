import * as React from 'react'

import './AboutMe.scss'
import me from '../../assets/images/me.jpg'

const AboutMe: React.SFC = () => {
  return (
    <div className="container" id="aboutme">
      <div className="card">
        <h1>about me</h1>
        <hr />
        <img src={me} alt="profile pic" className="profile-pic" />
        <br />
        <br />
        <h1>{`<alexis j. carr/>`}</h1>
        <br />
        <h3>
          software engineer @ github | clarinetist | writer
        </h3>
        <br />
        <h3>a perpetual work in progress. i really like turtles.</h3>
        <br />
        <h4>
          University of Houston '16 》Texas A&M University '19
        </h4>
      </div>
    </div>
  )
}

export default AboutMe
