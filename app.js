const express = require('express');
const favicon = require('serve-favicon');

let app = express();

app.listen(3000, () => console.log('Server Running'));

app.get('/', function (req, res){
    res.sendFile(__dirname + '/public/html/index.html');
})
app.get('/registro', function (req, res){
    res.sendFile(__dirname + '/register.html');
})

app.use(express.static(__dirname + '/public'));

app.use(favicon(__dirname + '/public/favicon.ico'));
