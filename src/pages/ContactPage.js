// src/pages/LandingPage.js
import React from "react";
import Button from "react-bootstrap/Button";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
import "./ContactPage.css";

const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container-landing">
      {/* Main Content */}
      <main className="main-content">
        <div className="contact-page">
          <div className="contact-section-1">
            <h1>Contact</h1>
            <p>
              For general questions, you are welcome to use the{" "}
              <a href="https://discord.com/invite/6fGPFKCEsg">
                ARISE Discord channel
              </a>
              . For more personalized assistance or feedback on this webtool or
              any SSH-related concern, please contact the Demos Helsinki team of
              ARISE. You can reach out to Mariela at
              mariela.urraschiaffino@demoshelsinki.fi and Tuukka at
              tuukka.puonti@demoshelsinki.fi.
            </p>
            <Button
              onClick={() =>
                window.open("https://discord.com/invite/6fGPFKCEsg")
              }
              className="primary-button"
            >
              Join the Discord
            </Button>
          </div>
          <div className="contact-section-2">
            <p>
              For more information about the ARISE project check out these
              resources:{" "}
            </p>
            <ul>
              <li>
                <p><a href="https://arise-middleware.eu/background/">Project website</a></p>
              </li>
              <li>
                <p><a href="https://www.linkedin.com/company/101602305">Linkedin</a></p>
              </li>
              <li>
                <p><a href="https://www.youtube.com/@ARISE_HRI_project">Youtube</a></p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
