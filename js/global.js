import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import Home from '../components/Home'
import Signup from '../components/Signup'


window.renderView = function() { // need to call because when we get a response back, we need to recall render so it does another API call to actually show the photo on screen
    ReactDOM.render(
    <Router history ={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        {/* <Route path="/signin" component={Signin} /> */}
    </Router> ,
    document.querySelector('#app')
    )
}

renderView()
