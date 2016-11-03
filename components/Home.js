import React from 'react'
import { Link } from 'react-router'

import Header from '../components/Header'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }


    // componentDidMount() { // this method runs right after the first render() runs.
    //     // built-in function that deals with the React cycle --> often seen with fetches and setTimeouts/Intervals.
    //     // if we don't have this --> it won't run.
    //     fetch('http://api.openweathermap.org/data/2.5/weather?q=Indianapolis&APPID=315f04ca07ca6e74abbf91a21acbcd1f')
    //     // grabbing the URL from the website and applying my own key at the end.
    //     .then(response => response.json()) // fetch() boiler plate.
    //     .then((data) => { // arrow function for the callback --> 'data 'can be named anything.
    //         this.setState ({ // setting the new state values for temp & cond for when the fetch completes and grabs API data.
    //             temp: Math.round(data.main.temp * (9/5) - 459.67), // converting from kelvin to fahrenheit, plus rounding.
    //             cond: data.weather[0].description
    //             // grabbing objects from API array from within console.
    //         })
    //     })
    //     }
    // better practice to break up each method --> opposed to the anonymous function used above.
    // componentDidMount() {
    //     fetch('http://api.openweathermap.org/data/2.5/weather?q=Indianapolis&APPID=315f04ca07ca6e74abbf91a21acbcd1f')
    //     .then(response => response.json())
    //     .then(this.updateCurrent)
    // }
    // updateCurrent(weatherData) {
    //     this.setState ({
    //         temp: Math.round(weatherData.main.temp * (9/5) - 459.67), // converting from kelvin to fahrenheit, plus rounding.
    //         cond: weatherData.weather[0].description
    //     })
    // }


    render() {
        return (
            <div>
                <Header />
                <Link to="/signup"><button type="button" id="signup" className="btn btn-default btn-block">Sign Up</button></Link>

                <Link to="/signin"><button type="button" id="signin" className="btn btn-default btn-block">Sign In</button></Link>
            </div>
        )
    }
}
// {this.state.temp} & {this.state.cond} --> grabs from set.state object.
// <Header /> & <Nav /> --> pulling from Header and Nav JS components --> basically templates in order to keep code DRY.

export default Home
