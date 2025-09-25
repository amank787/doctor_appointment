import React from "react";

const DoctorSchedule = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Schedule</h1>

      {/* Example Schedule Table */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Upcoming Schedule
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-gray-600 font-medium">Date</th>
                <th className="px-4 py-3 text-gray-600 font-medium">Time</th>
                <th className="px-4 py-3 text-gray-600 font-medium">Patient</th>
                <th className="px-4 py-3 text-gray-600 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">2025-09-28</td>
                <td className="px-4 py-3">10:30 AM</td>
                <td className="px-4 py-3">John Doe</td>
                <td className="px-4 py-3 text-green-600 font-medium">
                  Confirmed
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">2025-09-28</td>
                <td className="px-4 py-3">02:00 PM</td>
                <td className="px-4 py-3">Jane Smith</td>
                <td className="px-4 py-3 text-yellow-600 font-medium">
                  Pending
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3">2025-09-29</td>
                <td className="px-4 py-3">11:15 AM</td>
                <td className="px-4 py-3">Alex Johnson</td>
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

export default DoctorSchedule;
