import React from 'react'

class MainHeader extends React.Component {
    constructor(props) {
        super(props)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.updateUser = this.updateUser.bind(this)
        this.state = {
            photo: null,
            firstName: "--",
            lastName: "--",
            username: "--",
        }
    }

    componentDidMount() {
        var user = JSON.parse(sessionStorage.getItem('user'))
        // need to JSON.parse() because JSON.stringify() on signup/in --> needs to return back into an object from the string we created.
        //console.log(user)
        //fetch('https://4e836632.ngrok.io/users/' + user.id)
        fetch('https://still-springs-37963.herokuapp.com/users/me?api_token=' + sessionStorage.getItem('api_token'))
        // adding the username of whoever signed up/logged in to the fetch URL.
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(this.updateUser)
    }

    updateUser(userData) {
        this.setState ({
            photo: userData.user.avatar,
            firstName: userData.user.firstname,
            lastName: userData.user.lastname,
            username: userData.user.username
        })
    }

    render() {
        return <div>
            <div className="row border header">
              <div className="col-sm-1 border">
                <h1 className="logo">Chirp.</h1>
              </div>
              <div className="col-sm-10 text-center border" >
                <img src={'https://still-springs-37963.herokuapp.com/' + this.state.photo} alt="avatar photo" className="img-responsive avatar center-block border" /><br />
                {this.state.firstName} {this.state.lastName}<br/>
                {this.state.username}
              </div>
              <div className="col-sm-1 text-right border">
                <button type="button" className="btn btn-primary logo center-block">Logout</button>
              </div>
            </div>
        </div>
    }
}

export default MainHeader
