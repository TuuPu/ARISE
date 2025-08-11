import { useState } from "react";
import CollapsableCard from "../../components/CollapsableCard";

const EIARoles = (props) => {
  return (
    <div>
      <p>
        This section describes the various groups of actors related to the ARISE
        EIA.
      </p>
      <CollapsableCard
        title="Open-call beneficiary projects"
        text="This is some text "
      />

      <CollapsableCard
        title="Open-call beneficiary projects"
        text="This is some text "
      />

      <CollapsableCard
        title="Open-call beneficiary projects"
        text="This is some text "
      />

      <CollapsableCard
        title="Open-call beneficiary projects"
        text="This is some text "
      />
    </div>
  );
};

export default EIARoles;
