import React from 'react'
import { useHistory } from 'react-router-dom'
import './Header.css'

const Header = props => {
    const logOut = event => {
        event.preventDefault();
        localStorage.clear();
        props.setHeaderDisplay(false);
        push("/");
    }
    const { push } = useHistory();
    return (
        <div className="header" style={props.displayHeader ? {display:"flex"} : {display:"none"}}>
            <h1>Friends!</h1>
            <button onClick={logOut}>Sign Out</button>
        </div>
    )
}

export default Header