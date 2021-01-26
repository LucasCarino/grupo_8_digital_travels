const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/apiTrasladosController');

router.get('/', controller.all);

module.exports = router;