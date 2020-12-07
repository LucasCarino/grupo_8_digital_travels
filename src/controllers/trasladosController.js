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
    search: async (req, res) => {
        try {
            let results = await Transfer.findAll({
                where: {                    
                    destination: {[Op.like]: `%${req.query.hacia}%`}
                },
                raw: true
            })
            res.render('products/products', { title: 'Busqueda', products: results, section: `Resultados de la búsqueda ${req.query.hacia}`, type: 'traslados'})
        } catch (error) {
            res.send(error.message);
        }
    },
    deleteForm: async (req, res) => {
        let product = await Transfer.findByPk(req.params.id)
        res.render('products/deleteForm', { title: 'Eliminar', product: product, route: 'traslados'}) 
    },
    delete: async (req, res) => {
        try {
            await Transfer.destroy({where: {id: req.body.id}});
            res.redirect('/')
        } catch (error){
             res.send(error.message);
        }
    },
}