// src/api/profileApi.js

import API from './api';  // Axios instance

// Fetch user profile data
export const fetchUserProfile = async () => {
  try {
    const response = await API.get('/profile');  // Adjust API endpoint as needed
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

// Update user profile data
export const updateUserProfile = async (userData) => {
  try {
    const response = await API.put('/profile', userData);
    return response.data;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};

// Update resume and LinkedIn links
export const updateLinks = async (links) => {
  try {
    const response = await API.put('/profile/links', links);
    return response.data;
  } catch (error) {
    console.error('Error updating links:', error);
    throw error;
  }
};
