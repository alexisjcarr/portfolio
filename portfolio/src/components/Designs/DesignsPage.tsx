import React from 'react'

import NavBar from '../NavBar'
import Designs from './Designs'
import Contact from '../Contact'

const DesignsPage: React.FC = () => (
  <div className="App">
    <NavBar />
    <br/>
    <br/>
    <Designs />
    <br />
    <br />
    <Contact />
  </div>
)

export default DesignsPage