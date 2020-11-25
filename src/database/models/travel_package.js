const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const travelPackage = sequelize.define('Travel_package', {
        name: DataTypes.STRING,
        destination: DataTypes.STRING,
        total_nights: DataTypes.INTEGER,
        description: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        image: DataTypes.STRING,
        hotel_id: DataTypes.INTEGER,
        excursion_id: DataTypes.INTEGER,
        transfer_id: DataTypes.INTEGER
    })
    travelPackage.associate = (models => {
        travelPackage.belongsTo(models.Hotel);
        travelPackage.belongsTo(models.Excursion);
        travelPackage.belongsTo(models.Transfer);
    })
    return travelPackage;
}