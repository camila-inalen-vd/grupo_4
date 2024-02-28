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

// Aca nos ayudo fran

Product_size.associate = function(models){
    Product_size.belongsToMany(models.Product_size,{
        as: "products",
        through: "product_size",
    });
}

return Product_size;
}