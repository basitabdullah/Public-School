import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src="./logo.png"  
            alt="School Logo"
            className="logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> 
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/academics" className="nav-link">Academics</Link>
            </li>
            <li className="nav-item">
              <Link to="/admissions" className="nav-link">Admissions</Link>
            </li>
            <li className="nav-item">
              <Link to="/faculty" className="nav-link">Faculty</Link>
            </li>
            <li className="nav-item">
              <Link to="/students" className="nav-link">Students</Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="nav-link">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
