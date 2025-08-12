import { useState, useRef, useEffect } from "react";
import "./ToolboxPage.css";
import LGSMainPage from "./toolbox_subpages/LGSMainPage";
import CDMainPage from "./toolbox_subpages/CDMainPage";
import CaseMainPage from "./toolbox_subpages/CaseMainPage";
import PrinciplesMainPage from "./toolbox_subpages/PrinciplesMainPage";
import CaseSpecificPage from "./toolbox_subpages/CaseSpecificPage";
import TBIntroduction from "./toolbox_subpages/TBIntroduction";
import LeftMenu from "../components/LeftMenu";

import tb_menuItems from "../data/tb_menuItems";
import cases from "../data/cases";


const ToolboxPage = () => {
  const [selectedMenu, setSelectedMenu] = useState(tb_menuItems[0]);
  const sectionRefs = useRef({});

  const [activeSectionId, setActiveSectionId] = useState(null);
  const [expandedSubmenu, setExpandedSubmenu] = useState(null);

  const handleMenuClick = (menuItem) => {
    setSelectedMenu(menuItem);
    if (menuItem.subItems) {
      setExpandedSubmenu(
        expandedSubmenu === menuItem.title ? null : menuItem.title
      );
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
          <h2 style={{ color: "#489e9a" }}>{selectedMenu.title}</h2>
        </div>
        <div className="center-content-inner">
          {selectedMenu.id === "1" && <TBIntroduction />}
          {selectedMenu.id === "2" && (
            <PrinciplesMainPage
              handleMenuClick={handleMenuClick}
              caseMenuItem={tb_menuItems[3]}
            />
          )}
          {selectedMenu.id === "3" && <LGSMainPage />}
          {/* {selectedMenu.id === "2.1" && <LegislationPage />}
          {selectedMenu.id === "2.2" && <GuidelinesPage />}
          {selectedMenu.id === "2.3" && <StandardsPage />} */}
          {selectedMenu.id === "4" && <CDMainPage />}
          {/* {selectedMenu.id === "3.1" && <DesignPrinciplesPage />}
          {selectedMenu.id === "3.2" && <DesignToolkisPage />} */}
          {selectedMenu.id === "5" && <CaseMainPage />}

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
