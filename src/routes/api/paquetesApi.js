const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/apiPaquetesController');

router.get('/', controller.all);
router.get('/:id', controller.detail);

module.exports = router;