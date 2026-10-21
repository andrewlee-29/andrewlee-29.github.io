import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Home from './Pages/Home'
import Project from './Pages/Project'
import NotFound from './Pages/NotFound'
import Loader from './Components/Loader'
import { useEffect, useState } from 'react'

function App() {
  const location = useLocation();

  // Each history entry starts with fresh loading state, including back/forward.
  return <RouteContent key={location.key} />;
}

function RouteContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // Adjust duration as needed
    return () => clearTimeout(timer);
  }, []);

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
