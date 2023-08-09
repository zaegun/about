import { Routes, Route } from "react-router-dom"
import logo from './logo.svg';
import Nav from './components/Nav.js';
import TY from './components/TY.js';
import About from './components/About.js';
import Work from './components/Work.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact.js';
import Foot from './components/Foot.js';

import './App.css';

function App() {
  return (
    <div className="App">
        <Nav />
        <Routes>
            <Route index element={<About />} />
            <Route path="/about/" element={<About />} />
            <Route path="about/my_work" element={<Work />} />
            <Route path="/about/my_skills" element={<Skills />} />
            <Route path="/about/my_contact" element={<Contact />} />
            <Route path="/about/TY" element={<TY />} />
        </Routes>
        <Foot />
    </div>
  );
}

export default App;
