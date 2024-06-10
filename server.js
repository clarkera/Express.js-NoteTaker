// Imports express
const express = require('express');
const path = require('path');

// Creates an instance of express
const app = express()

// Set Port
const PORT = process.env.PORT || 10000

// Use app to create a public folder /public/, this will be the default landing page
app.use(express.static('public'));

// Middleware to set up express app across webApp
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes to route files
require('./routes/apiRoutes')(app);
require('./routes/index')(app);

// Listener for port 3001, displays a console log to show activation
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);