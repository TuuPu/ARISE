import React from "react";
import Cards from "../../components/Cards";
import cases_cards from "../../data/cards/cases_cards";
// import './Header.css';

const CaseMainPage = (props) => {
  return (
   <div>
    <p>Introduction to the cases, and explaination of the purpose of this page. Each sub page describes how the ethical principles relate to each challenge</p>
          
      <Cards 
        items = {cases_cards}
        expandButton = {false}
        subpageButton = {true}
      />

   </div>
  );
};

export default CaseMainPage;
