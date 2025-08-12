import React from "react";
import Cards from "../../components/Cards";
import principles_cards from "../../data/tb_cards/principles_cards";
// import './Header.css';

const PrinciplesMainPage = (props) => {
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
      <p>
        In practical terms, for the ARISE framework, this means consolidating
        the principles from both approaches and using the requirements listed
        from both in the interactions with the FSTP projects. We aim to test
        what works and what questions and requirements seem pertinent and
        iterate the ARISE framework’s principles and associated requirements
        further based on this feedback and experiences with the FSTP projects.
        As there is a major overlap between the two approaches – the more
        general one in the Ethics by Design approach and the HRI and Industry
        5.0 specific one by Callieri et al., we propose to consolidate the
        principles as shown in this part of the website.
      </p>
      <Cards
        items={principles_cards}
        expandButton={false}
        subpageButton={false}
      />
    </div>
  );
};

export default PrinciplesMainPage;
