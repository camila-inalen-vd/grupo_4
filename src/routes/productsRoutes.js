const fs = require('fs')
const express = require('express');
const router = express.Router();
const path = require('path');
const productsController = require('../controllers/productsController')
const productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json')));

router.get('/detail/:id', productsController.productDetail)
router.get('/list', productsController.productList)


//Crear y modificar
router.get('/create', productsController.create)
//Acá tengo toda la lógica para crear un nuevo objeto en el json.
router.post('/create', (req, res) => {
    let objeto = req.body;
    //Logica para poder añadir más de un color al array de colores del objeto.
    let color = req.body.color.split(',')
    //Logica para los talles en array y que se guarden de forma numerica.
    let talles = req.body.talles.split(',')
    talles = talles.map((talle) => {
            return talle = parseInt(talle)
    })
    let nuevoObjeto = {
        //Para que el id asignado sea igual al largo del array + 1
        id: (productos.length + 1),
        //Todas las propiedades del objeto recibido por form.
        ...objeto,
        //Las propiedades que quiero que se "pisen" con la nueva lógica y los parseInt para que los campos que lo requieran sean dato numerico.
        precio: parseInt(req.body.precio),
        cuotas: parseInt(req.body.cuotas),
        descuento: parseInt(req.body.descuento),
        stock: parseInt(req.body.stock),
        color: color,
        talles: talles,
    }
    //Añadimos el nuevo producto al array de objetos que ya tenemos.
    productos.push(nuevoObjeto)
    //Sobreescribimos el json.
    fs.writeFileSync(path.resolve(__dirname, '../data/productos.json'), JSON.stringify(productos, null, 1))
    res.redirect('/');
});

module.exports = router;