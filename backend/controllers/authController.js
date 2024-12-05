const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Utility function to generate JWT Token
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// Helper function to validate user role
const isValidRole = (role) => {
  const validRoles = ['student', 'corporate', 'college'];
  return validRoles.includes(role);
};

// Controller: Register (Signup)
const registerUser = async (req, res) => {
  const { name, email, password, role, mobile } = req.body;

  // Validate input fields
  if (!name || !email || !password || !role || !mobile) {
    return res.status(400).json({ message: 'All fields are required, including mobile number.' });
  }

  if (!isValidRole(role)) {
    return res.status(400).json({ message: 'Invalid role. Choose student, corporate, or college.' });
  }

  try {
    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    // Create a new user
    const user = await User.create({ name, email, password, role, mobile });

    // Respond with user details and token
    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      mobile: user.mobile,
      token: generateToken(user._id, user.role),
    });
  } catch (error) {
    console.error('Registration Error:', error.message);
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

// Controller: Login (Signin)
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Validate input fields
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    const isPasswordMatch = user && (await user.matchPassword(password));

    if (isPasswordMatch) {
      // Respond with user details and token
      res.json({
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        mobile: user.mobile,
        token: generateToken(user._id, user.role),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password.' });
    }
  } catch (error) {
    console.error('Login Error:', error.message);
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

// Controller: Google Login
const googleLogin = async (req, res) => {
  const { email, name, role } = req.body;

  // Validate input fields
  if (!email || !name || !role) {
    return res.status(400).json({ message: 'Email, name, and role are required.' });
  }

  if (!isValidRole(role)) {
    return res.status(400).json({ message: 'Invalid role. Choose student, corporate, or college.' });
  }

  try {
    // Check if the user exists
    let user = await User.findOne({ email });

    // If the user doesn't exist, create a new one
    if (!user) {
      user = await User.create({
        name: name || 'Google User',
        email,
        isGoogleUser: true, // Indicate this user is from Google login
        password: '', // No password for Google users
        role,
        mobile: '', // Default empty mobile number
      });
    }

    // Generate token
    const token = generateToken(user._id, user.role);

    // Respond with user details and token
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      mobile: user.mobile,
      token,
    });
  } catch (error) {
    console.error('Google Login Error:', error.message);
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

// Export all controllers
module.exports = {
  registerUser,
  loginUser,
  googleLogin,
};
