import React from "react";
import { useState } from "react";   
import './LeftMenu.css';

const LeftMenu = (props) => {

    const [expandedSubmenu, setExpandedSubmenu] = useState(null);
    
    const handleMenuClick = (menuItem) => {
        props.setSelectedMenu(menuItem);
        if (menuItem.subItems) {
          setExpandedSubmenu(expandedSubmenu === menuItem.title ? null : menuItem.title);
        } else {
          setExpandedSubmenu(null);
        }
      };

    return (
        <div className="left-menu">
            <h2>Menu</h2>
            <ul>
            {props.menuItems.map((item) => (
                <li key={item.id}>
                <div onClick={() => handleMenuClick(item)} className="menu-item">
                <strong>{item.id}. </strong> {item.title} {/* ✅ Show enumeration in main menu */}
                </div>
                {item.subItems && expandedSubmenu === item.title && (
                    <ul className="submenu">
                    {item.subItems.map((subItem) => (
                        <li
                        key={subItem.id}
                        className={subItem.id === props.activeSectionId ? "active" : ""}
                        onClick={() => {
                                props.setSelectedMenu(subItem);
                                setTimeout(() => {
                                    const el = props.sectionRefs.current[subItem.id];
                                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                                }, 100);
                            }}
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
