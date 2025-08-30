import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-blue-600">Prescripto</h2>
          <p className="mt-3 text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur. Faucibus fringilla dui amet
            faucibus nam.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Company</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">About</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
            <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Get in Touch</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>+91 12345 67890</li>
            <li>prescripto@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 py-4 border-t">
        Copyright © 2024 Prescripto. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
