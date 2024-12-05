
import React from "react";
import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const isTokenValid = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded.exp * 1000 > Date.now();
  } catch (error) {
    return false;
  }
};

const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  if (!token || !isTokenValid(token) || userRole !== role) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectedRoute;
