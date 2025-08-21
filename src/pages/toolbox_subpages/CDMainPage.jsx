import React from "react";
import Cards from "../../components/Cards";
import cd_cards from "../../data/tb_cards/cd_cards";
// import './Header.css';

const CDMainPage = (props) => {
  return (
    <div>
      <p>
        <a href="https://www.interaction-design.org/literature/article/5-stages-in-the-design-thinking-process">
          Design thinking
        </a>{" "}
        is a non-linear iterative process that can be broken down into several
        phases. One understanding of design thinking breaks down the process
        into five stages: empathize (researching user needs), define (stating
        user needs and problems), ideate (challenging assumptions and generating
        ideas), prototype (creating solutions), and test (trying the solutions
        out). As part of your design thinking approach, you can also incorporate{" "}
        <a href="https://www.interaction-design.org/literature/topics/participatory-design">
          participatory design practices
        </a>{" "}
        (also known as collaborative design, co-design, or cooperative design).
        The aim of participatory design is to apply the knowledge and
        experiences of your end user in the design process.
      </p>
      <p>
        To better understand design thinking as a process, some designers rely
        on the{" "}
        <a href="https://www.designcouncil.org.uk/our-resources/the-double-diamond/">
          Double Diamond model
        </a>
        . In this model, the design process is broken down into four phases:
      </p>
      <ul>
        <li>
          <p>
            <b>Discover</b>: Understand the issue by spending time with people affected
            by the issues
          </p>
        </li>
        <li>
          <p>
            <b>Define:</b> define the challenge using the insights gathered in the
            discover phase
          </p>
        </li>
        <li>
          <p>
            <b>Develop:</b> provide a variety of answers, seek inspiration from
            elsewhere, and co-design with a range of different people
          </p>
        </li>
        <li>
          <p>
            <b>Deliver:</b> test solutions at a small scale and reject those that won't
            work while improving the ones that will{" "}
          </p>
        </li>
      </ul>
      <p>
        Another commonly used approach to design thinking is{" "}
        <a href="https://www.interaction-design.org/literature/topics/user-centered-design">
          User-centered Design (UCD)
        </a>
        . Similar to the other design approaches mentioned above, UCD is an
        iterative process that focuses on an understanding of the users and
        their context in all stages of design and development.{" "}
      </p>
      <p>
        All of the general design approaches mentioned above share overlapping
        practices and similar principles of iteration, user-centeredness,
        inclusivity, and empathy. There isn't one "right" approach for design
        thinking, but rather a variety of possibilities that can complement each
        other.
      </p>
      <h3>Design Toolkits and Methodologies</h3>
      <p>
        In the table below you'll find a variety of other design toolkits and
        methodologies that can be applied to the robotics development context.{" "}
      </p>
      <table className="table">
        <thead>
          <tr>
            <th>Context</th>
            <th>Name</th>
            <th>What is it used for?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ethics and human centered design</td>
            <td>
              <a href="https://www.ideo.com/journal/design-kit-the-human-centered-design-toolkit ">
                The Human-Centered Design Toolkit
              </a>
            </td>
            <td>
              Toolkit containing several tools and methods to bring up
              human-centricity at every stage of any design process
            </td>
          </tr>
          <tr>
            <td>Ethics and human centered design</td>
            <td>
              <a href="https://www.ethicsfordesigners.com/tools">
                Ethics for Designers Toolkit
              </a>
            </td>
            <td>
              Toolkit to explore, discuss and uncover the ethical aspect at
              different stages of design processes
            </td>
          </tr>
          <tr>
            <td>Design for AI</td>
            <td>
              <a
                href="https://projects.tuni.fi/uploads/2023/02/d7f42d29-kite-hcai-design-toolkit.pdf
"
              >
                Design Toolkit for Human-Centered AI (HCAI)
              </a>
            </td>
            <td>
              Collection of tools and methods to bring up human centricity at
              different stages of design AI applications.
            </td>
          </tr>
          <tr>
            <td>Design for robotics - general</td>
            <td>
              <a href="https://link.springer.com/article/10.1007/s12008-023-01607-y">
                Smart Graph Interface (SGI) - collaborative robots
              </a>
            </td>
            <td>
              Structured framework and interactive tool to support strategic
              decisions in designing human–robot collaborative workplaces.
            </td>
          </tr>
          <tr>
            <td>Design for robotics - general</td>
            <td>
              <a
                href="https://www.inf.uni-hamburg.de/research/projects/trail/publications/pdfs/2024-03-gebelli-hri24.pdf
"
              >
                Participatory Design for Explainable Robots
              </a>
            </td>
            <td>
              Participatory methodology that emphasizes the creation of robots
              that can articulate their decision-making processes to users.{" "}
            </td>
          </tr>
          <tr>
            <td>Design for robotics - general</td>
            <td>
              <a
                href="https://www.researchgate.net/publication/364974022_Tools_and_Methods_for_Human_Robot_Collaboration_Case_Studies_at_i-LABS
"
              >
                HRI Toolkits
              </a>
            </td>
            <td>
              Comprehensive toolkits that provide a suite of tools and methods
              to design, implement, and evaluate HRC systems.
            </td>
          </tr>
          <tr>
            <td>Design for robotics - industrial robots</td>
            <td>
              <a href="https://cordis.europa.eu/project/id/820807/reporting">
                SHAREWORK Toolkit
              </a>
            </td>
            <td>
              SHAREWORK offers a modular software/hardware toolbox for
              industrial collaborative robots, enabling human-like perception,
              human-aware dynamic planning, and safe maneuvering without safety
              fences.
            </td>
          </tr>
          <tr>
            <td>Design for robotics - industrial robots</td>
            <td>
              <a
                href="https://arxiv.org/abs/2206.01775
"
              >
                Coco system
              </a>
            </td>
            <td>
              The CoCo system facilitates seamless human-robot collaboration by
              dynamically switching between coexistence and cooperation modes
              based on human intentions.
            </td>
          </tr>
          <tr>
            <td>Design for robotics - social robots</td>
            <td>
              <a href="https://arxiv.org/abs/2105.01910">
                LEADOR (Led-by-Experts Automation and Design Of Robots)
              </a>
            </td>
            <td>
              An end-to-end participatory design methodology involving domain
              experts in the co-design, automation, and evaluation of social
              robots.
            </td>
          </tr>
          <tr>
            <td>Design for robotics - social robots</td>
            <td>
              <a href="https://link.springer.com/article/10.1007/s12008-019-00641-z">
                Co-Creation Sessions of assistive robots
              </a>
            </td>
            <td>
              This approach involves organizing multiple co-creation sessions
              with diverse individuals to refine the design of assistive robots.
            </td>
          </tr>
          <tr>
            <td>Design for robotics - social robots</td>
            <td>
              <a href="https://dl.acm.org/doi/10.1145/3472225">
                Social Robot Co-Design Canvases
              </a>
            </td>
            <td>
              Framework and canvas tool to facilitate collaboration between
              experts of different fields in the design process of social
              robots, while also incorporating a user perspective
            </td>
          </tr>
          <tr>
            <td>Design for robotics - social robots</td>
            <td>
              <a href="https://arxiv.org/abs/2302.00588">
                Situated Participatory Design (SDP)
              </a>
            </td>
            <td>
              Participatory methodology for designing human-robot interactions
              directly within the environments where they will be deployed.
            </td>
          </tr>
          <tr>
            <td>Design for robotics - social robots</td>
            <td>
              <a href="https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2022.731006/full">
                LEGO® Serious Play® and Design Thinking Workshops
              </a>
            </td>
            <td>
              These methodologies engage participants in envisioning useful
              robots.{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CDMainPage;
