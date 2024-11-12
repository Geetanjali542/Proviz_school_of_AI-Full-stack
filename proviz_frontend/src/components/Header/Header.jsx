import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <h1>Proviz School of AI</h1>
      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="#introduction">Home</a>
        <a href="#apply">Apply Now</a>
        <a href="#apply">Courses & Certifications</a>
        <a href="#apply">About Us</a>
        <a href="#apply">Contact Us</a>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Header;
