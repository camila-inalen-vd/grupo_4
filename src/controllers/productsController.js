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
    delete: (req, res) => {
        res.render('user/admin/delete')
    },
    createConfig: (req, res) => {
        let objeto = req.body;
        //Logica para poder añadir más de un color al array de colores del objeto.
        let color = req.body.color.split(',')
        //Logica para los talles en array y que se guarden de forma numerica.
        let talle = req.body.talle.split(',')
        talle = talle.map((talle) => {
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
            talle: talle,
        }
        //Añadimos el nuevo producto al array de objetos que ya tenemos.
        productos.push(nuevoObjeto)
        //Sobreescribimos el json.
        fs.writeFileSync(path.resolve(__dirname, '../data/productos.json'), JSON.stringify(productos, null, 1))
        res.redirect('/');
    },
    editConfig: (req,res) => {
        //Pasando los datos que necesito a valor numerico.
        if(req.body.precio){req.body.precio = parseInt(req.body.precio)}
        if(req.body.cuotas){req.body.cuotas = parseInt(req.body.cuotas)}
        if(req.body.descuento){req.body.descuento = parseInt(req.body.descuento)}
        if(req.body.stock){req.body.stock = parseInt(req.body.stock)}
        if(req.body.talle){
        //Acá hago que los talles tambien se vuelvan array para despues volverlos dato numerico a cada uno con map.
        req.body.talle = req.body.talle.split(',')
        req.body.talle = req.body.talle.map(talle => parseInt(talle));}
        //Pasando los colores a array
        if(req.body.color){
        req.body.color = req.body.color.split(',')}

        let recibido = req.body;
        let recibido2 = {};
        
        //Hice una lógica que recorra CADA UNA de las propiedades de recibido, que es lo que obtenemos del body y pregunte si el valor de la propiedad no está vacío. Si no está vacío esa propiedad se agrega a mi nuevo objeto recibido2.
        //La razón de hacer esto es para que al pisar los valores de mi objeto, solo se reemplacen los que no estaban vacíos al llenar el form.
        for (x in recibido) {
            if (recibido[x] !== undefined && recibido[x] !== "") {
                recibido2 = {
                    ...recibido2,
                    [x]: recibido[x]
                };
            }
        }
        

        //Aca iteramos todo el array y reemplazamos las propiedades del objeto que coincide con el id pasada por parametros. Llamamos a todas las propiedades del objeto existente y las ponemos con spread en el objeto que ibamos iterando referenciandolo con el index (Segunda propiedad de mi forEach) y finalmente las pisamos con las propiedades de recibido2. Haciendo que solo se editen las propiedades de los campos que llenamos en este formulario y que los que dejamos vacíos no me reemplacen mis anteriores propiedades por strings vacíos.
        productos.forEach((zapatilla, index) => {
            if (zapatilla.id == req.params.id) {
                productos[index] = {
                    ...zapatilla,
                    ...recibido2,
                };
                console.log(productos[index]);
            }
        });
    
        fs.writeFileSync(path.resolve(__dirname, '../data/productos.json'), JSON.stringify(productos, null, 1));
        res.redirect('/');
    },
    deleteConfig: (req, res) => {
        //Acá hago que se devuelvan TODOS los productos del array menos el que coincida con el id que pasé en el input. (Es como borrarlo al revés, en realidad creas un nuevo array con todos menos ese producto)
        productoEliminado = productos.filter((zapatilla) => {
        return zapatilla.id != req.body.idDelete
        })

        //Acá reasigné los id de las zapatillas, para eso usé un forEach y su segundo parametro index.
        productoEliminado.forEach((zapatilla , index)=> {
        zapatilla.id = index + 1
        })
        
        //Sobrescribo el json con el nuevo array de objetos.
        fs.writeFileSync(path.resolve(__dirname, '../data/productos.json'), JSON.stringify(productoEliminado, null, 1));
        res.redirect('/');
    }

}



module.exports = productsController;