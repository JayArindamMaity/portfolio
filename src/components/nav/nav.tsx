import { useState } from "react";
import { Menu, X, Home, Info, Briefcase, Mail } from "lucide-react";
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
            <a href="#" className="nav-item" data-tooltip="Home">
              <Home size={24} />
            </a>
          </li>
          <li>
            <a href="#" className="nav-item" data-tooltip="About">
              <Info size={24} />
            </a>
          </li>
          <li>
            <a href="#" className="nav-item" data-tooltip="Services">
              <Briefcase size={24} />
            </a>
          </li>
          <li>
            <a href="#" className="nav-item" data-tooltip="Contact">
              <Mail size={24} />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
