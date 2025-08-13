import React from "react";

const LegislationPage = (props) => {
  return (
    <div>
      <h3>Binding EU Legilsation</h3>
      <p>
        The <b>General Data Protection Regulation (GDPR) (EU 2016/679)</b> is a
        comprehensive piece of legislation that outlines security and privacy
        requirements for any organization that targets or collects data related
        to people in the EU. The GDPR outlines 7 data protection principles
        including Data Minimization, Accuracy, and Accountability. In order to
        demonstrate compliance with the GDPR, you can:{" "}
      </p>
      <ul>
        <li>
          <p>Designate data protection responsibilities to your team</p>
        </li>
        <li>
          <p>
            Maintain detailed documentation of the data you're collecting, how
            it's used, where it's stored, and which employee is responsible for
            it
          </p>
        </li>
        <li>
          <p>
            Train your staff and implement technical organizational security
            measures{" "}
          </p>
        </li>
      </ul>
      <p>
        The GDPR also includes articles that outline how to handle data
        securely, how you're allowed to process data, what constitutes consent
        from a data subject, and the privacy rights of individuals.{" "}
      </p>
      <p>
        The <b>AI Act</b> defines 4 levels of risk for AI systems: unacceptable
        risk, high risk, limited risk, and minimal or no risk. Under this act,
        once the AI system is on the market, deployers ensure human oversight
        and monitoring while providers are responsible for having a post-market
        monitoring system in place. Both providers and deployers are responsible
        for reporting serious incidents and malfunctioning. The AI Act entered
        force on August 1, 2024, and will be fully applicable on August 2, 2026.
      </p>
      <p>
        The <b>Machinery Directive</b> was updated in 2023 and defines mandatory
        essential health and safety requirements that machinery products need to
        fulfill to be placed on the European market.{" "}
      </p>

      <table className="table">
        <thead>
          <tr>
            <th>Binding EU Legislation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              General Data Protection Regulation{" "}
              <a href="https://gdpr-info.eu/">GDPR</a>
              <ul>
                <li>
                  <a href="https://gdpr.eu/tag/gdpr/">
                    GDPR checklist for data controllers
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://artificialintelligenceact.eu/">EU AI Act</a>
              <ul>
                <li>
                  <a href="https://www.europarl.europa.eu/RegData/etudes/BRIE/2023/739342/EPRS_BRI(2023)739342_EN.pdf">
                    AI Libaility Directive
                  </a>
                  &nbsp; (proposed but not enacted)
                </li>
                <li>
                  <a href="https://digital-strategy.ec.europa.eu/en/policies/ai-code-practice">
                    General Purpose All Code of Practice
                  </a>
                  &nbsp; (first draft published in November 2024)
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://osha.europa.eu/en/legislation/directive/regulation-20231230eu-machinery">
                Machinery Directive
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Non-Binding EU Legilsation</h3>
      <p>
        EU-OSHA Guidelines were published in 2017 and provide non-binding
        practical guidelines for topics such as exposure to physical hazards,
        exposure to biological agents, and personal protective equipment.{" "}
      </p>
      <table className="table">
        <thead>
          <tr>
            <th>Non-Binding EU Legislation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="https://osha.europa.eu/en/safety-and-health-legislation/european-guidelines">
                EU-OSHA Guidelines
              </a>{" "}
              European Agency for Saftey and Health at Work Guidelines
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LegislationPage;
