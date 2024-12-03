import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Correctly import as named export

const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/signin" replace />;
  }

  try {
    const decoded = jwtDecode(token); // Use jwtDecode here

    // Check if the user's role matches the required role
    if (decoded.role !== role) {
      console.warn(`Access denied: User role (${decoded.role}) does not match required role (${role}).`);
      return <Navigate to="/" replace />;
    }

    return children;
  } catch (error) {
    console.error('Token decoding failed:', error.message);
    return <Navigate to="/signin" replace />;
  }
};

export default ProtectedRoute;
