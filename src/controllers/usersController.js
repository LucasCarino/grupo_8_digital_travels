const fs = require('fs'); 
const path = require('path');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');                         // para encriptar pass
const crypto = require('crypto');
const { User, Token } = require('../database/models');              // llamo a base de datos Users
const {Op} = require('sequelize');                          // para poder usar operadores logicos como OR

module.exports = {
    cart: function(req, res, next){
        res.render('users/productCart', { title: 'Mis Viajes' })
    },
    login: function (req, res, next) { // formulario de login
        res.render('users/login', { title: 'Ingreso' });
    },
    loginSend: async (req, res) => { 
        try {
            let old = req.body;
            let error = {};
            let user = await User.findOne({where: {email: req.body.email}});
            if (user) {
                user = user.dataValues;
                if (!bcrypt.compareSync(req.body.password, user.password)) {
                    error.password = 'Revisá tu contraseña'
                    res.render('/users/login', {old, error});
                } else {
                    req.session.user = user;
                    if (req.body.rememberme) {
                        const token = crypto.randomBytes(64).toString("base64");
                        res.cookie("userToken", token, {
                            maxAge: 1000 * 60 * 60 * 24 * 90,
                        });
                        await Token.create({token, userId: user.id});
                    }
                    res.redirect('/');
                } 
            } else {
                error.user = 'Revisá tu email o usuario'
                res.render('users/login', {title: 'Credencial incorrecta', old, error});
            }
            
        } catch (error) {
            res.send(error.message);
        }
    },

    register: function (req, res, next) { // formulario de registro
        res.render('users/register', { title: 'Registrate' });
    },

    registerSend: async (req, res) => { // recibo datos del form de registro, se crea el usuario nuevo
        const errors = validationResult(req);
        if(errors.isEmpty()){ // lo de aca abajo es lo que se hace si no hay errores   
            try {
                //console.log(req.body)  //  para ver que llega
                let passwordHash = bcrypt.hashSync(req.body.password, 10); // se encripta la pass, el 10 es la sal que dice cuanto se complejiza                
                req.body.password = passwordHash;                          // cambio la pass por la pass hasheada antes de guardarla en la BD
                await User.create(req.body) // para usar esto en el form deben estar los mismos nombres que en la BD
                //await newMovie.addActores(req.body.actores)  // en el modelo movie pusimos abajo de todo el alias actores a esta relacion, pero se usa mayuscula luego del add. OJO en req.body.actores este actores es lo que viene del form definido en el controlador create de arriba
                res.redirect('/paquetes')    

            } catch (error){
                res.send(error.message);
            };
    
        } else {
            console.log("hay error");
            res.render('users/register', { title: 'Registrate', errors: errors.array() }); 
            // si hay error los muestro
            }

    },

    logout: (req, res) => {
        req.session.destroy(); // cierro la sesion
        res.clearCookie('userToken'); // mato cookie
        res.redirect('/')
    },


    delete: async (req, res) => {  // por ahora viene por get , ya que pongo en /users/delete/id
        try {                                                                 
            await User.destroy({
                where: {
                id: req.params.id // ojo, si esto viene por post tengo que poner body en vez de params
                }
                });
            res.redirect('/paquetes')                
        } catch (error){
             res.send(error.message);
        }
    },
    list: async (req, res) => { 
        try {
            const usuarios = await User.findAll(); //include all true dice que traiga todas las relaciones con otra tablas, // si no necesito todas las relaciones lo pongo asi findAll({include:['Genre']})             
            //res.send(usuarios);
            res.render('users/usersList',{usuarios});                                             
                    
            } catch (error){
            res.send(error.message);
            }
        },
    showOne: async (req, res) => { //pongo async si tengo adentro cosas que tarden
        try {
            const oneUser = await User.findByPk(req.params.id);   
            //  res.send(oneUser)           
            res.render('users/oneUser',{oneUser});
                                
        } catch (error){
        res.send(error.message);
        }
    },
    updateForm: async (req, res) => { //
        try {                         
         const userId = req.params.id; //capturo el numero del user a editar
         const toEdit = await User.findByPk(userId); 
         res.render('users/updateUser',{toEdit})
          
        } catch (error){
            res.send(error.message);
        }
    },
    
    update: async (req, res) => { //
        try {
            const userId = req.params.id; // obtendo el id que viene por formulario
            const changedUser = await User.findByPk(userId);            
            await changedUser.update(req.body) 
            
            res.redirect('/products') 
            
        } catch (error){
            res.send(error.message); 

        }
    }
}


