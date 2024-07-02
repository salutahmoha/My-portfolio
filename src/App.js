import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/navbar';

import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Work from './Components/Pages/Work';
import Contact from './Components/Pages/Contact';


function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
  );
}

export default App;
