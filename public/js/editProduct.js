console.log('hola')

window.addEventListener("load", function () {
    var formulario = document.querySelector("form.editForm");
    formulario.addEventListener("submit", function (event) {
        var errors = false;

        // Validación del campo Nombre
        var nombre = document.querySelector("#nombre");
        var nombreErrorMsg = ""; 
        if (nombre.value.trim() === "") {
            nombreErrorMsg = "Ingresa un nombre";
            errors = true;
        }

        // Validación del campo Marca
        var marca = document.querySelector("#marca");
        var marcaErrorMsg = ""; 
        if (marca.value.trim() === "") {
            marcaErrorMsg = "Selecciona una marca";
            errors = true;
        }

        // Validación del campo Precio
        var precio = document.querySelector("#precio");
        var precioErrorMsg = ""; 
        if (precio.value.trim() === "") {
            precioErrorMsg = "Ingresa un precio";
            errors = true;
        }

        // Validación del campo Cuotas
        var cuotas = document.querySelector("#cuotas");
        var cuotasErrorMsg = ""; 
        if (cuotas.value.trim() === "") {
            cuotasErrorMsg = "Ingresa el número de cuotas";
            errors = true;
        }

        // Validación del campo Descuento
        var descuento = document.querySelector("#descuento");
        var descuentoErrorMsg = ""; 
        if (descuento.value.trim() === "") {
            descuentoErrorMsg = "Ingresa un descuento";
            errors = true;
        }

        // Validación del campo Stock
        var stock = document.querySelector("#stock");
        var stockErrorMsg = "";   
        if (stock.value.trim() === "") {
            stockErrorMsg = "Ingresa el stock";
            errors = true;
        }

        // Validación del campo Descripcion
        var descripcion = document.querySelector("#descripcion");
        var descripcionErrorMsg = "";    
        if (descripcion.value.trim() === "") {
            descripcionErrorMsg = "Ingresa una descripción";
            errors = true;
        }

        // Validación del campo Descripcion Larga
        var descripcionLarga = document.querySelector("#descripcionLarga");
        var descripcionLargaErrorMsg = ""; 
        if (descripcionLarga.value.trim() === "") {
            descripcionLargaErrorMsg = "Ingresa una descripción larga";
            errors = true;
        }

        // Validación de la selección de colores
        var coloresSeleccionados = document.querySelectorAll("input[name='color']:checked");
        var coloresErrorMsg = "";      
        if (coloresSeleccionados.length === 0) {
            coloresErrorMsg = "Debes elegir al menos un color";
            errors = true;
        }

        // Validación de la selección de talles
        var tallesSeleccionados = document.querySelectorAll("input[name='talle']:checked");
        var tallesErrorMsg = ""; 
        if (tallesSeleccionados.length === 0) {
            tallesErrorMsg = "Debes elegir al menos un talle";
            errors = true;
        }

        // Validación del campo Capellada
        var capellada = document.querySelector("#capellada");
        var capelladaErrorMsg = "";
        if (capellada.value.trim() === "") {
            capelladaErrorMsg = "Ingresa la capellada";
            errors = true;
        }

        // Validación del campo Forro
        var forro = document.querySelector("#forro");
        var forroErrorMsg = ""; 
        if (forro.value.trim() === "") {
            forroErrorMsg = "Ingresa el forro";
            errors = true;
        }

        // Validación del campo Suela
        var suela = document.querySelector("#suela");
        var suelaErrorMsg = ""; 
        if (suela.value.trim() === "") {
            suelaErrorMsg = "Ingresa la suela";
            errors = true;
        }

        // Validación del campo Origen
        var origen = document.querySelector("#origen");
        var origenErrorMsg = ""; 
        if (origen.value.trim() === "") {
            origenErrorMsg = "Ingresa el origen";
            errors = true;
        }

        if (errors) {
            event.preventDefault();
            var nombreErrorP = document.querySelector("p.nombreError");
            var marcaErrorP = document.querySelector("p.marcaError");
            var precioErrorP = document.querySelector("p.precioError");
            var cuotasErrorP = document.querySelector("p.cuotasError");
            var descuentoErrorP = document.querySelector("p.descuentoError");
            var stockErrorP = document.querySelector("p.stockError");
            var descripcionErrorP = document.querySelector("p.descripcionError");
            var descripcionLargaErrorP = document.querySelector("p.descripcionLargaError");
            var coloresErrorP = document.querySelector("p.colorError");
            var tallesErrorP = document.querySelector("p.tallesError");
            var capelladaErrorP = document.querySelector("p.capelladaError");
            var forroErrorP = document.querySelector("p.forroError");
            var suelaErrorP = document.querySelector("p.suelaError");
            var origenErrorP = document.querySelector("p.origenError");
            var imageErrorP = document.querySelector("p.imageError");


            nombreErrorP.innerHTML = nombreErrorMsg;
            marcaErrorP.innerHTML = marcaErrorMsg;
            precioErrorP.innerHTML = precioErrorMsg;
            cuotasErrorP.innerHTML = cuotasErrorMsg;
            descuentoErrorP.innerHTML = descuentoErrorMsg;
            stockErrorP.innerHTML = stockErrorMsg;
            descripcionErrorP.innerHTML = descripcionErrorMsg;
            descripcionLargaErrorP.innerHTML = descripcionLargaErrorMsg;
            coloresErrorP.innerHTML = coloresErrorMsg;
            tallesErrorP.innerHTML = tallesErrorMsg;
            capelladaErrorP.innerHTML = capelladaErrorMsg;
            forroErrorP.innerHTML = forroErrorMsg;
            suelaErrorP.innerHTML = suelaErrorMsg;
            origenErrorP.innerHTML = origenErrorMsg;
        }
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
