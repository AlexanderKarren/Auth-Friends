import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <div className="login">
            <div className="login-window">
                <h2>Friends</h2>
                <form autoComplete="off">
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login