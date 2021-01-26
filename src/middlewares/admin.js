module.exports = (req, res, next) => {
    if(req.session.user){
        if (req.session.user.admin) {
            return next();
        } else {
            return res.redirect('/');
        }
    } else {
        return res.redirect('/');
    }    
 }