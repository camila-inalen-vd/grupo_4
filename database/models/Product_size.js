module.exports = (sequelize, DataTypes) => {
    const alias = "Product_size";
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

    };


    const config = {
        tableName: "product_size",
        timestamps: false
    };

    const Product_size = sequelize.define(alias, cols, config);

    Product_size.associate = function (models) {
        Product_size.belongsTo(models.Product, {
            as: "products",
            foreignKey: "product_id"
        })
        Product_size.belongsTo(models.Size, {
            as: "size",
            foreignKey: "size_id"
        });
    }

    return Product_size;
}