const fs = require('fs');
const path = require('path')
/* const productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json'))); */
const marcasPopulares = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/marcasPopulares.json')));
const db = require("../../database/models")
const { Op } = require('sequelize');

//Métodos para la ruta de cada vista.
const mainController = {
    index: async (req, res) => {
        try {
            let product = await db.Product.findAll({
                include: [
                    { association: 'color', attributes: ['name'] }, 
                    { association: 'brand', attributes: ['name'] }
                ]
            });
            
            let offers = await db.Product.findAll({
                where: {
                    discount: {
                        [Op.gt]: 0
                    }
                },
                limit: 4
            });
    
            let featured = await db.Product.findAll({
                order: [
                    ['id', 'DESC']
                ],
                limit: 4
            });
    
            let productosVistosBD = [];
            const productosVistos = req.session.productosVistos;
            
            if (productosVistos && productosVistos.length > 0) {
                productosVistosBD = await db.Product.findAll({
                    where: {
                        id: productosVistos
                    },
                    limit: 4
                });
            }
    
            res.render('index', { 'productos': product, 'marcas': marcasPopulares, 'offers': offers, 'featured': featured, 'productosVistosBD': productosVistosBD });
        }
        catch (err) {
            res.send('Este es el error de la linea 50')
        }
    }
}

module.exports = mainController;