import React from 'react'


const OtherUser = (props) => (
    <div className="individual_users">
        <input className="btn logout_button" type="button" onClick={() => this.follow(props.data.id)} value="Follow"/>
        {/* <span className={props.data.following?'following':''}> */}
        {props.data.firstname} {props.data.lastname}
        <div className="username">@{props.data.username}</div>
        {/* </span> */}
    </div>
)

export default OtherUser
