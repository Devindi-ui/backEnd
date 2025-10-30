const courseController = require('../controller/courseController');
const express = require('express');
const router = express.Router();

router.post('/create', courseController.createCourse);
router.get('/all', courseController.getAllCourses);

module.exports = router;