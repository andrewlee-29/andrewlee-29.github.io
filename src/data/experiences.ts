// Experience interface and data
interface Experience {
  title: string;
  company: string;
  date: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    title: "Computer Science Instructor",
    company: "Icode Wellesley ",
    date: "September 2025 - Present",
    description: "• Taught mobile app and web development courses using C# .NET MAUI, HTML, CSS, and JavaScript.\n "
    +"• Instructed K–12 students on core programming concepts and problem-solving skills. \n"
    +"• Adapted curriculum and teaching strategies to match students’ varying skill levels and learning needs. "
    ,
},
  {
    title: "Production Operations Specialist",
    company: "Toast",
    date: "September 2021 - January 2023",
    description: "• Assembled, configured, and tested Toast hardware to ensure accurate functionality and performance before shipment to customers. \n"
+"• Communicated with the shipping team to fulfill customers' special requests for hardware assembly. \n"
+"• Developed and maintained Standard Operating Procedures (SOP), Production Forms, and Reports using G-suite to streamline operations and track production data. \n"
+"• Demonstrated proficiency in troubleshooting Toast hardware and software, including scripting, printers, and POS terminals, to ensure smooth operations and customer satisfaction. \n"
+"• Updated the python automation scripts to support new apple’s M1 architecture for maintaining the automation in the warehouse.",
  },
  {
    title: "Mobile App and Microcontroller CO-OP  ",
    company: "Wentworth Institute of Technology",
    date: "September 2020 - December 2020",
    description: "• Designed and developed a Java Android mobile application to connect to a knee prosthetic device using Bluetooth, enabling real-time transmission of sensor data to Android devices. \n"
+"• Implemented data visualization features in the mobile app to display real-time sensor data, enhancing user experience and usability. \n" 
+"• Worked in the software development lifecycle by creating system architecture, ER diagram, and UX design prototype to visualize the system design. ",
  },
  {
    title: "Project Management CO-OP",
    company: "MassHealth Data Warehouse",
    date: "September 2019 - December 2019",
    description: "• Designed the Data warehouse automation Intake system which takes report requests, technical support requests, and project requests from the business requestors. \n"
+"• Created the system requirement document, workflow, and screen templates for the Data warehouse automation Intake system. \n"
+"• Worked as an intake coordinator to analyze business requests, create Jira tickets, and route the request to the corresponding team. "
  },

];
