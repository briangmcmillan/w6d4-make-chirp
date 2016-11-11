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

        fetch('https://still-springs-37963.herokuapp.com/followed?api_token=' + sessionStorage.getItem('api_token'))
        .then(response => response.json())
        // .then(response => console.log(response))
        .then((following) => {
            following.users = following.users.map((user) => {
                user.following = true
                return user
            })

            fetch('https://still-springs-37963.herokuapp.com/not_followed?api_token=' + sessionStorage.getItem('api_token'))
            .then(response => response.json())
            // .then(response => console.log(response))
            .then((unfollowing) => {
                var users = following.users.concat(unfollowing.users)
                users.sort()
                this.setState({
                    users: users
                    // setting state for the users so the correct ones show for the matching API token (whoever's logged in)
                })
            })
        })
    }

    follow(id, userIndex) {
        fetch('https://still-springs-37963.herokuapp.com/users/' + id + '/follow', {
            body: JSON.stringify({
                id: id,
                api_token: sessionStorage.getItem('api_token') // have use body for push
                // bringing in the API token to show whoever's logged in followers list.
            }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            var users = this.state.users // makes copy of users
            // users[userIndex].following = ! users[userIndex].following // target specific users you are interacting with
            if (users[userIndex].following !== true) {
                // not equal to true --> set it to true
                users[userIndex].following = true
            }
            else {
                users[userIndex].following = false
                // if it is equal to true --> set it to false (toggle)
            }
            this.setState({
                users: users
            })
        })

    }

    render() {

        var users = this.state.users.map((user, i) => { // mapping through the users array created to display each user coded below.
            // seperate into new component
            return <div key={i}>
                <div className="row individual_users">
                    {user.firstname} {user.lastname}<br />
                    <span className="username">@{user.username}</span>
                    <button className="btn follow_button unfollow_button" type="button" onClick={() => this.follow(user.id, i)}><span className={user.following?"glyphicon glyphicon-minus":"glyphicon glyphicon-plus"} aria-hidden="true"></span></button>
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
