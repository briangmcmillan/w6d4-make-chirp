import React from 'react'
import Header from '../components/Header'

class Signin extends React.Component {
    constructor(props) {
        super(props)
        this.signIn = this.signIn.bind(this)
        this.signedinHandler = this.signedinHandler.bind(this)
        this.state = {
            username: '',
            password: '',
        }
    }

    signIn() {
      var formData = new FormData()
      formData.append('username', this.state.username)
      formData.append('password', this.state.password)

      fetch('http://55661e7a.ngrok.io/login', {
        body: formData,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(this.signedinHandler)
    }

    signedinHandler(userData) {
        console.log(userData)
        // sessionStorage the api token
        // window.location.href = '' redirect to next page
    }

    render() {
        return <div>
        <Header />
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" className="form-control" required value={this.state.username} onChange={(e) => this.setState({username:e.target.value})} />
        </div>
        <div className="form-group">
            <label htmlFor="email">Password</label>
            <input type="password" id="password" name="password" className="form-control" required value={this.state.password} onChange={(e) => this.setState({password:e.target.value})} />
        </div>
        <div className="form-group">
            <button id="signup" type="button" className="btn btn-success btn-block" onClick={this.signUp}>Signup!</button>
        </div>
    </div>
    }
}

export default Signin
