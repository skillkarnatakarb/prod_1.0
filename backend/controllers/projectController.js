const Project = require('../models/Project');

// Fetch all projects
const fetchProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects", error: error.message });
  }
};

// Upload a new project
const uploadProject = async (req, res) => {
  const { title, description, githubLink } = req.body;
  
  if (!title || !description || !githubLink) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const newProject = new Project({ title, description, githubLink });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: "Error uploading project", error: error.message });
  }
};

module.exports = { fetchProjects, uploadProject };
