var express = require('express');
var router = express.Router();
const validation = require('../middlewares/validation')
const usersController = require('../controllers/usersController');
/* GET users listing. */

router.get('/carrito', usersController.cart);
router.get('/login', usersController.login);
router.post('/login', usersController.loginSend); // falta poner validation.login para ver si la clave coincide y demas controles

router.get('/register', usersController.register);
router.post('/register', validation.register, usersController.registerSend);
//router.post('/register', validation.register, usersController.registerSend);

module.exports = router;
