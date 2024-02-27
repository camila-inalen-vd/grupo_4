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


    //Aca vamos a usar un findByPk para obtener un solo producto, el que coincida con la ID recibida por parametro y poder mostrarlo en el detalle.
    productDetail: (req,res) => {
        let idBuscada = req.params.id;
        let productoBuscado = productos.find((zapatilla) => {
            return zapatilla.id == idBuscada
        })
        res.render('products/productDetail', {'producto': productoBuscado, 'productos': productos}) 
    },
    //Aca vamos a usar un findAll para obtener toda la lista de productos y mostrarlos en el product list.
    productList: (req,res) => {
        res.render('products/productList', {'productos': productos})
    },

    //Me gustaria que le hagamos la logica con cookies y session si no vamos a hacerle la tabla a parte.
    productCart: (req,res) => {
        res.render('products/productCart', {'productos': productos})
    },
    //Renderizacion de vista de crear producto (La idea es que esto solo lo vea un admin, lo vamos a lograr con la tabla de usuarios donde si es admin o no es un binario, session y cookies)
    create: (req, res) => {
        res.render('products/create')
    },

    //Renderizacion de la vista de editar producto. Aca vamos a usar un findByPk para devolver el producto que necesitamos a la vista, el mismo que la id que se recibe por parametro. Hay que modificarlo para que use la DB en vez el JSON. 
    edit: (req, res) => {
        //Logica para devolver el producto encontrado a la vista y poder usar su ID para incluirla en el form
        let producto = productos.find((zapatilla) => {
            return zapatilla.id == req.params.id
        })
        res.render('products/edit', {producto})
    },

    //Por ahora hice una vista llamada delete que recibe un ID en un form para borrar el producto que matchee con la misma.
    delete: (req, res) => {
        res.render('products/delete')
    },

    //Metodo create, para crear un nuevo producto.
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
    image: req.file ? req.file.filename : ''
})
    res.redirect('/product/list')
    
    }else {
        res.render('products/create', {errors: errors.array(), old: req.body})
    }
    },

    //Metodo update para editar un producto existente (Falta editar la vista, no se preocupen si se ve en el form el dato recibido por JSON)
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
            image: req.file ? req.file.filename : db.Product.findByPk(req.params.id).image
        }, 
        {
            where: {id: req.params.id}
        })
            res.redirect('/product/list')
    
        fs.writeFileSync(path.resolve(__dirname, '../data/productos.json'), JSON.stringify(productos, null, 1));
        res.redirect('/product/detail/' + req.params.id);
    },

    //Esta es la config del delete. Deberiamos usar el metodo destroy con un where donde como condicion ponemos la ID que pasamos por form (req.body.idDelete) (si o si el where va o sino borran todos los registros)
    deleteConfig: (req, res) => {

        db.Product.destroy({
            where: {
                id:req.params.id
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

//Implementar las validaciones para que solo los admin puedan acceder a crear, editar y eliminar productos.


module.exports = productsController;