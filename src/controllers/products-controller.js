const path = require('path');
const db = require("../../database/models")
const { validationResult } = require('express-validator');
const fs = require('fs');
const productsController = {


    productDetail: async (req, res) => {
        const productId = req.params.id;
        req.session.productosVistos
        if(req.session.productosVistos){
        req.session.productosVistos.push(parseInt(productId));
        }
        
        try {
            const producto = await db.Product.findByPk(req.params.id, {
                include: [
                    { association: 'color', attributes: ['name'] },
                    { association: 'brand', attributes: ['name'] },
                    { association: 'size', attributes: ['number'] }
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
            let size = await db.Size.findAll()
            res.render('products/create', { brand, color, size })
        }
        catch (error) {
            res.send(error)
        }
    },
    edit: async (req, res) => {
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
            try {
                const productoCreado = await db.Product.create({
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
                });
                
                let ultimoProducto = productoCreado;
                let coloresRecibidos = req.body.color;
                let tallesRecibidos = req.body.talle;
    
                coloresRecibidos.forEach(color => {
                    db.Product_color.create({
                        product_id: ultimoProducto.id,
                        color_id: color
                    });
                });
    
                tallesRecibidos.forEach(talle => {
                    db.Product_size.create({
                        product_id: ultimoProducto.id,
                        size_id: talle
                    });
                });
                
                return res.redirect('/product/list');
                
            } catch (error) {
                res.send(error);
            }
        } else {
            try {
                let brand = await db.Brand.findAll()
                let color = await db.Color.findAll()
                let size = await db.Size.findAll()
                res.render('products/create', { errors: errors.array(), old: req.body, brand, color, size });
            }
            catch (error) {
                res.send(error)
            }
            
        }
    },

    //Falta configurar para colores y talles
    editConfig:  (req, res) => {
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
            {}
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