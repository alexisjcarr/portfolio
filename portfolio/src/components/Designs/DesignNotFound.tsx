import React from 'react'

import NavBar from '../NavBar'
import Contact from '../Contact'

import Cat404 from '../../assets/images/FourOhFour.jpeg'

const FourOhFour: React.FC = () => (
  <div>
    <NavBar />
    <br />
    <br />
    <br />
    <br />
    <div className="designs-container">
      <div className="designs-card">
        <br/>
        <br/>
        <h1>DESIGN NOT COMPLETED YET</h1>
        <img src={Cat404} />
        <br />
        <br />
      </div>
    </div>
    <br />
  </div>
)

export default FourOhFour