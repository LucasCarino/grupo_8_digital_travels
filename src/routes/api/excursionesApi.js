const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/apiExcursionesController');

router.get('/', controller.all);

module.exports = router;