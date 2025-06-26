import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="global-header">
      <div className="logo">ARISE LOGO</div>
      <nav className="global-nav">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
        <Link to="/toolbox" className={location.pathname === "/toolbox" ? "active" : ""}>SSH Toolbox</Link>
        <Link to="/ethics_assessment" className={location.pathname === "/ethicsassessment" ? "active" : ""}>Ethics Assessment</Link>
        <a href="https://arise-middleware.eu" target="_blank" rel="noopener noreferrer">Project Website</a>
        <a href="mailto:contact@example.com" className="contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
