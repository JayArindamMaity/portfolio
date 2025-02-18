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
          <ul>
            <li>Instagram: </li>
            <li>Twitter: </li>
            <li>GitHub: </li>
            <li>Linkedin: </li>
            <li>Mail: </li>
          </ul>
        </div>
    </div>
    </>
  );
};

export default Contact;
