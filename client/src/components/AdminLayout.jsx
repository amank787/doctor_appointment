// src/components/AdminLayout.jsx
import React, { useContext } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {
  FaClipboardList,
  FaUserMd,
  FaUserPlus,
  FaSignOutAlt,
} from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

const AdminLayout = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md border-r fixed top-0 left-0 h-full flex flex-col justify-between z-10">
        <div>
          <div className="px-6 py-5 text-2xl font-extrabold text-blue-600 border-b">
            Admin Panel
          </div>
          <div className="px-6 py-4 border-b text-sm text-gray-600">
            👤 Welcome,{" "}
            <span className="text-blue-600 font-semibold">
              {user?.fullName || "Admin"}
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2 px-4 py-6">
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-md transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow"
                    : "text-gray-700 hover:bg-blue-50"
                }`
              }
            >
              <FaClipboardList className="text-lg" />
              Dashboard
            </NavLink>

            <NavLink
              to="/admin/appointments"
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
              to="/admin/doctors-list"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-md transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow"
                    : "text-gray-700 hover:bg-blue-50"
                }`
              }
            >
              <FaUserMd className="text-lg" />
              Doctors
            </NavLink>

            <NavLink
              to="/admin/add-doctor"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-md transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow"
                    : "text-gray-700 hover:bg-blue-50"
                }`
              }
            >
              <FaUserPlus className="text-lg" />
              Add Doctor
            </NavLink>
          </nav>
        </div>

        {/* Logout Button */}
        <div className="px-4 py-6 border-t">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-2 w-full text-left text-red-600 hover:bg-red-50 rounded-md transition-all"
          >
            <FaSignOutAlt className="text-lg" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-64 flex-1 overflow-y-auto h-screen p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
