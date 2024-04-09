window.addEventListener("load", () => {
    let formulario = document.querySelector("form.createForm")
    formulario.addEventListener("submit", (event) => {
        let errors = false

        // Validación del campo Nombre
        let nombre = document.querySelector("#nombre");
        let nombreErrorMsg;
        if (nombre.value.trim() === "") {
            nombreErrorMsg = "Ingresa un nombre";
            errors = true;
        }

        // Validación del campo Marca
        let marca = document.querySelector("#marca");
        let marcaErrorMsg;
        if (marca.value.trim() === "") {
            marcaErrorMsg = "Selecciona una marca";
            errors = true;
        }

        // Validación del campo Precio
        let precio = document.querySelector("#precio");
        let precioErrorMsg;
        if (precio.value.trim() === "") {
            precioErrorMsg = "Ingresa un precio";
            errors = true;
        }

        // Validación del campo Cuotas
        let cuotas = document.querySelector("#cuotas");
        let cuotasErrorMsg;
        if (cuotas.value.trim() === "") {
            cuotasErrorMsg = "Ingresa el número de cuotas";
            errors = true;
        }

        // Validación del campo Descuento
        let descuento = document.querySelector("#descuento");
        let descuentoErrorMsg;
        if (descuento.value.trim() === "") {
            descuentoErrorMsg = "Ingresa un descuento";
            errors = true;
        }

        // Validación del campo Stock
        let stock = document.querySelector("#stock");
        let stockErrorMsg;
        if (stock.value.trim() === "") {
            stockErrorMsg = "Ingresa el stock";
            errors = true;
        }

        // Validación del campo Descripcion
        let descripcion = document.querySelector("#descripcion");
        let descripcionErrorMsg;
        if (descripcion.value.trim() === "") {
            descripcionErrorMsg = "Ingresa una descripción";
            errors = true;
        }

        // Validación del campo Descripcion Larga
        let descripcionLarga = document.querySelector("#descripcionLarga");
        let descripcionLargaErrorMsg;
        if (descripcionLarga.value.trim() === "") {
            descripcionLargaErrorMsg = "Ingresa una descripción larga";
            errors = true;
        }

        // Validación de la selección de colores
        let coloresSeleccionados = document.querySelectorAll("input[name='color']:checked");
        let coloresErrorMsg;
        if (coloresSeleccionados.length === 0) {
            coloresErrorMsg = "Debes elegir al menos un color";
            errors = true;
        }

        // Validación de la selección de talles
        let tallesSeleccionados = document.querySelectorAll("input[name='talle']:checked");
        let tallesErrorMsg;
        if (tallesSeleccionados.length === 0) {
            tallesErrorMsg = "Debes elegir al menos un talle";
            errors = true;
        }

        // Validación del campo Capellada
        let capellada = document.querySelector("#capellada");
        let capelladaErrorMsg;
        if (capellada.value.trim() === "") {
            capelladaErrorMsg = "Ingresa la capellada";
            errors = true;
        }

        // Validación del campo Forro
        let forro = document.querySelector("#forro");
        let forroErrorMsg;
        if (forro.value.trim() === "") {
            forroErrorMsg = "Ingresa el forro";
            errors = true;
        }

        // Validación del campo Suela
        let suela = document.querySelector("#suela");
        let suelaErrorMsg;
        if (suela.value.trim() === "") {
            suelaErrorMsg = "Ingresa la suela";
            errors = true;
        }

        // Validación del campo Origen
        let origen = document.querySelector("#origen");
        let origenErrorMsg;
        if (origen.value.trim() === "") {
            origenErrorMsg = "Ingresa el origen";
            errors = true;
        }

        // Validación de la selección de una imagen
        let imageInput = document.querySelector("input[name='product-image']");
        let imageErrorMsg;
        if (!imageInput.files || imageInput.files.length === 0) {
            imageErrorMsg = "Debes seleccionar una imagen";
            errors = true;
        }
        

        if(errors){
            event.preventDefault();
            if (nombreErrorMsg) {
                let nombreErrorP = document.querySelector("p.nombreError");
                nombreErrorP.innerHTML = nombreErrorMsg;
            }
            if (marcaErrorMsg) {
                let marcaErrorP = document.querySelector("p.marcaError");
                marcaErrorP.innerHTML = marcaErrorMsg;
            }
            if (precioErrorMsg) {
                let precioErrorP = document.querySelector("p.precioError");
                precioErrorP.innerHTML = precioErrorMsg;
            }
            if (cuotasErrorMsg) {
                let cuotasErrorP = document.querySelector("p.cuotasError");
                cuotasErrorP.innerHTML = cuotasErrorMsg;
            }
            if (descuentoErrorMsg) {
                let descuentoErrorP = document.querySelector("p.descuentoError");
                descuentoErrorP.innerHTML = descuentoErrorMsg;
            }
            if (stockErrorMsg) {
                let stockErrorP = document.querySelector("p.stockError");
                stockErrorP.innerHTML = stockErrorMsg;
            }
            if (descripcionErrorMsg) {
                let descripcionErrorP = document.querySelector("p.descripcionError");
                descripcionErrorP.innerHTML = descripcionErrorMsg;
            }
            if (descripcionLargaErrorMsg) {
                let descripcionLargaErrorP = document.querySelector("p.descripcionLargaError");
                descripcionLargaErrorP.innerHTML = descripcionLargaErrorMsg;
            }
            if (coloresErrorMsg) {
                let coloresErrorP = document.querySelector("p.colorError");
                coloresErrorP.innerHTML = coloresErrorMsg;
            }
            if (tallesErrorMsg) {
                let tallesErrorP = document.querySelector("p.tallesError");
                tallesErrorP.innerHTML = tallesErrorMsg;
            }
            if (capelladaErrorMsg) {
                let capelladaErrorP = document.querySelector("p.capelladaError");
                capelladaErrorP.innerHTML = capelladaErrorMsg;
            }
            if (forroErrorMsg) {
                let forroErrorP = document.querySelector("p.forroError");
                forroErrorP.innerHTML = forroErrorMsg;
            }
            if (suelaErrorMsg) {
                let suelaErrorP = document.querySelector("p.suelaError");
                suelaErrorP.innerHTML = suelaErrorMsg;
            }
            if (origenErrorMsg) {
                let origenErrorP = document.querySelector("p.origenError");
                origenErrorP.innerHTML = origenErrorMsg;
            }
            if (imageErrorMsg) {
                let imageErrorP = document.querySelector("p.imageError");
                imageErrorP.innerHTML = imageErrorMsg;
            }
        }
    })
})