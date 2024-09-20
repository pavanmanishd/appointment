const express = require('express');
const router = express.Router();
const controller = require('../controllers/serviceController');

router.post('/', controller.createService);

module.exports = router;