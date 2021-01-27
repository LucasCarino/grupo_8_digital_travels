const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/apiUsersController');

router.get('/all', controller.all);
router.get('/current', controller.current);
router.get('/:id', controller.detail);

module.exports = router;