var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.render('products/products', { title: 'Productos' });
});

router.get('/detail', (req, res, next) => {
    res.render('products/productDetail', { title: 'Producto 1' });
});

module.exports = router;
