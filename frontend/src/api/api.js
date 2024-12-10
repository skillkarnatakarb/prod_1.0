import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
});

export const fetchProjects = async () => API.get("/projects").then((res) => res.data);
export const uploadProject = async (data) => API.post("/projects", data).then((res) => res.data);
export const deleteProject = async (id) => API.delete(`/projects/${id}`).then((res) => res.data);

export default API;
