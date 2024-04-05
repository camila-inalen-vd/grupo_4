const db = require("../../database/models")
const { Op } = require('sequelize');

module.exports = {
    getAllProducts: async (req, res) => {
        let nuevosProductos = [];
        try {
            const productos = await db.Product.findAll({
                include: [
                    { association: 'color', attributes: ['name'] },
                    { association: 'brand', attributes: ['name'] },
                    { association: 'size', attributes: ['number'] }
                ]
            });
    
            productos.forEach(producto => {
                nuevosProductos.push({
                    ...producto.toJSON(),
                    detailUrl: "http://localhost:3001/product/detail/" + producto.id
                });
            });
            let stockTotal = 0;

            nuevosProductos.forEach(producto => {
                if(producto.stock > 0)
                stockTotal += producto.stock
            })

            return res.json({
                count: nuevosProductos.length,
                totalStock: stockTotal,
                products: nuevosProductos,
                status: 200
            });
        } catch (error) {
            res.json('Hubo un error al obtener todos los productos');
        }    
    },

getAllBrands: async (req, res) => {
    try {
        const marcas = await db.Brand.findAll();
        const productsByBrand = [];
        for (const marca of marcas) {
            const productos = await db.Product.findAll({
                where: {
                    brand_id: marca.id
                }
            });
            productsByBrand.push({
                brands: marca,
                totalProducts: productos.length,
            });
        }
        return res.json({
            count: productsByBrand.length,
            data: productsByBrand
            });
    } catch (error) {
        res.json('Hubo un error al obtener las marcas')
    }
}
};