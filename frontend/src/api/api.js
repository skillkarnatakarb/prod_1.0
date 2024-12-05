import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Backend base URL
});

export const fetchProjects = async () => {
  try {
    const response = await API.get('/projects'); // Endpoint to get all projects
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error; // Re-throw to handle in the component
  }
};

// Upload a new project
export const uploadProject = async (projectData) => {
  try {
    const response = await API.post('/projects', projectData); // Endpoint to upload a project
    return response.data; // Return the uploaded project data
  } catch (error) {
    console.error("Error uploading project:", error);
    throw error; // Re-throw to handle in the component
  }
};


// Add a request interceptor to include the token in headers if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Get the token from localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
