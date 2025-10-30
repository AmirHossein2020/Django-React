import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Search.css";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/search/?q=${query}`);
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

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
      <div className="overlay" />

      <header className="header">
        <h1>LIBRO</h1>
      </header>

      <main className="search-main">
        <p className="search-text">
          You can search for any book you want by <br /> book name or author
        </p>

        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button className="search-btn" onClick={handleSearch}>
            {loading ? "Searching..." : "Search"}
          </button>
        </div>

        {/* نتایج جستجو */}
        <div className="results">
          {books.length > 0 ? (
            <div className="book-grid">
              {books.map((book) => (
                <div
                  key={book.id}
                  className="book-card"
                  onClick={() => navigate(`/book/${book.id}`)}
                >
                  <img
                    src={book.image ? `http://127.0.0.1:8000${book.image}` : "/images/default-book.png"}
                    alt={book.title}
                    className="book-image"
                  />
                  <div className="book-info">
                    <h3 className="book-title">{book.title}</h3>
                    <p className="book-author">by {book.author}</p>
                    <p className="book-genre">{book.genre}</p>
                    <p className="book-price">${book.price}</p>
                    <button
                      className="details-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/book/${book.id}`);
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            !loading && <p className="no-results">No books found yet.</p>
          )}
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
