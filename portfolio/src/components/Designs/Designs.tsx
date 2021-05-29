import React from 'react'

import NavBar from '../NavBar'

import '../App/App.scss'
import './Designs.scss'

const Designs: React.FC = () => (
  <div>
    <NavBar />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className="designs-container">
      <div className="designs-card">
        <h1> DESIGNS </h1>
        <p>Hello world! Welcome to my corner of the internet.</p>
        <p>Soon, I will start compiling systems designs and solutions architectures that I come up with in my free time. I am currently working on the following designs. When one is in progress, I will add a <span id="icon" role="img" aria-label="hourglass">⏳</span> next to the link. When one is ready, I will add a <span id="icon" role="img" aria-label="checkmark">✅</span> next to it. STAY TUNED!</p>
        <br />
        <a href="#">
          <p><span id="icon" role="img" aria-label="hourglass">⏳</span> Code Deployment System</p>
        </a>
        <a href="#">
          <p>Stockbroker App</p>
        </a>
        <a href="#">
          <p>Facebook News Feed</p>
        </a>
        <a href="#">
          <p>Google Drive</p>
        </a>
        <a href="#">
          <p>Reddit API</p>
        </a>
        <a href="#">
          <p>Netflix</p>
        </a>
        <a href="#">
          <p>Uber API</p>
        </a>
        <a href="#">
          <p>Slack</p>
        </a>
        <a href="#">
          <p>Airbnb</p>
        </a>
      </div>
    </div>
  </div>
)

export default Designs