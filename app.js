const express = require('express');
const app = express();
const favicon = require('serve-favicon');

app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.ico')); //para icono en barra 

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


app.get('*', function (req, res) {
    res.status(400).sendFile(__dirname + '/public/html/error.html');
})
app.listen(3000, () => console.log('\x1b[46m%s\x1b[0m', '\x1b[30m Server Running | Host: 3000 \x1b[0m',));