import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Home/Navbar";
import About from "./Components/Home/About";
import Hero from "./Components/Home/Hero";
import DashComponent from "./DashComponent";
import Contact from "./Components/Home/Contact";
const App = () => {
  return (
    <div>
      {useLocation().pathname === "/" && <Navbar />}
      {useLocation().pathname === "/about" && <Navbar />}
      {useLocation().pathname === "/contact" && <Navbar />}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<DashComponent />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
