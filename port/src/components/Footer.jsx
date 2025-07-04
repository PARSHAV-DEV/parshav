import React from "react";

const currentYear = new Date().getFullYear();

const Footer = () => {

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
            <img src="/images/linkedin.jpg" alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/PARSHAV-DEV"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src="/images/github.jpg" alt="GitHub" />
          </a>
        </div>
      </div>
    </footer>
  )
};

export default Footer;