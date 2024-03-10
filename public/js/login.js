window.addEventListener("load", () => {
    let formulario = document.querySelector("form")
    formulario.addEventListener("submit", (e) => {
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
            e.preventDefault();
            let ulErrors = document.querySelector(".errors")
            ulErrors.innerHTML = '';
            errors.forEach((error) => {
                ulErrors.innerHTML += "<li>" + error + "</li>"
            })
        }
    })
})