import React from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

export const Search = () => {
  const navigate = useNavigate();

  return (
    <div
      className="search-page"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bg.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="overlay" /> {/* لایه نیمه‌شفاف در صورت نیاز */}

      <header className="header">
        <h1>LIBRO</h1>
      </header>

      <main className="search-main">
        <p className="search-text">
          You can search for any book you want by <br /> book name or author
        </p>

        <input
          type="text"
          className="search-input"
          placeholder="Search..."
        />

        <button className="search-btn">Search book</button>
      </main>

      <footer className="footer">
        <button className="footer-link" onClick={() => navigate("/")}>Home</button>
        <button className="footer-link" onClick={() => navigate("/about")}>About Us</button>
        <button className="footer-link" onClick={() => navigate("/contact")}>Contact</button>
      </footer>
    </div>
  );
};
