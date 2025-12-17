import React, { useRef, useEffect, useState } from "react";

// Experience interface and data
interface Experience {
  title: string;
  company: string;
  date: string;
  description: string;
}

const experiences: Experience[] = [
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

// Timeline component displays a vertical timeline of work experiences.
// It includes a scroll progress indicator that fills the timeline line as the user scrolls down.
// The fill starts after the timeline enters the viewport, controlled by the 'offset' value.
const Timeline: React.FC = () => {
  const timelineRef = useRef<HTMLUListElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // This function calculates how much of the timeline should be filled
    // based on the user's scroll position.
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;
      const offset = 300; // The fill starts after scrolling past this offset

      // Calculate the scrolled amount, clamp between 0 and totalHeight
      const scrolled = Math.min(Math.max(windowHeight - rect.top - offset, 0), totalHeight);

      // Set progress as a percentage of the timeline height
      setProgress((scrolled / totalHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to set progress

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="p-8 relative">
      <div className="relative">
        {/* 
          Scroll progress indicator:
          - The blue bar fills vertically as the user scrolls down the timeline.
          - The fill starts after the timeline enters the viewport (controlled by 'offset').
        */}
        <div className="absolute left-0 top-0 h-full w-2 mt-5">
          <div
            className="bg-blue-400 rounded-full"
            style={{ height: `${progress}%`, transition: "height 0.2s" }}
          />
        </div>
        {/* 
          Timeline list:
          - Each experience is shown as a timeline item.
          - The left border acts as the timeline line.
          - Dots mark each experience.
        */}
        <ul
          ref={timelineRef}
          className="relative border-l-4 border-blue-200 pl-6"
        >
          {experiences.map((exp, idx) => (
            <li key={idx} className="mb-10">
              {/* Timeline dot */}
              <div className="absolute -left-2.5 w-5 h-5 bg-blue-600 rounded-full border-4 border-white"></div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-700 dark:text-emerald-400">{exp.title}</h3>
                <p className="font-bold text-gray-700 dark:text-gray-300">{exp.company}</p>
                <span className="text-gray-500 text-sm dark:text-gray-400">{exp.date}</span>
                {/* Description supports line breaks */}
                <p className="mt-2 text-gray-600 dark:text-gray-300 whitespace-pre-line">{exp.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;