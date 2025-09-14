// src/services/doctorService.js
import api from "../utils/api";

// Fetch doctors list
export const getDoctors = async () => {
  const res = await api.get("/doctors");
  return res.data;
};

// Add appointment
export const bookAppointment = async (data) => {
  const res = await api.post("/appointments", data);
  return res.data;
};
