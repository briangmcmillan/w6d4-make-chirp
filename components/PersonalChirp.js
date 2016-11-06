import React from 'react'

const PersonalChirp = (props) => (
    <div className="individual_chirps">
        <span className="username">@{props.data.user.username}</span>
        <div>{props.data.body}</div>
    </div>
)

export default PersonalChirp
