import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router'
import About from './Pages/About'
import Home from './Pages/Home'
import Projects from './Pages/Project'
function App() {

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  )
}

export default App
