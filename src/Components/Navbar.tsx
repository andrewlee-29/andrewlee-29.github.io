import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Force add dark class on initial load
    document.documentElement.classList.add("dark");
    setDark(true);
  }, []);

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
    setDark(document.documentElement.classList.contains("dark"));
    console.log(document.documentElement.className); // Debug line
  };

  return (
    <nav className="w-full bg-sky-200 dark:bg-sky-950 shadow-sm">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-xl font-semibold text-cyan-700 dark:text-emerald-300">Andrew Lee</div>
        <ul className="flex gap-6 text-gray-700 dark:text-gray-200">
          <li><Link className="hover:text-black dark:hover:text-white" to="/">Home</Link></li>
          <li><Link className="hover:text-black dark:hover:text-white" to="/about">About</Link></li>
          <li><Link className="hover:text-black dark:hover:text-white" to="/projects">Projects</Link></li>
        </ul>
        <button
          onClick={toggleDark}
          className="ml-4 px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
        >
          {dark ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}