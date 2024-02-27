const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
const userLoggedMiddleware = require('./middlewares/global/userLoggedMiddleware.js')

//Guardamos la dirección de la carpeta public con path.
const publicPath = path.resolve(__dirname, '../public')

//Requerir rutas
const mainRoutes = require('./routes/mainRoutes.js');
const productRoutes = require('./routes/productsRoutes.js');
const userRoutes = require('./routes/userRoutes.js');

//Middlewares
app.use(session({
    secret: 'Mensaje secreto',
    resave: false,
    saveUninitialized: false
}))
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());
app.use(userLoggedMiddleware);


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

//Error 404, página no encontrada.
app.use((req, res, next) => {
    res.status(404).render('errors/404-page');
    next();
});

//Arranque del servidor (Lo tiré abajo de todo para evitar errores al leerse antes que otras ejecuciones)
const port = process.env.PORT || 3000;
app.listen(`${port}`, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
})