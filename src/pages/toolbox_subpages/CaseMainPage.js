import React from "react";
import Cards from "../../components/Cards";
import cases_cards from "../../data/tb_cards/cases_cards";
// import './Header.css';

const CaseMainPage = (props) => {
  return (
    <div>
      <p>
        This section provides concrete examples of how each of the 8 ARISE
        principles might be applied to specific robotics contexts from
        industrial manufacturing to kitting to healthcare. Within each sub page,
        you'll find examples for the tasks that could be carried about by both
        human and non-human actors in the robotics setting, and questions that
        ought to be considered pertaining to each ethical principle.
      </p>

      <Cards
        items={cases_cards}
        expandButton={false}
        subpageButton={true}
        handleSubpageClick={props.handleSubpageClick}
      />
    </div>
  );
};

export default CaseMainPage;
