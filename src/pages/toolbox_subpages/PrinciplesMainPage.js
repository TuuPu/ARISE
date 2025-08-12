import React from "react";
import Cards from "../../components/Cards";
import principles_cards from "../../data/tb_cards/principles_cards";
import { useNavigate } from "react-router-dom";

const PrinciplesMainPage = (props) => {
  // const navigate = useNavigate()

  return (
    <div>
      <p>
        Ethical principles are widely recognized as important tools to guide
        responsible technological development. Their aim is to guide the ethical
        requirements in order to address concerns and align to societal values.
        The ARISE project has defined eight principles to support their internal
        developments and those of the beneficiary projects from its open call
        mentoring program.
      </p>
      <h3>Background</h3>
      <p>
        Ethical principles in the context of AI have been developed, adapted,
        and widely adopted across various initiatives. At the time of releasing
        this web tool, the AI industry within the EU and related fields,
        including robotics, commonly base their ethical frameworks on the work
        of the High-Level Expert Group on AI (AI HLEG). One such framework is
        the Ethics by Design framework which derived 6 ethical principles for AI
        systems: Respect for Human Agency, Privacy and Data Governance,
        Fairness, Individual, Social and Environmental Well-being, Transparency,
        and Accountability and Oversight. These principles serve as the basis
        for guidelines that can be implemented during various stages of the
        technology development process in order to ensure that resulting AI
        systems protect fundamental rights.
      </p>
      <p>
        In addition to the Ethics by Design principles, other research
        initiatives have developed ethical guidelines tailored to specific
        contexts that are closely aligned with the goals of ARISE. Notably, the
        Ethical Framework for Human-Robot Collaboration in Manufacturing
        (Callari et al., 2024) outlines a set of principles designed to guide
        human-robot collaboration in industrial settings, particularly within
        the vision of Industry 5.0. While these principles greatly overlap with
        those of the Ethics by Design Framework, they emphasize the unique
        ethical considerations relevant to robotics in industrial manufacturing
        settings. In particular, they focus on safeguarding the integrity of
        human workers by addressing aspects such as autonomy, continuous
        learning, and skills development.
      </p>
      <h3> 8 Ethical Principles for ARISE</h3>
      <p>
        The ARISE ethical principles are derived from the two key frameworks
        described above: the Ethics by Design guidelines and the Ethical
        Framework for Human-Robot Collaboration in Manufacturing. Given the
        centrality of AI systems in HRI development and the importance of the
        industrial context in many ARISE use cases, these frameworks have been
        merged and adapted into the eight principles outlined below.
      </p>
      <p>
        These principles will be piloted through the ARISE Ethical Impact
        Assessment with open-call projects and applied more broadly across other
        ARISE activities. This process will support the refinement of the
        principles and the definition of more concrete ethical requirements
        tailored to real-world HRI scenarios.
      </p>
      <Cards
        items={principles_cards}
        expandButton={false}
        subpageButton={false}
      />
      <p>
        For more context on how these principles might be practically applied in
        specific robotics development contexts, explore the library of
        case-specific ethical concerns
      </p>
      <button onClick={() => props.handleMenuClick(props.caseMenuItem)} className="primary-button">Case-Specific Ethical Concerns</button>
    </div>
  );
};

export default PrinciplesMainPage;
