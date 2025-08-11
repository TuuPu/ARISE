import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="global-header">

      <img className="logo" src="ARISE_logo.png" alt="Arise Logo"></img>
  
      <nav className="global-nav">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
        <Link to="/toolbox" className={location.pathname === "/toolbox" ? "active" : ""}>SSH Toolbox</Link>
        <Link to="/ethics_assessment" className={location.pathname === "/ethics_assessment" ? "active" : ""}>Ethical Impact Assessment</Link>
        <a href="https://arise-middleware.eu" target="_blank" rel="noopener noreferrer">Project Website</a>
        <a href="mailto:contact@example.com" className="contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
