const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
const multer = require('multer');
const path = require('path');

// router.get('/', (req, res, next) => {
//     res.render('products/products', { title: 'Productos' });
// });

// router.get('/detail', (req, res, next) => {
//     res.render('products/productDetail', { title: 'Producto 1' });
// });
// router.get('/create', (req, res, next) => {
//     res.render('products/createProduct', { title: 'Vender' });
// });
// router.get('/edit/:id', (req, res, next) => {
//     res.render('products/editProduct', { title: 'Editar' });
// });

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/img/img_travels'));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const acceptedExt = [".jpg", ".jpeg", ".png"];
        const ext = path.extname(file.originalname);
        if (!acceptedExt.includes(ext)) {
            req.file = file;
        }
        cb(null, acceptedExt.includes(ext));
    },
});

router.get('/', controller.all);
router.get('/create', controller.createForm);
router.post('/create', upload.single('image'), controller.create);

router.get('/edit/:id', controller.editForm);
// router.post('/edit/:id', upload.single('image'), webp, controller.edit);
// router.post('/delete/:id', controller.delete);
router.get('/:id', controller.detail);

module.exports = router;
