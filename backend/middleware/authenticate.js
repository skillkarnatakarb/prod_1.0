const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from the Authorization header

  if (!token) {
    return res.status(401).json({ message: 'No token provided. Access denied.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
    req.user = decoded; // Attach user information to the request object
    next(); // Continue to the next middleware or route
  } catch (error) {
    res.status(401).json({ message: 'Invalid token. Access denied.' });
  }
};

module.exports = authenticate;
