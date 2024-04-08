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
},
getAllUsers: async (req, res) => {
    try {
        const users = await db.User.findAll();
        const count = users.length;
        let usersToReturn = [];

        users.forEach(user => {
            usersToReturn.push({
                id: user.id,
                name: user.name,
                lastName: user.last_name,
                email: user.email
            })
        });

        return res.json({
            count: count,
            data: usersToReturn
        })
    } catch (error) {
        res.json("Hubo un error al obtener los usuarios")
    }
},
getOneUser: async (req, res) => {
    try {
        const user = await db.User.findByPk(req.params.id)
        res.json({
            id: user.id,
            name: user.name,
            lastName: user.last_name,
            email: user.email,
            image: user.image
        })
    } catch (error) {
        res.json("Hubo un error al obtener al usuario")
    }
}
};