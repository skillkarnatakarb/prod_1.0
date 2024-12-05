import React from "react";
import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

// Function to check if the token is valid
const isTokenValid = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded.exp * 1000 > Date.now(); // Token is valid if expiry time is in the future
  } catch (error) {
    console.error("Invalid token:", error.message);
    return false;
  }
};

// ProtectedRoute Component
const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const token = localStorage.getItem("token");
  const rawRole = localStorage.getItem("role");

  // Normalize role and allowedRoles
  const role = rawRole ? rawRole.trim().toLowerCase() : null;
  const normalizedAllowedRoles = Array.isArray(allowedRoles)
    ? allowedRoles.map((role) => role.trim().toLowerCase())
    : [];

  // Debugging Logs
  console.log("Allowed Roles (Prop):", allowedRoles);
  console.log("Normalized Allowed Roles:", normalizedAllowedRoles);
  console.log("Role from LocalStorage:", role);
  console.log("Token from LocalStorage:", token);

  // Redirect to /signin if token is invalid or expired
  if (!token || !isTokenValid(token)) {
    console.error("Invalid or expired token. Redirecting to /signin.");
    localStorage.clear(); // Clear localStorage to avoid stale data
    return <Navigate to="/signin" replace />;
  }

  // Redirect to /signin if role is undefined or empty
  if (!role) {
    console.error("Role is undefined or empty. Redirecting to /signin.");
    localStorage.clear(); // Clear localStorage to avoid stale data
    return <Navigate to="/signin" replace />;
  }

  // Check if role is allowed
  if (!normalizedAllowedRoles.includes(role)) {
    console.error(`Access denied: User role (${role}) does not match allowed roles: ${normalizedAllowedRoles}`);
    return <Navigate to="/signin" replace />;
  }

  // Render the protected children if all checks pass
  return children;
};

export default ProtectedRoute;
