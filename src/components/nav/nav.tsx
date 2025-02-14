import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, FolderOpen, Award, Mail } from "lucide-react";
import "./nav.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button for Small Screens */}
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navbar */}
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-item" data-tooltip="Home">
              <Home size={24} />
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-item" data-tooltip="Projects">
              <FolderOpen size={24} />
            </Link>
          </li>
          <li>
            <Link to="/certificates" className="nav-item" data-tooltip="Certifications">
              <Award size={24} />
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-item" data-tooltip="Contact">
              <Mail size={24} />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
