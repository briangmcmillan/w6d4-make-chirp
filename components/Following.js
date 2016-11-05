import React from 'react'
import FollowUser from './FollowUser'

class Following extends React.Component {
    constructor(props) {
        super(props)
        // this.updateFollowers = this.updateFollowers.bind(this)
        this.displayFollowers = this.displayFollowers.bind(this)
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            following: []
        }
    }

    // updateFollowers() {
    //     var formData = FormData()
    //     formData.append('following', this.state.following)
    //     formData.append('id', sessionStorage.getItem('id'))
    //
    //     fetch('https://still-springs-37963.herokuapp.com/users/id/follow', {
    //         body: formData,
    //         method: 'POST'
    //     })
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    // }

    displayFollowers() {
        fetch('https://still-springs-37963.herokuapp.com/users/')
        .then(response => response.json())
        .then(response => console.log(response))
    }



    render() {
        return <div>
            <h1>following</h1>
            <div className="panel">

            </div>
        </div>
    }
}

export default Following
