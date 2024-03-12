const path = require('path');
const db = require("../../database/models")
const { validationResult } = require('express-validator');
const productsController = {


    productDetail: async (req, res) => {
        try {
            const producto = await db.Product.findByPk(req.params.id, {
                include: [
                    { association: 'color', attributes: ['name'] },
                    { association: 'brand', attributes: ['name'] }
                ]
            });

            res.render("products/productDetail", { producto });
        } catch (error) {
            res.send(error);
        }
    },
    productList: async (req, res) => {
        try {
            const productos = await db.Product.findAll({
                include: [
                    { association: 'color', attributes: ['name'] },
                    { association: 'brand', attributes: ['name'] }
                ]
            })
            res.render('products/productList', { 'productos': productos })
        } catch (error) {
            res.send(error)
        }

    },



    //Me gustaria que le hagamos la logica con cookies y session si no vamos a hacerle la tabla a parte.
    productCart: (req, res) => {
        res.render('products/productCart', { 'productos': productos })
    },
    //Renderizacion de vista de crear producto (La idea es que esto solo lo vea un admin, lo vamos a lograr con la tabla de usuarios donde si es admin o no es un binario, session y cookies)
    create: async (req, res) => {
        try {
            let brand = await db.Brand.findAll()
            let color = await db.Color.findAll()
            res.render('products/create', { brand, color })
        }
        catch (error) {
            res.send(error)
        }
    },

    //Renderizacion de la vista de editar producto. Aca vamos a usar un findByPk para devolver el producto que necesitamos a la vista, el mismo que la id que se recibe por parametro. Hay que modificarlo para que use la DB en vez el JSON. 
    /* edit: (req, res) => {
        //Logica para devolver el producto encontrado a la vista y poder usar su ID para incluirla en el form
        res.render('products/edit', {producto: db.Product.findByPk(req.params.id)})
    }, */

    edit: async (req, res) => {
        //Logica para devolver el producto encontrado a la vista y poder usar su ID para incluirla en el form
        let producto = await db.Product.findByPk(req.params.id)
        res.render('products/edit', { producto })
    },

    //Por ahora hice una vista llamada delete que recibe un ID en un form para borrar el producto que matchee con la misma.
    delete: (req, res) => {
        res.render('products/delete')
    },

    //Metodo create, para crear un nuevo producto.
    createConfig: async (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {

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
                brand_id: req.body.marca,
                image: req.file ? req.file.filename : ''
            })
            let ultimoProducto = await db.Product.findOne({
                order: [['id', 'DESC']]
            })
            let coloresRecibidos = req.body.color

            coloresRecibidos.forEach(color => {
                db.Product_color.create({
                    product_id: ultimoProducto.id + 1,
                    color_id: color
                })
            })
            res.redirect('/product/list')

        } else {
            res.render('products/create', { errors: errors.array(), old: req.body })
        }
    },

    //Falta configurar para colores y talles
    editConfig: (req, res) => {

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
                where: { id: req.params.id }
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