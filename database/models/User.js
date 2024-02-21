module.exports = (sequelize, DataTypes) => {
const alias = "User";
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

    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    admin: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    
};
 const config = {
    tableName: "users",
    timestamps: false
};

const User = sequelize.define(alias, cols, config);

return User;

}