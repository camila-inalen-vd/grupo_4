//Para que no se rompan las vistas que estan usando los JSON.
const fs = require('fs');
const path = require('path');
const productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json')));

//Pasando a BD
const db = require("../../database/models")
const {validationResult} = require('express-validator');

// probando 

/* let productsController = {
   productList: function(req,res){
    db.Product.findAll()
    .then(function(product){
    res.render("listadoDeProductos", {product:product})
    })
}
productList: function(req,res){
    db.Products.findAll()
    .then(function(productos){
    res.render("producList", {productos:productos})
    })

}, 
product: function(){
    db.product.findOne({
        where: {
            name: 'Nike'
        }
    })
    .then(function(producto){
        console.log(producto)
    })
}
} */

//------------------- // -----------------


const productsController = {

    productDetail: (req,res) => {
        let idBuscada = req.params.id;
        let productoBuscado = productos.find((zapatilla) => {
            return zapatilla.id == idBuscada
        })
        res.render('products/productDetail', {'producto': productoBuscado, 'productos': productos}) 
    },
    productList: (req,res) => {
        res.render('products/productList', {'productos': productos})
    },
    productCart: (req,res) => {
        res.render('products/productCart', {'productos': productos})
    },
    create: (req, res) => {
        res.render('products/create')
    },
    edit: (req, res) => {
        //Logica para devolver el producto encontrado a la vista y poder usar su ID para incluirla en el form
        let producto = productos.find((zapatilla) => {
            return zapatilla.id == req.params.id
        })
        res.render('products/edit', {producto})
    },
    delete: (req, res) => {
        res.render('products/delete')
    },
    createConfig: (req, res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
     
    db.Product.create({
    name: req.body.nombre,
    price: req.body.precio,
    dues: req.body.cuotas,
    discount: req.body.descuento,
    stock: req.body.stock,
    description: req.body.descripcion,
    large_description: req.body.descripcionLarga,
    upper: req.body.capellada,
    cover: req.body.forro,
    sole: req.body.suela,
    origin: req.body.origen,
    image: req.file? req.file.filename : ''
})
    res.redirect('/product/list')
    
    }else {
        res.render('products/create', {errors: errors.array(), old: req.body})
    }
    },
    editConfig: (req,res) => {

        db.Product.update({
            name: req.body.nombre,
            price: req.body.precio,
            dues: req.body.cuotas,
            discount: req.body.descuento,
            stock: req.body.stock,
            description: req.body.descripcion,
            large_description: req.body.descripcionLarga,
            upper: req.body.capellada,
            cover: req.body.forro,
            sole: req.body.suela,
            origin: req.body.origen,
            image: req.file? req.file.filename : ''
        }, 
        {
            where: {id: req.params.id}
        })
            res.redirect('/product/list')
    
        fs.writeFileSync(path.resolve(__dirname, '../data/productos.json'), JSON.stringify(productos, null, 1));
        res.redirect('/product/detail/' + req.params.id);
    },
    deleteConfig: (req, res) => {

        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/products')






       /*  //Acá hago que se devuelvan TODOS los productos del array menos el que coincida con el id que pasé en el input. (Es como borrarlo al revés, en realidad creas un nuevo array con todos menos ese producto)
        productoEliminado = productos.filter((zapatilla) => {
        return zapatilla.id != req.body.idDelete
        })
         */
        //Sobrescribo el json con el nuevo array de objetos.
        fs.writeFileSync(path.resolve(__dirname, '../data/productos.json'), JSON.stringify(productoEliminado, null, 1));
        res.redirect('/');
    }

}



module.exports = productsController;