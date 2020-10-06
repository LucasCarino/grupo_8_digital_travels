var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/carrito', function (req, res, next) {
  res.render('users/productCart', { title: 'Mis Viajes' });
});
router.get('/login', function (req, res, next) {
  res.render('users/login', { title: 'Ingreso' });
});
router.get('/register', function (req, res, next) {
  res.render('users/register', { title: 'Registrate' });
});

module.exports = router;
