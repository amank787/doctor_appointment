// src/pages/Appointments.jsx
import React, { useEffect, useState } from "react";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  // We get user & token here
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("accessToken");

  // Format date (e.g., "2025-09-27") → human readable
  const formatDate = (dateStr) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Date(dateStr).toLocaleDateString("en-US", options);
  };

  // Format time from "HH:MM"
  const formatTime = (timeStr) => {
    const [hour, min] = timeStr.split(":");
    const date = new Date();
    date.setHours(+hour, +min);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  useEffect(() => {
    const fetchAppointments = async () => {
      if (!user?._id || !token) {
        console.warn("User or token missing. Cannot fetch appointments.");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `http://localhost:3000/api/appointment/patient/${user._id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();
        console.log("Fetched appointments from API:", data);

        if (res.ok) {
          // Safe fallback
          const arr = Array.isArray(data.data) ? data.data : [];
          setAppointments(arr);
        } else {
          alert(data.message || "Failed to load appointments");
        }
      } catch (err) {
        console.error("Error fetching appointments:", err);
        alert("Server error while loading appointments");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []); // run once on mount

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">My Appointments</h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : appointments.length === 0 ? (
        <p className="text-center text-gray-500">No appointments found.</p>
      ) : (
        <div className="space-y-6">
          {appointments.map((appt) => {
            const doctor = appt.doctorId || {};
            const doctorUser = doctor.userId || {};
            const patient = appt.patientId || {};

            return (
              <div
                key={appt._id}
                className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-xl shadow-md border"
              >
                {/* Doctor + Patient Info Section */}
                <div className="flex items-center gap-5 w-full md:w-auto mb-4 md:mb-0">
                  {/* Doctor image if any */}
                  <img
                    src={doctorUser.image || "/default-doctor.png"}
                    alt={doctorUser.fullname || "Doctor"}
                    className="w-24 h-24 object-cover rounded-lg border"
                  />

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {doctorUser.fullName || "Doctor Name"}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {doctor.specialty || doctor.specialization || ""}
                    </p>
                    <p className="text-sm text-gray-500">
                      🧾 Email: {doctorUser.email || "N/A"}
                    </p>
                    <p className="text-sm text-gray-500">
                      📅 {formatDate(appt.date)} &nbsp; ⏰{" "}
                      {formatTime(appt.time)}
                    </p>
                    <p className="text-sm text-gray-500">
                      💬 Reason: {appt.reason || "—"}
                    </p>
                    <p className="text-sm text-gray-500">
                      💵 Fee: ₹{(appt.priceCents || 0) / 100}
                    </p>
                  </div>
                </div>

                {/* Status + Action Section */}
                <div className="text-right space-y-2 w-full md:w-auto md:text-left">
                  {appt.status === "pending" && (
                    <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-lg">
                      Pending
                    </span>
                  )}
                  {appt.status === "paid" && (
                    <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-lg">
                      Paid
                    </span>
                  )}
                  {appt.status === "cancelled" && (
                    <span className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-lg">
                      Cancelled
                    </span>
                  )}
                  {appt.status === "completed" && (
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-lg">
                      Completed
                    </span>
                  )}

                  {/* Cancel button if pending (optional) */}
                  {appt.status === "pending" && (
                    <div>
                      <button className="mt-2 px-4 py-2 text-sm border border-red-300 text-red-600 rounded-lg hover:bg-red-50">
                        Cancel Appointment
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Appointments;
