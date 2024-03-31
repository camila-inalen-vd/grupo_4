if (window.innerWidth > 1024) {
    let modalUno = document.querySelector('.modalUno');
    let overlay = document.querySelector('.overlay');
    let tarjetas = document.querySelectorAll('.article-container');
    let i = 0;

    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', () => {
            if (i === 0) {
                modalUno.innerHTML = ''; //Esta línea la usé porque se me quedaba guardada la info. de los productos anteriores, así que la solución fue limpiar el innerHTML del modal para que se sobreescriba con los nuevos datos de la tarjeta que clickeamos.
                let imagen = tarjeta.querySelector('img').src;
                let rutaRelativa = imagen.substring(imagen.indexOf('/images')); // En esto me ayudó ChatGPT, ya que con .src obtenía la ruta absoluta y no me servía. Básicamente me devuelve el string desde donde empieza la palabra '/images' gracias al indexOf dentro del substring. Substring te deja darle un parametro de inicio y de corte. Si solo le das un indice desde donde empezar, te devuelve desde donde empieza ese índice hasta el final del string. 
                modalUno.innerHTML += "<img src=" + rutaRelativa + "></img>";
                modalUno.innerHTML += "<h3>" + tarjeta.querySelector("h3").innerHTML + "</h3><br>";
                modalUno.innerHTML += "<p>" + tarjeta.querySelector('.descripcion-larga').innerHTML + "</p><br>";
                modalUno.innerHTML += '<a class="modal-ver-mas" href="/product/detail/' + tarjeta.querySelector(".id-producto").innerHTML + '">Ver más</a>';
                modalUno.classList.add('mostrar'); //Le añado la clase mostrar para que se ejecute la animación mostrar y aparezca progresivamente, cambiando su opacidad a 1. Se logró con opacity y transition.
                overlay.classList.add('mostrar'); //Lo mismo que arriba.
                i = 1;
            }
        });
    });
    overlay.addEventListener('click', () => {
        if (i === 1) {
            modalUno.classList.remove('mostrar'); //Removemos la clase mostrar para que desaparezca progresivamente también.
            overlay.classList.remove('mostrar'); // Lo mismo que arriba
            i = 0;
        }
    });

    //Documentar es importante, y recordar los errores también. Cuando dejé de usar el display:none; y usé el opacity para ocultar el modal, me di cuenta de que el objeto seguía ahí pero invisible. Esto hacía que se tapen articulos en mi vista y no pueda clickearlos. Mi forma de resolverlo fue con z-index. Cuando el objeto no se muestra (su estado default), le puse que su z-index sea -1. En cambio cuando se muestra (se le asigna la clase mostrar para que haga la animación), también se modifica su z-index a 10. Ambos, el overlay y el modalUno tienen el mismo index, no pasa nada porque para que puedan compartirlo hice su correcto posicionamiento en el HTML y así ahorrarme una animación adicional que hacía exactamente lo mismo. Me enorgullece decir que la solución con el z-index se me ocurrió a mí, ya que chatGPT quería que haga cosas mucho más complejas.
    //Esto último es adicional. Quise que el modal también se cierre al apretar la tecla escape, además de cuando clickeas fuera del modal.
    document.addEventListener('keydown', (e) => {
        if (i === 1 && e.key === 'Escape') {
            modalUno.classList.remove('mostrar');
            overlay.classList.remove('mostrar');
            i = 0;
        }
    });

}

//Esta parte me la regaló chatGPT
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Escucha el evento click de cada enlace
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Previene el comportamiento predeterminado de redirigir a una nueva página

        // Obtiene el elemento destino basado en el valor del atributo href del enlace
        const destino = document.querySelector(this.getAttribute('href'));

        if (destino) {
            // Calcula la posición de desplazamiento del elemento destino
            const offsetTop = destino.offsetTop;

            // Realiza el desplazamiento suave
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth' // Agrega un efecto de desplazamiento suave
            });
        }
    });
});

