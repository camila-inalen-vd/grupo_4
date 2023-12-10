const express = require('express');
const router = express.Router();
const path = require('path')
const registerController = require('../controllers/registerController')

router.get('/register', registerController.register)

module.exports = router;