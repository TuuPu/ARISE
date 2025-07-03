import React from "react";
import Cards from "../../components/Cards";
import principles_cards from "../../data/cards/principles_cards";
// import './Header.css';

const PrinciplesMainPage = (props) => {
  return (
   <div>
    <p>
          In this first iteration of the ARISE SSH framework, we propose to
          simultaneously test out the more general level principles set out in
          the Ethics by Design framework as well as the more HRI and Industry
          5.0 specific ethics principles set out in the framework consolidated
          by Callari et al. Our goal is to simultaneously have a strong and
          empirically grounded backing from the Ethics by Design Principles that
          has been built up during previous Horizon projects, as well as take
          into account especially more worker related and human-centric aspects
          that are brought about by the 30 field specific ethics experts in the
          Delphi study by Callari et al. and consolidated under the framework
          and its related ethics principles and associated requirements.{" "}
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
        items = {principles_cards}
        expandButton = {false}
        subpageButton = {false}
      />

   </div>
  );
};

export default PrinciplesMainPage;
