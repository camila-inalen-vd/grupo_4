const express = require('express');
const router = express.Router();
const path = require('path')
const userController = require('../controllers/userController')


const registerMiddleware = require("../middlewares/routes/registerMiddleware");


router.get('/login', userController.login);
router.post('/login', userController.processLogin)

router.get('/register', userController.register)
router.post('/register', registerMiddleware, userController.processRegister)

module.exports = router;