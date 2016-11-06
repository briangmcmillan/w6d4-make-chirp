import React from 'react'
import OtherUser from './OtherUser'

class OtherUsers extends React.Component {
    constructor(props) {
        super(props)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.follow = this.follow.bind(this)
        this.addUser = this.addUser.bind(this)
        // this.displayUsers = this.displayUsers.bind(this)
        // this.fetchUsers = this.fetchUsers.bind(this)
        this.state = {
            firstName: '--',
            lastName: '--',
            username: '--',
            users: [],
            following: false,
            followingList: []
        }
    }
    componentDidMount() {
        // var user = JSON.parse(sessionStorage.getItem('users'))
        fetch('https://still-springs-37963.herokuapp.com/users')
        .then(response => response.json())
        // .then(response => console.log(response))
        .then((response) => { this.setState ({firstName: response.users.firstname, lastName: response.users.lastname, username: response.users.username, users: response.users})
        // this.fetchUsers()
        })
    }

    follow() {
        var formData = new FormData()
        formData.append('id', sessionStorage.getItem('id'))
        // formData.append('tweets', this.state.chirps)

        // sessionStorage.setItem('user', JSON.stringify(response.user))
        fetch('https://still-springs-37963.herokuapp.com/users/' + sessionStorage.getItem('id') + '/follow' , {
            body: formData,
            method: 'POST',
        })
        .then(response => response.json())
        .then(this.addUser)
    }

    addUser(e) {
        this.setState({
            following: true
        })
        if (this.following === true) {
            let updatedUsers = this.state.followingList
            updatedUsers.push({
                followingList: e.target.value
            })
        }
    }







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
        console.log(this.state.users)
        console.log(this.state.following)
        console.log(this.state)
        const OtherUsersOne = this.state.users.map((item, i) => {
            return <OtherUser key={i} data={item} addUser={() => this.addUser(i)} />
        })
        return <div>
            <div className="panel others_panel">
                <h1 className="panel-heading others_header">Other users.</h1>
            <div className="others_body">
                {OtherUsersOne}
            </div>
            </div>
        </div>
    }
}
export default OtherUsers
