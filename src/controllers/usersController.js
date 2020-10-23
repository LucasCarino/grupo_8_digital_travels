const fs = require('fs'); 
const path = require('path');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs'); // para encriptar pass


const leerJson = () => { // es una funcion que nos da nos usuarios de la BD
    let jsonUsers = fs.readFileSync(path.resolve(__dirname + "/../data/usersDB.json")); // path resolve pone todas las barras para el mismo lado sino daba error por barras para un lado y para el otro
    return JSON.parse(jsonUsers); // para tener el array de objetos y no el json
};

module.exports = {
    cart: function(req, res, next){
        res.render('users/productCart', { title: 'Mis Viajes' })
    },
    login: function (req, res, next) {
        res.render('users/login', { title: 'Ingreso' });

            },
    loginSend: (req, res) => { // procesa datos recibidos por Post del login
        // ver si usuario existe y pass sea correcta
        let usuarios = leerJson(); //leo bd de usuarios y busco su email, por ahora no username
        let usuarioEncontrado = usuarios.find(item => item.username == req.body.username); // busco email que coincida con el ingresado
                 // mensaje si no encuetra al usuario
        if (usuarioEncontrado == undefined) {
            res.render('users/login', {errors: 
                [
                {msg: 'Credenciales invalidas'}
                ]
            })
        };

        req.session.usuario = usuarioEncontrado.username; //al haber declardo el middleware de applicacion session aparece el uso de req.session y yo le agrego usuario
        // entonces a partir de ahora en req.session.usuario esta el email del usuario en sesion. Ojo que nodemon al salvar algo reinicia y se cae la sesion
        
        // si remember mi esta checkeado, crear cookie. Si no esta checkeado no viene en el body rememberme y va a dar undefined. La cookie hay que mandarla al navegador por eso esta en el res
        if(req.body.rememberme){ // esto lo mismo que pregunta req.body.rememberme != undefined
            res.cookie('recordame', usuarioEncontrado.username, {maxAge: 5*60*1000})   // el nombre puede ser cualquiera, guardo un dato por cookie, pero puede ser un json
        }                                                                           // maxAge esta en milisegundos, para que dure cinco minutos es 5*60*1000, no se borra al reiniciar sino al borrar cookies a mano

        res.redirect('/');
    },
    logout: (req, res) => {
        req.session.destroy(); // cierro la sesion
        res.clearCookie('recordame'); // mato cookie
        res.redirect('/')
    },

    register: function (req, res, next) {
        res.render('users/register', { title: 'Registrate' });
    },

    registerSend: function (req, res) { // procesa datos recibidos por Post del registro
        const errors = validationResult(req);
        if(errors.isEmpty()){ // lo de aca abajo es lo que se hace si no hay errores            
            
            let passwordHash = bcrypt.hashSync(req.body.password, 10); // se encripta la pass, el 10 es la sal que dice cuanto se complejiza            
            let usuarioNuevo = { // recibo los datos ingresados para guardarlo en la bd de usuarios, pero con la pass encriptada
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                username: req.body.username,
                email: req.body.email,
                nacimiento: req.body.nacimiento,
                domicilio: req.body.domicilio,
                password: passwordHash
               };
            let usuarios = leerJson(); // leer base de datos
            usuarios.push(usuarioNuevo); // agrego nuevo al final tambien se podria hacer como abajo
            //let nuevoArray = [...usuarios, usuarioNuevo]; // le agrega usuario nuevo , podria hacerlo con un push pero esto es mas rapido
            usuarios = JSON.stringify(usuarios, null, " "); // nul y "" es para verlo mas lindo
            fs.writeFileSync(path.resolve(__dirname + "/../data/usersDB.json"), usuarios);
            res.redirect('/'); // siempre que mando por post luego redirect sino se queda pensando, mando a login para que ingrese

            
        } else {
            console.log("hay error");
            res.render('register', { title: 'Registrate', errors: errors.array() }); 
                   // si hay error los muestro
        }
    }
}