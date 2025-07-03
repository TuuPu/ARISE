import React from "react";
import Cards from "../../components/Cards";
import legislation_cards from "../../data/cards/legislation_cards";
// import './Header.css';

const LGSMainPage = (props) => {
  return (
   <div>
    <p>Introduction to the legislation, standards, and guidelines page</p>
          
      <Cards 
        items = {legislation_cards}
        expandButton = {false}
        subpageButton = {true}
      />

   </div>
  );
};

export default LGSMainPage;
