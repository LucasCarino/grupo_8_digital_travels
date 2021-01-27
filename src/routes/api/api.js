const express = require('express');
const router = express.Router();

const paquetesAPIRouter = require('./paquetesApi');
const hotelesAPIRouter = require('./hotelesApi');
const excursionesAPIRouter = require('./excursionesApi');
const trasladosAPIRouter = require('./trasladosApi');
const usersAPIRouter = require('./usersApi');
const axiosAPIRouter = require('./axiosApi');   // para pedidos que vengan por axios
const usersAPIRouter = require('./usersApi');
const mainController = require('../../controllers/api/apiMainController');

router.use('/paquetes', paquetesAPIRouter);
router.use('/hoteles', hotelesAPIRouter);
router.use('/excursiones', excursionesAPIRouter);
router.use('/traslados', trasladosAPIRouter);
router.use('/users', usersAPIRouter);
router.use('/axios', axiosAPIRouter);
router.use('/users', usersAPIRouter);
router.get('/all', mainController.everything);

module.exports = router;
