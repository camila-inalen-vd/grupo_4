//Requerir path.
const fs = require('fs');
const path = require('path')
/* const productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json'))); */
const marcasPopulares = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/marcasPopulares.json')));

//
const db = require("../../database/models")

//Métodos para la ruta de cada vista.
const mainController = {
    index: async (req, res) => {
        try {
        let product = await db.Product.findAll({
            include: [{association:'color' , attributes: ['name']},{association:'brand', attributes: ['name']}]
        })
        res.render('index', {'productos': product, 'marcas':marcasPopulares})
        
    }
    catch (error) {
        res.send(error)
    }
}
}
//Exportar modulo propio.
module.exports = mainController;