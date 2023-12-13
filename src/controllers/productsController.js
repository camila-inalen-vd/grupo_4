const fs = require('fs')
const path = require('path')
const productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json')));

const productsController = {

    productDetail: (req,res) => {
        let idBuscada = req.params.id;
        let productoBuscado = productos.find((zapatilla) => {
            return zapatilla.id == idBuscada
        })
        res.render('productDetail', {'producto': productoBuscado})
    },
    productList: (req,res) => {
        res.render('productList', {'productos': productos})
    },
    create: (req, res) => {
        res.render('user/admin/create')
    },
    edit: (req, res) => {
        //Logica para devolver el producto encontrado a la vista y poder usar su ID para incluirla en el form
        let producto = productos.find((zapatilla) => {
            return zapatilla.id == req.params.id
        })
        res.render('user/admin/edit', {producto})
    },
    createConfig: (req, res) => {
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
            descripcionLarga: req.body.descripcionLarga,
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
    },
    editConfig: (req,res) => {
        productos.forEach((zapatilla, index)=> {
            if(zapatilla.id == req.params.id){
                productos[index] = {
                    ...zapatilla,
                    ...req.body
                }
                console.log(productos[index])
            }
        })
            fs.writeFileSync(path.resolve(__dirname, '../data/productos.json'), JSON.stringify(productos, null, 1))
            res.redirect('/');
    },
}



module.exports = productsController;