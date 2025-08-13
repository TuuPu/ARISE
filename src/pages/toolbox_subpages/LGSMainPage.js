import React from "react";
import Cards from "../../components/Cards";
import legislation_cards from "../../data/tb_cards/legislation_cards";
// import './Header.css';

const LGSMainPage = (props) => {
  return (
    <div>
      <p>
        As part of this toolbox, we provide a collection of European
        regulation and industry standards related especially to SSH perspectives
        of the ARISE project. While the current listing doesn't include all
        possible perspectives, it aims to be a comprehensive overview of the
        current approaches relevant to our framework and its use in the project.
      </p>

      <Cards
        items={legislation_cards}
        expandButton={false}
        subpageButton={true}
        handleSubpageClick={props.handleSubpageClick}
      />
    </div>
  );
};

export default LGSMainPage;
