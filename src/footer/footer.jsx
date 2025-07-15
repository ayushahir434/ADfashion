import React from 'react';
import '../section/section.css';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h2><img src=''/></h2>
        <p>
          Welcome to Normal Store. We offer high-quality products at affordable prices.
          Shop with confidence and enjoy our fast delivery services.
        </p>

        <p className="footer-phone">Contact us: <a href="tel:9925575559">+91 99255 75559</a></p>

        <div className="footer-socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>

        <p className="footer-copy">© {currentYear} Ayush | All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
