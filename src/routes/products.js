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
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const acceptedExt = [".jpg", ".jpeg", ".png"];
        const ext = path.extname(file.originalname);
        if (!acceptedExt.includes(ext)) {
            req.file = file;
        }
        cb(null, acceptedExt.includes(ext));
    },
});

router.get('/', controller.all);
router.get('/detail/:id', controller.detail);
router.get('/create', controller.createForm);
router.post('/create', upload.single('image'), controller.create);
router.get('/edit/:id', controller.editForm);
// router.post('/edit/:id', upload.single('image'), webp, controller.edit);
// router.post('/delete/:id', controller.delete);
module.exports = router;
