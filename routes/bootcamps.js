const express = require('express');
const {
  // bring the functions from the file
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require('../controllers/bootcamps');

const router = express.Router();

router //
  .route('/')
  .get(getBootcamps)
  .post(createBootcamp);

router //
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
