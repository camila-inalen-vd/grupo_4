module.exports = (sequelize, DataTypes) => {
const alias = "Miniature";
const cols = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    name_image: {
        type: DataTypes.STRING,
        allowNull: false
    },
/*     product_id: {

    } */
};
const config = {
    tableName: "miniatures",
    timestamps: false
};

const Miniature = sequelize.define(alias, cols, config);

return Miniature;
}