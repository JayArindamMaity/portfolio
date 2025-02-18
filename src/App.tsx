import Backvid from './components/backvid/backvid.tsx';
import Navbar from './components/nav/nav.tsx';
import Home from './pages/home/home.tsx';
import Certificates from './pages/certificates/certificates.tsx';
import Contact from './pages/contact/contact.tsx';
import Projects from './pages/projects/projects.tsx';
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
