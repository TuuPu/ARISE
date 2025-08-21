import React from "react";

const Guidelines = (props) => {
  return (
    <div>
      <p>All of the guidelines mentioned in this section are non-binding. </p>
      <h3>General Ethical Standards</h3>
      <p>
        The general ethical standards listed in this section were created by
        international organizations for particular contexts.{" "}
        <a href="https://standards.ieee.org/ieee/7000/6781/">IEEE 7000-2021</a>
        outlines a set of processes organizations can use to incorporate ethical
        values throughout the stages of concept exploration and development,
        <a href="https://ieeexplore.ieee.org/document/10576666?utm_source=chatgpt.com">
          IEEE 7014-2024
        </a>{" "}
        provides guidance for development of intelligent systems that attempt to
        emulate human empathy, while{" "}
        <a href="https://www.iso.org/standard/42546.html">ISO 26000:2010</a>{" "}
        discusses social responsibility practices for organizations of all
        types. Note that accessing these documents require a paid subscription
        or fee.{" "}
      </p>
      <table className="table">
        <thead>
          <tr>
            <th>General Ethical Standards</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="https://standards.ieee.org/ieee/7000/6781/">
                IEEE 7000-2021
              </a>{" "}
              IEEE Standard Model Process for Addressing Ethical Concerns during
              System Design
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://ieeexplore.ieee.org/document/10576666?utm_source=chatgpt.com">
                IEEE 7014-2024
              </a>{" "}
              IEEE Standard for Ethical Considerations in Emulated Empathy in
              Autonomous and Intelligent Systems
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.iso.org/standard/42546.html">
                ISO 26000:2010
              </a>{" "}
              Guidance on social responibility
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Ethical Guidelines for AI</h3>
      <p>
        The{" "}
        <a href="https://digital-strategy.ec.europa.eu/en/policies/expert-group-ai">
          High-Level Expert Group on AI (AI HELG)
        </a>{" "}
        is a group of experts appointed by the European Commission to provide
        advice on its AI strategy. In 2018, AI HELG produced its first
        deliverable:{" "}
        <b>
          <a href="https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai">
            Ethics Guidelines for Trustworthy AI.
          </a>
        </b>{" "}
      </p>
      <p>
        According to the Ethics Guidelines, Trustworthy AI should be lawful
        (respecting all applicable laws and regulations), ethical (respecting
        ethical principles and values), and robust (both from a technical
        perspective while taking into account its social environment). To
        achieve trustworthy AI, the guidelines outline 7 key principles: Human
        Agency and Oversight; Technical Robustness and Safety, and Privacy and
        Data Governance; Transparency; Diversity, Non-discrimination, and
        Fairness; Societal and Environmental Well-being; and Accountability.
      </p>
      <p>
        Building off of these guidelines, AI HELG also produced the{" "}
        <b>Assessment List for Trustworthy AI (ALTAI)</b> in 2020: a practical
        tool to help organizations self-assess the trustworthiness of their AI
        systems. You can read the full report on the detailed Assessment List{" "}
        <a href="https://ec.europa.eu/newsroom/dae/document.cfm?doc_id=68342">
          here
        </a>
        , or interact with the assessment list at{" "}
        <a href="https://altai.insight-centre.org">this website</a>.{" "}
      </p>
      <p>
        <b>
          <a href="https://www.uw.edu.pl/wp-content/uploads/2024/12/ethics-by-design-and-ethics-of-use-approaches-brandt-dainov-philip-brey-2021.pdf">
            Ethics by Design
          </a>
        </b>{" "}
        is a guidance report commissioned by the European Commission and builds
        off of the Ethics Guidelines produced by AI HELG. It offers guidance on
        adopting an ethically-focused approach while designing, developing, and
        deploying AI based solutions.{" "}
      </p>
      <p>
        The{" "}
        <b>
          <a href="https://oecd.ai/en/ai-principles">OECD principles</a>
        </b>{" "}
        were released in 2019 and refer to 5 value based principles aimed at AI
        actors to promote the use of AI that is innovative, trustworthy, and
        respects human rights and democratic values. These principles are
        "Inclusive growth, sustainable development and well-being", "Human
        rights and democratic values, including fairness and privacy",
        "Transparency and explainability", "Robustness, security and safety",
        and "Accountability".{" "}
      </p>
      <p>
        <b>
          <a href="https://www.iso.org/standard/77608.html">
            ISO Overview of Trustworthiness in AI (SO/IEC 24028)
          </a>
        </b>{" "}
        was published by the International Standards Organization in 2020 and
        surveys topics related to trustworthiness in AI systems such as
        approaches to establish trust in AI systems and engineering pitfalls and
        typical associated threats and risks to Ai systems.{" "}
      </p>
      <table className="table">
        <thead>
          <tr>
            <th>Ethical Guidelines for AI</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              AI HLEG Deliverables
              <ul>
                <li>
                  <a href="https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai">
                    Ethics Guidelines for Trustworthy AI
                  </a>
                </li>
                <li>
                  <a href="https://digital-strategy.ec.europa.eu/en/library/assessment-list-trustworthy-artificial-intelligence-altai-self-assessment">
                    ALTAI
                  </a>
                  Assessment List for Trustworthy Artificial Intelligence
                  (ALTAI) for self-assessment
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://oecd.ai/en/ai-principles">OECD AI Principles</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://www.iso.org/standard/77608.html">
                ISO Overview of Trustworthiness in AI
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Guidelines;
