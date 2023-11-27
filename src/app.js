const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.resolve(__dirname, '../public')

app.use(express.static(publicPath))

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
})
                  
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})

app.get('/productDetail', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'))
})

app.get('/productCart', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productCart.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})

app.get('/searchProduct', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/searchProduct.html'))
})

app.post('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})

app.post('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})