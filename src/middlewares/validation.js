const { body } = require('express-validator');

module.exports = {
    register: [
        body('first_name')
            .notEmpty()
            .withMessage('Nombre es obligatorio'),
        body('last_name')
            .notEmpty()
            .withMessage('Apellido es obligatorio'),
        body('username')
            .notEmpty()
            .withMessage('Este campo es obligatorio')
            .isLength( {min: 6} )
            .withMessage('El usuario debe tener al menos 6 caracteres'),
        body('email')
            .notEmpty()
            .withMessage('Este campo es obligatorio')
            .isEmail()
            .withMessage('Email incorrecto'),
        body('password')
            .notEmpty()
            .withMessage('Este campo es obligatorio')
            .isLength( {min: 4} )
            .withMessage('La contraseña debe tener al menos 8 caracteres'),
        body('passwordcheck')
            .notEmpty()
            .withMessage('Este campo es obligatorio')
            .custom(function(value, { req }){
                if(value != req.body.password) {
                    return false
                }
                return true
            })
            .withMessage('Las contraseñas no coinciden')
    ]
}