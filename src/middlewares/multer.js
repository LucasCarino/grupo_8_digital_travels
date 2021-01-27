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

module.exports = upload;