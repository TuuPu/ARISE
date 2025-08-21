import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import ToolboxPage from "./pages/ToolboxPage.jsx";
import EthicsAssessmentPage from "./pages/EthicsAssessmentPage.jsx";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        
        <div className="app-container">
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/toolbox" element={<ToolboxPage />} />
            <Route
              path="/ethics_assessment"
              element={<EthicsAssessmentPage />}
            />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
