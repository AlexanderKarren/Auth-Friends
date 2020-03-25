import React, { useState } from 'react'
import { ReactSVG } from 'react-svg'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import './Friend.css'

const Friend = props => {
    const [failure, setFailure] = useState(false);
    const defriend = event => {
        event.preventDefault();
        axiosWithAuth().delete(`/api/friends/${props.friend.id}`).then(response => {
            console.log(response)
            props.updateFriends(response.data);
        })
        .catch(error => {
            console.log(error);
            setFailure(true);
            setTimeout(() => {
                setFailure(false);         
            }, 1000)
        })
    }
    return (
        <div className="friend">
            <div className={failure ? "clear-failed" : "clear"} onClick={defriend}><ReactSVG src="clear.svg" /></div>
            <div className="info">
                <h3>{props.friend.name}</h3>
                <p>{props.friend.age}</p>
                <p>{props.friend.email}</p>
            </div>
        </div>
    )
}

export default Friend
