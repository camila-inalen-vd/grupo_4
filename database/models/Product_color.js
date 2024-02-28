module.exports = (sequelize, DataTypes) => {
const alias = "Product_color";
const cols = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
        // llenar  
/*     color_id: {

    }, */
       // llenar
/*     product_id: {

    } */
};
const config = {
    tableName: "product_color",
    timestamps: false
};

const Product_color = sequelize.define(alias, cols, config);

Product_color.associate = function(models){
    Product_color.belongsToMany(models.Product_color,{
        as: "products",
        through: "product_color",
    });
}

return Product_color;

}