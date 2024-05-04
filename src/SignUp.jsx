// SignUp.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'; // Import CSS file for styling

const SignUp = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <>
            <div className="signup-container">
                <div className="image">
                    <img src="public/Public/signin_img.jpeg" alt="signin_img.jpeg" />
                </div>
                <form className={`signup-form ${isSubmitted ? 'submitted' : ''}`} onSubmit={handleSubmit}>
                    <h2 className="signup-title">Sign Up</h2>
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
                <p className="signin-link">Already have an account? <Link to="/signin">Sign In</Link></p>
            </div>
        </>
    );
}

export default SignUp;
