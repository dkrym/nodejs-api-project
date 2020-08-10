const express = require('express');
const {
  // bring the functions from the file
  getCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse
} = require('../controllers/courses');

const router = express.Router({ mergeParams: true });

router //
  .route('/')
  .get(getCourses)
  .post(addCourse);

router //
  .route('/:id')
  .get(getCourse)
  .put(updateCourse)
  .delete(deleteCourse);

module.exports = router;
