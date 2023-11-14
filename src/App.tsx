import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import Aboutme from './component/Aboutme'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<Aboutme />} /> */}
      </Routes>
      <Aboutme />
    </div>
  )
}

export default App
