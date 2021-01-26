const { Travel_package, Hotel, Excursion, Transfer } = require('../../database/models');
const { Op } = require('sequelize');

module.exports = {
    async everything(req, res) {
        try {
            let paquetes = await Travel_package.findAll();
            let hoteles = await Hotel.findAll();
            let excursiones = await Excursion.findAll();
            let traslados = await Transfer.findAll();
            paquetes = paquetes.map(item => item.toJSON());
            paquetes.forEach(item => item.type = 'package');
            hoteles = hoteles.map(item => item.toJSON());
            hoteles.forEach(item => item.type = 'hotel');
            excursiones = excursiones.map(item => item.toJSON());
            excursiones.forEach(item => item.type = 'excursion');
            traslados = traslados.map(item => item.toJSON());
            traslados.forEach(item => item.type = 'transfer');

            let products = [
                ...paquetes,
                ...hoteles,
                ...excursiones,
                ...traslados
            ]
            products.forEach(product => {
                delete product.createdAt;
                delete product.updatedAt;
            });

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
    }
}