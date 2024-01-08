const {body} = require("express-validator");
const { equal } = require('assert');

const registerValidations = [
    body("nombre")
        .notEmpty().withMessage("Debes completar el nombre"),
    body("apellido")
        .notEmpty().withMessage("Debes completar el apellido"),
    body("username")
        .notEmpty().withMessage("Debes completar el nombre de usuario"),
    body("email")
        .notEmpty().withMessage('Debes completar el email'),
    body('contraseña')
        .notEmpty().withMessage('Debes completar la contraseña').bail()
        .isLength({ min: 5 }).withMessage('La contraseña debe tener al  menos 5 caracteres'),
    body('repetirContraseña')
        .notEmpty().withMessage('Debes completar la contraseña')
]

module.exports = registerValidations

