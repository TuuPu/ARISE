import React from "react";
// import './Header.css';
import "./CaseSpecificPage.css"

const CaseSpecificPage = (props) => {
  const c = props.c; 
  return (
    <div className="use-case-content">
      <p className="use-case-text">{c.text}</p>

      {/* Table */}
      <table className="use-case-table">
        <thead>{c.thead}</thead>
        <tbody>{c.tbody}</tbody>
      </table>

      {/* Ethical Concerns Section */}
      <h3>Examples of Ethical Concerns and Their Associated Questions</h3>
      <ul className="ethical-questions">{c.questionlist}</ul>
    </div>
  );
};

export default CaseSpecificPage;
