const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects.", error: error.message });
  }
});

// Create a new project
router.post("/", async (req, res) => {
  const { title, description, githubLink } = req.body;
  try {
    const newProject = new Project({ title, description, githubLink });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: "Error saving project.", error: error.message });
  }
});

// Delete a project
// Delete a project
router.delete("/:id", async (req, res) => {
    try {
      console.log("Request received to delete project with ID:", req.params.id); // Debug log
      const { id } = req.params;
  
      const deletedProject = await Project.findByIdAndDelete(id);
  
      if (!deletedProject) {
        console.warn("Project not found with ID:", id); // Debug log
        return res.status(404).json({ message: "Project not found." });
      }
  
      console.log("Project deleted successfully:", deletedProject); // Debug log
      res.status(200).json({ message: "Project deleted successfully." });
    } catch (error) {
      console.error("Error while deleting project:", error.message); // Debug log
      res.status(500).json({ message: "Error deleting project.", error: error.message });
    }
  });
  
module.exports = router;
