const fs = require('fs');
const path = require('path');
const multer = require('multer');

const productsFilePath = path.join(__dirname, '../data/productsDB.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

module.exports = {
    all: (req, res, next) => {
        res.render('products/products', { title: 'Productos', products: products });
    },
    detail: function (req, res) {
        let products = readProducts();
        let product = products.filter(prod => prod.id == req.params.id)[0];
        res.render('product-detail', { product });
    },
    createForm: function (req, res) {
        res.render('products/createProduct', { title: 'Vender' });
    },
    create: (req, res) => {
        newProduct = {
            id: products[products.length - 1].id + 1,
            ...req.body,
            image: req.file.filename
        }
        let newDB = JSON.stringify([...products, newProduct], null, 2);
        fs.writeFileSync(productsFilePath, newDB);
        res.redirect('/');
    },
    editForm: function (req, res) {
        let products = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productsDataBase.json')));
        product = products.filter(prod => prod.id == req.params.id)[0];
        res.render('editProduct', { product });
    },
    edit: function (req, res) {
        let products = JSON.parse(fs.readFileSync(productsPath));
        let product = products.filter(prod => prod.id == req.params.id)[0];
        let index = products.indexOf(product);
        let editProduct = {}
        if (typeof req.body.image === 'undefined') {
            editProduct = {
                id: product.id,
                ...req.body,
                image: product.image,
                category: product.category
            };
        } else {
            editProduct = {
                id: product.id,
                ...req.body,
                category: product.category
            }
            fs.unlink(path.join(__dirname, '../../public/img/products', product.image), (err) => {
                if (err) {
                    console.error(err);
                    return
                }
            });
        }
        products[index] = editProduct
        let productsJson = JSON.stringify(products, null, 2);
        fs.writeFileSync(productsPath, productsJson);
        res.redirect('/products/' + product.id);
    },
    delete: function (req, res) {
        let products = JSON.parse(fs.readFileSync(productsPath));
        products = products.filter(prod => prod.id != req.params.id);
        console.log(products.length);
        let productsJson = JSON.stringify(products, null, 2);
        fs.writeFileSync(productsPath, productsJson);
        res.redirect('/products');
    },
}