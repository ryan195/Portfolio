import './App.css'
import Aboutpage from "./components/Aboutpage";
import Experiencepage from "./components/Experiencepage"
import Projectpage from "./components/Projectpage"
import Educationpage from "./components/Educationpage"
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Aboutpage />}/>
        <Route path="/experience" element={<Experiencepage />}/>
        <Route path="/project" element={<Projectpage />}/>
        <Route path="/education" element={<Educationpage />}/>

      </Routes>
    </Router>
  );
}

export default App;