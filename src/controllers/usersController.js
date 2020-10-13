const { validationResult } = require('express-validator');

module.exports = {
    cart: function(req, res, next){
        res.render('users/productCart', { title: 'Mis Viajes' })
    },
    login: function (req, res, next) {
        res.render('users/login', { title: 'Ingreso' });
    },
    register: function (req, res, next) {
        res.render('users/register', { title: 'Registrate' });
    },
    registerSend: function (req, res, next) {
        const errors = validationResult(req);
        if(errors.isEmpty()){
            res.redirect('/');
        } else {
            res.render('users/register', { title: 'Registrate', errors: errors.array() });        
        }
    }
}