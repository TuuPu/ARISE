// src/pages/LandingPage.js
import React from "react";
import Button from "react-bootstrap/Button";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <div className="page-container-landing">
      {/* Main Content */}
      <main className="main-content">
        <section className="landing-page-text">
          <h1>ARISE SSH Framework for Human-Centric and Ethical HRI</h1>
          <p>
            The ARISE SSH Framework is an open-access framework designed to
            promote human-centric and trustworthy Human-Robot Interaction (HRI).
            It provides a structured approach to addressing ethical, legal, and
            social dimensions in robotics. This is an evolving framework. By
            exploring the current version, you contribute directly to its
            ongoing development.
          </p>
          <Button onClick={() => navigate("/toolbox")} className="primary-button">Explore the toolkit</Button>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
