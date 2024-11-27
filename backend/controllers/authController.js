const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Generate JWT Token
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// Register (Signup) Controller
exports.registerUser = async (req, res) => {
  const { name, email, password, role, mobile } = req.body;

  // Validate all fields
  if (!name || !email || !password || !role || !mobile) {
    return res.status(400).json({ message: 'All fields are required, including mobile number.' });
  }

  // Validate role
  const validRoles = ['student', 'corporate', 'college'];
  if (!validRoles.includes(role)) {
    return res.status(400).json({ message: 'Invalid role. Choose student, corporate, or college.' });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const user = await User.create({ name, email, password, role, mobile }); // Include mobile
    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      mobile: user.mobile, // Include mobile
      token: generateToken(user._id, user.role),
    });
  } catch (error) {
    console.error('Error during registration:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Login (Signin) Controller
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Validate inputs
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      // Send user details along with the token
      res.json({
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        mobile: user.mobile, // Include mobile
        token: generateToken(user._id, user.role),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password.' });
    }
  } catch (error) {
    console.error('Error during login:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
