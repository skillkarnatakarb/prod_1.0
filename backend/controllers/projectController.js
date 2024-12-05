const Project = require('../models/Project');

// Fetch all projects
const fetchProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects', error: error.message });
  }
};

// Upload a new project
const uploadProject = async (req, res) => {
  console.log('Request Body:', req.body);

  const { title, description, githubLink } = req.body;
  const userId = req.user?.id || req.body.userId; // Extract userId from token or request body

  if (!title || !description || !githubLink || !userId) {
    console.warn('Validation Error: Missing Fields');
    return res.status(400).json({ message: 'All fields, including userId, are required.' });
  }

  try {
    const newProject = new Project({ title, description, githubLink, userId });
    await newProject.save();
    console.log('Project Saved Successfully:', newProject);
    res.status(201).json(newProject);
  } catch (error) {
    console.error('Error Saving Project:', error.message);
    res.status(500).json({ message: 'Server error while saving project.', error: error.message });
  }
};


  

module.exports = { fetchProjects, uploadProject };
