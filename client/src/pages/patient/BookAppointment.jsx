// src/pages/BookAppointment.jsx

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BookAppointment = () => {
  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    reason: "",
  });
  const [bookedSlots, setBookedSlots] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("accessToken");

  // ✅ Fetch doctor details
  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/doctor/${doctorId}`);
        const data = await res.json();
        if (res.ok) {
          setDoctor(data.data);
        } else {
          alert(data.message || "Failed to fetch doctor");
        }
      } catch (err) {
        console.error("Error fetching doctor:", err);
        alert("Server error while fetching doctor details");
      } finally {
        setLoading(false);
      }
    };
    fetchDoctor();
  }, [doctorId]);

  // ✅ Fetch booked time slots for selected date
  useEffect(() => {
    if (!formData.date) {
      setBookedSlots([]);
      return;
    }
    const fetchBookedSlots = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/appointment/booked-slots?doctorId=${doctorId}&date=${formData.date}`,
          {
            headers: {
              "Content-Type": "application/json",
              ...(token && { Authorization: `Bearer ${token}` }),
            },
          }
        );
        const data = await res.json();
        if (res.ok) {
          // ✅ FIXED: Expecting data.data (not data.appointments)
          setBookedSlots(data.data);
        } else {
          console.error("Failed to fetch booked slots:", data.message);
        }
      } catch (err) {
        console.error("Error fetching booked slots:", err);
      }
    };
    fetchBookedSlots();
  }, [formData.date, doctorId, token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTimeSelect = (slot) => {
    setFormData({ ...formData, time: slot });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!doctor) return alert("Doctor not found");
    if (!user?._id) return alert("You must be logged in to book");
    if (!token) return alert("Missing access token, please login again");

    setSubmitting(true);
    try {
      const res = await fetch("http://localhost:3000/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          patientId: user._id,
          doctorId: doctor._id,
          date: formData.date,
          time: formData.time,
          reason: formData.reason,
          priceCents: doctor.feeCents,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("✅ Appointment booked successfully!");
        setFormData({ date: "", time: "", reason: "" });
        navigate("/my-appointments");
      } else {
        alert(data.message || "❌ Failed to book appointment");
      }
    } catch (err) {
      console.error("Error booking appointment:", err);
      alert("Server error while booking appointment");
    } finally {
      setSubmitting(false);
    }
  };

  const generateSlotSections = () => {
    const morning = [];
    const evening = [];
    const addSlot = (h, m) => {
      const hour = h.toString().padStart(2, "0");
      const min = m.toString().padStart(2, "0");
      return `${hour}:${min}`;
    };
    for (let hour = 9; hour < 13; hour++) {
      morning.push(addSlot(hour, 0));
      morning.push(addSlot(hour, 30));
    }
    morning.push("13:00");
    for (let hour = 14; hour < 18; hour++) {
      evening.push(addSlot(hour, 0));
      evening.push(addSlot(hour, 30));
    }
    evening.push("18:00");
    return { morning, evening };
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!doctor) return <p className="text-center mt-10">Doctor not found</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto w-full">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Book Appointment
        </h1>

        {/* Doctor Details */}
        <div className="bg-white shadow rounded-lg p-6 mb-10 border w-full">
          <h2 className="text-2xl font-semibold text-gray-900">
            {doctor.name || doctor.userId?.fullname}
          </h2>
          <p className="text-gray-600">
            {doctor.specialization || doctor.userId?.specialization}
          </p>
          <p className="text-gray-500 mt-2">{doctor.bio}</p>
          {doctor.feeCents && (
            <p className="mt-2 font-medium text-blue-700">
              Fee: ₹{doctor.feeCents / 100}
            </p>
          )}
        </div>

        {/* Appointment Form */}
        <div className="bg-white shadow rounded-lg p-6 border w-full">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Date Picker */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Time Slots */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Time
              </label>
              {(() => {
                const { morning, evening } = generateSlotSections();
                return (
                  <>
                    <div className="mb-6">
                      <h3 className="text-md font-semibold mb-2 text-gray-800">
                        Morning Slots
                      </h3>
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                        {morning.map((slot) => {
                          const isBooked = bookedSlots.includes(slot);
                          return (
                            <button
                              type="button"
                              key={slot}
                              onClick={() =>
                                !isBooked && handleTimeSelect(slot)
                              }
                              disabled={isBooked}
                              className={`py-2 rounded-lg border text-sm font-medium transition ${
                                isBooked
                                  ? "bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed"
                                  : formData.time === slot
                                  ? "bg-blue-600 text-white border-blue-600"
                                  : "bg-white text-gray-800 border-gray-300 hover:bg-blue-50"
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="mb-2">
                      <h3 className="text-md font-semibold mb-2 text-gray-800">
                        Evening Slots
                      </h3>
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                        {evening.map((slot) => {
                          const isBooked = bookedSlots.includes(slot);
                          return (
                            <button
                              type="button"
                              key={slot}
                              onClick={() =>
                                !isBooked && handleTimeSelect(slot)
                              }
                              disabled={isBooked}
                              className={`py-2 rounded-lg border text-sm font-medium transition ${
                                isBooked
                                  ? "bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed"
                                  : formData.time === slot
                                  ? "bg-blue-600 text-white border-blue-600"
                                  : "bg-white text-gray-800 border-gray-300 hover:bg-blue-50"
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </>
                );
              })()}
              {!formData.time && (
                <p className="text-red-500 text-sm mt-2">
                  Please select a time slot
                </p>
              )}
            </div>

            {/* Reason */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Reason (optional)
              </label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                placeholder="Reason for appointment"
                rows={4}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting || !formData.time}
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              {submitting ? "Booking..." : "Confirm Appointment"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
