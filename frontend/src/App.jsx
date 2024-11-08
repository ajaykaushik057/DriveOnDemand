import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Host from "./components/Host/Host";
import Home from "./components/Home/Home";
import LoginPage from "./components/Login/LoginPage";
<<<<<<< HEAD
import Signup from "./components/SignUp/SignUp";
import Location from "./components/Location/Location";
=======
import Signup from "./components/Login/SignUp";
>>>>>>> 24f90e2e5ed828a7d48cd3b753719116c546852b
import CarRental from "./components/Rental/CarRental";
import Contact from "./components/Contact/Contact";
import Explore from "./components/Explore/Explore";



function App() {
  return (
    <div>
<<<<<<< HEAD
      <Navbar/>
      {/* <Location /> */}
=======
      <Navbar />
>>>>>>> 24f90e2e5ed828a7d48cd3b753719116c546852b
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
        <Route path="/host" element={<Host />} /> 
        <Route path="/location" element={<Location />} /> 
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/register" element={<Signup />} /> 
      </Routes>
      {/* <CarRental/> */}
=======
        <Route path="/explore" element={<Explore />} />
        <Route path="/host" element={<Host />} />
      </Routes>
>>>>>>> 24f90e2e5ed828a7d48cd3b753719116c546852b
    </div>
  );
}

export default App;
