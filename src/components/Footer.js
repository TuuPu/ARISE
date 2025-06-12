import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  const location = useLocation();

  return (
      <footer className="footer">
        <a href="https://demoshelsinki.fi" target="_blank" rel="noopener noreferrer">Demos Helsinki</a>
        <p>ARISE project funded by EC (2024-2027)</p>
      </footer>
  
  );
};

export default Footer;
