const courseController = require('../controller/courseController');
const express = require('express');
const router = express.Router();

router.post('/create', courseController.createCourse);

module.exports = router;