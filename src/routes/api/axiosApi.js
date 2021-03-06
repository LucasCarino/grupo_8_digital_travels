const express = require('express');
const router = express.Router();

const controller = require('../../request/Resources'); //

// const multer = require('multer');
// const path = require('path');

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, path.join(__dirname, '../../public/img/img_travels'));
//     },
//     filename: function (req, file, cb) {
//         fileName = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
//         req.body.image = fileName
//         cb(null, fileName)
//     }
// });

// var upload = multer({ storage: storage });

router.get('/allPackages', controller.allPackages);
router.get('/allHotels', controller.allHotels);
router.get('/allTransfers', controller.allTransfers);
router.get('/allExcursions', controller.allExcursions);

// router.get('/create', controller.createForm);                       // llama al form de creacion
// router.post('/create', upload.single('image'), controller.create);  // recibe datos del form de creacion
// router.get('/:id', controller.detail);
// router.get('/edit/:id', controller.editForm);                       // llama al form de edicion
// router.post('/edit/:id', upload.single('image'), controller.edit);  // recibe datos del form de edicion
// router.get('/search', controller.search);
// router.get('/delete/:id', controller.deleteForm);                      // borrar 
// router.post('/delete/:id', controller.delete);                      // borrar 

module.exports = router;