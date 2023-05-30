import React from "react";
import Hero from "./Components/Hero";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import { useLocation, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      {useLocation().pathname === "/" ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
