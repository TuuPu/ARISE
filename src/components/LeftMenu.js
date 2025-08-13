import React from "react";
import { useState } from "react";
import "./LeftMenu.css";

const LeftMenu = (props) => {
  return (
    <div className="left-menu">
      <h2>{props.menuName}</h2>

      <ul>
        {props.menuItems.map((item) => (
          <li id={item.id} key={item.id}>
            <div
              onClick={() => props.handleMenuClick(item.id)}
              className="menu-item"
            >
              <strong>{item.id}. </strong> {item.title}{" "}
              {/* Show enumeration in main menu */}
            </div>
            {item.subItems && props.expandedSubmenu === item.title && (
              <ul className="submenu">
                {item.subItems.map((subItem) => (
                  <li
                    id={subItem.id}
                    key={subItem.id}
                    className={
                      subItem.id === props.activeSectionId ? "active" : ""
                    }
                    onClick={() => props.handleMenuClick(subItem.id)}
                  >
                    <strong>{subItem.id}</strong> {subItem.title}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftMenu;
