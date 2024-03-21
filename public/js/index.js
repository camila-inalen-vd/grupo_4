if (window.innerWidth > 1024) {
console.log('hola');
let modalUno = document.querySelector('.modalUno');
let overlay = document.querySelector('.overlay');
let tarjetas = document.querySelectorAll('.article-container');
let i = 0

tarjetas.forEach(tarjeta => {
tarjeta.addEventListener('click', () => {
if(i == 0){
    modalUno.style.display = "block";
    let imagen = tarjeta.querySelector('img').src
    let rutaRelativa = imagen.substring(imagen.indexOf('/images')); //Gracias ChatGPT por enseñarme a cortar la ruta relativa de una imagen.
    modalUno.innerHTML += "<img src=" + rutaRelativa + "></img>"
    modalUno.innerHTML += "<h3>" + tarjeta.querySelector("h3").innerHTML + "</h3><br>"
   
    modalUno.innerHTML += "<p><hr><br>" + tarjeta.querySelector('.descripcion-larga').innerHTML + "</p><br>"
    modalUno.innerHTML += '<a class="modal-ver-mas" href="/product/detail/' + tarjeta.querySelector(".id-producto").innerHTML + '">Detalle</a>'
    console.log(tarjeta)
    overlay.style.display = "block";
    i = 1
    console.log(i)
}
});

})

overlay.addEventListener('click', () => {
if( i == 1) {
        location.reload()
        /* modalUno.style.display = "none";
        overlay.style.display = "none";
        i = 0
        console.log(i) */
    }
    })

}