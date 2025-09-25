import React from "react";

const DoctorPatients = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Patients</h1>

      {/* Example Table */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          My Patients
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-gray-600 font-medium">Name</th>
                <th className="px-4 py-3 text-gray-600 font-medium">Age</th>
                <th className="px-4 py-3 text-gray-600 font-medium">Contact</th>
                <th className="px-4 py-3 text-gray-600 font-medium">
                  Last Visit
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">John Doe</td>
                <td className="px-4 py-3">35</td>
                <td className="px-4 py-3">123-456-7890</td>
                <td className="px-4 py-3">2025-09-20</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">Jane Smith</td>
                <td className="px-4 py-3">28</td>
                <td className="px-4 py-3">987-654-3210</td>
                <td className="px-4 py-3">2025-09-22</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3">Alex Johnson</td>
                <td className="px-4 py-3">42</td>
                <td className="px-4 py-3">456-789-1230</td>
                <td className="px-4 py-3">2025-09-25</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DoctorPatients;
