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
    
    const Product_color = sequelize.define(alias, cols, config);
    
    return Product_color;
    
    }