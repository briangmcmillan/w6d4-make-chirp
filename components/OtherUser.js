import React from 'react'


const OtherUser = (props) => (
    <div className="panel">
    <input type="button" onClick={props.addUser} />
        {props.data.firstname}
        {props.data.lastname}
        {props.data.username}

    </div>
)



export default OtherUser
