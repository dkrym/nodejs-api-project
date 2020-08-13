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

const router = express.Router({ mergeParams: true });

const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');

router //
  .route('/')
  .get(
    advancedResults(Course, {
      path: 'bootcamp',
      select: 'name description' // just get these two
    }),
    getCourses
  )
  .post(protect, authorize('publisher', 'admin'), addCourse);

router //
  .route('/:id')
  .get(getCourse)
  .put(protect, authorize('publisher', 'admin'), updateCourse)
  .delete(protect, authorize('publisher', 'admin'), deleteCourse);

module.exports = router;
