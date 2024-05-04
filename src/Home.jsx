// Home.jsx
import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <h2 className="home-title">Welcome to EventIO</h2>
                <p className="home-description">
                    EventIO is your ultimate destination for finding and attending exciting events like shows, concerts, movies, and more.
                </p>
                <p className="home-description">
                    Browse our upcoming events and secure your tickets today!
                </p>
                <button className="explore-button">Explore Events around you</button>
            </div>
        </div>
    );
}

export default Home;
