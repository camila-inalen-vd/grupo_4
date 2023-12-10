//Requerir path.
const fs = require('fs');
const path = require('path')
const productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json')));
const marcasPopulares = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/marcasPopulares.json')));

//Métodos para la ruta de cada vista.
const mainController = {
    index: (req, res) => {
        res.render('index', {'productos':productos, 'marcas':marcasPopulares})
    }
}

//Exportar modulo propio.
module.exports = mainController;