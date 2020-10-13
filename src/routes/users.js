var express = require('express');
var router = express.Router();
const validation = require('../middlewares/validation')
const usersController = require('../controllers/usersController');
/* GET users listing. */

router.get('/carrito', usersController.cart);
router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.post('/register', validation.register, usersController.registerSend);

module.exports = router;
