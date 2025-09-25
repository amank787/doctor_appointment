import React from "react";
import { FaClipboardList, FaUserMd, FaCalendarAlt } from "react-icons/fa";

const DoctorDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Doctor Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {/* Appointments Card */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-blue-100 text-blue-600 rounded-full">
              <FaClipboardList size={28} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Appointments</p>
              <h2 className="text-2xl font-bold">24</h2>
            </div>
          </div>
        </div>

        {/* Patients Card */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-green-100 text-green-600 rounded-full">
              <FaUserMd size={28} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Patients</p>
              <h2 className="text-2xl font-bold">12</h2>
            </div>
          </div>
        </div>

        {/* Schedule Card */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-purple-100 text-purple-600 rounded-full">
              <FaCalendarAlt size={28} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Upcoming Schedules</p>
              <h2 className="text-2xl font-bold">5</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Appointments Table */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Recent Appointments
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-gray-600 font-medium">Patient</th>
                <th className="px-4 py-3 text-gray-600 font-medium">Date</th>
                <th className="px-4 py-3 text-gray-600 font-medium">Time</th>
                <th className="px-4 py-3 text-gray-600 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">John Doe</td>
                <td className="px-4 py-3">2025-09-28</td>
                <td className="px-4 py-3">10:30 AM</td>
                <td className="px-4 py-3 text-green-600 font-medium">
                  Confirmed
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">Jane Smith</td>
                <td className="px-4 py-3">2025-09-28</td>
                <td className="px-4 py-3">02:00 PM</td>
                <td className="px-4 py-3 text-yellow-600 font-medium">
                  Pending
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3">Alex Johnson</td>
                <td className="px-4 py-3">2025-09-29</td>
                <td className="px-4 py-3">11:15 AM</td>
                <td className="px-4 py-3 text-red-600 font-medium">
                  Cancelled
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
