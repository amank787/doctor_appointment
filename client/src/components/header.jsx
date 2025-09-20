import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  ); // ✅ check if logged in
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-blue-600">
        Prescripto
      </Link>

      {/* Menu */}
      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/doctors">All Doctors</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* Right side - Login / Profile */}
      <div className="relative">
        {!user ? (
          <Link
            to="/signup"
            className="px-4 py-2 bg-blue-600 text-white rounded-3xl "
          >
            Create account
          </Link>
        ) : (
          <div className="relative">
            {/* Profile Icon */}
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center"
            >
              <FaUserCircle size={30} className="text-gray-700" />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-md">
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  My Profile
                </Link>
                <Link
                  to="/appointments"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  My Appointments
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
