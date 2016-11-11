import React from 'react'

class OtherUsers extends React.Component {
    constructor(props) {
        super(props)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.follow = this.follow.bind(this)
        //Setting the empty array where all of the users will eventually be located.
        this.state = {
            users: [],
        }
    }
    //ComponentDidMount renders AFTER all the code has been ran through.
    componentDidMount() {
        // fetching all users who are followed and displaying them for whoever is logged in(We show who is being followed by the + glyphicon on our button below) (knows this by the api_token at the end of our url)
        fetch('https://still-springs-37963.herokuapp.com/followed?api_token=' + sessionStorage.getItem('api_token')) //session storage is getting the api_token for the user at the time of log in.
        .then(response => response.json())
        // .then(response => console.log(response))

        .then((following) => {
        //This goes through each(map) of the users in above users array and gives it a new property that = true. We will manipulate this later in our if/else statements and our className on the follow/unfollow button. (following can be named anything.)
            if (typeof following.users !== 'undefined') {
                following.users = following.users.map((user) => {
                    user.following = true
                    return user
                })
            }
            else {
                following.users = []
            }

            //Nested fetch needed because we are merging the followed and not_followed endpoints that our back-end gave to us.
            fetch('https://still-springs-37963.herokuapp.com/not_followed?api_token=' + sessionStorage.getItem('api_token'))//fetching all users who are not being followed and displaying them for whoever is logged in(We show who is not being followed by the - glyphicon on our button below) (knows this by the api_token at the end of our url)
            .then(response => response.json())
            // .then(response => console.log(response))

            //Here we are going to merge the 2 fetches so we can keep only 1 array. (unfollowing can be named anything.)
            .then((unfollowing) => {
                if (typeof unfollowing.users === 'undefined') {
                    unfollowing.users = []
                }

                //Here we are creating a variable(users) to equal a new array. The array will consist of the followed fetch that was returned and the not_followed fetch above.
                var users = following.users.concat(unfollowing.users)

                //Here were will set the state of the empty user array to the newly created users variable. This variable is a combo of people we follow and don't follow.
                this.setState({
                    users: users
                    // setting state for the users so the correct ones show for the matching API token (whoever's logged in)
                })
            })
        })
    }

    //Here we are taking in 2 arguments (id and userIndex). We want id so that we can add it to our URL. It is part of the back-end endpoint. /follow hooks to the id of the person we clicked to follow and saves that.
    follow(id, userIndex) {
        fetch('https://still-springs-37963.herokuapp.com/users/' + id + '/follow', {
            body: JSON.stringify({
                //Here we send the back-end the id of the person that we clicked follow on and our api_token so it can be saved to our account.
                id: id,
                api_token: sessionStorage.getItem('api_token') // have use body for push
                // bringing in the API token to show whoever's logged in followers list.
            }),
            //using a POST method to send this to the back-end.
            method: 'POST',
            //Boiler plate for a POST method.
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            var users = this.state.users // makes copy of users empty array
            // users[userIndex].following = ! users[userIndex].following // target specific users you are interacting with
            if (users[userIndex].following === true) {
                // not equal to true --> set it to true
                users[userIndex].following = false
            }
            else {
                users[userIndex].following = true
                // if it is equal to true --> set it to false (toggle)
                //Initial run through, the logged in user will not be following anyone. Therefore every other users followed/unfollowed property will equal false. If the logged in user wants to follow someone, and they click the + button, then the followed/unfollwed property will be set to true, due to the if statement now being true.
            }
            //Here we setState with the news changes to whether or not our followed/unfollowed property is true or false.
            this.setState({
                users: users
            })
        })
    }

    render() {
        // mapping through the users array created to display each user coded below.
            // seperate into new component
        var users = this.state.users.map((user, i) => {
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
