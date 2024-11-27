const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');

const router = express.Router();

// Signup Route
router.post('/register', registerUser); // Correctly defined route

// Signin Route
router.post('/signin', loginUser);

module.exports = router;
