// esto es como un controller pero para Axios

const {Travel_package, Hotel, Excursion, Transfer} = require('../database/models');
const {Op} = require('sequelize'); 

const axios = require('axios');  
const {url,timeout} = require('./defaults'); //const {url,timeout} = requiere ... 

module.exports = {
    allPackages: async (req, res) => {
        let rta                     //si lo declaro dentro del try, no lo ve el res.json ya que esta fuera de las llaves, sino declararla como var
        try {   
        rta = await axios({          // axios busca lo que le pongamos abajo
        timeout,                    // aca inserta lo mismo que hay que defaults.js
        method: 'GET',              // porque es paquetesApi tengo router.GET('/', controller.all);
        url:url+'paquetes'          // armamos la ruta de la api ya hecha que nos da los paquetes
        })
        } catch (error) {
            res.send(error.message)
        } 
        res.json(rta.data)          //hay que usar data ya que axios da mucha otra info ademas de la ruta
    },
    allHotels: async (req, res) => {
        let rta                     //si lo declaro dentro del try, no lo ve el res.json ya que esta fuera de las llaves, sino declararla como var
        try {   
        rta = await axios({          // axios busca lo que le pongamos abajo
        timeout,                    // aca inserta lo mismo que hay que defaults.js
        method: 'GET',              // porque es paquetesApi tengo router.GET('/', controller.all);
        url:url+'hoteles'          // armamos la ruta de la api ya hecha que nos da los paquetes
        })
        } catch (error) {
            res.send(error.message)
        } 
        res.json(rta.data)          //hay que usar data ya que axios da mucha otra info ademas de la ruta
    },
    allTransfers: async (req, res) => {
        let rta                     //si lo declaro dentro del try, no lo ve el res.json ya que esta fuera de las llaves, sino declararla como var
        try {   
        rta = await axios({          // axios busca lo que le pongamos abajo
        timeout,                    // aca inserta lo mismo que hay que defaults.js
        method: 'GET',              // porque es paquetesApi tengo router.GET('/', controller.all);
        url:url+'traslados'          // armamos la ruta de la api ya hecha que nos da los paquetes
        })
        } catch (error) {
            res.send(error.message)
        } 
        res.json(rta.data)          //hay que usar data ya que axios da mucha otra info ademas de la ruta
    },
    allExcursions: async (req, res) => {
        let rta                     //si lo declaro dentro del try, no lo ve el res.json ya que esta fuera de las llaves, sino declararla como var
        try {   
        rta = await axios({          // axios busca lo que le pongamos abajo
        timeout,                    // aca inserta lo mismo que hay que defaults.js
        method: 'GET',              // porque es paquetesApi tengo router.GET('/', controller.all);
        url:url+'excursiones'          // armamos la ruta de la api ya hecha que nos da los paquetes
        })
        } catch (error) {
            res.send(error.message)
        } 
        res.json(rta.data)          //hay que usar data ya que axios da mucha otra info ademas de la ruta
    }

}
