const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Generate JWT Token
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// Register (Signup) Controller
const registerUser = async (req, res) => {
  const { name, email, password, role, mobile } = req.body;

  if (!name || !email || !password || !role || !mobile) {
    return res.status(400).json({ message: "All fields are required, including mobile number." });
  }

  const validRoles = ["student", "corporate", "college"];
  if (!validRoles.includes(role)) {
    return res.status(400).json({ message: "Invalid role. Choose student, corporate, or college." });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ name, email, password, role, mobile });
    const token = generateToken(user._id, user.role);

    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      mobile: user.mobile,
      token,
    });
  } catch (error) {
    console.error("Error during registration:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Login (Signin) Controller
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      const token = generateToken(user._id, user.role);

      // Debugging: Log the response
      console.log("User Login Successful:", { email: user.email, role: user.role });

      res.json({
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token,
      });
    } else {
      res.status(401).json({ message: "Invalid email or password." });
    }
  } catch (error) {
    console.error("Login Error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};






// Google Login Controller
const googleLogin = async (req, res) => {
  const { email, name, role } = req.body;

  if (!email || !name || !role) {
    return res.status(400).json({ message: "Email, name, and role are required." });
  }

  const validRoles = ["student", "corporate", "college"];
  if (!validRoles.includes(role)) {
    return res.status(400).json({ message: "Invalid role. Choose student, corporate, or college." });
  }

  try {
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name: name || "Google User",
        email,
        isGoogleUser: true, // Mark as Google user
        password: "", // No password for Google users
        role,
        mobile: "",
      });
    }

    const token = generateToken(user._id, user.role);

    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      mobile: user.mobile,
      token,
    });
  } catch (error) {
    console.error("Google Login Error:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  googleLogin,
};
