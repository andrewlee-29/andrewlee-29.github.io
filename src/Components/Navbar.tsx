import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-xl font-semibold">Andrew Lee</div>
        <ul className="flex gap-6 text-gray-700">
          <li><Link className="hover:text-black" to="/">Home</Link></li>
          <li><Link className="hover:text-black" to="/about">About</Link></li>
          <li><Link className="hover:text-black" to="/projects">Projects</Link></li>
        </ul>
      </div>
    </nav>
  );
}