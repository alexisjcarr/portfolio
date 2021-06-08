import React from 'react'

import Cartoon from '../../assets/images/cartoon.jpeg'
import Lol from '../../assets/images/lol.jpeg'

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
        <img src={Lol} />
        <br/>
        <br/>
        <br/>
        <p>Hello world! Welcome to my corner of the internet.</p>
        <p>I'm using this page to compile systems designs and solutions architectures that I come up with in my free time. I am currently working on the following designs. When one is in progress, I will add a <span id="icon" role="img" aria-label="hourglass">⏳</span> next to the link. When one is ready, I will add a <span id="icon" role="img" aria-label="checkmark">✅</span> next to it. STAY TUNED!</p>
        <br />
        <br />
        <a href="/designs/chat-app">
          <p><span id="icon" role="img" aria-label="hourglass">✅</span> Chat App</p>
        </a>
        <a href="/designs/code-deployment-system">
          <p><span id="icon" role="img" aria-label="hourglass">⏳</span> Code Deployment System</p>
        </a>
        <a href="/designs/stockbroker-app">
          <p>Stockbroker App</p>
        </a>
        <a href="/designs/fb-newsfeed">
          <p>Facebook News Feed</p>
        </a>
        <a href="/designs/google-drive">
          <p>Google Drive</p>
        </a>
        <a href="/designs/reddit-api">
          <p>Reddit API</p>
        </a>
        <a href="/designs/netflix">
          <p>Netflix</p>
        </a>
        <a href="/designs/uber-api">
          <p>Uber API</p>
        </a>
        <a href="/designs/slack">
          <p>Slack</p>
        </a>
        <a href="/designs/airbnb">
          <p>Airbnb</p>
        </a>
      </div>
    </div>
  </div>
)

export default Designs