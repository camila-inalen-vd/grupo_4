window.addEventListener("load", () => {
    let formulario = document.querySelector(".login-form")
    formulario.addEventListener("submit", (event) => {
        let errors = [];

        let email = document.querySelector("input#email");
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.value == "" || !regexEmail.test(email.value)) {
            errors.push("Debes ingresar un email valido")
        }

        let password = document.querySelector("input#password")
        if (password.value.length < 8) {
            errors.push("La contraseña debe tener al menos 8 caracteres")
        }

        if(errors.length > 0){
            event.preventDefault();
            let ulErrors = document.querySelector(".errors")
            ulErrors.innerHTML = '';
            errors.forEach((error) => {
                ulErrors.innerHTML += "<li>" + error + "</li>"
            })
        }
    })
})