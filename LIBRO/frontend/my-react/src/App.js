import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home/Home";
import { Search } from "./screens/Home/Search";
import { OurBooks } from "./screens/OurBooks/OurBooks";
import { Contact } from "./screens/Contact/Contact";
import { About } from "./screens/About/About";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/ourbooks" element={<OurBooks />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
