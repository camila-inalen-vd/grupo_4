const {body} = require("express-validator");
const bcrypt = require('bcryptjs')

const registerValidations = [
    body("nombre")
        .notEmpty().withMessage("Debes completar el nombre"),
    body("apellido")
        .notEmpty().withMessage("Debes completar el apellido"),
    body("email")
        .notEmpty().withMessage('Debes completar el email'),
    body('contraseña')
        .notEmpty().withMessage('Debes completar la contraseña').bail()
        .isLength({ min: 5 }).withMessage('La contraseña debe tener al  menos 5 caracteres'),
    body('repetirContraseña')
        .custom((value, {req}) => {
            console.log((req.body.contraseña));
            if(req.body.repetirContraseña != req.body.contraseña){
                throw new Error('Las contraseñas deben coincidir')
            }
            return true 
        })
]

module.exports = registerValidations

