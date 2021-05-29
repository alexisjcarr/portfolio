import React from 'react'

import Cartoon from '../../assets/images/cartoon.jpeg'

import '../App/App.scss'
import './Designs.scss'

const Designs: React.FC = () => (
  <div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className="designs-container">
      <div className="designs-card">
        <br />
        <h1> DESIGNS </h1>
        <br/>
        <br/>
        <br/>
        <img src={Cartoon} />
        <br/>
        <br/>
        <br/>
        <br/>
        <p>Hello world! Welcome to my corner of the internet.</p>
        <p>Soon, I will start compiling systems designs and solutions architectures that I come up with in my free time. I am currently working on the following designs. When one is in progress, I will add a <span id="icon" role="img" aria-label="hourglass">⏳</span> next to the link. When one is ready, I will add a <span id="icon" role="img" aria-label="checkmark">✅</span> next to it. STAY TUNED!</p>
        <br />
        <br />
        <a href="/PageNotFound">
          <p><span id="icon" role="img" aria-label="hourglass">⏳</span> Code Deployment System</p>
        </a>
        <a href="/PageNotFound">
          <p>Stockbroker App</p>
        </a>
        <a href="/PageNotFound">
          <p>Facebook News Feed</p>
        </a>
        <a href="/PageNotFound">
          <p>Google Drive</p>
        </a>
        <a href="/PageNotFound">
          <p>Reddit API</p>
        </a>
        <a href="/PageNotFound">
          <p>Netflix</p>
        </a>
        <a href="/PageNotFound">
          <p>Uber API</p>
        </a>
        <a href="/PageNotFound">
          <p>Slack</p>
        </a>
        <a href="/PageNotFound">
          <p>Airbnb</p>
        </a>
      </div>
    </div>
  </div>
)

export default Designs