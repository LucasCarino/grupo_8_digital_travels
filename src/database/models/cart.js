const { sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define('Cart', {
        user_id: DataTypes.INTEGER,
        travel_package_id: DataTypes.INTEGER,
        hotel_id: DataTypes.INTEGER,
        excursion_id: DataTypes.INTEGER,
        transfer_id: DataTypes.INTEGER,
        state: DataTypes.INTEGER,
        passengers: DataTypes.INTEGER,

    })
    Cart.associate = models => {
        Cart.belongsTo(models.Travel_package);
        Cart.belongsTo(models.Hotel);
        Cart.belongsTo(models.Transfer);
        Cart.belongsTo(models.Excursion);
        Cart.belongsTo(
            models.User,
            {
              as: 'user',
              foreignKey: 'userId'
            }
        );
    }
    return Cart;
}