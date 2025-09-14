// src/pages/About.jsx
import React from "react";
import { Route, } from "react-router-dom";
import about_image from "../assets/about_image.png"; // make sure you have this image in assets
import Header from "../components/header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <><Header/>
    <div className="max-w-7xl mx-auto px-6 py-16">
      
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-12">About Us</h1>

      {/* About Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <img
          src={about_image}
          alt="About Prescripto"
          className="rounded-lg shadow-lg"
        />

        {/* Text */}
        <div>
          <p className="text-gray-600 mb-4">
            Welcome to <span className="font-semibold">Prescripto</span>, your
            trusted partner in managing your healthcare needs conveniently and
            efficiently. At Prescripto, we understand the challenges individuals
            face when it comes to scheduling doctor appointments and accessing
            timely medical consultations. That’s why we’ve developed an
            innovative platform that connects patients with qualified healthcare
            professionals seamlessly.
          </p>
          <p className="text-gray-600 mb-4">
            Our mission is simple: to make healthcare more accessible and
            hassle-free for everyone. Whether you need a routine check-up, have
            a medical concern, or require specialist consultation, Prescripto is
            here to streamline the process for you.
          </p>
          <p className="text-gray-600">
            At Prescripto, we prioritize your health and well-being above all
            else. Our team is dedicated to providing you with the highest
            quality care and ensuring that you receive the attention and support
            you deserve.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">Efficiency</h3>
            <p className="text-gray-600 text-sm">
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">Experience</h3>
            <p className="text-gray-600 text-sm">
              Access to a network of trusted doctors and healthcare providers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">Personalization</h3>
            <p className="text-gray-600 text-sm">
              Tailored recommendations and healthcare tips to support your
              well-being journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  <Footer/>
    </>
  );
};

export default About;
