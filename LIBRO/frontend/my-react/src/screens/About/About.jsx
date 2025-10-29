import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

export const About = () => {
  const navigate = useNavigate();

  return (
    <div
      className="about-page"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bg.jpg"})`,
      }}
    >
      <div className="overlay"></div>

      <header className="header">
        <h1>About Us</h1>
      </header>

      <main className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              LIBRO started as a small dream — to make books accessible to
              everyone. We believe in the power of stories and knowledge to
              change lives.
            </p>
            <h2>Our Mission</h2>
            <p>
              Our goal is to connect readers with the books that inspire,
              educate, and entertain them. From classics to modern bestsellers,
              LIBRO is your trusted companion.
            </p>
          </div>

          <div className="about-image">
            <img src="/images/about-books.png" alt="About Libro" />
          </div>
        </div>
      </main>

      <footer className="footer">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/ourbooks")}>Our Books</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
      </footer>
    </div>
  );
};
