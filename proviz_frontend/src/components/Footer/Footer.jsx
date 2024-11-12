import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Proviz School of AI</h3>
        <p>Empowering future leaders in Artificial Intelligence and shaping the technology of tomorrow.</p>

        <div className="footer-columns">
          {/* Column 1: Contact Information */}
          <div className="footer-column">
            <h4>Contact Us</h4>
            <p><FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:contact@provizai.com">contact@provizai.com</a></p>
            <p>Address: 123 AI Road, Innovation Park, Tech City, TC 56789</p>
          </div>

          {/* Column 2: Newsletter Signup */}
          <div className="footer-column">
            <h4>Newsletter Signup</h4>
            <p>Stay updated with the latest news and courses in AI.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your Email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>

          {/* Column 3: Social Media Links */}
          <div className="footer-column">
            <h4>Connect with Us</h4>
            <div className="footer-social">
              <a href="https://facebook.com/ProvizAI" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              </a>
              <a href="https://instagram.com/ProvizAI" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </a>
              <a href="https://twitter.com/ProvizAI" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </a>
              <a href="https://linkedin.com/company/ProvizAI" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        <p className="footer-rights">&copy; {new Date().getFullYear()} Proviz School of AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
