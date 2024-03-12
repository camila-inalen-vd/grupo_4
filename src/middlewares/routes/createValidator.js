const {body} = require('express-validator')
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
            throw new Error('Tu producto necesita una imagen que lo represente. Solo se aceptan imagenes PNG, JPG, JPEG, WEBP o GIF.');
        }
        return true;
    }).bail() 
]

module.exports = createValidator;