const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        admin: DataTypes.INTEGER
    }
    ,{
        //timestamps: false, // para poner si no existen los time stamps para que no chille sequelize.NO anda soft delete si esta en false
        paranoid: true // en vez de borrar cuando pongo destroy, pone la fecha en la columna deleted_at y sigue estando, aunque no la muestra
    })
    // Transfer.associate = models => {
    //     Transfer.hasMany(models.Travel_package)
    // }
    return User;
}