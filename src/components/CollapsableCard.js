import React from "react";
import { useState } from "react";
import "./CollapsableCard.css";

const CollapsableCard = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="collapsable-card">
      <div
        class="cc-header"
        onClick={() =>
          setExpanded((prev) => {
            return !prev;
          })
        }
      >
        <h2>{props.title}</h2>
        <p className="expand-text">{expanded ? "Click to view less" : "Click to view more"}</p>
      </div>
      <div
        className= "cc-content"
        style={{
          height: expanded ? "100%" : "0"}}
      >
        {props.text}
      </div>
    </div>
  );
};

export default CollapsableCard;
