import React from 'react'
import Header from './Header'

class Signin extends React.Component {
    constructor(props) {
        super(props)
        this.signIn = this.signIn.bind(this)
        this.signedinHandler = this.signedinHandler.bind(this)
        this.state = {
            username: "",
            password: "",
        }
    }

    signIn() {
      var formData = new FormData()
      formData.append('username', this.state.username)
      formData.append('password', this.state.password)

      fetch('https://4e836632.ngrok.io/login', {
        body: formData,
        method: 'POST',
      })
      .then(response => response.json())
      .then(this.signedinHandler)
    }

    signedinHandler(response) {
        console.log(response)
        // sessionStorage the api token
        sessionStorage.setItem('api_token', response.user.api_token)
        // window.location.href = '' redirect to next page
        window.location.href = '/Main'
    }

    render() {
        return <div>
            <div className="col-sm-6 col-sm-offset-3">
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
                <button id="signin" type="button" className="btn btn-success btn-block" onClick={this.signIn}>Signin!</button>
            </div>
        </div>
    </div>
    }
}

export default Signin
