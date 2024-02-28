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

Product.associate = function(models){
    Product.belongsToMany(models.Color, {
        as: "color",
        foreignKey: "color_id"
    });
}
    Product.associate = function(models){
        Product.belongsToMany(models.Size, {
            as: "size",
            through: "product_size",
            foreignKey: "size_id",
            otherKey: "product_id",
        });
}
    Product.associate = function(models){
        Brand.belongsToMany(models.Brand, {
            as: "Brand",
            through: "brand_id",
            foreignKey: "product_id",
           
        });
}

Product.associate = function(models){
    Product.belongsToMany(models.Miniature, {
        as: "Miniature",
        through: "product_Product",
        foreignKey: "miniature_id",
        otherKey: "product_id",
       
    });
}  
    return Product;
}


