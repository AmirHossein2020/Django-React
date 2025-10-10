import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <div
      className="home"
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

      <section className="section blue-section">
        <div className="section-content">
          <img src="images/image-1.png" alt="Book cover" className="section-image" />
          <button className="btn">Search your book</button>
        </div>
      </section>

      <section className="section purple-section">
        <div className="section-content">
          <img src="images/image-2.png" alt="Books" className="section-image" />
          <button className="btn">Our books</button>
        </div>
      </section>

      <section className="section red-section">
        <div className="section-content">
          <img src="images/image-3.png" alt="Question mark made of books" className="section-image" />
          <button className="btn">Book Order</button>
        </div>
      </section>

      <footer className="footer">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
      </footer>
    </div>
  );
};
