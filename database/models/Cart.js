module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define(
        'Cart', 
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            product_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }, 
        {
            tableName: 'carts',
            timestamps: false,
        });

        Cart.associate = function(models){
            Cart.belongsTo(models.Product, {
                as: "product",
                foreignKey: "product_id",
                timestamps: false
            });
            Cart.belongsTo(models.User, {
                as: "user",
                foreignKey: "user_id",
                timestamps: false
            })
        }

 	return Cart;
};