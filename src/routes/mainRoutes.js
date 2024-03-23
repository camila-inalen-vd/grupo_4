const express = require('express');
const router = express.Router();
const path = require('path')
const mainController = require('../controllers/mainController')
const productsViewed = require('../middlewares/routes/productsViewed')

//Rutas principales
router.get('/', productsViewed, mainController.index);
router.get('/support', mainController.support);
router.post('/support', mainController.supportConfig);

module.exports = router;