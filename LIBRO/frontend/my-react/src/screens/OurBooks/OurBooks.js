import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import "./OurBooks.css";

export const OurBooks = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [booksByCategory, setBooksByCategory] = useState({});

  // 📦 گرفتن دسته‌بندی‌ها و کتاب‌ها از بک‌اند
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catRes, bookRes] = await Promise.all([
          axios.get("http://127.0.0.1:8000/api/categories/"),
          axios.get("http://127.0.0.1:8000/api/books/"),
        ]);

        const categories = catRes.data;
        const books = bookRes.data;

        // گروه‌بندی کتاب‌ها بر اساس دسته‌بندی
        const grouped = {};
        categories.forEach((cat) => {
          grouped[cat.name] = books.filter(
            (book) => book.category_name === cat.name
          );
        });

        setCategories(categories);
        setBooksByCategory(grouped);
      } catch (err) {
        console.error("Error fetching books or categories:", err);
      }
    };

    fetchData();
  }, []);

  // 📚 رندر کردن هر بخش دسته‌بندی
  const renderBooks = (category, books) => (
    <section className="book-section" key={category}>
      <h3>{category}</h3>
      {books.length > 0 ? (
        <div className="book-grid">
          {books.map((book) => (
            <div className="book-card" key={book.id}>
              <div className="book-cover">
                <img
                  src={
                    book.image
                      ? `http://127.0.0.1:8000${book.image}`
                      : "/images/default-book.png"
                  }
                  alt={book.title}
                />
                <div className="book-overlay">
                  <button
                    className="book-btn"
                    onClick={() => navigate(`/book/${book.id}`)}
                  >
                    View Details
                  </button>
                  <button className="book-btn-secondary">Buy Now</button>
                </div>
              </div>
              <div className="book-info">
                <h4 className="book-title">{book.title}</h4>
                <p className="book-author">by {book.author}</p>
                <p className="book-price">${book.price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-books">No books available in this category.</p>
      )}
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

      <Header />

      <main className="books-container">
        {categories.length > 0 ? (
          categories.map((cat) =>
            renderBooks(cat.name, booksByCategory[cat.name] || [])
          )
        ) : (
          <p className="loading">Loading books...</p>
        )}
      </main>

      <Footer />
    </div>
  );
};
