require('dotenv').config({ path: __dirname + '/.env' }); // Load environment variables
const connectDB = require('./config/db'); // Database connection
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes'); // Authentication routes
const roleRoutes = require('./routes/roleRoutes'); // Role-based routes

const app = express();

// Debugging environment variables (remove in production)
console.log('Loaded Environment Variables:', process.env);

// Database Connection
connectDB();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse JSON request bodies

// Debug Log: Server initialization
console.log('Initializing server and setting up routes...');

// Routes
app.use('/api/auth', authRoutes); // Authentication endpoints
app.use('/api/roles', roleRoutes); // Role-based endpoints

// Debugging route initialization
console.log('Routes initialized: /api/auth and /api/roles');

// Handle undefined routes
app.use((req, res, next) => {
  console.warn(`Undefined route accessed: ${req.method} ${req.originalUrl}`);
  res.status(404).json({
    message: `Cannot ${req.method} ${req.originalUrl}. Endpoint not found.`,
  });
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(`Global Error: ${err.message}`);
  res.status(500).json({
    message: 'Internal Server Error',
    error: err.message,
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Add this debug log for Google login
console.log('Ensure Google Login endpoint is configured at /api/auth/google-login');
