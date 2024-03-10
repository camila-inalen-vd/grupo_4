window.addEventListener("load", () => {
    let formulario = document.querySelector("form")
    formulario.addEventListener("submit", (e) => {
        let errors = [];

        let name = document.querySelector("input#name")
        if (name.value.length < 2) {
            errors.push("Debes ingresar un nombre valido")
        }

        let last_name = document.querySelector("input#last_name")
        if (last_name.value.length < 2) {
            errors.push("Debes ingresar un apellido valido")
        }

        let email = document.querySelector("input#email");
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.value == "" || !regexEmail.test(email.value)) {
            errors.push("Debes ingresar un email valido")
        }

        let password = document.querySelector("input#password")
        if (password.value.length < 8) {
            errors.push("La contraseña debe tener al menos 8 caracteres")
        }

        let avatar = document.querySelector("input#avatar");
        if (avatar.files.length === 0) {
            errors.push("Debes seleccionar una imagen para el avatar");
        } else {
            let allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
            let avatarExtension = obtenerExtension(avatar.files[0].name);

            if (!allowedExtensions.includes(avatarExtension)) {
                errors.push("Formato de imagen no válido. Se permiten las extensiones: " + allowedExtensions.join(', '));
            }
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