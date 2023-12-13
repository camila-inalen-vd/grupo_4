const express = require('express');
const router = express.Router();
const path = require('path')
const userController = require('../controllers/userController')

router.get('/login', userController.login);
router.post('/login', userController.validate)

router.get('/register', userController.register)
router.post('/register', userController.create)

module.exports = router;