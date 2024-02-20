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

return Brand;