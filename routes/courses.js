const express = require('express');
const {
  // bring the functions from the file
  getCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse
} = require('../controllers/courses');

const Course = require('../models/Course');
const advancedResults = require('../middleware/advancedResults');

const router = express.Router({ mergeParams: true });

router //
  .route('/')
  .get(
    advancedResults(Course, {
      path: 'bootcamp',
      select: 'name description' // just get these two
    }),
    getCourses
  )
  .post(addCourse);

router //
  .route('/:id')
  .get(getCourse)
  .put(updateCourse)
  .delete(deleteCourse);

module.exports = router;
