const express = require('express');
const router = express.Router();
const path = require('path');
const productsController = require('../controllers/productsController')

router.get('/detail/:id', productsController.productDetail)

router.get('/list', productsController.productList)

module.exports = router;