const fs = require('fs');
const path = require('path');
const multer = require('multer');

const productsFilePath = path.join(__dirname, '../data/productsDB.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const imageDir = path.join(__dirname, '../../public/img/img_travels');

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
            id: products.slice(-1)[0].id + 1,
            ...req.body,
        }
        products.push(newProduct)
        let productsJson = JSON.stringify(products, null, 2);
        fs.writeFileSync(productsFilePath, productsJson);
        res.redirect('/products');
    },
    editForm: function (req, res) {
        let product = products.filter(prod => prod.id == req.params.id)[0];
        res.render('products/editProduct', { title: 'Editar', product: product });
    },
    edit: function (req, res) {
        let product = products.find(prod => prod.id == req.params.id);
        let index = products.indexOf(product);
        let editProduct = {}
        if (typeof req.body.image === 'undefined') {
            editProduct = {
                id: product.id,
                ...req.body,
                image: product.image,
            };
        } else {
            editProduct = {
                id: product.id,
                ...req.body,
            }
            fs.unlink(path.join(imageDir, product.image), (err) => {
                if (err) {
                    console.error(err);
                    return
                }
            });
        }
        products[index] = editProduct
        let productsJson = JSON.stringify(products, null, 2);
        fs.writeFileSync(productsFilePath, productsJson);
        res.redirect('/products');
    },
    delete: function (req, res) {
        let productsNew = products.filter(prod => prod.id != req.params.id);
        let productsJson = JSON.stringify(productsNew, null, 2);
        fs.writeFileSync(productsPath, productsJson);
        res.redirect('/products');
    },
}