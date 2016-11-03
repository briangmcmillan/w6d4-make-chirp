import React from 'react'
// import moment from 'moment'
// import { sharedState } from 'react-helpers/dist/sharedState'

const Header = (props) => {
    // var city = 'Indianapolis' // setting hard-coded city to Indianapolis
    // // var city = (sharedState() === {} ? 'Indianapolis' : sharedState().city)
    // var date = moment().format('LL') // using moment.js to format the date
    // var time = moment().format('LT') // using moment.js to format the time
    // // setting vars to easily call within the return code using JSX --> MUCH EASIER THAN DOM.

    return (
        <div>
        <div id="logoPhoto" className="text-center">
            chirp!
        </div>
            {/* <img id="logoPhoto" src="./img/chirp-logo.png" alt="chirp logo" /> */}
        </div>
    )
}

export default Header
