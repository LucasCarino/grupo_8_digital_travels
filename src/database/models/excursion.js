const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Excursion = sequelize.define('Excursion', {
        name: DataTypes.STRING,
        destination: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        image: DataTypes.STRING,
    })
    Excursion.associate = models => {
        Excursion.hasMany(models.Travel_package) // una excursion puede tener muchos paquetes
    }
    return Excursion;
}