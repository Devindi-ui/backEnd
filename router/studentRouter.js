const express = require('express');
const students = require('../controller/studentController');
const router = express.Router();

router.post('/create', students.createStudent);

module.exports = router;