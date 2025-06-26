import React from "react";
import Cards from "../../components/Cards";
import cd_cards from "../../data/cards/cd_cards";
// import './Header.css';

const CDMainPage = (props) => {
  return (
   <div>
    <p>Introduction to the legislation, standards, and guidelines page</p>
          
      <Cards 
        items = {cd_cards}
        expandButton = {false}
        subpageButton = {true}
      />

   </div>
  );
};

export default CDMainPage;
