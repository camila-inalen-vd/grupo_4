let objeto = req.body;
        //Logica para los talles en array y que se guarden de forma numerica.
        let talle = req.body.talle.split(',')
        talle = talle.map((talle) => {
                return talle = parseInt(talle)
        })
        let nuevoObjeto = {
            //Para que el id asignado sea igual al largo del array + 1
            id: productos[productos.length - 1].id + 1,
            //Todas las propiedades del objeto recibido por form.
            ...objeto,
            //Las propiedades que quiero que se "pisen" con la nueva lógica y los parseInt para que los campos que lo requieran sean dato numerico.
            descripcionLarga: req.body.descripcionLarga,
            precio: parseInt(req.body.precio),
            cuotas: parseInt(req.body.cuotas),
            descuento: parseInt(req.body.descuento),
            stock: parseInt(req.body.stock),
            color: req.body.color.split(','),
            talle: talle,
            img: req.file? req.file.filename : ''
        }
        //Añadimos el nuevo producto al array de objetos que ya tenemos.
        productos.push(nuevoObjeto)
        //Sobreescribimos el json.
        fs.writeFileSync(path.resolve(__dirname, '../data/productos.json'), JSON.stringify(productos, null, 1))
        res.redirect('/product/detail/' + nuevoObjeto.id);
    