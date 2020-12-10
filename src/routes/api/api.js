const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/apiPaquetesController');

router.get('/paquetes', controller.all);

module.exports = router;
