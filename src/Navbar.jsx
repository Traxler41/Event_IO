// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">EventIO</Link>
            </div>
            <Menu />
        </nav>
    );
}

export default Navbar;
