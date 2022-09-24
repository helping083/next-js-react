const express = require('express');
const router = express.Router();

const searchControllers = require('./controllers');

router.get('/search', searchControllers.get);

module.exports = router;