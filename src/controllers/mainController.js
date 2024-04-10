const fs = require('fs');
const path = require('path')
const marcasPopulares = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/marcasPopulares.json')));
const db = require("../../database/models")
const { Op } = require('sequelize');
const nodemailer = require('nodemailer');

//Métodos para la ruta de cada vista.
const mainController = {
    index: async (req, res) => {
        try {
            let product = await db.Product.findAll({
                include: [
                    { association: 'brand', attributes: ['name', 'brand_image'] }
                ]
            });
            
            let offers = await db.Product.findAll(
                {
                include: [
                    { association: 'brand', attributes: ['name', 'brand_image'] }
                ],
                where: {
                    discount: {
                        [Op.ne]: 0
                    }
                },
   /*              limit: 4 */
            });
    
            let featured = await db.Product.findAll({
                include: [
                    { association: 'brand', attributes: ['name', 'brand_image'] }
                ],
                order: [
                    ['id', 'DESC']
                ],
                 limit: 8
            });
    
            let productosVistosBD = [];
            const productosVistos = req.session.productosVistos;
            
            if (productosVistos && productosVistos.length > 0) {
                productosVistosBD = await db.Product.findAll({
                    include: [
                        { association: 'brand', attributes: ['name', 'brand_image'] }
                    ],
                    where: {
                        id: productosVistos
                    },
                    limit: 4
                });
            }

            let brands = await db.Brand.findAll()
    
            res.render('index', { 'productos': product, 'marcas': marcasPopulares, 'offers': offers, 'featured': featured, 'productosVistosBD': productosVistosBD, 'brands': brands });
        }
        catch (err) {
            res.send('Este es el error de la linea 50')
        }
    },
    support: (req, res) => {
        res.render('support')
    },


    supportConfig: (req, res) => {
    const { nombre, apellido, email, mensaje } = req.body;

    // Configurar transporte SMTP
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'camila.proyectointegrador@gmail.com',
            pass: 'wzfw ppur whrz xhcd'
        }
    });

    // Detalles del correo
    const mailOptions = {
        from:'camila.proyectointegrador@gmail.com',
        to: 'camila.proyectointegrador@gmail.com',
        subject: "Ayuda ShoesMarket",
        text: `Nombre: ${nombre}\nApellido: ${apellido}\nEmail: ${email}\nMensaje: ${mensaje}`
    };

    // Enviar el correo
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.send('Error al enviar el correo');
        } else {
            console.log('Correo enviado: ' + info.response);
            let mensaje = "Correo enviado correctamente."
            res.render('support', {mensaje})
        }
    });
    console.log(email)
    }
    
}

module.exports = mainController;