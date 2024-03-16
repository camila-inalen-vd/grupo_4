const fs = require('fs')
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path')
//Controllers
const productsController = require('../controllers/products-controller');
// Midllewares
const authMiddleware = require('../middlewares/routes/authMiddleware')
const createValidator = require('../middlewares/routes/createValidator')
const adminMiddleware = require('../middlewares/routes/adminMiddleware')

//Multer
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/images/products')
    } ,
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage: storage,
    fileFilter: function(req, file, cb) {
        const allowedExtensions = ['png', 'jpg', 'gif', 'jpeg', "webp"];
        const fileExtension = path.extname(file.originalname).toLowerCase().substring(1);

        if (!allowedExtensions.includes(fileExtension)) {
            req.fileValidationError = 'La imagen debe estar en formato PNG, JPG, JPEG o GIF.';
            return cb(null, false, new Error('La imagen debe estar en formato PNG, JPG, JPEG o GIF.'));
        }

        cb(null, true);
    }
});

//Rutas
router.get('/list', productsController.productList)
router.get('/cart', authMiddleware, productsController.productCart)
router.get('/detail/:id', productsController.productDetail)

//Create
router.get('/create', authMiddleware, adminMiddleware, productsController.create)
router.post('/create', upload.single('product-image'),  createValidator, productsController.createConfig);

//Editar
router.get('/:id/edit', authMiddleware, adminMiddleware, productsController.edit)
router.put('/:id/edit', upload.single('product-image'), productsController.editConfig);

//Eliminar
router.get('/delete', authMiddleware, adminMiddleware, productsController.delete)
router.delete('/delete', productsController.deleteConfig)

module.exports = router;
