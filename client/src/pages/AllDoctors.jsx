// src/pages/AllDoctors.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doctors, specialityData } from "../assets/assets";
import Header from "../components/header";
import Footer from "../components/Footer";

const AllDoctors = () => {
  
  const [selectedSpeciality, setSelectedSpeciality] = useState("All");
  const navigate = useNavigate();

  // Filter doctors by speciality
  const filteredDoctors =
    selectedSpeciality === "All"
      ? doctors
      : doctors.filter((doc) => doc.speciality === selectedSpeciality);

  return (
    <>
     <Header/>
    <div className="max-w-7xl mx-auto px-6 py-16 flex gap-10">
     
      {/* Sidebar Filters */}
      <aside className="w-64 hidden md:block">
        <h2 className="text-lg font-semibold mb-4">Filter by Speciality</h2>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => setSelectedSpeciality("All")}
              className={`w-full text-left px-4 py-2 rounded-lg ${
                selectedSpeciality === "All"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All
            </button>
          </li>
          {specialityData.map((spec, index) => (
            <li key={index}>
              <button
                onClick={() => setSelectedSpeciality(spec.speciality)}
                className={`w-full text-left px-4 py-2 rounded-lg ${
                  selectedSpeciality === spec.speciality
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {spec.speciality}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Doctors Grid */}
      <main className="flex-1">
        <h1 className="text-2xl font-bold mb-8 text-center md:text-left">
          Browse Doctors
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredDoctors.map((doc) => (
            <div
              key={doc._id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => navigate(`/doctor/${doc._id}`)}
            >
              {/* Doctor Image */}
              <img
                src={doc.image}
                alt={doc.name}
                className="mx-auto rounded-lg mb-4 w-40 h-40 object-cover"
              />

              {/* Doctor Info */}
              <h3 className="font-semibold text-lg text-center">{doc.name}</h3>
              <p className="text-sm text-gray-500 text-center">
                {doc.speciality}
              </p>
            </div>
          ))}
        </div>
        
      </main>
     
    </div>
     <Footer/>
    </>

  );
};

export default AllDoctors;
