import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Home from './Pages/Home'
import Project from './Pages/Project'
import Loader from './Components/Loader'
import { useEffect, useState } from 'react'

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Show loader on initial load and every route change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1500); // Adjust duration as needed
    return () => clearTimeout(timer);
  }, [location]);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
