import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Page2 from './modules/page2'
import Home from './modules/Home'
import { Router, Route,IndexRoute,browserHistory } from 'react-router'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    {/* add the routes here */}

    <IndexRoute component={Home}/>
    <Route path="/repos" component ={Repos}>
    <Route path="/repos/:name/:age" component={Repo}/>
    </Route>
    <Route path="/page2" component={Page2}/>
    </Route>
  </Router>
), document.getElementById('app'))