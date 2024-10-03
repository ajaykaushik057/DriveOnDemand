import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact";
import Host from "./components/Host/Host";
import Home from "./components/Home/Home";
import LoginPage from "./components/Login/LoginPage";
import Signup from "./components/Login/SignUp";
import Location from "./components/Location/Location";
import CarRental from "./components/Rental/CarRental";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/host" element={<Host />} /> 
        <Route path="/location" element={<Location />} /> 
      </Routes>
      <LoginPage/>  
      <Signup/>
      <Location/>
      <CarRental />
    </div>
  );
}

export default App;


