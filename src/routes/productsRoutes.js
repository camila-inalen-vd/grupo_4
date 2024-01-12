const fs = require('fs')
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path')
const {body} = require('express-validator')
//Controllers
const productsController = require('../controllers/productsController');

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
        const allowedExtensions = ['png', 'jpg', 'gif'];
        const fileExtension = path.extname(file.originalname).toLowerCase().substring(1);

        if (!allowedExtensions.includes(fileExtension)) {
            req.fileValidationError = 'La imagen debe estar en formato PNG, JPG o GIF.';
            return cb(null, false, new Error('La imagen debe estar en formato PNG, JPG o GIF.'));
        }

        cb(null, true);
    }
});

//Rutas
router.get('/detail/:id', productsController.productDetail)
router.get('/list', productsController.productList)
router.get('/cart', productsController.productCart)

//Crear
const createValidator = [
    body('nombre').notEmpty().withMessage('Este campo es obligatorio'),
    body('marca').notEmpty().withMessage('Este campo es obligatorio'),
    body('precio').notEmpty().withMessage('Este campo es obligatorio'),
    body('cuotas').notEmpty().withMessage('Este campo es obligatorio'),
    body('descuento').notEmpty().withMessage('Este campo es obligatorio'),
    body('stock').notEmpty().withMessage('Este campo es obligatorio'),
    body('descripcion').notEmpty().withMessage('Este campo es obligatorio'),
    body('descripcionLarga').notEmpty().withMessage('Este campo es obligatorio'),
    body('color').notEmpty().withMessage('Este campo es obligatorio'),
    body('talle').notEmpty().withMessage('Este campo es obligatorio'),
    body('capellada').notEmpty().withMessage('Este campo es obligatorio'),
    body('forro').notEmpty().withMessage('Este campo es obligatorio'),
    body('suela').notEmpty().withMessage('Este campo es obligatorio'),
    body('origen').notEmpty().withMessage('Este campo es obligatorio'),
    body('product-image').custom((value, { req }) => {
        if (!req.file) {
            throw new Error('Tu producto necesita una imagen que lo represente. Solo se aceptan imagenes PNG, JPG o GIF.');
        }
        return true;
    }).bail(),
]

//Validaciones

router.get('/create', productsController.create)
router.post('/create',upload.single('product-image'), createValidator, productsController.createConfig);

//Editar
router.get('/:id/edit', productsController.edit)
router.put('/:id/edit',upload.single('product-image'), productsController.editConfig);

//Eliminar
router.get('/delete', productsController.delete)
router.delete('/delete', productsController.deleteConfig)

module.exports = router;