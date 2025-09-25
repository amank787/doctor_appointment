// src/pages/AdminDashboard.jsx
import React from "react";
import { FaUserMd, FaClipboardList, FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Dummy data (replace with API later)
  const latestAppointments = [
    {
      id: 1,
      doctor: "Dr. Richard James",
      date: "Booking: 1 Jan, 2024",
      img: "/images/doc1.png",
    },
    {
      id: 2,
      doctor: "Dr. Sarah Smith",
      date: "Booking: 3 Jan, 2024",
      img: "/images/doc2.png",
    },
    {
      id: 3,
      doctor: "Dr. Emily Turner",
      date: "Booking: 5 Jan, 2024",
      img: "/images/doc3.png",
    },
    {
      id: 4,
      doctor: "Dr. John Doe",
      date: "Booking: 7 Jan, 2024",
      img: "/images/doc4.png",
    },
    {
      id: 5,
      doctor: "Dr. Jane Lee",
      date: "Booking: 9 Jan, 2024",
      img: "/images/doc5.png",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-blue-100 text-blue-600 rounded-full">
              <FaClipboardList size={28} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Appointments</p>
              <h2 className="text-2xl font-bold">50</h2>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-green-100 text-green-600 rounded-full">
              <FaUserMd size={28} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Doctors</p>
              <h2 className="text-2xl font-bold">15</h2>
            </div>
          </div>
        </div>

        <div
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
          onClick={() => navigate("/admin/add-doctor")}
        >
          <div className="flex items-center gap-4">
            <div className="p-4 bg-purple-100 text-purple-600 rounded-full">
              <FaUserPlus size={28} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Add Doctor</p>
              <h2 className="text-2xl font-bold">Go</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Appointments */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Latest Appointments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {latestAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg hover:shadow transition"
            >
              <img
                src={appointment.img}
                alt={appointment.doctor}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="text-md font-semibold text-gray-800">
                  {appointment.doctor}
                </h4>
                <p className="text-sm text-gray-500">{appointment.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
