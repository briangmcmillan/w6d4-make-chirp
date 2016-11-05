import React from 'react'

const PersonalChirp = (props) => (
    <div className="panel">
    <span>{props.data.user.username}</span>
    <span>{props.data.body}</span>
    </div>
)

export default PersonalChirp
