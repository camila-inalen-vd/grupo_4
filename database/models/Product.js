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
        through: "product_color",
        foreignKey: "product_id",
        otherKey: "color_id",
        timestamps: false})

    Product.belongsToMany(models.Size, {
        as: "size",
        through: "product_size",
        foreignKey: "product_id",
        otherKey: "size_id",
        timestamps: false})        

     Product.belongsTo(models.Brand, {
            as: "brand",
            foreignKey: "brand_id"
    })
    Product.hasMany(models.Product_color, {
        foreignKey: 'product_id',
        as: 'product'
    });
    Product.hasMany(models.Cart, {
        as: "carts",
        foreignKey: "product_id",
        timestamps: false
    })
    
    }
    return Product;
    }

 /*
    //Pedir ayuda para entender la manera correcta de plantear las miniaturas   
    Product.belongsToMany(models.Miniature, {
           as: "miniature",
           through: "product_Product",
           foreignKey: "miniature_id",
           otherKey: "product_id"
    }) */



