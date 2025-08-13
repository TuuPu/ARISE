import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ToolboxPage from "./pages/ToolboxPage";
import EthicsAssessmentPage from "./pages/EthicsAssessmentPage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <Router>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&family=Figtree:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/toolbox" element={<ToolboxPage />} />
          <Route path="/ethics_assessment" element={<EthicsAssessmentPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
