// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";

// Create context
export const AuthContext = createContext();

// Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // ✅ Load user from localStorage safely on first render
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser && parsedUser._id) {
          setUser(parsedUser);
        }
      }
    } catch (err) {
      console.error("Failed to load user from localStorage:", err);
    }
  }, []);

  // ✅ Login: store user & tokens
  const login = (userData, tokens = {}) => {
    if (!userData || !userData._id) {
      console.warn("Invalid user data passed to login()");
      return;
    }

    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));

    if (tokens.accessToken)
      localStorage.setItem("accessToken", tokens.accessToken);
    if (tokens.refreshToken)
      localStorage.setItem("refreshToken", tokens.refreshToken);
  };

  // ✅ Logout: clear frontend + call backend
  const logout = async () => {
    const token = localStorage.getItem("accessToken");

    try {
      const res = await fetch("http://localhost:3000/api/user/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
      });

      const data = await res.json();

      if (!res.ok) {
        console.warn("Backend logout failed:", data.message);
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

  // ✅ Return context
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
