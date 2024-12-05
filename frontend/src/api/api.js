import axios from 'axios';

// Create Axios instance with a base URL
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api', // Use environment variable if available
  timeout: 10000, // Set a timeout of 10 seconds for all requests
});

// Add a request interceptor to include the token in headers
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Retrieve token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Add Authorization header
    }
    return config;
  },
  (error) => {
    // Handle request error
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle errors globally
API.interceptors.response.use(
  (response) => response, // Pass through successful responses
  (error) => {
    // Log error details for debugging
    if (error.response) {
      console.error('API error response:', error.response.data);
    } else if (error.request) {
      console.error('API no response received:', error.request);
    } else {
      console.error('API error setting up request:', error.message);
    }
    return Promise.reject(error); // Forward error to the calling function
  }
);

// Fetch all projects
export const fetchProjects = async () => {
  try {
    const response = await API.get('/projects'); // GET request to /projects endpoint
    return response.data;
  } catch (error) {
    throw error; // Re-throw to handle in the component
  }
};

// Upload a new project
export const uploadProject = async (projectData) => {
  try {
    const response = await API.post('/projects', projectData); // POST request to /projects endpoint
    return response.data; // Return the uploaded project data
  } catch (error) {
    throw error; // Re-throw to handle in the component
  }
};


export const deleteProject = async (id) => {
  try {
    const response = await API.delete(`/projects/${id}`);
    return response.data;
  } catch (error) {
    console.error("API error while deleting project:", error.response || error.message);
    throw error; // Re-throw to handle it in the component
  }
};


export default API;
