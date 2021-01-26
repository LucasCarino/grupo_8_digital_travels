const { Travel_package, Hotel, Excursion, Transfer } = require('../../database/models'); // salto dos carpetas, api y routes
const { Op } = require('sequelize');

module.exports = {
    all: async (req, res) => {
        try {
            let products = await Travel_package.findAll();

            if(products.length > 0){
                let respuesta = {
                    metadata: {
                        status: 200, //200 es OK
                        paquetes: products.length // pasamos cantidad encontrada
                    },
                    products: products // aca si va la info requerida
                }
                res.json(respuesta); // cuando es una api no se usa render ya que no estamos renderizando una vista sino pasando la info en json para otro sistema
            } else {
                let errorCode = {
                    metadata: {
                        status: 204, //204 es NOK
                        paquetes: 0
                    }
                };
                res.json(errorCode);                   
                }
            
        } catch (error) {
            res.send(error.message)
            }
    },
    detail: async (req, res) => {
        try {
            let product = await Travel_package.findByPk(req.params.id);
            if(product){
                let respuesta = {
                    metadata: {
                        status: 200, //200 es OK
                        paquetes: product.length // pasamos cantidad encontrada
                    },
                    product: product
                     // aca si va la info requerida
                }
                res.json(respuesta); // cuando es una api no se usa render ya que no estamos renderizando una vista sino pasando la info en json para otro sistema
            } else {
                let errorCode = {
                    metadata: {
                        status: 204, //204 es NOK
                        paquetes: 0
                    }
                };
                res.json(errorCode);                   
                }
            
        } catch (error) {
            res.send(error.message)
            }
    },
    last: async (req, res) => {
        try {
            let product = await Travel_package.findOne;
        } catch (error) {
            res.send(error.message)
        }
    }
}