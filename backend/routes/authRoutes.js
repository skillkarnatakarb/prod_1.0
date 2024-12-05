const express = require('express');
const router = express.Router();
const { googleLogin, registerUser, loginUser } = require('../controllers/authController'); // Correct path to `authController.js`

// Register (Signup) route
router.post('/register', registerUser);

// Login (Signin) route
router.post('/signin', loginUser);

// Google Login route
router.post('/google-login', googleLogin);

module.exports = router;
