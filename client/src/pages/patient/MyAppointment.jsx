import React, { useState } from "react";
import { doctors } from "../../assets/assets.js"; // ✅ all doctor images are here

const Appointments = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctor: "Dr. Richard James",
      specialty: "General Physician",
      address: "57th Cross, Richmond Circle, Church Road, London",
      date: "25th July, 2024",
      time: "8:30 PM",
      status: "unpaid",
      image: doctors[0].image, // ✅ first doctor image
    },
    {
      id: 2,
      doctor: "Dr. Emily Larson",
      specialty: "Gynecologist",
      address: "27th Cross, Richmond Circle, Church Road, London",
      date: "26th July, 2024",
      time: "10:00 AM",
      status: "pending",
      image: doctors[1].image, // ✅ second doctor image
    },
    {
      id: 3,
      doctor: "Dr. Sarah Patel",
      specialty: "Dermatologist",
      address: "37th Cross, Richmond Circle, Church Road, London",
      date: "27th July, 2024",
      time: "11:30 AM",
      status: "paid",
      image: doctors[2].image, // ✅ third doctor image
    },
  ]);

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <h2 className="text-xl font-semibold mb-6">My Appointments</h2>

      <div className="space-y-6">
        {appointments.map((appt) => (
          <div
            key={appt.id}
            className="flex items-center justify-between bg-white p-6 rounded-xl shadow"
          >
            {/* Left - Doctor Info */}
            <div className="flex items-center gap-4">
              <img
                src={appt.image}
                alt={appt.doctor}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold">{appt.doctor}</h3>
                <p className="text-sm text-gray-500">{appt.specialty}</p>
                <p className="text-sm text-gray-500">Address: {appt.address}</p>
                <p className="text-sm text-gray-500">
                  Date & Time: {appt.date}, {appt.time}
                </p>
              </div>
            </div>

            {/* Right - Actions */}
            <div className="text-right space-y-2">
              {appt.status === "unpaid" && (
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                  Pay here
                </button>
              )}
              {appt.status === "pending" && (
                <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg">
                  Pending
                </button>
              )}
              {appt.status === "paid" && (
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
                  Paid
                </button>
              )}
              <button className="px-4 py-2 border rounded-lg">
                Cancel appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
