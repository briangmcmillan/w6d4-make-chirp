import React from 'react'

class OtherUsers extends React.Component {
    constructor(props) {
        super(props)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.follow = this.follow.bind(this)
        this.state = {
            users: [],
        }
    }
    componentDidMount() {
        // fetching the other users to display.
        fetch('https://still-springs-37963.herokuapp.com/not_followed?api_token=' + sessionStorage.getItem('api_token'))
        .then(response => response.json())
        // .then(response => console.log(response))
        .then((response) => {
            this.setState({
                users: response.users
                // setting state for the users so the correct ones show for the matching API token (whoever's logged in)
            })
        })
    }

    follow(id) {
        fetch('https://still-springs-37963.herokuapp.com/followed', {
            body: JSON.stringify({
                id: id,
                api_token: sessionStorage.getItem('api_token') // have use body for push
                // bringing in the API token to show whoever's logged in followers list.
            }),
            method: 'POST',
        })
        .then(response => response.json())
    }

    render() {

        var users = this.state.users.map((user, i) => { // mapping through the users array created to display each user coded below.
            // seperate into new component
            return <div key={i}>
                <div className="row individual_users">
                    {user.firstname} {user.lastname}<br />
                    <span className="username">@{user.username}</span>
                    <button className="btn follow_button" type="button" onClick={() => this.follow(user.id)}><span className="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
                </div>

            </div>
        })
        return <div>
            <div className="panel others_panel">
                <h1 className="panel-heading others_header">Other users</h1>
            <div className="others_body">
                {users}
            </div>
            </div>
        </div>
    } // calling users variable above
}
export default OtherUsers
