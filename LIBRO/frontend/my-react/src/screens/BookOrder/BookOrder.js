import React, { useState } from "react";
import axios from "axios";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import "./BookOrder.css";

export const BookOrder = () => {

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await axios.post("http://127.0.0.1:8000/api/book-order/", formData);
      setStatus("✅ Your request has been submitted successfully!");
      setFormData({
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus("❌ There was an error submitting your request.");
      console.error(error);
    }
  };

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

      <Header />

      <main className="form-container">
        <h2>Book Request</h2>
        <p className="description">
          Submit your request to order the desired book. Our experts will
          contact you soon.
        </p>

        <form className="book-form" onSubmit={handleSubmit}>
          <div className="name-fields">
            <input
              type="text"
              name="first_name"
              placeholder="First name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="email@addressdomain.net"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Enter book information for ordering"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-btn">
            Submit
          </button>

          {status && <p className="status-message">{status}</p>}
        </form>
      </main>

      <Footer />
    </div>
  );
};
