const express = require('express');
const router = express.Router();
const path = require('path');
const productsController = require('../controllers/productsController')

router.get('/detail/:id', productsController.productDetail)
router.get('/list', productsController.productList)

//Crear y modificar
router.get('/create', productsController.crudController.vista)
router.post('/create',express.urlencoded({ extended: false }), productsController.crudController.logica)

module.exports = router;