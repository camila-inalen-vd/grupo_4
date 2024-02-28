module.exports = (sequelize, DataTypes) => {
    const alias = "Product_brand";
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        }
    };
    const config = {
        tableName: "product_brand",
        timestamps: false
    };
    
    const Product_brand = sequelize.define(alias, cols, config);

    Product_brand.associate = function(models){
        Product_brand.belongsToMany(models.Product_brand,{
            as: "products",
            through: "product_brand",
        });
    }
    
    return Product_brand;
    
    }