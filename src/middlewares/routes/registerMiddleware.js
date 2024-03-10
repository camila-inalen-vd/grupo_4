const {body} = require("express-validator");

const registerValidations = [
    body("nombre")
        .notEmpty().withMessage("Debes completar el nombre"),
    body("apellido")
        .notEmpty().withMessage("Debes completar el apellido"),
    body("email")
        .notEmpty().withMessage('Debes completar el email'),
    body('password')
        .notEmpty().withMessage('Debes completar la contraseña').bail()
        .isLength({ min: 8 }).withMessage('La contraseña debe tener al  menos 8 caracteres'),
    body('avatar').custom((value, { req }) => {
        if (!req.file) {
            throw new Error("Debes elegir una foto de perfil");
         }
        return true;
    })
]

module.exports = registerValidations

