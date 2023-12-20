import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import Projects from './pages/Projects'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        {/* <Route path="/journey" element={<Aboutme />} /> */}
      </Routes>
    </div>
  )
}

export default App
