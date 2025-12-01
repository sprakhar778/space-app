import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div className="about-page">
            <h1>About Us</h1>
            <p>This is the About page of our application.</p>
            <h2>Our Mission</h2>
            <p>We aim to provide the best services to our customers.</p>
            <h2>Our Team</h2>
            <p>Meet our dedicated team of professionals.</p>
            <Link to="/contact">Contact Us</Link>
        </div>
    );
};

export default AboutPage;
