const express = require('express');
const router = express.Router();
const paquetesAPIRouter = require('./paquetesApi');

router.use('/paquetes', paquetesAPIRouter);

module.exports = router;
