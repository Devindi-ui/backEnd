const express = require('express');
const enrollment = require('../controller/enrollmentController');
const router = express.Router();

router.post('/create', enrollment.createEnrollement);
router.get('/all', enrollment.getAllEnrollments);

module.exports = router;