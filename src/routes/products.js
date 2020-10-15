var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.render('products/products', { title: 'Productos' });
});

router.get('/detail', (req, res, next) => {
    res.render('products/productDetail', { title: 'Producto 1' });
});
router.get('/create', (req, res, next) => {
    res.render('products/createProduct', { title: 'Vender' });
});
router.get('/edit/:id', (req, res, next) => {
    res.render('products/editProduct', { title: 'Editar' });
});

module.exports = router;
