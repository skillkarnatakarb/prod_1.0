const express = require('express');
const { protect, roleAccess } = require('../middleware/authMiddleware');

const router = express.Router();

// Routes for role-based access
router.get('/student-only', protect, roleAccess('student'), (req, res) => {
  res.send('Hello Student!');
});

router.get('/corporate-only', protect, roleAccess('corporate'), (req, res) => {
  res.send('Hello Corporate User!');
});

router.get('/college-only', protect, roleAccess('college'), (req, res) => {
  res.send('Hello College User!');
});

module.exports = router;
