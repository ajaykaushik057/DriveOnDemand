import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Host from "./components/Host/Host";
import Home from "./components/Home/Home";
import LoginPage from "./components/Login/LoginPage";
import Signup from "./components/Login/SignUp";
import CarRental from "./components/Rental/CarRental";
import Contact from "./components/Contact/Contact";
import Explore from "./components/Explore/Explore";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/host" element={<Host />} />
      </Routes>
    </div>
  );
}

export default App;
