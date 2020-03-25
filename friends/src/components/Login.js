import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Login.css'
import axios from 'axios'

const Login = () => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    const { push } = useHistory();
    const handleSubmit = event => {
        event.preventDefault();
        axios.post("http://localhost:5000/api/login", user).then(response => {
            console.log(response);
            localStorage.setItem("token", JSON.stringify(response.data.payload));
            push("/friends");
        })
        .catch(error => {
            console.log(error);
        })
    }
    const handleChange = event => {
        event.preventDefault();
        setUser({
            ...user,
            [event.target.name]:event.target.value
        })
        console.log(user);
    }
    return (
        <div className="login">
            <div className="login-window">
                <h2>Friends</h2>
                <form autoComplete="off">
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={handleChange}/>
                    </div>
                    <button type="submit" onClick={handleSubmit}>Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login