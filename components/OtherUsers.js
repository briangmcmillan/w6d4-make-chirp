import React from 'react'
import OtherUser from './OtherUser'

class OtherUsers extends React.Component {
    constructor(props) {
        super(props)
        this.componentDidMount = this.componentDidMount.bind(this)
        // this.displayUsers = this.displayUsers.bind(this)
        // this.fetchUsers = this.fetchUsers.bind(this)
        this.state = {
            firstName: '--',
            lastName: '--',
            username: '--',
            users: []
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
        const OtherUsersOne = this.state.users.map((item, i) => {
            return <OtherUser key={i} data={item} />
        })
        return <div>

            <h1>other users</h1>
            <div className="panel">
            {OtherUsersOne}
            </div>
        </div>
    }
}
export default OtherUsers
