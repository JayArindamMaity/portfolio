import Backvid from './components/backvid/backvid.tsx';
import Navbar from './components/nav/nav.tsx';
import Home from './components/home/home.tsx';
import Certificates from './components/certificates/certificates.tsx';
import Contact from './components/contact/contact.tsx';
import Projects from './components/projects/projects.tsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './app.css';

function App() {
  return (
    <>        
      <Router>
        <Backvid />
        <Navbar />
        <div className='internals'>
          <Routes>
            <Route path="/portfolio" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>      
        </div>
      </Router>
    </>
  );
}

export default App;
