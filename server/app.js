const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Require the controller file
const users = require('./routes/userRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

// Start the Express server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

// Define the routes
app.use('/users', users);
