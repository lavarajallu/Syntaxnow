import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/images/Syntaxnow Logo.png";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`header ${scrolling ? 'header--scrolled' : ''}`}>
      <div className="navbar_content container">
        <img className="logo" src={Logo} alt="Logo" />
        <button className="menu-toggle" onClick={toggleMenu}>
          {!menuOpen ? (
            <>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </>
          ) : (
            <span className="close-button">&times;</span>
          )}
        </button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`} type="none" onClick={closeMenu}>
          <li className="dropdown">
            <Link to="/">Services</Link>
          </li>
          <li className="dropdown">
            <Link to="/">Industries</Link>
          </li>
          <li>
            <Link to="/">Company</Link>
          </li>
          <li>
            <Link to="/">Careers</Link>
          </li>
        </ul>
        <button className="contact-button">Contact Us</button>
      </div>
    </div>
  );
};

export default Navbar;
