import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

import Footer from "../../components/Footer";
//import doc15 from "../assets/doc15.png";

const DoctorProfile = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Booking dates shown in your screenshot
  const dates = [
    "10 Mon",
    "11 Tue",
    "12 Wed",
    "13 Thu",
    "14 Fri",
    "15 Sat",
    "16 Sun",
  ];
  // Booking times shown in screenshot
  const times = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  // Related Doctors (5 cards in screenshot)
  const relatedDoctors = [
    {
      id: 1,
      name: "Dr. Richard James",
      specialty: "Cardiologist",
      img: "/images/doc1.png",
    },
    {
      id: 2,
      name: "Dr. Richard James",
      specialty: "Dermatologist",
      img: "/images/doc2.png",
    },
    {
      id: 3,
      name: "Dr. Richard James",
      specialty: "Neurologist",
      img: "/images/doc3.png",
    },
    {
      id: 4,
      name: "Dr. Richard James",
      specialty: "Orthopedic",
      img: "/images/doc4.png",
    },
    {
      id: 5,
      name: "Dr. Richard James",
      specialty: "Pediatrician",
      img: "/images/doc5.png",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Doctor Details */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row gap-6">
          {/* Doctor Image */}
          <img
            src="doc15.png"
            alt="Dr. Richard James"
            className="w-44 h-44 rounded-xl object-cover"
          />
          {/* Doctor Info */}
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              Dr. Richard James <FaCheckCircle className="text-blue-600" />
            </h2>
            <p className="text-gray-500">
              MBBS, MD – General Medicine | Cardiologist
            </p>
            <p className="mt-2 text-gray-600">
              Dr. Richard James is a highly experienced cardiologist
              specializing in general medicine. With over 15 years of expertise,
              he provides patient-centered care, diagnosis, and treatment of
              heart-related conditions.
            </p>
            <p className="mt-4 font-semibold text-lg">
              Appointment Fee: <span className="text-blue-600">₹500</span>
            </p>
          </div>
        </div>

        {/* Booking Slots */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Booking slots</h3>
          {/* Dates */}
          <div className="flex flex-wrap gap-3 mb-4">
            {dates.map((date) => (
              <button
                key={date}
                className={`px-4 py-2 rounded-lg border ${
                  selectedDate === date
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => setSelectedDate(date)}
              >
                {date}
              </button>
            ))}
          </div>
          {/* Times */}
          <div className="flex flex-wrap gap-3 mb-6">
            {times.map((time) => (
              <button
                key={time}
                className={`px-4 py-2 rounded-lg border ${
                  selectedTime === time
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100"
                }`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
          {/* Book Button */}
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700">
            Book an Appointment
          </button>
        </div>
      </section>

      {/* Related Doctors */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Related Doctors
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {relatedDoctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-xl shadow p-4 text-center hover:shadow-lg transition"
              >
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-24 h-24 mx-auto rounded-full mb-3 object-cover"
                />
                <h4 className="font-semibold">{doc.name}</h4>
                <p className="text-sm text-gray-500">{doc.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DoctorProfile;
