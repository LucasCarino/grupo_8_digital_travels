const {Travel_package, Hotel, Excursion, Transfer} = require('../database/models');
const {Op} = require('sequelize');      
const fs = require('fs'); 
const path = require('path');

module.exports = {
    all: async (req, res) => {
        try {
            let products = await Travel_package.findAll();
            res.render('products/products', {
                title: 'Paquetes',
                products,
                section: `Todos los paquetes`,
                type: 'paquetes'
            });
        } catch (error) {
            res.send(error.message)
        }
    },
    detail: async (req, res) => {
        try {
            let package = await Travel_package.findByPk(req.params.id, {include: ['Hotel', 'Excursion', 'Transfer']});
            res.render('products/packageDetail', {title: 'Detalle', package})
        } catch (error) {
            res.send(error.message)
        }
    },
    createForm: async (req, res) => {
        try {
            let hotels = await Hotel.findAll();
            let excursions = await Excursion.findAll();
            let transfers = await Transfer.findAll();
            res.render('products/createPackage', {title: 'Crear Paquete', hotels, transfers, excursions})
        } catch (error) {
            res.send(error.message)
        }
    },
    create: async (req, res) => {
        try {
            await Travel_package.create(req.body);
            res.redirect('/');
        } catch (error) {
            res.send(error.message)
        }
    },
    editForm: async (req, res) => {
        try {
            let product = await Travel_package.findByPk(req.params.id)
            let hotels = await Hotel.findAll();
            let excursions = await Excursion.findAll();
            let transfers = await Transfer.findAll();
            res.render('products/editPackage', { title: 'Editar', product, hotels, transfers, excursions })            
        } catch (error) {
            res.send(error.message)
        }
    },
    edit: async (req, res) => {
        try {
            let product = await Travel_package.findByPk(req.params.id)
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
            res.redirect('/');            
        } catch (error) {
            res.send(error.message)
        }
    },
    search: async (req, res) => {
        try {
            let results = await Travel_package.findAll({
                where: {                    
                    destination: {[Op.like]: `%${req.query.destino}%`}
                },
                raw: true
            })
            res.render('products/products', { title: 'Busqueda', products: results, section: `Resultados de la búsqueda ${req.query.destino}`, type: 'paquetes'})
        } catch (error) {
            res.send(error.message);
        }
    },
    deleteForm: async (req, res) => {
        let product = await Travel_package.findByPk(req.params.id)
        res.render('products/deleteForm', { title: 'Eliminar', product: product, route: 'paquetes'}) 
    },
    delete: async (req, res) => {
        try {
            await Travel_package.destroy({where: {id: req.params.id}});
            res.redirect('/')
        } catch (error){
             res.send(error.message);
        }
    },

}