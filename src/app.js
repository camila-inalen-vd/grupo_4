const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
//Guardamos la dirección de la carpeta public con path.
const publicPath = path.resolve(__dirname, '../public')

//Requerir rutas
const mainRoutes = require('./routes/mainRoutes.js');
const productRoutes = require('./routes/productsRoutes.js');
const userRoutes = require('./routes/userRoutes.js');

//Para manipular datos con form
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Carpeta views y public.
app.set('views', path.resolve(__dirname, 'views'));
app.use(express.static(publicPath))

//Le decimos a express qué motor de plantillas vamos a utilizar (EJS)
app.set('view engine', 'ejs')

//Rutas
app.use('/', mainRoutes);
//ProductDetail y ProductList
app.use('/product', productRoutes)
//Rutas login y register
app.use('/user', userRoutes)

//Estas rutas hay que modificarlas con lo aprendido en MVC. Les puse nombre para que los que estan a cargo de cada una las identifiquen.

//Facu Romero
app.get('/productCart', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productCart.html'))
})

//Arranque del servidor (Lo tiré abajo de todo para evitar errores al leerse antes que otras ejecuciones)
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
})