import React, { useContext } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {
  FaClipboardList,
  FaUserMd,
  FaCalendarAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

const DoctorLayout = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar - fixed */}
      <aside className="fixed top-0 left-0 h-screen w-64 bg-white shadow-md flex flex-col justify-between border-r z-10">
        <div>
          {/* Title */}
          <div className="px-6 py-5 text-2xl font-extrabold text-blue-600 border-b">
            Doctor Panel
          </div>

          {/* Welcome */}
          <div className="px-6 py-4 border-b text-sm text-gray-600">
            👨‍⚕️ Welcome,{" "}
            <span className="text-blue-600 font-semibold">
              {user?.fullName || user?.name || "Doctor"}
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2 px-4 py-6">
            <NavLink
              to="/doctor/appointments"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-md transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow"
                    : "text-gray-700 hover:bg-blue-50"
                }`
              }
            >
              <FaClipboardList className="text-lg" />
              Appointments
            </NavLink>

            <NavLink
              to="/doctor/patients"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-md transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow"
                    : "text-gray-700 hover:bg-blue-50"
                }`
              }
            >
              <FaUserMd className="text-lg" />
              Patients
            </NavLink>

            <NavLink
              to="/doctor/schedule"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-md transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow"
                    : "text-gray-700 hover:bg-blue-50"
                }`
              }
            >
              <FaCalendarAlt className="text-lg" />
              Schedule
            </NavLink>
          </nav>
        </div>

        {/* Logout */}
        <div className="px-4 py-4 border-t">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-2 rounded-md text-red-600 hover:bg-red-50 transition-all"
          >
            <FaSignOutAlt className="text-lg" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-64 p-6 overflow-y-auto min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default DoctorLayout;
