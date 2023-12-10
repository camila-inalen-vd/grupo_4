const fs = require('fs');
const path = require('path');
const productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json')));

const productListController = {

    productList: function (req,res){
        res.render('productList', {'productos': productos})
    }
}

module.exports = productListController;