import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home/Home";
import { Search } from "./screens/Home/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
