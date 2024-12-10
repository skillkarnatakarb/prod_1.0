require('dotenv').config({ path: __dirname + '/.env' }); // Load environment variables
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./config/db'); // Database connection

// Route imports
const authRoutes = require('./routes/authRoutes');
const roleRoutes = require('./routes/roleRoutes');
const eventRoutes = require('./routes/eventRoutes');
const projectRoutes = require('./routes/projectRoutes');

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// === Middleware Setup ===
app.use(helmet()); // Adds security-related HTTP headers
app.use(cors({ origin: process.env.FRONTEND_URL || '*', credentials: true })); // Enable CORS with configurable origin
app.use(bodyParser.json()); // Parse JSON request bodies

// Use morgan for HTTP request logging in development mode
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  console.log('Development Mode: Logging enabled with Morgan');
}

// === Routes ===
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/roles', roleRoutes); // Role-based routes
app.use('/api/events', eventRoutes); // Event routes
app.use("/api/projects", projectRoutes);
// Project routes

// Debug Log: Show loaded environment variables in development mode
if (process.env.NODE_ENV === 'development') {
  console.log('Loaded Environment Variables:', {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    DB_URI: process.env.DB_URI,
  });
}

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({
    message: `Cannot ${req.method} ${req.originalUrl}. Endpoint not found.`,
  });
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error('Global Error:', err.message);
  res.status(500).json({
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong!',
  });
});

// === Server Setup ===
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Graceful shutdown handlers
const gracefulShutdown = (signal) => {
  console.log(`\nReceived ${signal}. Shutting down gracefully...`);
  server.close(() => {
    console.log('Server shut down.');
    process.exit(0);
  });
};

process.on('SIGINT', () => gracefulShutdown('SIGINT'));
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));

// Debug: Confirm Google Login endpoint configuration in development mode
if (process.env.NODE_ENV === 'development') {
  console.log('Ensure Google Login endpoint is configured at /api/auth/google-login');
}
