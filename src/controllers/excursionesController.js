const { Excursion } = require('../database/models');
const { Op } = require('sequelize');

module.exports = {
    createForm: (req, res) => {
        res.render('products/excursiones/createExcursion', { title: 'Crear Excursión' })
    },
    create: async (req, res) => {
        try {
            await Excursion.create(req.body);
            res.redirect('/excursiones');
        } catch (error) {
            res.send(error.message)
        }
    },
    editForm: async (req, res) => {
        try {
            let product = await Excursion.findByPk(req.params.id)
            res.render('products/excursiones/editExcursion', { title: 'Editar', product: product })
        } catch (error) {
            res.send(error.message)
        }
    },
    edit: async (req, res) => {
        try {
            let product = await Excursion.findByPk(req.params.id)
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
            res.redirect('/excursiones');
        } catch (error) {
            res.send(error.message)
        }
    },
}