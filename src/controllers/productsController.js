const fs = require('fs')
const path = require('path')
const productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json')));

const productsController = {

    productDetail: (req,res) => {
        let idBuscada = req.params.id;
        let productoBuscado = productos.find((zapatilla) => {
            return zapatilla.id == idBuscada
        })
        res.render('productDetail', {'producto': productoBuscado})
    },
    
    productList: (req,res) => {
        res.render('productList', {'productos': productos})
    },

    create: (req, res) => {
        res.render('user/admin/create')
    }


}

module.exports = productsController;