const fs = require('fs'); 
const path = require('path');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');                         // para encriptar pass
const {Users} = require('../database/models');              // llamo a base de datos Users
const {Op} = require('sequelize');                          // para poder usar operadores logicos como OR

module.exports = {
    cart: function(req, res, next){
        res.render('users/productCart', { title: 'Mis Viajes' })
    },
    login: function (req, res, next) { // formulario de login
        res.render('users/login', { title: 'Ingreso' });
    },
    loginSend: async (req, res) => { // procesa datos recibidos por Post del login
        try {
        var usuarioEncontrado = await Users.findAll({  // busco al usuario con el username que viene en el body del form
            where: {
                username: {[Op.like] : req.body.username}  //"%" + req.body.username + "%" es para meter comodines adelante y atras} 
        }})
        //res.send(usuarioEncontrado) 

        if (Object.keys(usuarioEncontrado).length == 0) {  // si el objeto esta vacio es que no encontro el username en la bd
            res.render('users/login', {errors: 
                     [
                     {msg: 'El usuario no existe'}
                     ],title: 'Ingreso' 
                 })

        };

        if(!(bcrypt.compareSync(req.body.password, usuarioEncontrado[0].password))) { //compara contrasenas, OJO usar [0] ya que cuando uso findAll es un array
            res.render('users/login', {errors: 
                [
                {msg: 'Password Incorrecta'}
                ],title: 'Ingreso' 
            })
        };

        req.session.usuario = usuarioEncontrado[0].username; //al haber declardo el middleware de applicacion session aparece el uso de req.session y yo le agrego usuario
        // entonces a partir de ahora en req.session.usuario esta el username del usuario en sesion. Ojo que nodemon al salvar algo reinicia y se cae la sesion
        
        // si remember mi esta checkeado, crear cookie. Si no esta checkeado no viene en el body rememberme y va a dar undefined. La cookie hay que mandarla al navegador por eso esta en el res
        if(req.body.rememberme){ // esto lo mismo que pregunta req.body.rememberme != undefined
            res.cookie('recordame', usuarioEncontrado[0].username, {maxAge: 5*60*1000})   // el nombre puede ser cualquiera, guardo un dato por cookie, pero puede ser un json
        };                                                                           // maxAge esta en milisegundos, para que dure cinco minutos es 5*60*1000, no se borra al reiniciar sino al borrar cookies a mano

        

        } catch (error){
            res.send(error.message);
        } 


        res.redirect('/');
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
                let newUsers = await Users.create(req.body) // para usar esto en el form deben estar los mismos nombres que en la BD
                //await newMovie.addActores(req.body.actores)  // en el modelo movie pusimos abajo de todo el alias actores a esta relacion, pero se usa mayuscula luego del add. OJO en req.body.actores este actores es lo que viene del form definido en el controlador create de arriba
                res.redirect('/products')    

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
        res.clearCookie('recordame'); // mato cookie
        res.redirect('/')
    },


    delete: async (req, res) => {  // por ahora viene por get , ya que pongo en /users/delete/id
        try {                                                                 
            await Users.destroy({
                where: {
                id: req.params.id // ojo, si esto viene por post tengo que poner body en vez de params
                }
                });
            res.redirect('/products')                
        } catch (error){
             res.send(error.message);
        }
    },
    list: async (req, res) => { 
        try {
            const usuarios = await Users.findAll(); //include all true dice que traiga todas las relaciones con otra tablas, // si no necesito todas las relaciones lo pongo asi findAll({include:['Genre']})             
            //res.send(usuarios);
            res.render('users/usersList',{usuarios});                                             
                    
            } catch (error){
            res.send(error.message);
            }
        },
    showOne: async (req, res) => { //pongo async si tengo adentro cosas que tarden
        try {
            const oneUser = await Users.findByPk(req.params.id);   
            //  res.send(oneUser)           
            res.render('users/oneUser',{oneUser});
                                
        } catch (error){
        res.send(error.message);
        }
    },
    updateForm: async (req, res) => { //
        try {                         
         const userId = req.params.id; //capturo el numero del user a editar
         const toEdit = await Users.findByPk(userId); 
         res.render('users/updateUser',{toEdit})
          
        } catch (error){
            res.send(error.message);
        }
    },
    
    update: async (req, res) => { //
        try {
            const userId = req.params.id; // obtendo el id que viene por formulario
            const changedUser = await Users.findByPk(userId);            
            await changedUser.update(req.body) 
            
            res.redirect('/products') 
            
        } catch (error){
            res.send(error.message); 

        }
    }
}


