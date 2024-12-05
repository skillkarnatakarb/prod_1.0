require('dotenv').config({ path: __dirname + '/.env' }); // Load environment variables
const connectDB = require('./config/db'); // Database connection
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet'); // Added security middleware for HTTP headers
const morgan = require('morgan'); // HTTP request logger middleware
const authRoutes = require('./routes/authRoutes'); // Authentication routes
const roleRoutes = require('./routes/roleRoutes'); // Role-based routes
const eventRoutes = require('./routes/eventRoutes');
const projectRoutes = require("./routes/projectRoutes");

// Initialize Express app
const app = express();

// Use morgan for logging HTTP requests in development mode
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); // Log HTTP requests (only in development)
}

// Middleware setup
app.use(helmet()); // Adds security-related HTTP headers
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse JSON request bodies

// Database Connection
connectDB();

// Routes
app.use('/api/auth', authRoutes); // Authentication endpoints
app.use('/api/roles', roleRoutes); // Role-based endpoints
app.use("/api", eventRoutes); // Use event routes under "/api"
app.use("/api/projects", projectRoutes); // Projects routes

// Debug Log: Server initialization (only in development)
if (process.env.NODE_ENV === 'development') {
  console.log('Initializing server and setting up routes...');
  console.log('Loaded Environment Variables:', process.env);
  console.log('Routes initialized: /api/auth, /api/roles, /api/events, /api/projects');
}

// Handle undefined routes with custom 404 handler
app.use((req, res, next) => {
  console.warn(`Undefined route accessed: ${req.method} ${req.originalUrl}`);
  res.status(404).json({
    message: `Cannot ${req.method} ${req.originalUrl}. Endpoint not found.`,
  });
});

// Global error handling middleware (for unhandled errors)
app.use((err, req, res, next) => {
  console.error(`Global Error: ${err.message}`);
  res.status(500).json({
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong!',
  });
});

// Start the server with a graceful shutdown handler
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Graceful shutdown for the server
process.on('SIGINT', () => {
  console.log('\nGracefully shutting down the server...');
  server.close(() => {
    console.log('Server shut down.');
    process.exit(0);
  });
});

process.on('SIGTERM', () => {
  console.log('\nGracefully shutting down the server...');
  server.close(() => {
    console.log('Server shut down.');
    process.exit(0);
  });
});

// Add debug log for Google login endpoint configuration
if (process.env.NODE_ENV === 'development') {
  console.log('Ensure Google Login endpoint is configured at /api/auth/google-login');
}
