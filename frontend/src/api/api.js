import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Backend base URL
});

// Add a request interceptor to include the token in headers if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Get the token from localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
