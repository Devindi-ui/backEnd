const express = require('express');
const enrollment = require('../controller/enrollmentController');
const enrollmentController = require('../controller/enrollmentController');
const router = express.Router();

router.post('/create', enrollment.createEnrollement);
router.get('/all', enrollment.getAllEnrollments);
router.put('/update/:id', enrollment.updateEnrollment);
router.put('/delete/:id', enrollment.deleteEnrollment);


module.exports = router;