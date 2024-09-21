const express = require('express');
const router = express.Router();
const controller = require('../controllers/appointmentController');

router.post('/new', controller.createAppointment);
router.get('/', controller.getAppointments);

module.exports = router;