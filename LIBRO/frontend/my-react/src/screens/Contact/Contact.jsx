import React from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

export const Contact = () => {
  const navigate = useNavigate();

  return (
    <div
      className="contact-page"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bg.jpg"})`,
      }}
    >
      <div className="overlay"></div>

      <header className="header">
        <h1>Contact Us</h1>
      </header>

      <main className="contact-container">
        <div className="contact-card">
          <div className="contact-info">
            <h2>We’d Love to Hear From You!</h2>
            <p>
              Have a question or suggestion? Send us a message and we’ll get
              back to you soon.
            </p>
            <ul>
              <li><strong>Email:</strong> support@libro.com</li>
              <li><strong>Phone:</strong> +98 912 345 6789</li>
              <li><strong>Address:</strong> Tehran, Iran</li>
            </ul>
          </div>

          <div className="contact-form">
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </main>

      <footer className="footer">
        <button className="footer-link" onClick={() => navigate("/")}>Home</button>
        <button className="footer-link" onClick={() => navigate("/about")}>About Us</button>
        <button className="footer-link" onClick={() => navigate("/contact")}>Contact</button>
      </footer>
    </div>
  );
};
