module.exports = (sequelize, DataTypes) => {
const alias = "Size";
const cols = {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    number: {
        type: DataTypes.INTEGER, 
        allowNull: false
    }
};
const config = {
    tableName: "sizes",
    timestamps: false
};
const Size = sequelize.define(alias, cols, config);

Size.associate = function(models){
    Size.belongsToMany(models.Product, {
        as: "product",
        through: "product_size",
        foreignKey: "size_id",
        otherKey: "product_id"
    });
}
return Size;

}