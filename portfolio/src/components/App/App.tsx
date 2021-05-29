import React from 'react'
import { Route } from 'react-router-dom'

import MainPage from '../MainPage'
import Designs from '../Designs'
import FourOhFour from '../Designs/DesignNotFound'

import './App.scss'

const App: React.FC = () => (
  <div className='App'>
    <Route exact path='/' component={MainPage} />
    <Route path='/designs' component={Designs} />
    <Route path="/PageNotFound" component={FourOhFour} />
  </div>
)

export default App
