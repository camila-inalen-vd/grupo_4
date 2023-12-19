const fs = require('fs')
const express = require('express');
const router = express.Router();
const path = require('path');
const productsController = require('../controllers/productsController')
const productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json')));

router.get('/detail/:id', productsController.productDetail)
router.get('/list', productsController.productList)
router.get('/cart', productsController.productCart)

//Crear
router.get('/create', productsController.create)
router.post('/create', productsController.createConfig);

//Editar
router.get('/:id/edit', productsController.edit)
router.put('/:id/edit', productsController.editConfig);

//Eliminar
router.get('/delete', productsController.delete)
router.delete('/delete', productsController.deleteConfig)

module.exports = router;