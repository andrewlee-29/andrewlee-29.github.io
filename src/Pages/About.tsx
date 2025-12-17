import { 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJava, 
  FaDatabase, 
  FaHtml5, 
  FaCss3Alt,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa6';
import { TbBrandCSharp } from "react-icons/tb";

import { motion } from 'framer-motion';
import Timeline from '../Components/Timeline';
export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4 text-black dark:text-white" >About Me</h1>
      {/* icon link to github profile */}
      <motion.a
        href="https://github.com/andrewlee-29"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mb-4"
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaGithub className="w-12 h-12 text-black dark:text-white" />
      </motion.a>
      {/* icon link to linkedin profile */}
      <motion.a
        href="https://www.linkedin.com/in/andrewlee29/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mb-4 ml-4"
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaLinkedin className="w-12 h-12 text-black dark:text-white" />
      </motion.a>
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-black dark:text-white">Who I Am</h2>
      <p className="text-gray-700 leading-relaxed dark:text-gray-300">
        I am a developer who loves building cool things.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2 text-black dark:text-white">Professional Journey</h2>
        <p className="text-gray-700 leading-relaxed dark:text-gray-300">
            I graduated with a Bachelor's degree in Computer Science and Master degree in Data Science. 
            I have worked on various projects ranging from web development to mobile applications.
        </p>
      <h2 className="text-2xl font-semibold mt-6 mb-5 text-black dark:text-white">Skills & Technologies</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <motion.li 
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="flex flex-col items-center justify-center w-24 h-24 bg-yellow-100 dark:bg-yellow-900 rounded shadow-md hover:shadow-lg transition-shadow">
              <FaJs className="text-yellow-400 text-3xl mb-2"  />
              <span className="text-xs text-cyan-700 dark:text-emerald-400 text-center font-bold">JavaScript/TS</span>
            </motion.li>
            <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="flex flex-col items-center justify-center w-24 h-24 bg-cyan-100 dark:bg-cyan-900 rounded shadow-md hover:shadow-lg transition-shadow">
              <FaReact className="text-cyan-400 text-3xl mb-2" />
              <span className="text-xs text-cyan-700 dark:text-emerald-400 text-center font-bold">React</span>
            </motion.li>
            <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="flex flex-col items-center justify-center w-24 h-24 bg-green-100 dark:bg-green-900 rounded shadow-md hover:shadow-lg transition-shadow">
              <FaNodeJs className="text-green-600 text-3xl mb-2" />
              <span className="text-xs text-cyan-700 dark:text-emerald-400 text-center font-bold">Node.js</span>
            </motion.li>
            <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
             className="flex flex-col items-center justify-center w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded shadow-md hover:shadow-lg transition-shadow">
              <FaPython className="text-blue-500 text-3xl mb-2" />
              <span className="text-xs text-cyan-700 dark:text-emerald-400 text-center font-bold">Python</span>
            </motion.li>
            <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="flex flex-col items-center justify-center w-24 h-24 bg-red-100 dark:bg-red-900 rounded shadow-md hover:shadow-lg transition-shadow">
              <FaJava className="text-red-600 text-3xl mb-2" />
              <span className="text-xs text-cyan-700 dark:text-emerald-400 text-center font-bold">Java</span>
            </motion.li>
            <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
             className="flex flex-col items-center justify-center w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded shadow-md hover:shadow-lg transition-shadow">
              <FaDatabase className="text-blue-700 text-3xl mb-2" />
              <span className="text-xs text-cyan-700 dark:text-emerald-400 text-center font-bold">MySQL</span>
            </motion.li>
            <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="flex flex-col items-center justify-center w-24 h-24 bg-orange-100 dark:bg-orange-900 rounded shadow-md hover:shadow-lg transition-shadow">
              <FaHtml5 className="text-orange-600 text-3xl mb-2" />
              <span className="text-xs text-cyan-700 dark:text-emerald-400 text-center font-bold">HTML</span>
            </motion.li>
            <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="flex flex-col items-center justify-center w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded shadow-md hover:shadow-lg transition-shadow">
              <FaCss3Alt className="text-blue-500 text-3xl mb-2" />
              <span className="text-xs text-cyan-700 dark:text-emerald-400 text-center font-bold">CSS</span>
            </motion.li>
            <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="flex flex-col items-center justify-center w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded shadow-md hover:shadow-lg transition-shadow">
              <TbBrandCSharp className="text-blue-500 text-3xl mb-2" />
              <span className="text-xs text-cyan-700 dark:text-emerald-400 text-center font-bold">C#</span>
            </motion.li>
        </ul>


        <h2 className="text-2xl font-bold mt-8 text-black dark:text-white">Work Experience</h2>
        <Timeline />
        <h2 className="text-2xl font-semibold mt-6 mb-2 text-black dark:text-white">Contact Me</h2>
        <p className="text-gray-700 leading-relaxed dark:text-gray-300">
            Feel free to reach out to me via email at <a href="mailto:andrewlee_29w@hotmail.com">andrewlee_29w@hotmail.com</a>.
        </p>
        <h3 className=" text-center text-xl font-semibold mt-12 mb-2 text-black dark:text-white">Thanks for visiting my site! </h3>
    </section>
  );
}