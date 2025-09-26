import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./pages/home";
import AllDoctors from "./pages/patient/AllDoctors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DoctorDetails from "./pages/patient/DoctorDetails";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import MyAppointment from "./pages/patient/MyAppointment";
import Profile from "./pages/Profile";

import BookAppointment from "./pages/patient/BookAppointment";

// Doctor pages
import DoctorDashboard from "./pages/doctor/DoctorDashBoard";
import DoctorAppointment from "./pages/doctor/Appointment";
import DoctorPatients from "./pages/doctor/Patients";
import DoctorSchedule from "./pages/doctor/Schedule";

// Admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminAppointments from "./pages/admin/AdminAppointment";
import AdminAddDoctor from "./pages/admin/AdminAddDoctor";
import AdminDoctorList from "./pages/admin/AdminDoctorList";

import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/header";
import DoctorLayout from "./components/DoctorLayout";
import AdminLayout from "./components/AdminLayout";
import { AuthProvider } from "./context/AuthContext";

const AppWrapper = () => {
  const location = useLocation();

  // Hide Navbar on doctor/admin dashboard routes
  const hideNavbar =
    location.pathname.startsWith("/doctor") ||
    location.pathname.startsWith("/admin");

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<AllDoctors />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctor/:id" element={<DoctorDetails />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Patient Routes */}
        <Route
          path="/book-appointment/:doctorId"
          element={
            <ProtectedRoute allowedRoles={["patient"]}>
              <BookAppointment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/appointments"
          element={
            <ProtectedRoute allowedRoles={["patient"]}>
              <MyAppointment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute allowedRoles={["patient", "doctor", "admin"]}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/myappointment"
          element={
            <ProtectedRoute allowedRoles={["patient"]}>
              <MyAppointment />
            </ProtectedRoute>
          }
        />

        {/* Doctor Routes */}
        <Route
          path="/doctor"
          element={
            <ProtectedRoute allowedRoles={["doctor"]}>
              <DoctorLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<DoctorDashboard />} />
          <Route path="appointments" element={<DoctorAppointment />} />
          <Route path="patients" element={<DoctorPatients />} />
          <Route path="schedule" element={<DoctorSchedule />} />
        </Route>

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="appointments" element={<AdminAppointments />} />
          <Route path="doctors-list" element={<AdminDoctorList />} />
          <Route path="add-doctor" element={<AdminAddDoctor />} />
        </Route>

        {/* 404 Fallback */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <AppWrapper />
    </AuthProvider>
  );
};

export default App;
