const express = require('express');
const router = express.Router();
const controller = require('../controllers/serviceController');

router.post('/new', controller.createService);
router.get('/me', controller.me);
router.get('/all', controller.all);

module.exports = router;