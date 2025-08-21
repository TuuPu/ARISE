import React from "react";

const GuidelinesPage = (props) => {
  return (
    <div>
      <p>All of the guidlines mentioned in this section are non-binding</p>
      <h3>Standards for AI and Autonomous Systems</h3>
      <p>
        The standards listed in this section provide guidance for a variety of
        ethical concerns when incorporating AI into autonomous systems and other
        technologies. Note that not every document will provide relevant
        information for every project as each standard is aimed at a particular
        technical context. Accessing these documents requires a paid
        subscription or fee.{" "}
      </p>
      <table className="table">
        <thead>
          <tr>
            <th>Standards for AI and Autonomous Systems</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="https://www.iso.org/standard/77608.html">
                ISO/IEC TR 24028:2020
              </a>{" "}
              Information technology — Artificial intelligence — Overview of
              trustworthiness in artificial intelligence
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.iso.org/standard/77607.html">
                ISO/IEC 24027:2021
              </a>{" "}
              Information technology — Artificial intelligence (AI) — Bias in AI
              systems and AI aided decision making
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.iso.org/standard/78507.html">
                ISO/IEC TR 24368:2021
              </a>{" "}
              Information technology — Artificial intelligence — Overview of
              ethical and societal concerns
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.iso.org/standard/81283.html">
                ISO/IEC AWI TR 5469
              </a>{" "}
              Artificial intelligence — Functional safety and AI systems
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.iso.org/standard/82148.html">
                ISO/IEC AWI TS 6254
              </a>{" "}
              Information technology — Artificial intelligence — Objectives and
              approaches for explainability and interpretability of ML models
              and AI systems
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://ieeexplore.ieee.org/document/9726144">
                IEEE 7001-2021
              </a>{" "}
              IEEE Standard for Transparency of Autonomous Systems
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://ieeexplore.ieee.org/document/9084219">
                IEEE 7010-2020
              </a>{" "}
              IEEE Recommended Practice for Assessing the Impact of Autonomous
              and Intelligent Systems on Human Well-Being
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Standards for Robotics Saftey and Human-Centricity</h3>
      <p>
        The standards listed in this section provide guidance for a variety of
        safety concerns when developing robotics solutions. Notable entries in
        this list include:{" "}
      </p>
      <ul>
        <li>
          <p>
            <a href="https://www.iso.org/standard/73933.html">ISO 10218-1</a>{" "}
            establishes safety requirements specific to industrial robots,
            addressing them as partly completed machinery. It provides safety
            guidelines for robots themselves, prior to integration into more
            complex systems.
          </p>
        </li>
        <li>
          <p>
            <a href="https://www.iso.org/standard/73934.html">ISO 10218-2</a>{" "}
            focuses on the integration of robots into complete systems. It
            addresses the integration, commissioning, operation, maintenance,
            and decommissioning of robots in industrial settings. Combined with
            ISO 10218-1, these two standards ensure comprehensive safety
            coverage from individual components to fully operational cells.
          </p>
        </li>
        <li>
          <p>
            <a href="https://www.iso.org/standard/62996.html">ISO/TS 15066 </a>{" "}
            is meant to supplement the guidance and requirements given in ISO
            10218-1 and ISO 10218-3, and specifies safety requirements for
            collaborative industrial robot systems.
          </p>
        </li>
        <li>
          <p>
            <a href="https://www.iso.org/standard/53820.html">ISO 13482 </a>
            specifies safety requirements and guidelines for personal care
            robots. In particular, the standard focuses on mobile servant
            robots, physical assistant robots, and person carrier robots. The
            scope of this standard is limited primarily to human care related
            hazards.
          </p>
        </li>
      </ul>
      <p>
        Note that not every document will provide relevant information for every
        project as each standard is aimed at a particular technical context.
        Accessing these documents requires a paid subscription or fee.{" "}
      </p>
      <table className="table">
        <thead>
          <tr>
            <th>Standards for Robotics Saftey and Human-Centricity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href=" https://www.iso.org/standard/41571.html">
                ISO 10218 - 1 & 2{" "}
              </a>{" "}
              Robots and robotic devices — Safety requirements for industrial
              robots Part 1: Robots & Part 2: Robot systems and integration
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.iso.org/standard/53820.html">
                ISO 13482:2014
              </a>{" "}
              Robots and robotic devices — Safety requirements for personal care
              robots
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.iso.org/standard/69488.html">
                ISO/TS 15066:2016
              </a>{" "}
              Robots and robotic devices — Collaborative robots
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.iso.org/standard/69488.html">
                ISO/TR 20218-1:2018
              </a>{" "}
              Robotics — Safety design for industrial robot systems Part 1:
              End-effectors
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.iso.org/standard/73481.html">
                ISO 13849-1:2023
              </a>{" "}
              and{" "}
              <a href="https://www.iso.org/standard/53640.html">
                ISO 13849-2:2012
              </a>{" "}
              Safety of machinery — Safety-related parts of control systems Part
              1: General principles for design & Part 2: Validation
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.iso.org/standard/51528.html">
                {" "}
                ISO 12100:2010
              </a>{" "}
              Safety of machinery — General principles for design — Risk
              assessment and risk reduction
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://webstore.iec.ch/en/publication/5515">
                IEC 61508-1:2010
              </a>{" "}
              Functional safety of electrical/electronic/programmable electronic
              safety-related systems - Part 1: General requirements (see
              Functional Safety and IEC 61508)
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.iso.org/standard/64241.html">
                ISO 27501:2019
              </a>{" "}
              the human-centred organization — Guidance for managers
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.iso.org/standard/77520.html">
                ISO 9241-210:2019
              </a>{" "}
              Ergonomics of human-system interaction Part 210: Human-centred
              design for interactive systems
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GuidelinesPage;
