const alias = "Product_color";
const cols = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
        // llenar  
    color_id: {

    },
       // llenar
    product_id: {

    }
};
const config = {
    tableName: "product_color",
    timestamps: false
};

const Product_color = sequelize.define(alias, cols, config);

return Product_color;

