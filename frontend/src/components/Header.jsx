import React, { useState } from "react";
import "../styles/Header.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import sodhLogo from "../images/sodh.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="contact-info">
          <span>
            <FaPhoneAlt /> +91 - 9990316499
          </span>
          <span>
            <FaEnvelope /> phd@gmail.com
          </span>
        </div>
        <div className="top-links">
          <a href="#">For Students</a>
          <a href="#">For Mentors</a>
          <a href="#">For Institutions</a>
          <FaFacebookF className="social-icon" />
          <FaLinkedinIn className="social-icon" />
        </div>
      </div>

      {/* Main Header */}
      <header className="header">
        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Logo */}
        <div className="logo">
          <img src={sodhLogo} alt="ShodhSutra" />
        </div>

        {/* Navigation */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
  {/* Close button inside menu */}
  <div className="close-btn" onClick={() => setMenuOpen(false)}>
    <FaTimes />
  </div>
          <a href="/">Home</a>

          {/* Dropdown Menu */}
          <div className="dropdown">
            <a href="#">About Us ▽</a>
            <div className="dropdown-menu">
            
  <a href="/about" className="about-link">Meet ShodhSutra</a>


              <a href="/whyprusuie">Why Pursue a PhD?</a>
            </div>
          </div>

          <a href="#">Process</a>
          <a href="#">Disciplines</a>
          <a href="#">Guides</a>
          <a href="#">Contact Us</a>
        </nav>

        {/* Apply Now Button */}
        <button className="apply-btn">Apply Now</button>
      </header>
    </div>
  );
};

export default Header;
