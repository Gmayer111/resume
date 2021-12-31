import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from 'pages/Home';
import About from 'pages/About';
import Resume from 'pages/Resume';
import Portfolio from 'pages/Portfolio';
import Contact from 'pages/Contact';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/cv" element={<Resume />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </Router>

  );
}

export default App;
