const express = require('express');
const app = express();
const favicon = require('serve-favicon');

let app = express();

app.listen(3000, () => console.log('Server Running'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/html/index.html');
})
app.get('/registro', function (req, res) {
    res.sendFile(__dirname + '/public/html/register.html');
})
app.get('/productos', function (req, res) {
    res.sendFile(__dirname + '/public/html/productDetail.html');
})
app.get('/carrito', function (req, res) {
    res.sendFile(__dirname + '/public/html/productCart.html');
})
app.get('/login', function (req, res) {
    res.sendFile(__dirname + '/public/html/login.html');
})

app.use(express.static(__dirname + '/public'));

app.use(favicon(__dirname + '/public/favicon.ico')); //para icono en barra 
