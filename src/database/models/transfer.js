const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Transfer = sequelize.define('Transfer', {
        name: DataTypes.STRING,
        destination: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        image: DataTypes.STRING,
    })
    Transfer.associate = models => {
        Transfer.hasMany(models.Travel_package)
    }
    return Transfer;
}