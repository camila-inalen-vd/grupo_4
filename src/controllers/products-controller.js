//Para que no se rompan las vistas que estan usando los JSON.
const fs = require('fs');
const path = require('path');
const productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json')));

//Pasando a BD
const db = require("../../database/models")
const {validationResult} = require('express-validator');

const productsController = {

/*     productDetail: (req,res) => {
        let idBuscada = req.params.id;
        let productoBuscado = productos.find((zapatilla) => {
            return zapatilla.id == idBuscada
        })
        res.render('products/productDetail', {'producto': productoBuscado, 'productos': productos}) 
    }, */
    productDetail: async (req, res) => {
        try {
            const productos = await db.Product.findByPk(req.params.id, {
            /*   include: [
                    {association: 'Product_color'},
                    {association: 'Product_size'},
                    {association: 'Product_brand'}
                ] */
            })
            res.render("products/productDetail", {'producto': productos})
        } catch (error) {
            res.render(error)
        }
    },

   /*   products_color: async (req,res) => {
        try {
            const productos = await db.Product.findByPk(req.params.id)
            res.render("products/productDetail", {'producto': productos})
        } catch (error) {
            res.render(error)
        }

    }, */
     

/*     productList: (req,res) => {
         res.render('products/productList', {'productos': productos}) 
    }, */
    productList: async (req, res) => {
        try {
            const productos = await db.Product.findAll()
            res.render('products/productList', {'productos': productos}) 
        } catch (error) {
            res.render(error)
        }
        
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
    /* edit: (req, res) => {
        //Logica para devolver el producto encontrado a la vista y poder usar su ID para incluirla en el form
        res.render('products/edit', {producto: db.Product.findByPk(req.params.id)})
    }, */
    
    edit: async (req, res) => {
        //Logica para devolver el producto encontrado a la vista y poder usar su ID para incluirla en el form
        let producto = await db.Product.findByPk(req.params.id) 
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
                id: req.body.idDelete
            }
        })
        res.redirect('/product/list')
    }

}

//Implementar las validaciones para que solo los admin puedan acceder a crear, editar y eliminar productos.


module.exports = productsController;