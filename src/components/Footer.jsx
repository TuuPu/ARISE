import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="footer">
      <div className="attribution">
        <img className="flag" alt="EU flag" src={"/Eu_flag.jpg"}></img>
        <p>Funded by the European Union</p>
      </div>
      <div>
        <a
          href="https://demoshelsinki.fi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="demoslogo"
            alt="demos helsinki logo"
            src={"/demos_logo.png"}
          ></img>
        </a>
        <p>Built by <a href="https://demoshelsinki.fi">Demos Helsinki</a></p>
      </div>
    </footer>
  );
};

export default Footer;
