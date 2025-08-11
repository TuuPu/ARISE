import { useNavigate } from "react-router-dom";
import {useState, useRef} from "react";
import "./EthicsAssessmentPage.css";
import EIAIntroduction from "./eia_pages/EIAIntroduction";
import EIARoles from "./eia_pages/EIARoles";
import EIAStages from "./eia_pages/EIAStages";
import LeftMenu from "../components/LeftMenu";
import eia_menuItems from "../data/eia_menuitems";

const EthicsAssessmentPage = () => {

  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState(eia_menuItems[0]);
  const sectionRefs = useRef({});

  const [activeSectionId, setActiveSectionId] = useState(null);


  return (
    <div className="toolbox-container">
      {/* Left Side Menu */}
      <LeftMenu
        menuName="Ethical Impact Assessment Sections"
        menuItems={eia_menuItems}
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
