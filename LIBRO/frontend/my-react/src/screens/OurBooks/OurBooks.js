import React from "react";
import { useNavigate } from "react-router-dom";
import "./OurBooks.css";

export const OurBooks = () => {
  const navigate = useNavigate();

  const books = [
    { id: 1, title: "The Great Gatsby", price: "$25", cover: "/images/book-cover.jpg" },
    { id: 2, title: "1984", price: "$22", cover: "/images/book-cover.jpg" },
    { id: 3, title: "Pride and Prejudice", price: "$20", cover: "/images/book-cover.jpg" },
    { id: 4, title: "To Kill a Mockingbird", price: "$23", cover: "/images/book-cover.jpg" },
    { id: 5, title: "Moby Dick", price: "$28", cover: "/images/book-cover.jpg" },
  ];

  const renderBooks = (title) => (
    <section className="book-section">
      <h3>{title}</h3>
      <div className="book-grid">
        {books.map((book) => (
          <div className="book-card" key={book.id}>
            <div className="book-cover">
              <img src={book.cover} alt={book.title} />
            </div>
            <div className="book-info">
              <h4>{book.title}</h4>
              <p className="book-price">{book.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div
      className="ourbooks-page"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/bg.jpg"})`,
      }}
    >
      <div className="overlay"></div>

      <header className="header">
        <h1>LIBRO</h1>
      </header>

      <section className="search-area">
        <p>Find your next favorite book faster with our search tools.</p>
        <div className="search-box">
          <input type="text" placeholder="Book name..." />
          <input type="text" placeholder="Author..." />
          <input type="text" placeholder="Year..." />
          <button className="search-btn">
            <i className="fas fa-search"></i> Search
          </button>
        </div>
      </section>

      <main className="books-container">
        {renderBooks("Most Popular")}
        {renderBooks("The Best of Iran")}
        {renderBooks("Seasonal Discounts")}
      </main>

      <footer className="footer">
        <button className="footer-link" onClick={() => navigate("/")}>Home</button>
        <button className="footer-link" onClick={() => navigate("/about")}>About Us</button>
        <button className="footer-link" onClick={() => navigate("/contact")}>Contact</button>
      </footer>
    </div>
  );
};
