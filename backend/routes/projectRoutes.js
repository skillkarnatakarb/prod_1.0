const express = require("express");
const { fetchProjects, uploadProject, deleteProject } = require("../controllers/projectController");

const router = express.Router();

router.get("/", fetchProjects);
router.post("/", uploadProject);
router.delete("/:id", deleteProject);

module.exports = router;
