const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/img/img_travels'));
    },
    filename: function (req, file, cb) {
        fileName = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
        req.body.image = fileName
        cb(null, fileName)
    }
});

var upload = multer({ storage: storage });

router.get('/', controller.all);
router.get('/create', controller.createForm);
router.post('/create', upload.single('image'), controller.create);
router.get('/edit/:id', controller.editForm);
router.post('/edit/:id', upload.single('image'), controller.edit);
router.post('/delete/:id', controller.delete);
router.get('/:id', controller.detail);

module.exports = router;
