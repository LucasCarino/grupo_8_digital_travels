module.exports = function(req, res, next){
    res.locals.usuario = false; //locals es una variable que se puede llamar desde cualquier vista sin pasarla en el render. 
                                // aca creo una var usuario y le doy false para que por defecto no haya nadie logueado
    if(req.session.usuario){
        res.locals.usuario = req.session.usuario // si hay session pongo en locals la info que tengo, en este caso el email del logueado, asi con locals puedo mandarlo a la vista
    } else if(req.cookies.recordame){ // si no hay sesion pero hay cookies entonces igual mando el usuario 
        req.session.usuario = req.cookies.recordame; // le escribo yo el session,usuario sacandolo de lo que tiene la cookies guardado
        res.locals.usuario = req.session.usuario; // lo mismo de arriba, mando locals a la vista
    }
    next();
}