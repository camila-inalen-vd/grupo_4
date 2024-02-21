module.exports = (sequelize, DataTypes) => {
const alias = "Product_size";
const cols = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
/* 
    size_id: {

    }, 
    product_id: {

    } */
};
const config = {
    tableName: "product_size",
    timestamps: false
};

const Product_size = sequelize.define(alias, cols, config);

return Product_size;
}