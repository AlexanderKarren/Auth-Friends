import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import './AddFriend.css'

const AddFriend = props => {
    const [friend, updateFriend] = useState({
        name: "",
        age: "",
        email: ""
    })
    const handleChange = event => {
        updateFriend({
            ...friend,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth().post("/api/friends", friend).then(response => {
            console.log(response);
            props.updateFriends(response.data);
            updateFriend({
                name: "",
                age: "",
                email: ""
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className="addFriend">
            <div className="addFriend-form">
                <h3>Add a Friend</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={friend.name} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="age">Age</label>
                        <input type="text" name="age" id="age" value={friend.age} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" value={friend.email} onChange={handleChange}/>
                    </div>
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    )
}

export default AddFriend
