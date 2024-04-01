const db = require("../../database/models")
const { Op } = require('sequelize');

module.exports = {
    getAllProducts: async (req, res) => {
        try {
            await db.Product.findAll({
                include: [
                    { association: 'color', attributes: ['name'] },
                    { association: 'brand', attributes: ['name'] },
                    { association: 'size', attributes: ['number'] }
                ]
            })
                .then(productos => {
                    return res.json({
                        total: productos.length,
                        data: productos,
                        status: 200
                    })

                });
        } catch (error) {
            res.json('Hubo un error al obtener todos los productos')
        } 
    },

    getAllBrands: async (req, res) => {
        try {
            await db.Brand.findAll()
                .then(marcas => {
                    return res.json({
                        total: marcas.length,
                        data: marcas,
                        status: 200
                    })

                });
        } catch (error) {
            res.json('Hubo un error al obtener las marcas')
        }
}
}