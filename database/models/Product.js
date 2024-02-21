module.exports = (sequelize, DataTypes) => {
const alias = "Product";
const cols = {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER, 
        allowNull: false
    },
    dues: {
        type: DataTypes.INTEGER, 
        allowNull: false
    },
    discount: {
        type: DataTypes.INTEGER, 
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER, 
        allowNull: false
    },
    description: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    large_description: {
        type: DataTypes.TEXT, 
        allowNull: false
    },
    upper: {
        type: DataTypes.STRING 
    },
    cover: {
        type: DataTypes.STRING
    },
    sole: {
        type: DataTypes.STRING
    },
    origin: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
};
const config = {
    tableName: "products",
    timestamps: false
};
const Product = sequelize.define(alias, cols, config);

return Product;
}