const express = require('express');
const router = express.Router();

const paquetesAPIRouter = require('./paquetesApi');
const hotelesAPIRouter = require('./hotelesApi');
const excursionesAPIRouter = require('./excursionesApi');
const trasladosAPIRouter = require('./trasladosApi');
const usersAPIRouter = require('./usersApi');
const axiosAPIRouter = require('./axiosApi');   // para pedidos que vengan por axios

router.use('/paquetes', paquetesAPIRouter);
router.use('/hoteles', hotelesAPIRouter);
router.use('/excursiones', excursionesAPIRouter);
router.use('/traslados', trasladosAPIRouter);
router.use('/users', usersAPIRouter);
router.use('/axios', axiosAPIRouter);

module.exports = router;
