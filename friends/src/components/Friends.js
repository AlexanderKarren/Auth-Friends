import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import Friend from './Friend'
import './Friends.css'

const Friends = () => {
    const [friends, updateFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth().get("/api/friends").then(response => {
            console.log(response.data);
            updateFriends(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])
    return (
        <div className="friends">
            {friends.map(friend => <Friend friend={friend} updateFriends={updateFriends}/>)}
        </div>
    )
}

export default Friends