import React, { useState, useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {
      name: "Edward Vincent",
      email: "richardjameswepp@gmail.com",
      phone: "+1 123 456 7890",
      address: "57th Cross, Richmond Circle, Church Road, London",
      gender: "Male",
      birthday: "20 July, 2024",
    }
  );

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setIsEditing(false);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto py-10 px-6">
        {/* Header */}
        <div className="flex items-center gap-6 mb-8">
          <img
            src="https://i.pravatar.cc/100"
            alt="Profile"
            className="w-24 h-24 rounded-full border"
          />
          <div>
            <h2 className="text-2xl font-semibold">{user.name}</h2>
          </div>
        </div>

        {/* Contact Information */}
        <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
        <p>
          Email id: <span className="text-blue-600">{user.email}</span>
        </p>
        <p>Phone: {user.phone}</p>
        <p>Address: {user.address}</p>

        {/* Basic Information */}
        <h3 className="text-lg font-semibold mt-6 mb-2">Basic Information</h3>
        <p>Gender: {user.gender}</p>
        <p>Birthday: {user.birthday}</p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 border rounded-lg"
          >
            Edit
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Save information
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
