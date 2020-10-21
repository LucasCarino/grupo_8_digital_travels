module.exports = (req, res, next) => {
    res.locals.username = false;
    if (req.session.usuario) {
        res.locals.username = req.session.usuario
    }
}