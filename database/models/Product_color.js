module.exports = (sequelize, DataTypes) => {
const alias = "Product_color";
const cols = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    }
};
const config = {
    tableName: "product_color",
    timestamps: false
};

const Product_color = sequelize.define(alias, cols, config);

Product_color.associate = function(models){
    Product_color.belongsTo(models.Product,{
        as: "products",
        foreignKey: "product_id"
    })
    Product_color.belongsTo(models.Color,{
        as: "color",
        foreignKey: "color_id"
    })
}

return Product_color;

}