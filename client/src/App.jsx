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
import MyAppointment from "./pages/MyAppointment"
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";
import AdminAppointments from "./pages/AdminAppointment";
import AdminAddDoctor from "./pages/AdminAddDoctor";
import AdminDoctorList from "./pages/AdminDoctorList";



const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<AllDoctors />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctor/:id" element={<DoctorDetails />} />
        <Route path="/appointments" element={<Appointment/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="myappointment" element={<MyAppointment/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
        <Route path="/admin/appointments" element={<AdminAppointments/>}/>
        <Route path="/admin/add-doctor" element={<AdminAddDoctor/>}/>
        <Route path="/admin/doctors-list" element={<AdminDoctorList/>}/>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
  );
};

export default App;
