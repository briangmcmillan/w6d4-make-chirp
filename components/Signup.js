import React from 'react'
// import Header from '../components/Header'
// import classAutoBind from 'react-helpers/dist/classAutoBind'

class Signup extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" className="form-control" required />
        </div>
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" className="form-control" required />
        </div>
        <div className="form-group">
            <label htmlFor="email">Password</label>
            <input type="password" id="password" name="password" className="form-control" required />
        </div>
        <div className="form-group">
            <button id="signup" type="button" className="btn btn-success btn-block">Signup!</button>
        </div>
    </div>
    }
}

export default Signup
