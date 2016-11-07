import React from 'react'
// import OtherUser from './OtherUser'

class OtherUsers extends React.Component {
    constructor(props) {
        super(props)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.follow = this.follow.bind(this)
        // this.addUser = this.addUser.bind(this)
        // this.displayUsers = this.displayUsers.bind(this)
        // this.fetchUsers = this.fetchUsers.bind(this)
        this.state = {
            // firstName: '--',
            // lastName: '--',
            // username: '--',
            users: [],
            // following: false,
            // followingList: []
        }
    }
    componentDidMount() {
        // fetching the other users to display.
        fetch('https://still-springs-37963.herokuapp.com/not_followed?api_token=' + sessionStorage.getItem('api_token'))
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

    follow(userid) {
        // var formData = new FormData()
        // formData.append('id', sessionStorage.getItem('id'))
        // formData.append('tweets', this.state.chirps)

        // sessionStorage.setItem('user', JSON.stringify(response.user))
        fetch('https://still-springs-37963.herokuapp.com/followed', {
            body: JSON.stringify({
                id: userid,
                api_token: sessionStorage.getItem('api_token')
                // bringing in the API token to show whoever's logged in followers list.
            }),
            method: 'POST',
        })
        .then(response => response.json())
        // .then(this.addUser)
    }

    // addUser(e) {
    //     this.setState({
    //         following: true
    //     })
    //     if (this.following === true) {
    //         let updatedUsers = this.state.followingList
    //         updatedUsers.push({
    //             followingList: e.target.value
    //         })
    //     }
    // }

    // fetchUsers() {
    //     fetch('https://still-springs-37963.herokuapp.com/users')
    //     // adding the username of whoever signed up/logged in to the fetch URL.
    //     .then(response => response.json())
    //     // .then(response => console.log(response))
    //     .then(response => this.setState({users: response.users}))
    // }

    // displayUsers(usersInfo) {
    //     this.setState ({
    //     firstName: usersInfo.users.firstname,
    //     lastName: usersInfo.users.lastname,
    //     username: usersInfo.users.username,
    //     })
    // }
    render() {
        // console.log(this.state.users)
        console.log()
        console.log(this.state)
        // const OtherUsersOne = this.state.users.map((item, i) => {
        //     return <OtherUser key={i} data={item} />
            // return <div>
            //     {Users}
            // </div>

        var users = this.state.users.map((user, i) => {
            return <div key={i}>
            <div className="individual_users">
                <button className="btn logout_button" type="button" onClick={() => this.follow(user.id)}>follow</button>
                {/* <span className={props.data.following?'following':''}> */}
                {user.firstname} {user.lastname}
                <div className="username">@{user.username}</div>
                {/* </span> */}
            </div>
            </div>
        })
        // })
        return <div>
            <div className="panel others_panel">
                <h1 className="panel-heading others_header">Other users</h1>
            <div className="others_body">
                {users}
            </div>
            </div>
        </div>
    }
}
export default OtherUsers
