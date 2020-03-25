import React, { useState } from 'react'
import { ReactSVG } from 'react-svg'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import './Friend.css'

const Friend = props => {
    const [failure, setFailure] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [friend, updateFriend] = useState({
        name: props.friend.name,
        age: props.friend.age,
        email: props.friend.email
    })
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
    const toggleEditMode = event => {
        event.preventDefault();
        setEditMode(!editMode);
    }
    const handleChange = event => {
        event.preventDefault();
        updateFriend({
            ...friend,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth().put(`/api/friends/${props.friend.id}`, friend).then(response => {
            console.log(response);
            props.updateFriends(response.data);
            setEditMode(false);
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className="friend">
            <div className="buttons">
                <div className={failure ? "clear-failed" : "clear"} onClick={defriend}><ReactSVG src="clear.svg" /></div>
                <div className={failure ? "clear-failed" : "clear"} onClick={toggleEditMode}><ReactSVG src="edit.svg" /></div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="info">
                        {editMode ?  <input type="text" name="name" id="name" value={friend.name} onChange={handleChange}/> :<h4>{props.friend.name}</h4>}
                        {editMode ?  <input type="text" name="age" id="age" value={friend.age} onChange={handleChange}/> : <p>{props.friend.age}</p>}
                        {editMode ?  <input type="text" name="email" id="email" value={friend.email} onChange={handleChange}/> : <p>{props.friend.email}</p>}
                        <button style={editMode ? {display:"flex"} : {display:"none"}} type="submit">Update</button>
                </div>
            </form>
        </div>
    )
}

export default Friend
