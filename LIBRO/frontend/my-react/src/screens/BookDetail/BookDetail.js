import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./BookDetail.css";

export const BookDetail = () => {
  const { id } = useParams(); // گرفتن ID کتاب از URL
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/books/${id}/`);
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };
    fetchBook();
  }, [id]);

  if (!book) {
    return (
      <div className="book-detail-loading">
        <p>Loading book details...</p>
      </div>
    );
  }

  return (
    <div
      className="book-detail-page"
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

      <main className="book-detail-container">
        <div className="book-detail-card">
          <img
            src={book.image}
            alt={book.title}
            className="book-detail-image"
          />
          <div className="book-detail-info">
            <h2 className="book-title">{book.title}</h2>
            <p className="book-author"><strong>Author:</strong> {book.author}</p>
            <p className="book-genre"><strong>Genre:</strong> {book.genre}</p>
            <p className="book-price"><strong>Price:</strong> ${book.price}</p>
            <p className="book-summary">{book.summary}</p>
            <button className="order-btn" onClick={() => navigate("/book-order")}>
              Order This Book
            </button>
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
