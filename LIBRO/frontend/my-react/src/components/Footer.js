import React from "react";
import { useNavigate } from "react-router-dom";
import "./Layout.css";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/about")}>About Us</button>
      <button onClick={() => navigate("/contact")}>Contact</button>
    </footer>
  );
};
