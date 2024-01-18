const express = require('express');
const router = express.Router();
const path = require('path')
const userController = require('../controllers/userController')


const registerMiddleware = require("../middlewares/routes/registerMiddleware");
const guestMiddleware = require('../middlewares/routes/guestMiddleware')
const authMiddleware = require('../middlewares/routes/authMiddleware')


router.get('/login', guestMiddleware, userController.login);
router.post('/login', userController.processLogin)

router.get('/register', guestMiddleware, userController.register)
router.post('/register', registerMiddleware, userController.processRegister)

router.get('/profile', authMiddleware, userController.profile)

router.get('/logout', userController.logout)

module.exports = router;