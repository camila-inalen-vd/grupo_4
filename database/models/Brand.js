module.exports = (sequelize, DataTypes) => {

const alias = "Brand";
const cols = {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING, 
        allowNull: false
    }
};
const config = {
    tableName: "brands",
    timestamps: false
};
const Brand = sequelize.define(alias, cols, config);

Brand.associate = function(models){
    Brand.belongsToMany(models.Product, {
        as: "products",
        through: "product_brand",
        foreignKey: "product_id",
        otherKey: "brand_id",
        timestamps: false
    });
 }
return Brand;

}