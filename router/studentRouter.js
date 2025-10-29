const express = require('express');
const students = require('../controller/studentController');
const router = express.Router();

router.post('/create', students.createStudent);
router.get('/all', students.getAllStudents);
router.get('/find/:id', students.getStudentById);
router.put('/update/:id', students.updateStudent);
router.delete('/delete/:id', students.deleteStudent);

module.exports = router;