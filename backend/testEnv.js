const fs = require('fs');
const path = require('path');

// Read and log .env file content
const envPath = path.join(__dirname, '.env');
const envContent = fs.readFileSync(envPath, 'utf8');
console.log('Raw .env Content:', envContent);

// Use dotenv to load the file
require('dotenv').config({ path: envPath });
console.log('Loaded MONGO_URI:', process.env.MONGO_URI);
