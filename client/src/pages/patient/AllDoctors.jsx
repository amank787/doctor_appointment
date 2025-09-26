// src/pages/AllDoctors.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { specialityData } from "../../assets/assets.js"; // ✅ keep only specialities
import Navbar from "../../components/header.jsx";
import Footer from "../../components/footer";

const AllDoctors = () => {
  const [selectedSpeciality, setSelectedSpeciality] = useState("All");
  const [doctors, setDoctors] = useState([]); // ✅ dynamic doctors
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // ✅ Fetch doctors from backend
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/doctor");
        const data = await res.json();
        if (res.ok) {
          setDoctors(data.data); // ApiResponse { status, data, message }
        } else {
          console.error(data.message || "Failed to fetch doctors");
        }
      } catch (err) {
        console.error("Error fetching doctors:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  // ✅ Filter doctors by speciality
  const filteredDoctors =
    selectedSpeciality === "All"
      ? doctors
      : doctors.filter((doc) => doc.specialty === selectedSpeciality);

  return (
    <>
      <Navbar />
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

          {loading ? (
            <p className="text-center text-gray-500">Loading doctors...</p>
          ) : filteredDoctors.length === 0 ? (
            <p className="text-center text-gray-500">No doctors found</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredDoctors.map((doc) => (
                <div
                  key={doc._id}
                  className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
                  onClick={() => navigate(`/book-appointment/${doc._id}`)}
                >
                  {/* Doctor Image */}
                  <img
                    src={doc.image || "/default-doctor.png"} // fallback
                    alt={doc.userId?.fullName || "Doctor"}
                    className="mx-auto rounded-lg mb-4 w-40 h-40 object-cover"
                  />

                  {/* Doctor Info */}
                  <h3 className="font-semibold text-lg text-center">
                    {doc.userId?.fullName}
                  </h3>
                  <p className="text-sm text-gray-500 text-center">
                    {doc.specialty}
                  </p>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AllDoctors;
