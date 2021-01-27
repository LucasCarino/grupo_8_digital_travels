// ******** Sequelize ***********

const { User, Token } = require('../database/models');

module.exports = async (req, res, next) => {
    res.locals.user = false; //locals es una variable que se puede llamar desde cualquier vista sin pasarla en el render. 
    try {
        if (req.session.user) {
            res.locals.user = req.session.user; // si hay session pongo en locals la info del usuario
            return next();
        } else if (req.cookies.userToken) {  // si no hay sesión pero tengo la cookie de token, utilizo el token para buscar al usuario, y llevarlo a locals
            let token = await Token.findOne({where: {token: req.cookies.userToken}});
            if(token) {
                let user = await User.findByPk(token.userId);
                delete user.password;  
                req.session.user = user;
                res.locals.user = user;
                return next();                
            } else {
                return next();
            }
        } else {
            return next();
        }
    } catch (error) {
        console.log(error);
    }
}
