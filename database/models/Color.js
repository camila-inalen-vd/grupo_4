module.exports = (sequelize, DataTypes) => {
const alias = "Color";
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
    tableName: "colors",
    timestamps: false
};
const Color = sequelize.define(alias, cols, config);

Color.associate = function(models){
    Color.belongsToMany(models.color, {
        as: "Product",
        through: "product_color",
        foreignKey: "color_id",
        otherKey: "product_id",
        timestamps: false
    });
}
return Color;

}