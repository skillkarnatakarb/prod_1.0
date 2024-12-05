import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Correct import

const isTokenValid = (token) => {
  try {
    const decoded = jwtDecode(token); // Decode the token
    return decoded.exp * 1000 > Date.now(); // Check if the token has expired
  } catch (error) {
    console.error("Invalid token:", error.message);
    return false;
  }
};

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  if (!token || !isTokenValid(token)) {
    console.error("Invalid or expired token.");
    return <Navigate to="/signin" replace />;
  }

  if (!allowedRoles.includes(userRole)) {
    console.error(`Access denied: User role (${userRole}) not in allowed roles (${allowedRoles}).`);
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectedRoute;
