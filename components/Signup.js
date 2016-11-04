import React from 'react'
import Header from './Header'
// import classAutoBind from 'react-helpers/dist/classAutoBind'

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.signUp = this.signUp.bind(this)
        this.signedupHandler = this.signedupHandler.bind(this)
        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            photo: null,
        }
    }

    signUp() {
      var formData = new FormData()
      formData.append('firstname', this.state.firstName)
      formData.append('lastname', this.state.lastName)
      formData.append('username', this.state.username)
      formData.append('password', this.state.password)
      formData.append('avatar', this.state.photo)
      console.log(formData)
      fetch('https://still-springs-37963.herokuapp.com/signup', {
        body: formData,
        method: 'POST'
      })
      .then(response => response.json())
    //   .then(response => console.log(response))
      .then(this.signedupHandler)
    }

    signedupHandler(response) {
        console.log(response)
        // sessionStorage the api token
        sessionStorage.setItem('api_token', response.user.api_token)
        sessionStorage.setItem('user', JSON.stringify(response.user))
        // window.location.href = '' redirect to next page
        window.location.href = '/Main'
    }

    render() {
        return <div>
            <div className="col-sm-6 col-sm-offset-3">
            <Header />
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" className="form-control" required value={this.state.firstname} onChange={(e) => this.setState({firstName:e.target.value})} />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" className="form-control" value={this.state.lastname} onChange={(e) => this.setState({lastName:e.target.value})} />
            </div>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" className="form-control" required value={this.state.username} onChange={(e) => this.setState({username:e.target.value})} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Password</label>
                <input type="password" id="password" name="password" className="form-control" required value={this.state.password} onChange={(e) => this.setState({password:e.target.value})} />
            </div>
            <div className="form-group">
            <label htmlFor="photo">Photo</label>
            <input onChange={(e) => this.setState({photo: e.target.files[0]})} type="file" id="photo" name="photo" className="form-control" required />
          </div>
            <div className="form-group">
                <button id="signup" type="button" className="btn btn-success btn-block" onClick={this.signUp}>Signup!</button>
            </div>
        </div>
    </div>
    }
}

export default Signup
