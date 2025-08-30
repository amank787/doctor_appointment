import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">Prescripto</div>

        {/* Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">All Doctors</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </nav>

        {/* Button */}
        <a
          href="#"
          className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Create account
        </a>
      </div>
    </header>
  );
};

export default Header;
