import React from "react";
import './contact.css'

const Contact: React.FC = () => {
  return (
    <>
    <div className="contact-content">
        <div className="contact-title">
          Contact Me:
        </div>
        <div className="contact-paragraph">
          Hey! you wish to contact me or know more about me here are some of the ways/links to do so...
        </div>
        <div className="">
          <ul className="contact-list">
            <li>
              <a href="https://www.instagram.com/jayarindammaity" target="_blank" rel="noopener noreferrer" className="contact-links">
                Instagram: www.instagram.com/jayarindammaity
              </a>
            </li>
            <li>
              <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="contact-links">
                Twitter:  
              </a>
            </li>
            <li>GitHub: </li>
            <li>Linkedin: </li>
            <li>Mail: jayarindammaity08@gmail.com</li>
          </ul>
        </div>
    </div>
    </>
  );
};

export default Contact;
