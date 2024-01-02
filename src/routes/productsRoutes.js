const fs = require('fs')
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const multer = require('multer');
const path = require('path')

//Multer
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/images/products')
    } ,
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})

//Rutas
router.get('/detail/:id', productsController.productDetail)
router.get('/list', productsController.productList)
router.get('/cart', productsController.productCart)

//Crear
router.get('/create', productsController.create)
router.post('/create', upload.single('product-image'), productsController.createConfig);

//Editar
router.get('/:id/edit', productsController.edit)
router.put('/:id/edit', upload.single('product-image'), productsController.editConfig);

//Eliminar
router.get('/delete', productsController.delete)
router.delete('/delete', productsController.deleteConfig)

module.exports = router;