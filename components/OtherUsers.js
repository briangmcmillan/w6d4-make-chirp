import React from 'react'
import OtherUser from './OtherUser'

class OtherUsers extends React.Component {
    constructor(props) {
        super(props)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.displayUsers = this.displayUsers.bind(this)
        this.state = {
            firstName: '--',
            lastName: '--',
            username: '--',
            users: []
        }
    }
    componentDidMount() {
        fetch('https://still-springs-37963.herokuapp.com/users')
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(this.displayUsers)
    }

    displayUsers(usersInfo) {
        this.setState ({
        firstName: usersInfo.users.firstname,
        lastName: usersInfo.users.lastname,
        username: usersInfo.users.username
        })
    }
    render() {
        const OtherUsersOne = this.state.users.map((item, i) => {
            return <OtherUser key={i} data={item} />
        })
        return <div>
            <h1>other users</h1>
            {OtherUsersOne}
        </div>
    }
}
export default OtherUsers
