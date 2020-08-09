const express = require('express');
const dotenv = require('dotenv'); // env variables
const morgan = require('morgan'); // logging
const colors = require('colors'); // colors for console
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db'); // mongoDB connection

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to db
connectDB();

// Route files
const bootcamps = require('./routes/bootcamps');

const app = express();

// Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount router
// Routers in /api/v1/xxx format
app.use('/api/v1/bootcamps', bootcamps);

app.use(errorHandler); // has to be after bootcamps so we can use it in it

// Run the big boi
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(
    `App listening on port ${PORT} in ${process.env.NODE_ENV} mode`.yellow.bold
  );
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  server.close(() => process.exit(1));
});
