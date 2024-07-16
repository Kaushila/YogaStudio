import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="SerenityYoga Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/classes" className={location.pathname === '/classes' ? 'active' : ''}>
            Classes
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/blogs" className={location.pathname === '/blogs' ? 'active' : ''}>
            Blogs
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
