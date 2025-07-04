import React from "react";
import profile from "../assets/profile.jpg"; // Adjust the path as necessary

const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <img src={profile} alt="Parshav Gundigara" className="profile-pic" />
        <h1>Parshav Gundigara</h1>
        <p className="subtitle">
          Full Stack Web Developer | PHP • JavaScript • MySQL • Big Data • MongoDB
        </p>
        <nav>
          <ul>
            {/* You can use react-scroll Link for smooth scroll, or simple <a> tags */}
            <li>
              <a href="#about">About</a>
              {/* Or: <Link to="about" smooth>About</Link> */}
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#certificates">Certificates</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#feedback">Feedback</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
};

export default Header;