const express = require('express');
const router = express.Router();
const path = require('path')
const loginController = require('../controllers/loginController')

router.get('/login', loginController.login)

module.exports = router;