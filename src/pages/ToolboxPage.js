import React, { useState, useRef } from "react";
import "./ToolboxPage.css";
import useCases from "../data/useCases";
import menuItems from "../data/menuItems";
import SideMenu from "../components/SideMenu";

const ToolboxPage = () => {
  console.log("menuItems:", menuItems);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedUseCase, setExpandedUseCase] = useState(null);
  const sectionRefs = useRef({});
  const [expandedCardId, setExpandedCardId] = useState(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id").replace("section-", "");
            setActiveSectionId(id);
          }
        });
      },
      { rootMargin: "-10% 0px -60% 0px", threshold: 0 }
    );

    const elements = Object.values(sectionRefs.current);
    elements.forEach((el) => el && observer.observe(el));

    return () => {
      elements.forEach((el) => el && observer.unobserve(el));
    };
  }, [selectedMenu]);

  const toggleCard = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  

  const [selectedTag, setSelectedTag] = useState("");


  // Toggle use case expansion
  const toggleUseCase = (useCaseId) => {
    setExpandedUseCase(expandedUseCase === useCaseId ? null : useCaseId);
  };

  const filteredUseCases = useCases.filter((useCase) => {
    const matchesSearch = useCase.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag =
      selectedTag === "" || (useCase.tags && useCase.tags.includes(selectedTag));
    return matchesSearch && matchesTag;
  });



  const [activeSectionId, setActiveSectionId] = useState(null);

  return (
    <div className="toolbox-container">
      {/* Left Side Menu (Teal) */}
      <SideMenu 
        menuItems={menuItems}
        setSelectedMenu={setSelectedMenu}
        activeSectionId={activeSectionId}
        sectionRefs={sectionRefs}
      />
      {/* <div className="left-menu">
        <h2>Menu</h2>
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <div onClick={() => handleMenuClick(item)} className="menu-item">
              <strong>{item.id}. </strong> {item.title} 
              </div>
              {item.subItems && expandedSubmenu === item.title && (
                <ul className="submenu">
                  {item.subItems.map((subItem) => (
                    <li
                      key={subItem.id}
                      className={subItem.id === activeSectionId ? "active" : ""}
                      onClick={() => {
                        setSelectedMenu(subItem);
                        setTimeout(() => {
                        const el = sectionRefs.current[subItem.id];
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
      </div> */}

      {/* Center Content */}
      <div className="center-content">
      <div className="sticky-header">
      <h2 style={{ color: '#489e9a' }}>
        {selectedMenu ? selectedMenu.title : "Select an option"}
      </h2>
      </div>

        {/* Display intro text for top-level menu items */}
        {selectedMenu && selectedMenu.introText && <p>{selectedMenu.introText}</p>}

        {/* Display sub-menu content */}
        {selectedMenu && selectedMenu.text && (
  <div
    id={`section-${selectedMenu.id}`}
    ref={(el) => {
      if (selectedMenu.id) sectionRefs.current[selectedMenu.id] = el;
    }}
  >
    <p>{selectedMenu.text}</p>
  </div>
)}
{selectedMenu?.subItems && !selectedMenu.text && (
  <div className="card-grid">
  {selectedMenu.subItems.map((subItem) => (
    <div key={subItem.id} className="info-card">
      <h3>{subItem.title}</h3>

      <div className="card-body">
  {expandedCardId === subItem.id ? (
    subItem.text
  ) : (
    <p>
      {subItem.teaser
        ? subItem.teaser
        : "Click to read more about this topic."}
    </p>
  )}
</div>

      <button
        className="card-toggle-button"
        onClick={() => toggleCard(subItem.id)}
      >
        {expandedCardId === subItem.id ? "Show less" : "Read more"}
      </button>
    </div>
  ))}
</div>
)}

        {/* Use Case Library Section */}
        {selectedMenu && selectedMenu.title === "Use Case Library" && (
  <div className="use-case-section">
    <select
  value={selectedTag}
  onChange={(e) => setSelectedTag(e.target.value)}
  className="search-bar"
>
  <option value="">Filter by Ethical Principle</option>
  <option value="Respect for Human Agency">Respect for Human Agency</option>
  <option value="Privacy and Data Governance">Privacy and Data Governance</option>
  <option value="Fairness">Fairness</option>
  <option value="Individual, Social and Environmental Well-being">
    Individual, Social and Environmental Well-being
  </option>
  <option value="Transparency">Transparency</option>
  <option value="Accountability and Oversight">Accountability and Oversight</option>
  <option value="Worker Dignity and Equity">Worker Dignity and Equity</option>
  <option value="Human Resilience Through Continuous Learning and Support">
    Human Resilience Through Continuous Learning and Support
  </option>
</select>
    <input
      type="text"
      placeholder="Search use cases..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-bar"
    />

    {/* Expand / Collapse Button */}
    <button
      onClick={() =>
        setExpandedUseCase(expandedUseCase === 'all' ? null : 'all')
      }
      style={{
        marginBottom: '10px',
        padding: '10px 15px',
        fontSize: '14px',
        backgroundColor: '#489e9a',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
      }}
    >
      {expandedUseCase === 'all' ? 'Collapse All' : 'Expand All'}
    </button>

    <div className="use-case-list">
      {filteredUseCases.length > 0 ? (
        filteredUseCases.map((useCase) => (
          <div
            key={useCase.id}
            className={`use-case-item ${
              expandedUseCase === 'all' || expandedUseCase === useCase.id ? "expanded" : ""
            }`}
            onClick={() =>
              setExpandedUseCase(
                expandedUseCase === useCase.id ? null : useCase.id
              )
            }
          >
            <h3 className="use-case-title">{useCase.title}</h3>
            {(expandedUseCase === useCase.id || expandedUseCase === 'all') && (
              <div className="use-case-content">{useCase.description}</div>
            )}
          </div>
        ))
      ) : (
        <p>No matching use cases found.</p>
      )}
    </div>
  </div>
)}
      </div>
    </div>
  );
};

export default ToolboxPage;
