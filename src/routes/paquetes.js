const express = require('express');
const router = express.Router();
const controller = require('../controllers/paquetesController');

const adminMiddleware = require('../middlewares/admin');
const upload = require('../middlewares/multer');

router.get('/', controller.all);
router.get('/detail/:id', controller.detail);
router.get('/create', adminMiddleware, controller.createForm);                       // llama al form de creacion
router.post('/create', adminMiddleware, upload.single('image'), controller.create);  // recibe datos del form de creacion
router.get('/edit/:id', adminMiddleware, controller.editForm);                       // llama al form de edicion
router.post('/edit/:id', adminMiddleware, upload.single('image'), controller.edit);  // recibe datos del form de edicion
router.get('/search', controller.search);
router.get('/delete/:id', adminMiddleware, controller.deleteForm);                      // borrar 
router.post('/delete/:id', adminMiddleware, controller.delete);                      // borrar 

module.exports = router;