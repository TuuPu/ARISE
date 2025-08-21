import { useState, useRef, useEffect } from "react";
import "./ToolboxPage.css";
import LGSMainPage from "./toolbox_subpages/LGSMainPage";
import CDMainPage from "./toolbox_subpages/CDMainPage";
import CaseMainPage from "./toolbox_subpages/CaseMainPage";
import PrinciplesMainPage from "./toolbox_subpages/PrinciplesMainPage";
import CaseSpecificPage from "./toolbox_subpages/CaseSpecificPage";
import TBIntroduction from "./toolbox_subpages/TBIntroduction";
import LeftMenu from "../components/LeftMenu";
import StandardsPage from "./toolbox_subpages/StandardsPage";
import GuidelinesPage from "./toolbox_subpages/GuidelinesPage";
import LegislationPage from "./toolbox_subpages/LegislationPage";

// import { handleMenuClick } from "../functions";

import tb_menuItems from "../data/tb_menuItems";
import cases from "../data/cases";

const ToolboxPage = () => {
  const [selectedMenu, setSelectedMenu] = useState(tb_menuItems[0]);
  const sectionRefs = useRef({});

  const [activeSectionId, setActiveSectionId] = useState(null);
  const [expandedSubmenu, setExpandedSubmenu] = useState(null);

  const handleMenuClick = (itemID) => {
    let prev_element = document.getElementById(selectedMenu.id);
    prev_element.style.backgroundColor = "rgba(0,0,0,0)";

    let parentMenuItem = tb_menuItems.find(({ id }) => id === itemID);

    let actualMenuItem = parentMenuItem;
    if (itemID.indexOf(".") !== -1) {
      //If the item id contains period, it is for a sub page
      const parentID = itemID[0];
      parentMenuItem = tb_menuItems.find(({ id }) => id === parentID);
      actualMenuItem = parentMenuItem.subItems.find(({ id }) => id === itemID);

      setTimeout(() => {
        const el = sectionRefs.current[itemID];
        if (el)
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 100);
    }

    setSelectedMenu(actualMenuItem);

    let element = document.getElementById(itemID);
    element.style.backgroundColor = "rgba(44, 21, 21, 0.15)";

    if (parentMenuItem.subItems) {
      setExpandedSubmenu(parentMenuItem.title);
    } else {
      setExpandedSubmenu(null);
    }
  };

  return (
    <div className="toolbox-container">
      {/* Left Side Menu */}
      <LeftMenu
        menuName="SSH Toolbox Sections"
        menuItems={tb_menuItems}
        setSelectedMenu={setSelectedMenu}
        activeSectionId={activeSectionId}
        sectionRefs={sectionRefs}
        handleMenuClick={handleMenuClick}
        expandedSubmenu={expandedSubmenu}
      />

      {/* Center Content */}
      <div className="center-content">
        <div className="sticky-header">
          <h2>{selectedMenu.title}</h2>
        </div>
        <div className="center-content-inner">
          {selectedMenu.id === "1" && <TBIntroduction />}
          {selectedMenu.id === "2" && (
            <PrinciplesMainPage
              handleMenuClick={handleMenuClick}
              caseMenuItemID={"5"}
            />
          )}
          {selectedMenu.id === "3" && (
            <LGSMainPage handleSubpageClick={handleMenuClick} />
          )}
          {/* Need to pass in indeces for subpages */}

          {selectedMenu.id === "3.1" && <LegislationPage />}
          {selectedMenu.id === "3.2" && <GuidelinesPage />}
          {selectedMenu.id === "3.3" && <StandardsPage />}

          {selectedMenu.id === "4" && <CDMainPage />}

          {selectedMenu.id === "5" && (
            <CaseMainPage handleSubpageClick={handleMenuClick} />
          )}

          {selectedMenu.id === "5.1" && <CaseSpecificPage c={cases[0]} />}
          {selectedMenu.id === "5.2" && <CaseSpecificPage c={cases[1]} />}
          {selectedMenu.id === "5.3" && <CaseSpecificPage c={cases[2]} />}
          {selectedMenu.id === "5.4" && <CaseSpecificPage c={cases[3]} />}
          {selectedMenu.id === "5.5" && <CaseSpecificPage c={cases[4]} />}
          {selectedMenu.id === "5.6" && <CaseSpecificPage c={cases[5]} />}
          {selectedMenu.id === "5.7" && <CaseSpecificPage c={cases[6]} />}
          {selectedMenu.id === "5.8" && <CaseSpecificPage c={cases[7]} />}
        </div>
      </div>
    </div>
  );
};

export default ToolboxPage;
