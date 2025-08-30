import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans">
      <Header />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 mt-6 ">
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
            <a
              href="#"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100"
            >
              Book Appointment
            </a>
          </div>

          {/* Right image */}
          <img
            src="https://via.placeholder.com/350x280"
            alt="Doctors"
            className="rounded-xl"
          />
        </div>
      </section>

      {/* Find by Speciality */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-10">Find by Speciality</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {["General Physician", "Gynecologist", "Dermatologist", "Pediatrician", "Neurologist", "Cardiologist"].map(
              (spec, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-3"
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-xl font-bold">
                    {spec[0]}
                  </div>
                  <span className="text-gray-700 font-medium">{spec}</span>
                </div>
              )
            )}
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
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
              >
                <img
                  src="https://via.placeholder.com/150"
                  alt="Doctor"
                  className="mx-auto rounded-lg mb-4"
                />
                <h3 className="font-semibold text-lg">Dr. Richard James</h3>
                <p className="text-sm text-gray-500">General Physician</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              Book Appointment With 100+ Trusted Doctors
            </h2>
            <a
              href="#"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100"
            >
              Create Account
            </a>
          </div>
          <img
            src="https://via.placeholder.com/300x250"
            alt="Doctor"
            className="rounded-xl"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
