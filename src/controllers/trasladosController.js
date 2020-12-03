const { Transfer } = require('../database/models');
const { Op } = require('sequelize');

module.exports = {
    createForm: (req, res) => {
        res.render('products/traslados/createTraslado', { title: 'Pública tu traslado' })
    },
    create: async (req, res) => {
        try {
            await Transfer.create(req.body);
            res.redirect('/traslados');
        } catch (error) {
            res.send(error.message)
        }
    },
    editForm: async (req, res) => {
        try {
            let product = await Transfer.findByPk(req.params.id)
            res.render('products/traslados/editTraslado', { title: 'Editar', product: product })
        } catch (error) {
            res.send(error.message)
        }
    },
    edit: async (req, res) => {
        try {
            let product = await Transfer.findByPk(req.params.id)
            let editProduct = {}
            if (typeof req.body.image === 'undefined') {
                editProduct = {
                    ...req.body,
                    image: product.image,
                };
            } else {
                editProduct = req.body
                fs.unlink(path.join(imageDir, product.image), (err) => {
                    if (err) {
                        console.error(err);
                        return
                    }
                });
            }
            await product.update(editProduct);
            res.redirect('/traslados');
        } catch (error) {
            res.send(error.message)
        }
    },
}