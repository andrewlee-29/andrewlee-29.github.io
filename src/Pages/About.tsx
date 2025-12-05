import { 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJava, 
  FaDatabase, 
  FaHtml5, 
  FaCss3Alt 
} from 'react-icons/fa6';
import { motion } from 'framer-motion';
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
      <h2 className="text-2xl font-semibold mt-6 mb-5 ">Skills & Technologies</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <motion.li 
            whileHover={{
              scale: [null, 1.1, 1.4],
              transition: {
              duration: 0.5,
              times: [0, 0.6, 1],
              ease: ["easeInOut", "easeOut"],},
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="flex flex-col items-center justify-center w-24 h-24 bg-yellow-100 rounded shadow-md hover:shadow-lg transition-shadow">
              <FaJs className="text-yellow-400 text-3xl mb-2" />
              <span className="text-xs text-gray-700 text-center">JavaScript/TS</span>
            </motion.li>
            <motion.li 
              whileHover={{
              scale: [null, 1.1, 1.4],
              transition: {
              duration: 0.5,
              times: [0, 0.6, 1],
              ease: ["easeInOut", "easeOut"],},
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="flex flex-col items-center justify-center w-24 h-24 bg-cyan-100 rounded shadow-md hover:shadow-lg transition-shadow">
              <FaReact className="text-cyan-400 text-3xl mb-2" />
              <span className="text-xs text-gray-700 text-center">React</span>
            </motion.li>
            <motion.li
              whileHover={{
              scale: [null, 1.1, 1.4],
              transition: {
              duration: 0.5,
              times: [0, 0.6, 1],
              ease: ["easeInOut", "easeOut"],},
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="flex flex-col items-center justify-center w-24 h-24 bg-green-100 rounded shadow-md hover:shadow-lg transition-shadow">
              <FaNodeJs className="text-green-600 text-3xl mb-2" />
              <span className="text-xs text-gray-700 text-center">Node.js</span>
            </motion.li>
            <motion.li
            whileHover={{
              scale: [null, 1.1, 1.4],
              transition: {
              duration: 0.5,
              times: [0, 0.6, 1],
              ease: ["easeInOut", "easeOut"],},
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
             className="flex flex-col items-center justify-center w-24 h-24 bg-blue-100 rounded shadow-md hover:shadow-lg transition-shadow">
              <FaPython className="text-blue-500 text-3xl mb-2" />
              <span className="text-xs text-gray-700 text-center">Python</span>
            </motion.li>
            <motion.li
            whileHover={{
              scale: [null, 1.1, 1.4],
              transition: {
              duration: 0.5,
              times: [0, 0.6, 1],
              ease: ["easeInOut", "easeOut"],},
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="flex flex-col items-center justify-center w-24 h-24 bg-red-100 rounded shadow-md hover:shadow-lg transition-shadow">
              <FaJava className="text-red-600 text-3xl mb-2" />
              <span className="text-xs text-gray-700 text-center">Java</span>
            </motion.li>
            <motion.li
            whileHover={{
              scale: [null, 1.1, 1.4],
              transition: {
              duration: 0.5,
              times: [0, 0.6, 1],
              ease: ["easeInOut", "easeOut"],},
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
             className="flex flex-col items-center justify-center w-24 h-24 bg-blue-100 rounded shadow-md hover:shadow-lg transition-shadow">
              <FaDatabase className="text-blue-700 text-3xl mb-2" />
              <span className="text-xs text-gray-700 text-center">MySQL</span>
            </motion.li>
            <motion.li
            whileHover={{
              scale: [null, 1.1, 1.4],
              transition: {
              duration: 0.5,
              times: [0, 0.6, 1],
              ease: ["easeInOut", "easeOut"],},
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="flex flex-col items-center justify-center w-24 h-24 bg-orange-100 rounded shadow-md hover:shadow-lg transition-shadow">
              <FaHtml5 className="text-orange-600 text-3xl mb-2" />
              <span className="text-xs text-gray-700 text-center">HTML</span>
            </motion.li>
            <motion.li
            whileHover={{
              scale: [null, 1.1, 1.4],
              transition: {
              duration: 0.5,
              times: [0, 0.6, 1],
              ease: ["easeInOut", "easeOut"],},
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="flex flex-col items-center justify-center w-24 h-24 bg-blue-100 rounded shadow-md hover:shadow-lg transition-shadow">
              <FaCss3Alt className="text-blue-500 text-3xl mb-2" />
              <span className="text-xs text-gray-700 text-center">CSS</span>
            </motion.li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Me</h2>
        <p className="text-gray-700 leading-relaxed">
            Feel free to reach out to me via email at <a href="mailto:andrewlee_29w@hotmail.com">andrewlee_29w@hotmail.com</a>.
        </p>
    </section>
  );
}