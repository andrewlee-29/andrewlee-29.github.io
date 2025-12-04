export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      {/* icon link to github profile */}
      <a href="https://github.com/andrewlee-29" target="_blank" rel="noopener noreferrer" className="inline-block mb-4">
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="GitHub Profile"
          className="w-12 h-12"
        />
      </a>
       {/* icon link to linkedin profile */}
        <a href="https://www.linkedin.com/in/andrewlee29/" target="_blank" rel="noopener noreferrer" className="inline-block mb-4 ml-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn Profile"
            className="w-12 h-12"
          />
        </a>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Who I Am</h2>
      <p className="text-gray-700 leading-relaxed">
        I am a developer who loves building cool things.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Professional Journey</h2>
        <p className="text-gray-700 leading-relaxed">
            I graduated with a Bachelor's degree in Computer Science and Master degree in Data Science. 
            I have worked on various projects ranging from web development to mobile applications.
        </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Skills & Technologies</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>JavaScript / TypeScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Python/C#/Java</li>
            <li>MySQL</li>
            <li>Html/CSS</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Me</h2>
        <p className="text-gray-700 leading-relaxed">
            Feel free to reach out to me via email at <a href="mailto:andrewlee_29w@hotmail.com">andrewlee_29w@hotmail.com</a>.
        </p>
    </section>
  );
}