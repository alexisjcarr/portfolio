import React from 'react'

import NavBar from '../NavBar'

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
        <h1>PAGE NOT FOUND</h1>
        <img src={Cat404} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
    <br />
  </div>
)

export default FourOhFour