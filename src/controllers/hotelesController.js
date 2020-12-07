const {Hotel} = require('../database/models');
const {Op} = require('sequelize');      

module.exports = {
    createForm: (req, res) => {
        res.render('products/hoteles/createHotel', {title: 'Crear Hotel'})
    },
    create: async (req, res) => {
        try {
            await Hotel.create(req.body);
            res.redirect('/hoteles');
        } catch (error) {
            res.send(error.message)
        }
    },
    editForm: async (req, res) => {
        try {
            let product = await Hotel.findByPk(req.params.id)
            res.render('products/hoteles/editHotel', { title: 'Editar', product: product })            
        } catch (error) {
            res.send(error.message)
        }
    },
    edit: async (req, res) => {
        try {
            let product = await Hotel.findByPk(req.params.id)
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
            res.redirect('/hoteles');            
        } catch (error) {
            res.send(error.message)
        }
    },
    search: async (req, res) => {
        try {
            let results = await Hotel.findAll({
                where: {                    
                    destination: {[Op.like]: `%${req.query.destino}%`}
                },
                raw: true
            })
            res.render('products/products', { title: 'Busqueda', products: results, section: `Resultados de la búsqueda ${req.query.destino}`, type: 'hoteles'})
        } catch (error) {
            res.send(error.message);
        }
    },
    deleteForm: async (req, res) => {
        let product = await Hotel.findByPk(req.params.id)
        res.render('products/deleteForm', { title: 'Eliminar', product: product, route: 'hoteles'}) 
    },
    delete: async (req, res) => {
        try {
            await Hotel.destroy({where: {id: req.body.id}});
            res.redirect('/')
        } catch (error){
             res.send(error.message);
        }
    },

}