if (window.innerWidth > 1024) {
    let modalUno = document.querySelector('.modalUno');
    let overlay = document.querySelector('.overlay');
    let tarjetas = document.querySelectorAll('.article-container');
    let i = 0;

    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', () => {
            if (i === 0) {
                modalUno.innerHTML = '';
                modalUno.classList.add('mostrar');
                overlay.classList.add('mostrar');
                let imagen = tarjeta.querySelector('img').src;
                let rutaRelativa = imagen.substring(imagen.indexOf('/images'));
                modalUno.innerHTML += "<img src=" + rutaRelativa + "></img>";
                modalUno.innerHTML += "<h3>" + tarjeta.querySelector("h3").innerHTML + "</h3><br>";
                modalUno.innerHTML += "<p><hr><br>" + tarjeta.querySelector('.descripcion-larga').innerHTML + "</p><br>";
                modalUno.innerHTML += '<a class="modal-ver-mas" href="/product/detail/' + tarjeta.querySelector(".id-producto").innerHTML + '">Detalle</a>';
                i = 1;
            }
        });
    });
    overlay.addEventListener('click', () => {
        if (i === 1) {
            modalUno.classList.remove('mostrar');
            overlay.classList.remove('mostrar');
            
            i = 0;
        }
    });
}
