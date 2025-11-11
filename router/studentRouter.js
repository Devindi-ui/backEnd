const express = require('express');
const students = require('../controller/studentController');
const router = express.Router();

router.post('/create', students.createStudent);
router.get('/all', students.getAllStudents);
router.get('/find/:id', students.getStudentById);
router.get('/search/:text', students.getStudentByText);
router.put('/update/:id', students.updateStudent);
router.put('/delete/:id', students.deleteStudent);

module.exports = router;