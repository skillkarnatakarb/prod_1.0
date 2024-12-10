const Project = require("../models/Project");

// Fetch all projects
exports.fetchProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects.", error: error.message });
  }
};

// Upload a new project
exports.uploadProject = async (req, res) => {
  const { title, description, githubLink } = req.body;

  if (!title || !description || !githubLink) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const newProject = new Project({ title, description, githubLink });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: "Error saving project.", error: error.message });
  }
};

// Delete a project
exports.deleteProject = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProject = await Project.findByIdAndDelete(id);
    if (!deletedProject) {
      return res.status(404).json({ message: "Project not found." });
    }
    res.status(200).json({ message: "Project deleted successfully.", deletedProject });
  } catch (error) {
    res.status(500).json({ message: "Error deleting project.", error: error.message });
  }
};
