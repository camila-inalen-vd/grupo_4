const path = require('path');
const db = require("../../database/models")
const { validationResult } = require('express-validator');
const fs = require('fs');
const { Op } = require('sequelize');

const productsController = {
    productDetail: async (req, res) => {
        const productId = req.params.id;
        req.session.productosVistos
        if (req.session.productosVistos) {
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

            let interes = await db.Product.findAll({
                include: [
                    { association: 'brand', attributes: ['name', 'brand_image'] }
                ],
                order: [
                    ['id', 'DESC']
                ],
                limit: 4
            });
    
            res.render("products/productDetail", { producto, interes});
        } catch (error) {
            res.send(error);
        }
    },

    productList: async (req, res) => {
        try {
            let productos = await db.Product.findAll({
                include: [
                    { association: 'color', attributes: ['name'] },
                    { association: 'brand', attributes: ['name'] }
                ]
            });

            if (req.query.searchBar) {
                const productosBuscados = await db.Product.findAll({
                    include: [
                        { association: 'color', attributes: ['name'] },
                        { association: 'brand', attributes: ['name'] },
                        { association: 'size', attributes: ['number'] }
                    ], 
                    where: {
                        [Op.or]: [
                            {
                                name: {
                                    [Op.like]: '%' + req.query.searchBar + '%'
                                }
                            },
                            {
                                '$brand.name$': { // Accede al nombre de la marca utilizando la relación 'brand'
                                    [Op.like]: '%' + req.query.searchBar + '%'
                                }
                            }
                        ]
                    }
                });

                //Uso de $ en la Sintaxis de Sequelize: La razón por la que se utiliza $brand.name$ en la condición de búsqueda es porque estás accediendo al nombre de la marca a través de una relación (brand) entre las tablas Product y Brand. Al utilizar $brand.name$, le estás diciendo a Sequelize que busque el nombre de la marca a través de esta relación. Los signos de dólar $ se utilizan para indicar a Sequelize que se está accediendo a través de una relación.

                // Combinar los productos buscados con los productos existentes
                if (productosBuscados.length > 0) {
                    productos = productosBuscados;
                }
            } else if (req.query.searchBar == "") {
                res.redirect('list')
            }

            return res.render('products/productList', { productos });
        } catch (error) {
            res.send(error)
        }

    },

    //Me gustaria que le hagamos la logica con cookies y session si no vamos a hacerle la tabla a parte.
    productCart: async (req, res) => {
        let id = req.session.userLogged.id
        let carts = await db.Cart.findAll({
            where: {user_id: id},
            include: {association: "product"}
        })
        res.render('products/productCart', {carts})
    },

    addToCart: async (req, res) => {
        let product = await db.Cart.findOne({
            where: {
                product_id: req.params.id, 
                user_id : req.session.userLogged.id
            }
        })

        if(!product){
            await db.Cart.create({
                user_id: req.session.userLogged.id,
                product_id: req.params.id,
                quantity: 1
            });
        } else {
            await db.Cart.increment(
                'quantity', 
                { by: 1, where: { 
                    product_id: req.params.id, 
                    user_id : req.session.userLogged.id
                }})
        }

        res.redirect('/product/cart');
    },

    removeOneFromCart: async (req, res) => {
        let product = await db.Cart.findOne({
            where: {
                product_id: req.params.id, 
                user_id : req.session.userLogged.id
            }
        })

        if(product.quantity > 1){
            await db.Cart.decrement(
                'quantity', 
                { by: 1, where: { 
                    product_id: req.params.id, 
                    user_id : req.session.userLogged.id
                }})
        } else {
            await db.Cart.destroy({
                where : {
                    product_id: req.params.id, 
                    user_id : req.session.userLogged.id
                }
            });
        }

        res.redirect('back')
    },

    removeFromCart: async (req, res) => {
        await db.Cart.destroy({
            where : {
                product_id: req.params.id, 
                user_id : req.session.userLogged.id
            }
        });

        res.redirect('back')
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
        let producto = await db.Product.findByPk(req.params.id, {
            include: [
                { association: 'brand', attributes: ['name'] }
            ]
        })
        let brand = await db.Brand.findAll()
        let color = await db.Color.findAll()
        let size = await db.Size.findAll()
        res.render('products/edit', { producto, 'brand': brand, 'size': size, 'color': color })
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
                console.log(req.body)

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

    editConfig: async (req, res) => {
        try {
            await db.Product.update({
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
                image: req.file ? req.file.filename : db.Product.findByPk(req.params.id).image
            },
                {
                    where: { id: req.params.id }
                });

            const productoNuevo = await db.Product.findByPk(req.params.id);

            await db.Product_color.destroy({ where: { product_id: req.params.id } });
            await db.Product_size.destroy({ where: { product_id: req.params.id } });

            const coloresRecibidos = req.body.color || [];
            const tallesRecibidos = req.body.talle || [];

            await Promise.all(coloresRecibidos.map(color => {
                return db.Product_color.create({
                    product_id: productoNuevo.id,
                    color_id: color
                });
            }));

            await Promise.all(tallesRecibidos.map(talle => {
                return db.Product_size.create({
                    product_id: productoNuevo.id,
                    size_id: talle
                });
            }));

            res.redirect('/product/detail/' + req.params.id);
        } catch (error) {
            res.send(error);
        }
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

module.exports = productsController;