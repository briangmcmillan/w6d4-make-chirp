import React from 'react'

class MainHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photo: null,
            firstName: "--",
            lastName: "--",
            username: "--",
        }
    }

    componentDidMount() {
        fetch('https://4e836632.ngrok.io/users/username')
        .then(response => response.json())
        .then(response => console.log(response))
    }

    render() {
        return <div>
            <div className="row border header">
              <div className="col-sm-1 border">
                <h1 className="logo">Chirp</h1>
              </div>
              <div className="col-sm-10 text-center border" >
                <img src="img/chirp-logo.png" alt="random photo" className="img-responsive avatar center-block border" />
              </div>
              <div className="col-sm-1 text-right border">
                <button type="button" className="btn btn-primary logo center-block">Primary</button>
              </div>
            </div>
        </div>
    }
}

export default MainHeader
