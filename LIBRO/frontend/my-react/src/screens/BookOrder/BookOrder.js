import React from "react";
import { useNavigate } from "react-router-dom";
import "./BookOrder.css";

export const BookOrder = () => {
    const navigate = useNavigate();
  return (
    <div
      className="book-order-page"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bg.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="overlay" />

      <header className="header">
        <h1>LIBRO</h1>
      </header>

      <main className="form-container">
        <h2>Book Request</h2>
        <p className="description">
          By submitting a request to order the desired book, our experts will
          contact you to follow up and, upon your approval, will provide the
          customized book.
        </p>

        <form className="book-form">
          <div className="name-fields">
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
          </div>

          <input type="tel" placeholder="+1234567890" required />
          <input type="email" placeholder="email@addressdomain.net" required />

          <textarea
            placeholder="Enter book information for ordering"
            rows="5"
            required
          />

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </main>

      <footer className="footer">
        <button className="footer-link" onClick={() => navigate("/")}>Home</button>
        <button className="footer-link" onClick={() => navigate("/about")}>About Us</button>
        <button className="footer-link" onClick={() => navigate("/contact")}>Contact</button>
      </footer>
    </div>
  );
};
