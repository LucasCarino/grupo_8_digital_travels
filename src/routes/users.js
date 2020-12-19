var express = require('express');
var router = express.Router();

const validation = require('../middlewares/validation')
const usersController = require('../controllers/usersController');

// todo esto de abajo para usar multer
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/img/users')); // donde van las imagenes
    },
    filename: function (req, file, cb) {
        fileName = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
        req.body.image = fileName
        cb(null, fileName)
    }
});

var upload = multer({ storage: storage });

/* GET users listing. */
router.get('/login', usersController.login);
router.post('/login', usersController.loginSend);

router.get('/logout', usersController.logout); // ideal hacerlo por post desde un form

router.get('/register', usersController.register); // formulario de registro, valido datos del form y luego mando foto
router.post('/register',upload.single('image'), validation.register, usersController.registerSend); //envia datos de registro

router.get('/carrito', usersController.cart);
router.delete('/delete/:id', usersController.delete) // borro usuario pasando su id

router.get('/list', usersController.list); // listado de usuarios de la bd 
router.get('/detail/:id', usersController.showOne); // muestra detalles de un solo usuario

router.get('/update/:id', usersController.updateForm); // edita un usuario
router.put('/update/:id', usersController.update); // recibe datos de edicion del usuario


module.exports = router;
