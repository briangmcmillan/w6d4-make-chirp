import React from 'react'
import { Link } from 'react-router'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <div className="col-sm-4 col-sm-offset-4 panel signinup_panel">
                <div className="panel-heading others_header">
                    <h1>Chirp.</h1>
                </div>
                <div className="form-group">
                    <Link to="/signup"><button type="button" id="signup" className="btn logout_button btn-block">Sign Up</button>
                    </Link>
                    <Link to="/signin"><button type="button" id="signin" className="btn logout_button btn-block">Sign In</button>
                    </Link>
                </div>
            </div>
        </div>
    }
}

export default Home
