const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

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


router.get('/', controller.all);
router.get('/create', controller.createForm);
// router.post('/create', upload.single('image'), webp, controller.create);
router.get('/edit/:id', controller.editForm);
// router.post('/edit/:id', upload.single('image'), webp, controller.edit);
// router.post('/delete/:id', controller.delete);
router.get('/:id', controller.detail);

module.exports = router;
