import ProjectCard from "../Components/ProjectCard";

export default function Projects() {
  const items = [
    { 
        title: "Mobile-Enabled Prosthetic System with Machine Learning Support", 
        desc: "Designed and developed a Java Android mobile application to connect to a knee prosthetic device using Bluetooth, enabling real-time transmission of sensor data to Android devices." 
        +"Worked in the software development lifecycle by creating system architecture, ER diagram, and UX design prototype to visualize the system design.", 
        link1: { url: "https://ieeexplore.ieee.org/document/10880762", label: "IEEE Paper" },
        link2: { url: "https://www.researchgate.net/publication/389118958_Mobile-Enabled_Prosthetic_System_with_Machine_Learning_Support", label: "ResearchGate" }},
    { 
        title: "Testing with Dilated CNN model for Image Classification", 
        desc: "Tested and compared the result of traditional CNN, dilated CNN, and hybrid dilated CNN (HDC) with my own implementation.", 
        link1: { url: "https://github.com/andrewlee-29/Applied_Deep_Learning_2023Summer/tree/main/Project", label: "Github" } },

    {
        title: "Data Science Capstone Project: Sentiment analysis on the public opinion of generative AI",
        desc: "Examine sentiment analysis on the public opinion of generative AI.",
        link1: { url: "https://github.com/andrewlee-29/CAPSTONE_2023_Summer/blob/main/Capstone%20final%20paper-Andrew%20Lee.docx.pdf", label: "Github" } },
    
    {
        title: "Data Scinece Foundation Project Car Price Prediction ( Economic Class Classification)",
        desc: "Practiced using python and different machine learning techniques to make some prediction. ",
        link1: { url: "https://github.com/andrewlee-29/DsfCarPriceClassification", label: "Github" }
    },
    {
        title: "cancer_classifier",
        desc: "used Machine learning techique to create cancer classifer base on the cancer cell's features.",
        link1: { url: "https://github.com/andrewlee-29/cancer_classifier", label: "Github" }
    },
    {
        title: "Python 100 days projects",
        desc: "Python project exercises from Udemy course. https://www.udemy.com/course/100-days-of-code/",
        link1: { url: "https://github.com/andrewlee-29/100daysPython_Bootcamp2022", label: "Github" }
    },
    //     {
    //     title: "",
    //     desc: "",
    //     link1: { url: "", label: "" }
    // },
    ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}