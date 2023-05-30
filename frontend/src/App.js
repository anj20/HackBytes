import React from "react";
import Hero from "./Components/Hero";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import { useLocation, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      {useLocation().pathname === "/" ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
