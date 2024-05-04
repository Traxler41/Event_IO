// Menu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    return (
        <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/signin">SignIn</Link></li>
            <li><Link to="/signup">SignUp</Link></li>
        </ul>
    );
}

export default Menu;
