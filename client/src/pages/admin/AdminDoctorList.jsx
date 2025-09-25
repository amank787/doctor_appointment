import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorsList = () => {
  const navigate = useNavigate();

  // Dummy doctor data (later connect with API)
  const doctors = [
    {
      id: 1,
      name: "Dr. Richard James",
      specialty: "General Physician",
      img: "/images/doc1.png",
    },
    {
      id: 2,
      name: "Dr. Richard James",
      specialty: "Cardiologist",
      img: "/images/doc2.png",
    },
    {
      id: 3,
      name: "Dr. Richard James",
      specialty: "Dentist",
      img: "/images/doc3.png",
    },
    {
      id: 4,
      name: "Dr. Richard James",
      specialty: "Neurologist",
      img: "/images/doc4.png",
    },
    {
      id: 5,
      name: "Dr. Richard James",
      specialty: "Dermatologist",
      img: "/images/doc5.png",
    },
    {
      id: 6,
      name: "Dr. Richard James",
      specialty: "Pediatrician",
      img: "/images/doc6.png",
    },
    {
      id: 7,
      name: "Dr. Richard James",
      specialty: "Orthopedic",
      img: "/images/doc7.png",
    },
    {
      id: 8,
      name: "Dr. Richard James",
      specialty: "ENT Specialist",
      img: "/images/doc8.png",
    },
    {
      id: 9,
      name: "Dr. Richard James",
      specialty: "Eye Specialist",
      img: "/images/doc9.png",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">All Doctors</h2>
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Logout
          </button>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-5 gap-6">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={doc.img}
                alt={doc.name}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <h3 className="text-lg font-semibold">{doc.name}</h3>
              <p className="text-sm text-gray-500">{doc.specialty}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DoctorsList;
