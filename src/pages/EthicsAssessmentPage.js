import { useNavigate } from "react-router-dom";
import {useState, useRef} from "react";
import "./EthicsAssessmentPage.css";
import EIAIntroduction from "./eia_subpages/EIAIntroduction";
import EIARoles from "./eia_subpages/EIARoles";
import EIAStages from "./eia_subpages/EIAStages";
import LeftMenu from "../components/LeftMenu";
import eia_menuItems from "../data/eia_menuitems";

const EthicsAssessmentPage = () => {

  const [selectedMenu, setSelectedMenu] = useState(eia_menuItems[0]);
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
        menuName="Ethical Impact Assessment Sections"
        menuItems={eia_menuItems}
        setSelectedMenu={setSelectedMenu}
        activeSectionId={activeSectionId}
        sectionRefs={sectionRefs}
        expandedSubmenu={expandedSubmenu}
        handleMenuClick={handleMenuClick}
      />

      {/* Center Content */}
      <div className="center-content">
        <div className="sticky-header">
          <h2 style={{ color: "#489e9a" }}>
            {selectedMenu.title}
          </h2>
        </div>
        <div className="center-content-inner">
          {selectedMenu.id === "1" && <EIAIntroduction />}
          {selectedMenu.id === "2" && <EIARoles />}
          {selectedMenu.id === "3" && <EIAStages />}
        </div>
        
      </div>
    </div>
  );
};

export default EthicsAssessmentPage;
