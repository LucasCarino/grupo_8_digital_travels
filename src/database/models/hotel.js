const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Hotel = sequelize.define('Hotel', {
        name: DataTypes.STRING,
        destination: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        image: DataTypes.STRING,
    });
    Hotel.associate = models => {
        Hotel.hasMany(models.Travel_package)
    }
    return Hotel;
}