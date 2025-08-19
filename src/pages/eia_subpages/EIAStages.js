import CollapsableCard from "../../components/CollapsableCard";
import stage_cards from "../../data/eia_cards/stages_cards";

const EIAStages = (props) => {
  return (
    <div>
      <div>
        <p>
          The ARISE EIA process is divided into 7 distinct stages: 1) Initial
          Ethics Assessments, 2) Ethics mentoring, Stage I, 3) Ethics Action
          Plan, 4) Interim Ethics Assessment, 5) Ethics mentoring, Stage II, 6)
          Roadmap for future use, and 7) Final Ethics Assessment. The EIA
          seven-stages process is presented in Figure 6, followed by more
          detailed descriptions of each stage.
        </p><img src={process.env.PUBLIC_URL + "/ARISE_EIA.png"} className="snake-img" alt="EIA"></img>
        {stage_cards.map((role) => (
          <CollapsableCard title={role.title} text={role.text} />
        ))}
      </div>
    </div>
  );
};

export default EIAStages;
