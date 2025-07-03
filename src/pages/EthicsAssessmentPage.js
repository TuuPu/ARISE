import { useNavigate } from "react-router-dom";
import "./EthicsAssessmentPage.css";

const EthicsAssessmentPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="ethics-ass-section">
        <h1>Ethical Impact Assessment</h1>
        <h2>Overview of ARISE Ethical Impact Assessment</h2>
        <p>
          Systematic evaluation of the potential impacts of proposed 
          technologies and projects on ethical values or norms is to identify,
          predict and mitigate the unwanted ethical implications of the
          initiative. Within the ARISE SSH framework, the initial EIA is
          grounded on the SIENNA framework and the SATORI EIA process. It will
          be developed further based on initial findings from the ARISE
          project’s FSTP project phase. The initial ARISE EIA process is first
          tested with the first batch of the FSTP project in the second year of
          the project and iterated for the second round based on those
          experiences. The process will also be updated after the second batch
          in later stages of the project to capture insights and learnings on
          EIA, making it readily available for use in future projects. Next, we
          will describe the various groups related to the ARISE EIA and the
          six-stage process through which the assessment is conducted.
        </p>
        <h2>Stages of the ARISE Ethical Impact Assessment Process</h2>
        <p>
          The ARISE EIA process is divided into 6 distinct stages, which are 1)
          Initial external review, 2) Ethics action plan, 3) Ethics mentoring,
          4) Interim external review, 5) Ethics mentoring and roadmap for future
          use, and 6) Final external review. The EIA process including the
          six-stages is presented in Figure 6, followed by more detailed
          descriptions of each stage.
        </p>

        <section
          className="explore-section"
          onClick={() => navigate("/toolbox")}
        >
          <h2>Explore the Tool</h2>
          <div className="explore-logo">LOGO</div>
        </section>
      </div>
    </div>
  );
};

export default EthicsAssessmentPage;
