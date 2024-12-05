const express = require('express');
const { fetchProjects, uploadProject } = require('../controllers/projectController');

const router = express.Router();

// Route to fetch all projects
router.get('/', fetchProjects);

// Route to upload a new project
router.post('/', uploadProject);

module.exports = router;
