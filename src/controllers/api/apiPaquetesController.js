const { Travel_package, Hotel, Excursion, Transfer } = require('../../database/models');
const { Op } = require('sequelize');

module.exports = {
    all: async (req, res) => {
        try {
            let products = await Travel_package.findAll();
            let respuesta = {
                metadata: {
                    status: 200,
                    paquetes: products.length
                },
                products: products
            }
            res.json(respuesta);
        } catch (error) {
            res.send(error.message)
        }
    }
}