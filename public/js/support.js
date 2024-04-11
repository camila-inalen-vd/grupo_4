window.addEventListener("load", () => {
    let formulario = document.querySelector(".formu")
    formulario.addEventListener("submit", (event) => {
        let errors = [];
        
        let email = document.querySelector("#email");
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let nombre = document.querySelector("#nombre")
        if (nombre.value == "") {
            errors.push("Debes ingresar un nombre")
        }

        let apellido = document.querySelector("#apellido")
        if (apellido.value == "") {
            errors.push("Debes ingresar un apellido")
        }
        
        if (email.value == "" || !regexEmail.test(email.value)) {
            errors.push("Debes ingresar un email válido")
        }

        let contenido = document.querySelector("#contenido")
        if (contenido.value == "") {
            errors.push("Debes ingresar un mensaje")
        }

        if(errors.length > 0){
            event.preventDefault();
            let ulErrors = document.querySelector(".errors")
            ulErrors.innerHTML = '';
            errors.forEach((error) => {
                ulErrors.innerHTML += "<li>" + error + "</li>"
            })
        }
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
    
})