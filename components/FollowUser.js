import React from 'react'

class FollowUser extends React.Component {
    constructor(props) {
        super(props)
        this.addUser = this.addUser.bind(this)
        this.updatedUsers = this.updatedUsers.bind(this)
        this.state = {
            following: []
        }
    }

    addUser(i) {
        let updatedUsers = this.state.following

        updatedUsers[i].done = !updatedUsers[i].done

        this.updatedUsers(updatedUsers)
    }
    updatedUsers(updatedUsers) {
        this.setState({
            following: updatedUsers
        })
    }

    render() {
        var following = this.state.following.map((input, i) => {
            return <Following data={input} key={i} addUser={() => this.addUser(i)} />
        })

        return <div>
            <button className="btn btn-default" onClick={this.state.following} />


        </div>
    }
}

export default FollowUser
