import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ToolboxPage from "./pages/ToolboxPage";
import EthicsAssessmentPage from "./pages/EthicsAssessmentPage";
import Header from "./components/Header";
import Footer from "./components/Footer"; 
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/toolbox" element={<ToolboxPage />} />
          <Route path="/ethics_assessment" element={<EthicsAssessmentPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
