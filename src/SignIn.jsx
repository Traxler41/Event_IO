// SignUp.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css'; // Import CSS file for styling

const SignIn = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div className="signup-container">
            <form className={`signup-form ${isSubmitted ? 'submitted' : ''}`} onSubmit={handleSubmit}>
                <h2 className="signup-title">Sign In</h2>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit" className="signup-button">Sign Up</button>
            </form>
            <p className="signin-link">Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    );
}

export default SignIn;