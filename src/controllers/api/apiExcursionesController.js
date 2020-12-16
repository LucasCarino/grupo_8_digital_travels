const { Travel_package, Hotel, Excursion, Transfer } = require('../../database/models'); // salto dos carpetas, api y routes
const { Op } = require('sequelize');

module.exports = {
    all: async (req, res) => {
        try {
            let products = await Excursion.findAll();

            if(products.length > 0){
                let respuesta = {
                    metadata: {
                        status: 200, //200 es OK
                        excursiones: products.length // pasamos cantidad encontrada
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
        
    }
}