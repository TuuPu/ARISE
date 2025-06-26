import { useState, useRef, useEffect } from "react";
import "./ToolboxPage.css";
import LGSMainPage from "./toolbox_pages/LGSMainPage";
import CDMainPage from "./toolbox_pages/CDMainPage";
import CaseMainPage from "./toolbox_pages/CaseMainPage";
import PrinciplesMainPage from "./toolbox_pages/PrinciplesMainPage";
import CaseSpecificPage from "./toolbox_pages/CaseSpecificPage";
import LeftMenu from "../components/LeftMenu";

import menuItems from "../data/menuItems";
import cases from "../data/cases";


const ToolboxPage = () => {
  const [selectedMenu, setSelectedMenu] = useState(menuItems[0]);
  const sectionRefs = useRef({});

  const [activeSectionId, setActiveSectionId] = useState(null);

  return (
    <div className="toolbox-container">
      {/* Left Side Menu */}
      <LeftMenu
        menuItems={menuItems}
        setSelectedMenu={setSelectedMenu}
        activeSectionId={activeSectionId}
        sectionRefs={sectionRefs}
      />

      {/* Center Content */}
      <div className="center-content">
        <div className="sticky-header">
          <h2 style={{ color: "#489e9a" }}>
            {selectedMenu.title}
          </h2>
        </div>
        <div className="">
          {selectedMenu.id === "1" && <PrinciplesMainPage />}
          {selectedMenu.id === "2" && <LGSMainPage />}
          {/* {selectedMenu.id === "2.1" && <LegislationPage />}
          {selectedMenu.id === "2.2" && <GuidelinesPage />}
          {selectedMenu.id === "2.3" && <StandardsPage />} */}
          {selectedMenu.id === "3" && <CDMainPage />}
          {/* {selectedMenu.id === "3.1" && <DesignPrinciplesPage />}
          {selectedMenu.id === "3.2" && <DesignToolkisPage />} */}
          {selectedMenu.id === "4" && <CaseMainPage />}
          
          {selectedMenu.id === "4.1" && <CaseSpecificPage c={cases[0]} />}
          {selectedMenu.id === "4.2" && <CaseSpecificPage c={cases[1]} />}
          {selectedMenu.id === "4.3" && <CaseSpecificPage c={cases[2]} />}
          {selectedMenu.id === "4.4" && <CaseSpecificPage c={cases[3]} />}
          {selectedMenu.id === "4.5" && <CaseSpecificPage c={cases[4]} />}
          {selectedMenu.id === "4.6" && <CaseSpecificPage c={cases[5]} />}
          {selectedMenu.id === "4.7" && <CaseSpecificPage c={cases[6]} />}
          {selectedMenu.id === "4.8" && <CaseSpecificPage c={cases[7]} />}


        </div>
        
      </div>
    </div>
  );
};

export default ToolboxPage;
