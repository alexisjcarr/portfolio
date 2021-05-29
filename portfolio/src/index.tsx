import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'

import App from './components/App'

import './index.scss'

const AppWithRouter = withRouter(App)

ReactDOM.render(
  <Router>
    <AppWithRouter />
  </Router>,
  document.getElementById('root')
)
