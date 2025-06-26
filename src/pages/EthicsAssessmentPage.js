// src/pages/LandingPage.js
import React from 'react';
// import './EthicsAssessment.css';
import { useNavigate } from 'react-router-dom';

const EthicsAssessmentPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">

      {/* Main Content */}
      <main className="main-content">
        <section className="text-section">
          <h1>This is the ethics assessment page</h1>
       
        </section>

        <section className="explore-section" onClick={() => navigate('/toolbox')}>
          <h2>Explore the Tool</h2>
          <div className="explore-logo">LOGO</div>
        </section>
      </main>
    </div>
  );
};

export default EthicsAssessmentPage;
