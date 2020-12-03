var express = require('express');
var router = express.Router();

const validation = require('../middlewares/validation')
const usersController = require('../controllers/usersController');
/* GET users listing. */

// router.get('/carrito', usersController.cart);

router.get('/login', usersController.login);
router.post('/login', usersController.loginSend);

router.get('/logout', usersController.logout); // ideal hacerlo por post desde un form

router.get('/register', usersController.register); // formulario de registro
router.post('/register', validation.register, usersController.registerSend); //envia datos de registro

router.get('/carrito', usersController.cart);
router.delete('/delete/:id', usersController.delete) // borro usuario pasando su id

router.get('/list', usersController.list); // listado de usuarios de la bd 
router.get('/detail/:id', usersController.showOne); // muestra detalles de un solo usuario

router.get('/update/:id', usersController.updateForm); // edita un usuario
router.put('/update/:id', usersController.update); // recibe datos de edicion del usuario


module.exports = router;
