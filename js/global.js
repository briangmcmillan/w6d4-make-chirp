import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Home from '../components/Home'
import Signup from '../components/Signup'
import Signin from '../components/Signin'
import Main from '../components/Main'

import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

// sharedState({
//     apiToken: sessionStorage.getItem('api_token')
// })

window.path = window.location.href.includes('github') ? '/w6d4-make-chirp' : ''
// makes global var called path

window.renderView = function() { // need to call because when we get a response back, we need to recall render so it does another API call to actually show the photo on screen
    ReactDOM.render(
    <Router history ={browserHistory}>
        {/* <Route path="/" component={Home} /> */}
        <Route path={path + '/'} component={Home} />
        <Route path={path + '/signup'} component={Signup} />
        <Route path={path +  '/signin'} component={Signin} />
        <Route path={path + '/main'} component={Main} />
    </Router> ,
    document.querySelector('#app')
    )
}

renderView()
