import React from "react";
import linkedin from '../assets/images/linkedin.jpg';
import github from "../assets/images/github.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <p>&copy; {currentYear} Parshav Gundigara. All rights reserved.</p>
        <div className="footer-social">
          <a
            href="https://linkedin.com/in/parshav"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/PARSHAV-DEV"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src={github} alt="GitHub" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;