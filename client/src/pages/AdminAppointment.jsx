import React from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AdminAppointments = () => {
  const navigate = useNavigate();

  // Dummy data (replace with API later)
  const appointments = [
    {
      id: 1,
      patient: "Richard James",
      department: "Cardiology",
      age: 26,
      date: "29th July, 2024, 9:00 AM",
      doctor: "Dr. Richard James",
      img: "/images/doc1.png",
      fees: "$50",
    },
    {
      id: 2,
      patient: "Richard James",
      department: "Cardiology",
      age: 26,
      date: "29th July, 2024, 10:00 AM",
      doctor: "Dr. Richard James",
      img: "/images/doc2.png",
      fees: "$50",
    },
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
            className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            Dashboard
          </button>
          <button
            onClick={() => navigate("/admin/appointments")}
            className="w-full text-left px-4 py-2 rounded-lg bg-blue-50 text-blue-600"
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
          <h2 className="text-xl font-semibold">All Appointments</h2>
          <button 
          onClick={() => navigate("/login")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Logout
          </button>
        </div>

        {/* Appointment Table */}
        <div className="bg-white rounded-xl shadow p-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left text-gray-600 border-b">
                <th className="p-3">#</th>
                <th className="p-3">Patient</th>
                <th className="p-3">Department</th>
                <th className="p-3">Age</th>
                <th className="p-3">Date & Time</th>
                <th className="p-3">Doctor</th>
                <th className="p-3">Fees</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt, index) => (
                <tr
                  key={appt.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{appt.patient}</td>
                  <td className="p-3">{appt.department}</td>
                  <td className="p-3">{appt.age}</td>
                  <td className="p-3">{appt.date}</td>
                  <td className="p-3 flex items-center gap-2">
                    <img
                      src={appt.img}
                      alt={appt.doctor}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    {appt.doctor}
                  </td>
                  <td className="p-3">{appt.fees}</td>
                  <td className="p-3">
                    <button className="text-red-500 hover:text-red-700">
                      <FaTimes />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminAppointments;
