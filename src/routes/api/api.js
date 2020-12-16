const express = require('express');
const router = express.Router();

const paquetesAPIRouter = require('./paquetesApi');
const hotelesAPIRouter = require('./hotelesApi');
const excursionesAPIRouter = require('./excursionesApi');
const trasladosAPIRouter = require('./trasladosApi');
const axiosAPIRouter = require('./axiosApi');   // para pedidos que vengan por axios

router.use('/paquetes', paquetesAPIRouter);
router.use('/hoteles', hotelesAPIRouter);
router.use('/excursiones', excursionesAPIRouter);
router.use('/traslados', trasladosAPIRouter);
router.use('/axios', axiosAPIRouter);


// router.get('/naranja/movies', async(req, res) => { // esto lo hizo gonza en ej de axios 15/12
//     let movies = await moviesResource.getAll()
//      res.json(movies.data) // hay que poner .data ya que hay mucha mas info q eno nos importa
// });
// 


module.exports = router;
