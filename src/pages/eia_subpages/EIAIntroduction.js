import React from "react";

const EIAIntroduction = (props) => {
  return (
    <div>
      <p>
        The ARISE Ethical Impact Assessment (EIA) is a structured step-by-step
        approach to the management of ethical issues in HRI. It has been
        developed and tailored to the open-call process within the ARISE
        project.
      </p>
      <img src="./ARISE_EIA.png" className="snake-img" alt="EIA"></img>
      <p>
        Its objective is to guide and provide feedback to developers to ensure
        the alignment with the ethical requirements and commitment to excellence
        in human-centric HRI, in line with the objectives of the ARISE project.
        It is expected to provide the sufficient support to structure the
        ethical requirements throughout the mentoring program and beyond
      </p>
      <h3>Background</h3>
      <p>
        Ethical impact assessments are key methodologies that guide developers
        of emerging technologies through the complexities of ethics management.
        The ARISE EIA is based on existing research (e.g. the SIENNA framework
        and the SATORI EIA process) and enriched through contextual insights
        within the ARISE project. The two ARISE open-calls provide the
        possibility to test and improve it. Ultimately, a final EIA version will
        be developed to support future HRI initiatives beyond the ARISE funding.
      </p>
      <p>
        Previous findings suggest that a step-by-step approach might be a
        suitable way to embed the ethics perspectives into the everyday work of
        HRI developers. However, the process needs to remain flexible enough,
        open to other elements which might be more suitable for the particular
        realities of each project. In the end, there might not be a right or a
        wrong way to do good ethics management, so each initiative is welcome to
        suggest other elements, such as tools or methods, not included in this
        assessment.
      </p>
      <p>
        Finally, following the EIA steps does not guarantee that the final
        outcomes of a project will be entirely ethical or free from causing
        harm. As an organizational matter, technology ethics are not only
        supported by internal processes but also by broader systemic conditions
        that foster ethical behavior among individuals and promote the awareness
        needed to identify potential risks. Nevertheless, engaging with these
        steps can help organizations move closer to strengthening those systemic
        conditions and raising ethical awareness at both institutional and
        individual levels.
      </p>
    </div>
  );
};

export default EIAIntroduction;
