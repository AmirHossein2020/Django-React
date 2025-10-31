import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";



export const Home = () => {
  const navigate = useNavigate();

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

      <Header />

      <section className="section blue-section">
        <div className="section-content">
          <img src="images/image-1.png" alt="Book cover" className="section-image" />
          <button className="btn" onClick={() => navigate("/search")}>
            Search your book
          </button>
        </div>
      </section>

      <section className="section purple-section">
        <div className="section-content">
          <img src="images/image-2.png" alt="Books" className="section-image" />
          <button className="btn" onClick={() => navigate("/ourbooks")}>
            Our books
          </button>
        </div>
      </section>

      <section className="section red-section">
        <div className="section-content">
          <img src="images/image-3.png" alt="Question mark made of books" className="section-image" />
          <button className="btn" onClick={() => navigate("/bookorder")}>
            Book Order
          </button>

        </div>
      </section>

      <Footer />


    </div>
  );
};
