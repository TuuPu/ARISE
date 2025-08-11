import CollapsableCard from "../../components/CollapsableCard";
import role_cards from "../../data/eia_cards/role_cards";

const EIARoles = (props) => {
  return (
    <div>
      <p>
        This section describes the various groups of actors related to the ARISE
        EIA.
      </p>
      {role_cards.map((role) => (
        <CollapsableCard title={role.title} text={role.text} />
      ))}
    </div>
  );
};

export default EIARoles;
