import React from 'react'

const PersonalChirp = (props) => (
    <div className="individual_chirps">
    <div className="username">{props.data.user.username}</div>
    <span>{props.data.body}</span>
    </div>
)

export default PersonalChirp
