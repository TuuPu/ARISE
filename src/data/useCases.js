const useCases = [
    {
      id: 1,
      title: "Battery Disassembly - Challenge 1: Dismantling and Assembly of High-Value Products",
      tags: ["Privacy and Data Governance", "Transparency", "Respect for Human Agency"],
      description: (
        <>
          <p className="use-case-text">
            The primary objective of this application case is to optimize and expedite the disassembling process of batteries by utilizing a collaborative approach between humans and robots. This strategy integrates mixed reality and artificial vision technologies to accurately detect and localize screws within the battery, enhancing efficiency and accelerating the disassembly procedure.
          </p>
          <p className="use-case-text">
            <strong>Actors in this use case:</strong> Human workers, PC (System), Robot/Camera, and MR HoloLens glasses.
          </p>
          <p className="use-case-text">
            <strong>General workflow:</strong> The dimensional camera captures BGR and depth image of the object and forwards 
            them to the PC for analysis. The PC then proceeds with coordinate calculations and transformations to both robot 
            reference space and world coordinates. These coordinates are then sent forward to the robot, which guides the human. 
            The PC oversees the interaction between the human and the robot, while the collaborative robot selects screws for the 
            disassembly process.
          </p>
        
  
          {/* Table */}
          <table className="use-case-table">
            <thead>
              <tr>
                <th>Human Workers</th>
                <th>PC (System)</th>
                <th>Robot/Camera</th>
                <th>MR HoloLens Glasses</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Supervising the disassembly process.</td>
                <td>Calculating and transforming coordinates.</td>
                <td>Providing accurate data.</td>
                <td>Provide real-time visual information.</td>
              </tr>
              <tr>
                <td>Establishing the framework and making critical decisions, such as selecting screws to retrieve.</td>
                <td>Coordinating robot actions.</td>
                <td>Perform physical actions.</td>
                <td>Track user interactions for an immersive user experience.</td>
              </tr>
              <tr>
                <td></td>
                <td>Relaying data to AR glasses for enriched visual experiences.</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
  
          {/* Ethical Concerns Section */}
          <h3>Examples of Ethical Concerns and Their Associated Questions</h3>
          <ul className="ethical-questions">
            <li>
              <strong>Respect for Human Agency:</strong> How is workers’ informed consent ensured before the HRI solution is deployed?
            </li>
            <li>
              <strong>Privacy and Data Governance:</strong> How is it ensured that the camera embedded in the system collects 
              data solely for the purpose of the HRI solution?
            </li>
            <li>
              <strong>Fairness:</strong> How does the use case address diversity among workers to ensure the Voice Command 
              Recognition capability is inclusive and recognizes non-standard accents?
            </li>
            <li>
              <strong>Individual, Social, and Environmental Well-being:</strong> What potential health and safety risks to 
              workers are assessed and what measures are implemented to address them?
            </li>
            <li>
              <strong>Transparency:</strong> Has the project completed a dual-use compliance statement?
            </li>
            <li>
              <strong>Accountability and Oversight:</strong> How are accountability and liability for the HRI system’s 
              performance established, especially in the case of system failures?
            </li>
          </ul>
        </>
      ),
    },
    {
    id: 2,
    title: "Fruit Picking - Challenge 2: complex product picking in industrial warehouses",
    description: (
      <>
        <p className="use-case-text">
        The main purpose of this application case is to make certain tasks that would be done by a human worker, like picking fruits, can be done by a collaborative robot, making HRI possible and perform the work more efficiently.
        </p>
        <p className="use-case-text">
          <strong>Actors in this use case:</strong> Human workers, MR HoloLens glasses, system, Collaborative robot and camera.
        </p>
        <p className="use-case-text">
          <strong>General workflow:</strong> The users engage with the mixed reality glasses through intuitive gestures, voice commands and gaze. The MR glasses then send forward this input to the user by providing a live camera view, object information and system feedback. The glasses also forward relevant data to the PC via a Wi-Fi connection (WebSockets protocol). The PC then processes the data and sends the processed data back to the user. The PC’s role is to act as a central hub and facilitate the communication between the user, the glasses and the robot, sending commands to the robot based on the input information received from the user. The robot provides updates on its actions and its environment to the PC. The camera’s role is to capture visual data and send it to the PC for adjustments of camera settings. The actors of this use case, and their roles, are summarized in the Table below.
        </p>
      
  
        {/* Table */}
        <table className="use-case-table">
          <thead>
            <tr>
              <th>Human Workers</th>
              <th>MR HoloLens Glasses</th>
              <th>System</th>
              <th>Collaborative robot and camera</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Supervise operations.</td>
              <td>Provide interface between human workers and the system</td>
              <td>Receive instructions.</td>
              <td>Robot sorts based on instructions from human workers</td>
            </tr>
            <tr>
              <td>Provide instructions to the collaborative robot via MR HoloLens glasses</td>
              <td>Provides location of objects as a digital sphere so that the user is aware of the pick-up position of the robot</td>
              <td>Provide real-time visual feedback</td>
              <td>Camera captures visual data for object recognition and situational awareness</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Aids decision-making in the system</td>
            </tr>
          </tbody>
        </table>
  
        {/* Ethical Concerns Section */}
        <h3>Examples of Ethical Concerns and Their Associated Questions</h3>
        <ul className="ethical-questions">
          <li>
            <strong>Respect for Human Agency:</strong> How does the use case consider the risk of worker displacement due to automation and what measures are implemented to mitigate this risk? 
          </li>
          <li>
            <strong>Privacy and Data Governance:</strong> If the HRI solution uses data from a third party, how is API integration compliance ensured, and is a compliance form provided?
          </li>
          <li>
            <strong>Fairness:</strong> How does the project ensure that visually impaired, far-sighter or near-sighted workers can effectively use MR HoloLens glasses?
          </li>
          <li>
            <strong>Individual, Social, and Environmental Well-being:</strong> What protocols are in place for safe physical interaction, including detailed fail-safe mechanisms?
          </li>
          <li>
            <strong>Transparency:</strong> Are the participants informed about the purposes, risks, and benefits of their involvement in the research activities?
          </li>
          <li>
            <strong>Accountability and Oversight:</strong> What processes are in place to ensure compliance with ethical, legal and organizational standards throughout the research activities?
          </li>
        </ul>
      </>
    ),
    },
    {
      id: 3,
      title: "Assembly and packing robotic assistant - Challenge 3: Flexible collaborative robots",
      description: (
        <>
          <p className="use-case-text">
          In this application case, the robot should recognize and manage the heavy product, safeguarding the operator from injuries and safety problems, while the operator should monitor the robot's activity and intervene, for example, if inaccuracies occur or unexpected forces are requested to perform the task.
          </p>
          <p className="use-case-text">
            <strong>Actors in this use case:</strong> Human workers and Robot.
          </p>
          <p className="use-case-text">
            <strong>General workflow:</strong> A product is selected to be packed from the company management system’s database by an operator. After this, the robot receives the product code information and obtains the necessary information to recognise the product in the space (CAD and images). The robot also receives the information on the related tray. Subsequently the operator prepares the packing area by placing the first tray on a pallet. Through physical interface and voice input commands, the operator advises the robot so that it can recognise the object and its pose. Then the robot picks up the object and places it in one of the free slots. Because the pre-formed tray constrains the product’s positioning and requires a specific force to achieve the correct coupling, the positioning sequence in the slots is pre-programmed. In case of incorrect coupling in the product’s final slot, the operator can intervene by physically acting on the robot for a successful positioning of the product in its slot. In this phase, the robot bears the product’s weight and cooperates with the human to achieve precise positioning. Once the tray is filled, the operator will perform a quality check and set up another tray until the desired number of trays for the current pallet is reached. At any time, the operator can stop, start or give high-level commands to the robot. During the whole process, a camera monitors the operator’s posture, and they are alerted if their ergonomic indexes fall below a threshold.
          </p>
        
  
          {/* Table */}
          <table className="use-case-table">
            <thead>
              <tr>
                <th>Collaborative robot and operator</th>
                <th>Supervise the packaging process</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Execute force operations</td>
                <td>Supervise the packing process</td>
              </tr>
              <tr>
                <td>Execute fine manual operations</td>
                <td>Handle exceptions</td>
              </tr>
              <tr>
                <td>Share some tasks with human operators</td>
                <td>Manage the empty pre-formed tray layer or empty boxes</td>
              </tr>
              <tr>
                <td></td>
                <td>Manage orders from company management system</td>
              </tr>
              <tr>
              <td></td>
              <td>Coordinate shipments</td>
              </tr>
            </tbody>
          </table>
  
          {/* Ethical Concerns Section */}
          <h3>Examples of Ethical Concerns and Their Associated Questions</h3>
          <ul className="ethical-questions">
            <li>
              <strong>Respect for Human Agency:</strong> What strategy is adopted to ensure that workers possess the necessary knowledge and skills to collaborate efficiently with the robot?
            </li>
            <li>
              <strong>Privacy and Data Governance:</strong> Will research data be anonymized or pseudonymised? If so, what techniques will be implemented?
            </li>
            <li>
              <strong>Fairness:</strong> How are the voice command and camera features designed to consider diverse backgrounds, facial features, languages, and accents of participants?
            </li>
            <li>
              <strong>Individual, Social, and Environmental Well-being:</strong> What sustainability practices are adopted for dismantling, assembly and the environmental impact of the use case?
            </li>
            <li>
              <strong>Transparency:</strong> Has the project completed a misuse compliance statement?
            </li>
            <li>
              <strong>Accountability and Oversight:</strong> How will the implementation of health and safety procedures, data collection measures and informed consent processes be monitored and evaluated?
            </li>
            <li>
              <strong>Worker Dignity and Equity</strong> How does the system ensure equitable safety measures for all operators, particularly in interventions involving physical interactions with the robot?
            </li>
            <li>
              <strong>Human Resilience Through Continuous Learning and Support</strong> What mechanisms are in place for operators to provide feedback on the robotic system and the overall workflow?
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 4,
      title: "Robotic Kitting Assistant - Challenge 4: Smart programming",
      description: (
        <>
          <p className="use-case-text">
          One of the standard and crucial phases in producing assembled parts is kitting. A specific product is selected from the company's management system, obtaining its Bill of Materials (BoM) with the various components and their location within the warehouse. Following a lean paradigm, all the items constituting the kit should be retrieved from a warehouse, bringing only what is needed to the assembly station. This application case considers both automated warehouses, involving a robotic cell, and non-automated warehouses, consisting of shelving, which humans should manage. 
          </p>
          <p className="use-case-text">
            <strong>Actors in this use case:</strong> Autonomous Robot, Collaborative Robot, and Human Workers.
          </p>
          <p className="use-case-text">
            <strong>General workflow:</strong> The flow of the process starts when the operator selects a product to be assembled from the company management system, and the robot receives a list of objects, their quantity, and their location within the company. The needed items could be stored in an automated or non-automated warehouse. Then the operator reads the object list from the robot’s touchscreen. The robot can follow the operator to the automated warehouse in follow-me mode or independently. Once in the warehouse, the operator takes items from the shelves and places them inside the bin, which will constitute the assembly kit. The operator then updates the list of items to be picked via the screen or with natural language. While this operation is happening, the robot will communicate with the warehouse, requesting the bins with the remaining components. Once the selected bin is retrieved, the robot should pick the right number of items and move them to the assembly kit bin, simultaneously updating the list of items. Once all the objects of the list have been collected, the operator performs a quality check and sends the robot to the assembly station that requested the kit.
          </p>
        
  
          {/* Table */}
          <table className="use-case-table">
            <thead>
              <tr>
                <th>Autonomous mobile robot and collaborative robot</th>
                <th>Human workers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Offer a simple way to codify different objects</td>
                <td>Teach the robot on what it has to do</td>
              </tr>
              <tr>
                <td>Take input naturally from operators</td>
                <td>Supervise the kitting process</td>
              </tr>
              <tr>
                <td>Autonomously create the kit</td>
                <td>Handle exceptions</td>
              </tr>
              <tr>
                <td>Notify lack of necessary items</td>
                <td>Provide additional instructions if it is necessary</td>
              </tr>
              <tr>
              <td>Navigate autonomously inside the warehouse</td>
              <td>Task and process scheduling</td>
              </tr>
            </tbody>
          </table>
  
          {/* Ethical Concerns Section */}
          <h3>Examples of Ethical Concerns and Their Associated Questions</h3>
          <ul className="ethical-questions">
            <li>
              <strong>Respect for Human Agency:</strong> What are the detailed procedures for obtaining informed consent, and can templates of the Informed Consent Forms and Information Sheets in language intelligible to participants be provided?
            </li>
            <li>
              <strong>Privacy and Data Governance:</strong> How does the use case demonstrate compliance with relevant data protection regulations, such as GDPR, and what security measures are in place to protect collected data from unauthorized access?
            </li>
            <li>
              <strong>Fairness:</strong> How is inclusivity ensured in addressing the challenges posed by diverse practitioner characteristics?
            </li>
            <li>
              <strong>Individual, Social, and Environmental Well-being:</strong> How does the use case ensure compliance with relevant local, national or European health and safety guidelines and regulations?
            </li>
            <li>
              <strong>Transparency:</strong> How are the details of informed consent, data processing and other relevant procedures communicated in an understandable and accessible manner to all participants?
            </li>
            <li>
              <strong>Accountability and Oversight:</strong> How are accountability and liability for the HRI system’s performance established, especially in the case of system failures?
            </li>
            <li>
              <strong>Worker Dignity and Equity</strong> How does the HRI solution address potential biases, especially in recognition technologies used in interfaces like touchscreens and natural language processing?
            </li>
            <li>
              <strong>Human Resilience Through Continuous Learning and Support</strong> How does the organization promote a culture where continuous improvement and innovation are encouraged, and learning from mistakes is seen as part of growth?
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 5,
      title: "Interactive learning session - Challenge 5: Enhancing robot functionality through multimodal HRI interactions",
      description: (
        <>
          <p className="use-case-text">
          This use case demonstrates the robot's ability to adapt technology to the user's needs and environment, emphasising a human-centred approach in HRI. It showcases how robots can support personal growth and enrichment activities, making technology an empowering tool rather than a constraint. 
          </p>
          <p className="use-case-text">
            <strong>Actors in this use case:</strong> Care Staff, Patients, Interactive Robot, and Care Environment.
          </p>
          <p className="use-case-text">
            <strong>General workflow:</strong> The focus of this example use case emphasises the patient-robot flow, which has been deemed more interesting from an interaction perspective. The robot first assesses the user’s (patient) skill level and specific interests in using speech recognition and the robot proceeds to personalise the session based on the user’s responses and observable ques. After this, the robot provides step-by-step instructions for the session, utilising multimodal communication like gestures and verbal instructions. The robot then monitors the user’s progress during the session and adjusts the pace or repeats instructions as needed. In addition, the robot uses facial expression recognition and activity recognition to observe signs of frustration and confusion. If these signs are observed, the robot will offer encouragement, suggest breaks, or modify the teaching method to keep the session enjoyable. During the session, the robot will also provide real-time feedback and tips for improvement, encouraging exploration and creativity while simultaneously adapting the session to incorporate the user’s ideas and preferences. After the session, the robot reviews the user’s achievements and areas for improvement. Based on the user’s engagement and feedback, the robot suggests future sessions or related hobbies. The personalised profile of the user is stored for future user interactions with the robot.
          </p>
        
  
          {/* Table */}
          <table className="use-case-table">
            <thead>
              <tr>
                <th>Care staff</th>
                <th>Patients</th>
                <th>Interactive Robot</th>
                <th>Care Environment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Scheduling physical activities via a mobile-based interface</td>
                <td>Different needs, limitations and preferences</td>
                <td>Range of sensing and interaction capabilities</td>
                <td>Physical building layout</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>Orgasinational constraints</td>
              </tr>  
            </tbody>
          </table>
  
          {/* Ethical Concerns Section */}
          <h3>Examples of Ethical Concerns and Their Associated Questions</h3>
          <ul className="ethical-questions">
            <li>
              <strong>Respect for Human Agency:</strong> How will the informed consent of participants (staff, employee, volunteers, patients, etc.) be obtained to ensure ethical requirements are met?
            </li>
            <li>
              <strong>Privacy and Data Governance:</strong> What technical and organizational measures are implemented for further processing of previously collected personal data to safeguard the rights of data subjects?
            </li>
            <li>
              <strong>Fairness:</strong> How are the voice command and camera features designed to consider diverse backgrounds, cognitive abilities and technical capabilities?
            </li>
            <li>
              <strong>Individual, Social, and Environmental Well-being:</strong> What potential health and safety risks to workers are assessed and what measures are implemented to address them?
            </li>
            <li>
              <strong>Transparency:</strong> Has the project completed a misuse compliance statement?
            </li>
            <li>
              <strong>Accountability and Oversight:</strong> What processes are in place to ensure compliance with ethical, legal and organizational standards throughout the research activities?
            </li>
            <li>
              <strong>Worker Dignity and Equity</strong> What mechanisms are in place to continuously monitor and correct biases in algorithms, especially those related to facial expression and activity recognition?
            </li>
            <li>
              <strong>Human Resilience Through Continuous Learning and Support</strong> What features does the robot have to create a psychologically safe learning environment where users feel free to take risks and express creativity?
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 6,
      title: "Asking for help while carrying medical samples - Challenge 6: developing robotic systems able to autonomously perform fetch and carry tasks in healthcare environments",
      description: (
        <>
          <p className="use-case-text">
          This case focuses on using assistive robots for the safe and efficient transportation of medical samples between patient wards and laboratories within healthcare environments. In case of the robot being blocked (for instance, because of a hospital bed blocking the passage in a corridor), the robot looks for someone and asks for help.        </p>
          <p className="use-case-text">
            <strong>Actors in this use case:</strong> Hospital Staff Members and Mobile Manipulator (robot).
          </p>
          <p className="use-case-text">
            <strong>General workflow:</strong> The main flow consists of two interactions that need to be considered, the first one being fetch & carry flow. In this scenario a staff member calls the robot and requests it to bring a medical sample to a known location, for example a laboratory. In this case a nurse places the sample on the robot and then lets the robot go. The second main flow is a help request flow, which follows the first flow. In this case the robot has faced an interruption in its navigation. This could be due to, for example, an object blocking the passage or a door being closed. This results in the robot looking for help to overcome these obstacles in navigation
          </p>
        
  
          {/* Table */}
          <table className="use-case-table">
            <thead>
              <tr>
                <th>Hospital Staff Members</th>
                <th>Mobile Manipulator (Robot)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Send requests for the robot for samples</td>
                <td>Carry samples</td>
              </tr>
              <tr>
                <td>Load the samples on to the robot</td>
                <td>Navigate Obstacles</td>
              </tr> 
              <tr>
                <td>Assist robot when interruptions in navigation happens</td>
                <td>Ask for help when navigation is interrupted</td>
              </tr> 
            </tbody>
          </table>
  
          {/* Ethical Concerns Section */}
          <h3>Examples of Ethical Concerns and Their Associated Questions</h3>
          <ul className="ethical-questions">
            <li>
              <strong>Respect for Human Agency:</strong> What are the procedures and criteria for identifying and recruiting research participants (e.g., number of participants, inclusion/exclusion criteria, direct/indirect incentives, risks, and benefits for participants?)
            </li>
            <li>
              <strong>Privacy and Data Governance:</strong> How does the use case ensure that the data processed is relevant and limited to the purposes of the project, in compliance with the data minimization principle?
            </li>
            <li>
              <strong>Fairness:</strong> How are the voice command and camera features designed to consider diverse backgrounds, facial features, languages, and accents of participants?
            </li>
            <li>
              <strong>Individual, Social, and Environmental Well-being:</strong> What protocols are in place for safe physical interaction, including detailed fail-safe mechanisms?
            </li>
            <li>
              <strong>Transparency:</strong> Are the participants informed about the purposes, risks, and benefits of their involvement in the research activities?
            </li>
            <li>
              <strong>Accountability and Oversight:</strong> How will the implementation of health and safety procedures, data collection measures and informed consent processes be monitored and evaluated?
            </li>
            <li>
              <strong>Worker Dignity and Equity</strong> Is the robot’s interface designed to be easily usable by all staff, regardless of their technical skill levels or physical capabilities?
            </li>
            <li>
              <strong>Human Resilience Through Continuous Learning and Support</strong> What channels are available for staff to report issues or suggest improvements regarding the robot’s operations?
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 7,
      title: "PCB Desoldering - Challenge 7: Leveraging HRI to improve the efficiency of workers in high precision flexible tasks",
      description: (
        <>
          <p className="use-case-text">
          Reworking of printed circuit boards (PCBs) which did not pass the quality control check is considered a high-precision task. Defective PCBs should be recovered, i.e., defective components must be identified and replaced by operational ones. The process of replacing components is intricate and time-consuming, in the sense that an operator must (i) recognize the defective components on the board by the information received from the quality control station, (ii)  pick the functional component among the pool of components (it may be time-consuming, due to similarity of components, for example, resistors with identical shape and different resistance values), (iii) select the suitable tools among the available tools, depending on the type of components and the level of operator expertise, (iv) solder and desolder components taking into account to avoid applying excessive heat to components and board, to orient components correctly, to inspect new soldered joints, and etc., which causes high levels of physical and mental stress on them. 
          </p>
          <p className="use-case-text">
            <strong>Actors in this use case:</strong> Human Workers, UR5e Robot, and AGV.
          </p>
          <p className="use-case-text">
            <strong>General workflow:</strong> The main flow starts by the automated guided vehicle carrying the defective PCBs from the control station room to the reworking stations room. During this, the UR5e robot is preparing the rework station by the data received from the control unit. Preparation of the rework station includes identification of the proper tools and functional components from the available pool of tools and components via computer vision. The robot also picks and places all the needed objects on the rework station. The identification of correct tools happens through BGR and depth images that are sent from the robot to the PC, where the PC runs object detection algorithms to identify the correct tools and components. In addition, their positions are calculated. In addition, the automated guided vehicle is provided with a map of the building, so that it can navigate across the shop floor.
          </p>
        
  
          {/* Table */}
          <table className="use-case-table">
            <thead>
              <tr>
                <th>Human Workers</th>
                <th>UR5e Robot</th>
                <th>AGV</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Soldering/desoldering</td>
                <td>Pick the functional component among the pool of components</td>
                <td>Carry defective PCBs from the control station room to the reworking station</td>
              </tr>
              <tr>
                <td></td>
                <td>Select the suitable tools among the available tools</td>
                <td></td>
              </tr> 
              <tr>
                <td></td>
                <td>Set up working space</td>
                <td></td>
              </tr> 
            </tbody>
          </table>
  
          {/* Ethical Concerns Section */}
          <h3>Examples of Ethical Concerns and Their Associated Questions</h3>
          <ul className="ethical-questions">
            <li>
              <strong>Respect for Human Agency:</strong> How are participants, such as employees, being given opportunities to train their skill in HRI?
            </li>
            <li>
              <strong>Privacy and Data Governance:</strong> What are the detailed procedures for obtaining informed consent regarding data processing?
            </li>
            <li>
              <strong>Fairness:</strong> How is inclusivity ensured in addressing the challenges posed by diverse practitioner characteristics?
            </li>
            <li>
              <strong>Individual, Social, and Environmental Well-being:</strong> What sustainability practices are adopted for dismantling, assembly and the environmental impact of the use case?
            </li>
            <li>
              <strong>Transparency:</strong> Has the project completed a dual-use compliance statement?
            </li>
            <li>
              <strong>Accountability and Oversight:</strong> How are accountability and liability for the HRI system’s performance established, especially in the case of system failures?
            </li>
            <li>
              <strong>Worker Dignity and Equity</strong> Are there safeguards to prevent certain operators from consistently receiving more challenging or stressful rework tasks based on the system’s performance assessment?
            </li>
            <li>
              <strong>Human Resilience Through Continuous Learning and Support</strong> Are there mechanisms for operators to report issues, provide suggestions and contribute to continuous improvement efforts without fear of reprisal or negative impacts on their employment?
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 8,
      title: "Workpiece holder - Challenge 8: Leveraging HRI for improving ergonomics in high precision tasks",
      description: (
        <>
          <p className="use-case-text">
          The robot holds the workpiece in the appropriate position and orientation while an operator is working on it. Through the machine vision, the physical features of the operator including the height, and neck length are provided to the robot for calculating the right position and orientation of the workpiece considering the ergonomics and comfort of the operator. In addition, for the further adjustment of orientation, the operator sends a speech command to the robot.  
          </p>
          <p className="use-case-text">
            <strong>Actors in this use case:</strong> Operator and UR5e Robot.
          </p>
          <p className="use-case-text">
            <strong>General workflow:</strong> The main flow of the process initiates by capturing BGR and depth images of the operator and sending these images to the PC. The PC then extracts the relevant physical features of the operator, and the appropriate ergonomics and comfort of the operator are defined. In the next step, the desired joint angles of the robot are obtained and sent to the robot for holding the workpiece. The operator’s speech is captured and used for voice commands to the robot to make required adjustments.
          </p>
        
  
          {/* Table */}
          <table className="use-case-table">
            <thead>
              <tr>
                <th>Operator</th>
                <th>UR5e Robot</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Send move commands to the robot verbally</td>
                <td>Adjusts the workpiece orientation</td>
              </tr>
              <tr>
                <td></td>
                <td>Estimate the pose of the workpiece according to physical parameters of operators through images.</td>
              </tr>
            </tbody>
          </table>
  
          {/* Ethical Concerns Section */}
          <h3>Examples of Ethical Concerns and Their Associated Questions</h3>
          <ul className="ethical-questions">
            <li>
              <strong>Respect for Human Agency:</strong> How does the project consider the risk of worker displacement due to automation and what measures are implemented to mitigate this risk? 
            </li>
            <li>
              <strong>Privacy and Data Governance:</strong> Has the DPO been appointed and are the contact details of the DPO made available to all data subjects involved in the research?
            </li>
            <li>
              <strong>Fairness:</strong> How are the voice commands designed to consider diverse backgrounds, and non-standard accents?
            </li>
            <li>
              <strong>Individual, Social, and Environmental Well-being:</strong> How does the use case ensure compliance with relevant local, national or European health and safety guidelines and regulations?
            </li>
            <li>
              <strong>Transparency:</strong> How are the details of informed consent, data processing and other relevant procedures communicated in an understandable and accessible manner to all participants?
            </li>
            <li>
              <strong>Accountability and Oversight:</strong> How will the implementation of health and safety procedures, data collection measures and informed consent processes be monitored and evaluated?
            </li>
            <li>
              <strong>Worker Dignity and Equity</strong> How can the system be audited for bias in the recognition and adjustment algorithms to ensure fair treatment of all operators?
            </li>
            <li>
              <strong>Human Resilience Through Continuous Learning and Support</strong> What training and support mechanisms are provided to operators to effectively interact with the robot, especially for those less familiar with advanced technology.
            </li>
          </ul>
        </>
      ),
    }
  ];

export default useCases;