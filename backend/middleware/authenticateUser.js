const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware to authenticate the user based on the JWT token
const authenticateUser = async (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Token comes as "Bearer <token>"
  
  if (!token) {
    return res.status(401).json({ message: 'Access Denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // JWT_SECRET is your secret key
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }
    req.userId = decoded.userId; // Add userId to request for further use
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};

module.exports = authenticateUser;
