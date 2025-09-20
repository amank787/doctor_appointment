// src/App.jsx
import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import { doctors } from "../assets/assets";
import { useNavigate } from "react-router-dom";
// ✅ import doctors data

const App = () => {
  const navigate = useNavigate();
  return (
    <> <Header />
    <div className="font-sans px-36 py-1">
     

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 mt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left text */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-snug">
              Book Appointment With Trusted Doctors
            </h1>
            <p className="mb-6 text-lg">
              Simply browse through our list of trusted doctors, schedule your
              appointment hassle-free.
            </p>
            <button
              onClick={() => navigate("/appointments")}
              className="px-6 py-3 bg-white text-blue-600  font-semibold rounded-3xl hover:bg-indigo-300"
            >
              Book Appointment
            </button>
          </div>

          {/* Right image → first doctor image from assets */}
          <img
            src={doctors[0].image}
            alt={doctors[0].name}
            className="rounded-xl w-72"
          />
        </div>
      </section>

      {/* Find by Speciality */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-10">Find by Speciality</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              "General Physician",
              "Gynecologist",
              "Dermatologist",
              "Pediatrician",
              "Neurologist",
              "Cardiologist",
            ].map((spec, index) => (
              <div key={index} className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-xl font-bold">
                  {spec[0]}
                </div>
                <span className="text-gray-700 font-medium">{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Doctors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-12">
            Top Doctors to Book
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* ✅ use first 8 doctors from assets */}
            {doctors.slice(0, 8).map((doc) => (
              <div
                key={doc._id}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
              >
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="mx-auto rounded-lg mb-4 w-32 h-32 object-cover"
                />
                <h3 className="font-semibold text-lg">{doc.name}</h3>
                <p className="text-sm text-gray-500">{doc.speciality}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700"
            >
              More
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 ml-20 leading-snug">
              Book Appointment  
              <br />
              <br />
              With 100+ Trusted Doctors
            </h2>
            <button
              onClick={() => navigate("/signup")}
              className="px-6 py-3 ml-20 mt-5 bg-white text-blue-600 font-semibold rounded-3xl hover:bg-indigo-300 "
            >
              Create Account
            </button>
          </div>

          {/* ✅ use another doctor image */}
          <img
            src={doctors[1].image}
            alt={doctors[1].name}
            className="rounded-xl w-72"
          />
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default App;
