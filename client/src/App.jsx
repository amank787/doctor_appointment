import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AllDoctors from "./pages/AllDoctors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DoctorDetails from "./pages/DoctorDetails";
import Appointment from "./pages/Appointment"
import Signup from "./pages/Signup"
import Login from "./pages/Login"


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<AllDoctors />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctor/:id" element={<DoctorDetails />} />
        <Route path="/appointments" element={<Appointment/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
  );
};

export default App;
