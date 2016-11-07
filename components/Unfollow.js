import React from 'react'
// import OtherUsers from './FollowUser'

class Unfollow extends React.Component {
    constructor(props) {
        super(props)
        this.unfollow = this.unfollow.bind(this)
        this.state = {
            chirps: [],
        }
    }

    componentDidMount() {
        // fetching the other users to display.
        fetch('https://still-springs-37963.herokuapp.com/followed?api_token=' + sessionStorage.getItem('api_token'))
        .then(response => response.json())
        // .then(response => console.log(response))
        // .then((response) => { this.setState ({firstName: response.users.firstname, lastName: response.users.lastname, username: response.users.username, users: response.users})
        .then((response) => {
            this.setState({
                users: response.users
            })
        })
        // this.fetchUsers()
        // })
    }

    unfollow(userid) {
        fetch('https://still-springs-37963.herokuapp.com/not_followed' , {
            body: JSON.stringify({
                id: userid,
                api_token: sessionStorage.getItem('api_token')
            }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
    }

    render() {
        var  followersArray = []
        var followersId = []
        var followers = this.state.chirps.map((chirp, i) => {
            if (followersId.indexOf(chirp.user.id) === -1) {
                followersId.push(chirp.user.id)
                followersArray.push(chirp.user)
            }
        })
        var displayFollowers = followersArray.map((follower, i) => {
            return <div key={i}>
            <div className="individual_users">
                <button className="btn logout_button" type="button" onClick={() => this.unfollow(follower.id)}>unfollow</button>
                {/* <span className={props.data.following?'following':''}> */}
                {follower.firstname} {follower.lastname}
                <div className="username">@{follower.username}</div>
                {/* </span> */}
            </div>



            </div>
        })
        return <div>
            <div className="panel margin_panel others_panel">
                <h1 className="panel-heading others_header">Following</h1>
                    {displayFollowers}
            </div>
        </div>
    }
}

export default Unfollow
