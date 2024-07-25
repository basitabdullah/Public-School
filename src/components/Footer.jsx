import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* School Info */}
          <div className="col-md-4 mb-3">
            <h5>Springdale Public School</h5>
            <p>1234 Education Lane, Knowledge City, 56789</p>
            <p>Email: info@springdale.edu</p>
            <p>Phone: (123) 456-7890</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About Us</a></li>
              <li><a href="/academics" className="text-white">Academics</a></li>
              <li><a href="/admissions" className="text-white">Admissions</a></li>
              <li><a href="/faculty" className="text-white">Faculty</a></li>
              <li><a href="/students" className="text-white">Students</a></li>
              <li><a href="/gallery" className="text-white">Gallery</a></li>
              <li><a href="/contact" className="text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" className="text-white mx-2" aria-label="Facebook"><FaFacebook size={24} /></a>
              <a href="https://twitter.com" className="text-white mx-2" aria-label="Twitter"><FaTwitter size={24} /></a>
              <a href="https://instagram.com" className="text-white mx-2" aria-label="Instagram"><FaInstagram size={24} /></a>
              <a href="https://linkedin.com" className="text-white mx-2" aria-label="LinkedIn"><FaLinkedin size={24} /></a>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <p>&copy; 2024 Springdale Public School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
