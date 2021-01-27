const { User } = require('../../database/models');
const { Op } = require('sequelize');

module.exports = {
    all: async (req, res) => {
        try {
            let users = await User.findAll();
            if(users.length > 0){
                let respuesta = {
                    metadata: {
                        status: 200, 
                        usuarios: users.length,
                    },
                    users: users
                }
                res.json(respuesta);
            } else {
                let errorCode = {
                    metadata: {
                        status: 204,
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
            let user = await User.findByPk(req.params.id);
            if(user){
                let respuesta = {
                    metadata: {
                        status: 200, //200 es OK
                    },
                    user: user
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
    current: (req, res) => {
        res.locals.user ? res.send(res.locals.user) : res.send(null)
    }
}