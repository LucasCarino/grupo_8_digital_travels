const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/apiUsersController');

router.get('/', controller.all);
router.get('/:id', controller.detail);

module.exports = router;