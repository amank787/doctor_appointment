import React from "react";
import { FaUserMd, FaCalendarCheck, FaUsers, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Dummy data (replace with API later)
  const latestAppointments = [
    { id: 1, doctor: "Dr. Richard James", date: "Booking: 1 Jan, 2024", img: "/images/doc1.png" },
    { id: 2, doctor: "Dr. Richard James", date: "Booking: 1 Jan, 2024", img: "/images/doc2.png" },
    { id: 3, doctor: "Dr. Richard James", date: "Booking: 1 Jan, 2024", img: "/images/doc3.png" },
    { id: 4, doctor: "Dr. Richard James", date: "Booking: 1 Jan, 2024", img: "/images/doc4.png" },
    { id: 5, doctor: "Dr. Richard James", date: "Booking: 1 Jan, 2024", img: "/images/doc5.png" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-10">
          Prescripto <span className="text-sm text-gray-500">Admin</span>
        </h1>
        <nav className="space-y-4">
          <button
            onClick={() => navigate("/admin/dashboard")}
            className="w-full text-left px-4 py-2 rounded-lg bg-blue-50 text-blue-600"
          >
            Dashboard
          </button>
          <button
            onClick={() => navigate("/admin/appointments")}
            className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            Appointments
          </button>
          <button
            onClick={() => navigate("/admin/add-doctor")}
            className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            Add Doctor
          </button>
          <button
            onClick={() => navigate("/admin/doctors-list")}
            className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            Doctors List
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <button 
          onClick={() => navigate("/login")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Logout
          </button>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow">
            <FaUserMd className="text-blue-600 text-3xl" />
            <div>
              <h3 className="text-2xl font-bold">14</h3>
              <p className="text-gray-500">Doctors</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow">
            <FaCalendarCheck className="text-green-600 text-3xl" />
            <div>
              <h3 className="text-2xl font-bold">2</h3>
              <p className="text-gray-500">Appointments</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow">
            <FaUsers className="text-purple-600 text-3xl" />
            <div>
              <h3 className="text-2xl font-bold">5</h3>
              <p className="text-gray-500">Patients</p>
            </div>
          </div>
        </div>

        {/* Latest Appointments */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Latest Appointments</h3>
          <ul className="space-y-4">
            {latestAppointments.map((appt) => (
              <li
                key={appt.id}
                className="flex justify-between items-center border-b pb-3"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={appt.img}
                    alt={appt.doctor}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{appt.doctor}</p>
                    <p className="text-sm text-gray-500">{appt.date}</p>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-700">
                  <FaTimes />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
