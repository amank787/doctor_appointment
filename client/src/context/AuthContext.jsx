// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const login = (userData, tokens) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    if (tokens?.accessToken)
      localStorage.setItem("accessToken", tokens.accessToken);
    if (tokens?.refreshToken)
      localStorage.setItem("refreshToken", tokens.refreshToken);
  };

  const logout = async () => {
    try {
      const token = localStorage.getItem("accessToken");

      // ✅ Call backend logout
      const res = await fetch("http://localhost:3000/api/user/logout", {
        method: "POST", // or GET if your backend uses GET
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
      });

      const data = await res.json();
      if (!res.ok) {
        console.error(data.message || "Logout failed on server");
      }
    } catch (err) {
      console.error("Error during logout:", err);
    } finally {
      // ✅ Always clear frontend session
      setUser(null);
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
