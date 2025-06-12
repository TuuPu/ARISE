// src/pages/LandingPage.js
import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">

      {/* Main Content */}
      <main className="main-content">
        <section className="text-section">
          <h1>ARISE SSH Framework for Human-Centric and Ethical HRI</h1>
          <h2>About the ARISE Framework</h2>
          <p>
            The ARISE SSH Framework is an open-access toolbox designed to promote human-centric and trustworthy Human-Robot Interaction (HRI).
            It provides a structured approach to addressing ethical, legal, and social considerations in robotics.
            The framework is being developed iteratively—explore the current version and help shape its future.
          </p>
        </section>

        <section className="explore-section" onClick={() => navigate('/toolbox')}>
          <h2>Explore the Tool</h2>
          <div className="explore-logo">LOGO</div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
