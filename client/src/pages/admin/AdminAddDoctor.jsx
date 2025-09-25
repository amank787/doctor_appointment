import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    specialty: "General physician",
    education: "",
    address1: "",
    address2: "",
    experience: "",
    fees: "",
    about: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor Data Submitted:", formData);
    // later you can connect to backend API
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Add Doctor</h2>
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Logout
          </button>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow p-6 max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Upload Photo */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-sm">
                +
              </div>
              <div>
                <label className="block text-gray-600 text-sm">
                  Upload doctor picture
                </label>
                <input
                  type="file"
                  name="photo"
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
            </div>

            {/* Name & Specialty */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Doctor name"
                value={formData.name}
                onChange={handleChange}
                className="border rounded-lg p-2 w-full"
              />
              <select
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
                className="border rounded-lg p-2 w-full"
              >
                <option>General physician</option>
                <option>Cardiologist</option>
                <option>Dentist</option>
                <option>Neurologist</option>
              </select>
            </div>

            {/* Email & Education */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Doctor email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-lg p-2 w-full"
              />
              <input
                type="text"
                name="education"
                placeholder="Education"
                value={formData.education}
                onChange={handleChange}
                className="border rounded-lg p-2 w-full"
              />
            </div>

            {/* Password & Address */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="password"
                name="password"
                placeholder="Doctor password"
                value={formData.password}
                onChange={handleChange}
                className="border rounded-lg p-2 w-full"
              />
              <input
                type="text"
                name="address1"
                placeholder="Address 1"
                value={formData.address1}
                onChange={handleChange}
                className="border rounded-lg p-2 w-full"
              />
            </div>

            {/* Experience & Address2 */}
            <div className="grid grid-cols-2 gap-4">
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="border rounded-lg p-2 w-full"
              >
                <option value="">Experience</option>
                <option>1 year</option>
                <option>2 years</option>
                <option>5+ years</option>
              </select>
              <input
                type="text"
                name="address2"
                placeholder="Address 2"
                value={formData.address2}
                onChange={handleChange}
                className="border rounded-lg p-2 w-full"
              />
            </div>

            {/* Fees */}
            <input
              type="text"
              name="fees"
              placeholder="Fee"
              value={formData.fees}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full"
            />

            {/* About */}
            <textarea
              name="about"
              placeholder="Write about yourself"
              value={formData.about}
              onChange={handleChange}
              rows={4}
              className="border rounded-lg p-2 w-full"
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg"
            >
              Add Doctor
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddDoctor;
