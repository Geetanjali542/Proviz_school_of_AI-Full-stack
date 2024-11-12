import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-us">
      {/* Header Section */}
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We're here to help and answer any question you might have. We look forward to hearing from you.</p>
      </header>

      {/* Main Content */}
      <div className="contact-content">
        {/* Contact Form */}
        <form className="contact-form">
          <h2>Get in Touch</h2>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Contact Information */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Address: 123 AI Street, Tech City, TX 75001</p>
          <p>Email: info@provizschool.ai</p>
          <p>Phone: +1 234 567 890</p>

          {/* Google Map */}
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.60139671734!2d-74.05081895!3d40.7033985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8d5a6c61b731ca96!2sCentral%20Park!5e0!3m2!1sen!2sus!4v1632327590916!5m2!1sen!2sus"
            width="100%"
            height="200"
            loading="lazy"
          ></iframe>

          {/* Social Media Links */}
          <div className="social-media">
            <h2>Connect with Us</h2>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <footer className="contact-footer">
        {/* Quick Links */}
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <input type="email" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </footer>
    </section>
  );
};

export default ContactUs;
