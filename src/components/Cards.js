import React from "react";

const Cards = (props) => {
  return (
    <div>
      {props?.items && !props.text && (
        <div className="card-grid">
          {props.items.map((subItem) => (
            <div key={subItem.id} className="info-card">
              <h3>{subItem.title}</h3>

              <div className="card-body">{subItem.text}</div>
              
               {/* { props.expandButton && <button
                className="card-toggle-button"
                onClick={() => console.log("Clicked")}
              ></button>} */}

              {props.subpageButton && (
                <button
                  className="card-toggle-button"
                  onClick={() => props.handleSubpageClick(subItem.id)}
                >Learn More</button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cards;
