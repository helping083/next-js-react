const express = require('express');
const router = express.Router();
const dotenv = require("dotenv");

dotenv.config({ path: "../../.env.local" });

const searchControllers = require('./controllers');

router.get('/search', searchControllers.get);

module.exports = router;