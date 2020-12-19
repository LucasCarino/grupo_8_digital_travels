// este middle sirve para sesion y cookies

module.exports = function(req, res, next){
    res.locals.email = false; //locals es una variable que se puede llamar desde cualquier vista sin pasarla en el render. 
                                // aca creo una var usuario o email y le doy false para que por defecto no haya nadie logueado
    if(req.session.email){
        res.locals.email = req.session.email // si hay session pongo en locals la info que tengo, en este caso el email o usuario del logueado, asi con locals puedo mandarlo a la vista
    } else if(req.cookies.recordame){       // si no hay sesion pero hay cookies entonces igual mando el usuario                                            
        res.locals.email = req.cookies.recordame;; 
        // req.session.email = req.cookies.recordame; // le escribo yo el session,usuario sacandolo de lo que tiene la cookies guardado
        // res.locals.email = req.session.email;

    }
    next();
}

// para usuario:
// res.locals.usuario = false; //locals es una variable que se puede llamar desde cualquier vista sin pasarla en el render. 
// // aca creo una var usuario y le doy false para que por defecto no haya nadie logueado
// if(req.session.usuario){
// res.locals.usuario = req.session.usuario // si hay session pongo en locals la info que tengo, en este caso el usuario del logueado, asi con locals puedo mandarlo a la vista
// } else if(req.cookies.recordame){ // si no hay sesion pero hay cookies entonces igual mando el usuario 
// req.session.usuario = req.cookies.recordame; // le escribo yo el session,usuario sacandolo de lo que tiene la cookies guardado
// res.locals.usuario = req.session.usuario; // lo mismo de arriba, mando locals a la vista
// }
// next();
// }